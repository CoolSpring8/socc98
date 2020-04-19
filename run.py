from fastapi import FastAPI, Query, HTTPException

from es_helper import es_search, es_time_order_search, es_eat_melon_search, get_topic_names


app = FastAPI()


@app.get('/api/search')
async def search_api(keyword: str = Query(..., alias='q', max_length=100),
                     es_from: int = Query(0, alias='from', le=1000),
                     es_size: int = Query(10, alias='size', le=50),
                     sort: str = 'sumup',
                     order: bool = 0,
                     gte: int = None,
                     lte: int = None,
                     operator: str = 'or',
                     excluded: int = None):
    try:
        if operator != 'and':
            operator = 'or'
        if sort == 'created':
            result = await es_time_order_search(
                keyword, es_from, es_size, order, gte, lte, operator, excluded)
        elif sort == 'eatmelon':
            result = await es_eat_melon_search(keyword, es_from, es_size, gte, lte, excluded)
        else:
            result = await es_search(keyword, es_from, es_size,
                                     gte, lte, operator, excluded)

        # Post-process
        # TODO: Better be done at frontend
        hits = result['hits']
        topicIDs = [x['_source']['id'] for x in hits['hits']]
        topicNames = await get_topic_names(topicIDs)
        for hitID in range(len(hits['hits'])):
            # Add hits['hits'][n]['_source']['topicname']
            hits['hits'][hitID]['_source']['topicname'] = topicNames[hitID]
            topicid = int(hits['hits'][hitID]['_source']['id'])
            floor = int(hits['hits'][hitID]['_source']['lc'])
            # Add hits['hits'][n]['_source']['topicurl']
            page = (floor + 9) // 10
            reply_position = floor % 10
            if reply_position == 0:
                reply_position = 10
            hits['hits'][hitID]['_source'][
                'topicurl'] = f"https://www.cc98.org/topic/{topicid}/{page}#{reply_position}"
        # Remove duplicate posts caused by 1. multiple records in es 2. quotes (partially solved, in most circumstances return the first seen result)
        has_seen = set()
        has_seen_text = set()
        new_hits = []
        for hit in hits['hits'][::-1]:
            topicid = int(hit['_source']['id'])
            floor = int(hit['_source']['lc'])
            postid = str(topicid) + '|' + str(floor)
            if floor < 0 or postid in has_seen or hit['highlight']['content'][0] in has_seen_text:
                continue
            has_seen.add(postid)
            has_seen_text.add(hit['highlight']['content'][0])
            new_hits.append(hit)
        hits['hits'] = new_hits[::-1]

        resp = {'took': result['took'], 'timed_out': result['timed_out'],
                'total': hits['total'], 'hits': hits['hits']}
        return resp
    except Exception as e:
        raise HTTPException(status_code=400, detail="出错了")
