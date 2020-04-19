from elasticsearch_async import AsyncElasticsearch

ES_HOST = ['127.0.0.1:9200']
ES_INDICES = ['cc98_index_1', 'cc98_index_2']

es = AsyncElasticsearch(ES_HOST)


def must_query(gte, lte):
    query_list = []
    if gte or lte:
        range_query = {
            "range": {
                "posttime": {
                    "format": "epoch_second"
                }
            }
        }
        if gte and isinstance(gte, int):
            range_query["range"]["posttime"]["gte"] = gte
        if lte and isinstance(lte, int):
            range_query["range"]["posttime"]["lte"] = lte
        query_list.append(range_query)

        return query_list


def must_not_query(excluded):
    query_list = [{"term": {"id": "4789044"}}]
    if excluded and isinstance(excluded, int):
        excluded_query = {"term": {"id": excluded}}
        query_list.append(excluded_query)

    return query_list


async def es_search(keyword, es_from, es_size, gte=None, lte=None, operator='or', excluded=None):
    body = {
        "from": es_from,
        "size": es_size,
        "highlight": {
            "fragment_size": 50,
            "fields": {
                "content": {
                    "number_of_fragments": 1
                }
            }
        },
        "_source": [
            "id",
            "lc",
            "posttime",
            "user"
        ],
        "query": {
            "function_score": {
                "query": {
                    "bool": {
                        "must": must_query(gte, lte),
                        "must_not": must_not_query(excluded),
                        "minimum_should_match": 1,
                        "should": [
                            {
                                "match": {
                                    "content": {
                                        "query": keyword,
                                        "analyzer": "ik_smart",
                                        "boost": 2,
                                        "operator": operator
                                    }
                                }

                            }
                        ]
                    }
                },
                "functions": [
                    {
                        "filter": {
                            "match_phrase": {
                                "content": {
                                    "query": keyword,
                                    "analyzer": "ik_max_word",
                                    "slop": 0
                                }
                            }
                        },
                        "weight": 50
                    }
                ],
                "score_mode": "sum",
                "boost_mode": "sum"
            }
        }
    }

    result = await es.search(body=body, index=ES_INDICES)
    return result


async def es_time_order_search(keyword, es_from, es_size, order, gte=None, lte=None, operator='or', excluded=None):
    body = {
        "from": es_from,
        "size": es_size,
        "sort": [
            {
                "posttime": {
                    "order": "asc" if order else "desc"
                }
            }
        ],
        "highlight": {
            "fragment_size": 50,
            "fields": {
                "content": {
                    "number_of_fragments": 1
                }
            }
        },
        "_source": [
            "id",
            "lc",
            "posttime",
            "user"
        ],
        "query": {
            "constant_score": {
                "filter": {
                    "bool": {
                        "must": must_query(gte, lte),
                        "must_not": must_not_query(excluded),
                        "minimum_should_match": 1,
                        "should": [
                            {
                                "match": {
                                    "content": {
                                        "query": keyword,
                                        "analyzer": "ik_smart",
                                        "minimum_should_match": "2<70%",
                                        "operator": operator
                                    }
                                }
                            },
                            {
                                "match_phrase": {
                                    "content": {
                                        "query": keyword,
                                        "analyzer": "ik_max_word",
                                        "slop": 0
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        }
    }

    result = await es.search(body=body, index=ES_INDICES)
    return result


async def es_eat_melon_search(keyword, es_from, es_size, gte, lte, excluded=None):
    body1 = {
        "size": 100,
        "sort": [
            {
                "posttime": {
                    "order": "desc"
                }
            }
        ],
        "highlight": {
            "fragment_size": 50,
            "fields": {
                "content": {
                    "number_of_fragments": 1
                }
            }
        },
        "_source": [
            "id",
            "lc",
            "posttime",
            "user"
        ],
        "query": {
            "bool": {
                "must_not": must_not_query(excluded),
                "should": {
                    "match_phrase": {
                        "content": keyword
                    }
                }
            }
        }
    }
    body2 = {
        "size": 100,
        "highlight": {
            "fragment_size": 50,
            "fields": {
                "content": {
                    "number_of_fragments": 1
                }
            }
        },
        "_source": [
            "id",
            "lc",
            "posttime",
            "user"
        ],
        "query": {
            "bool": {
                "must_not": must_not_query(excluded),
                "should": {
                    "match": {
                        "content": keyword,
                    }
                },
                "minimum_should_match": "2<75%",
            }
        }
    }
    resultFullMatch = await es.search(body=body1, index=ES_INDICES)
    resultPartialMatch = await es.search(body=body2, index=ES_INDICES)
    newHits = resultFullMatch['hits']['hits']
    for hit in resultPartialMatch['hits']['hits']:
        newHits.append(hit)
    resultFullMatch['hits']['hits'] = newHits
    resultFullMatch['hits']['hits'] = resultFullMatch['hits']['hits'][es_from:es_from+es_size]
    return resultFullMatch


async def get_topic_names(topicIDList=[]):
    # Add hits['hits'][n]['_source']['topicname']
    # TODO: Use official API
    if topicIDList is None:
        return topicIDList
    es_body = ''
    for topicID in topicIDList:
        body = {"from": 0, "size": 1, "_source": ["content"], "query": {
            "bool": {"must": [{"term": {"id": topicID}}, {"term": {"lc": 0}}]}}}
        es_body = es_body + '{}\n' + str(body).replace("'", '"') + '\n'
    result = await es.msearch(body=es_body, index=ES_INDICES)
    names = [x['hits']['hits'][0]['_source']['content']
             for x in result['responses']]
    return names
