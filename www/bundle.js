webpackJsonp([1],{0:function(e,t,r){e.exports=r(96)},57:function(e,t,r){(function(e,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(t){n.render(e.createElement(y,null),t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Render=void 0;var u=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(24),m=a(p),h=r(59),d=a(h),g=[{value:"sumup",name:"相关度"},{value:"created",name:"发帖时间"},{value:"eatmelon",name:"吃瓜"}],v=[{value:"0",name:"新帖在前"},{value:"1",name:"旧帖在前"}],y=function(t){function r(){var e,t,n,a;s(this,r);for(var o=arguments.length,l=Array(o),c=0;c<o;c++)l[c]=arguments[c];return t=n=i(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(l))),n.state={size_error:"",gte_error:"",lte_error:"",order_disable:!0},a=t,i(n,a)}return l(r,t),f(r,[{key:"onSizeChange",value:function(e){var t=e.target.value.trim();""==t?(this.setState({size_error:""}),sessionStorage.removeItem("size")):!/^\d+$/.test(t)||t<1||t>50?this.setState({size_error:"取值范围 1 ~ 50 的正整数"}):(this.setState({size_error:""}),sessionStorage.setItem("size",t))}},{key:"onExcludedChange",value:function(e){""==e.target.value.trim()?sessionStorage.removeItem("excluded"):sessionStorage.setItem("excluded",e.target.value.trim())}},{key:"onSortChange",value:function(e,t){e==g[0].value?sessionStorage.removeItem("sort"):sessionStorage.setItem("sort",e),this.setState({order_disable:e==g[0].value})}},{key:"onOrderChange",value:function(e,t){e==v[0].value?sessionStorage.removeItem("order"):sessionStorage.setItem("order",e)}},{key:"getName",value:function(e,t){if(t){var r=e.find(function(e){return e.value==t});return r.name}return e[0].name}},{key:"getDay",value:function(e){if(e){if(/\d+$/.test(e)){var t=new Date(parseInt(e)),r=function(e){return e=e<10?"0"+e:e};return t.getFullYear()+"-"+r(t.getUTCMonth()+1)+"-"+r(t.getUTCDate())}return""}return""}},{key:"onDateChange",value:function(e,t){var r=t.target.value.trim(),n=e+"_error";if(""==r)this.setState(o({},n,"")),sessionStorage.removeItem(e);else if(/\w{4}-\w{2}-\w{2}/.test(r)){var a=new Date(r).getTime();a?(this.setState(o({},n,"")),sessionStorage.setItem(e,a)):this.setState(o({},n,"格式错误，如 2017-10-13"))}else this.setState(o({},n,"格式错误，如 2017-10-13"))}},{key:"componentWillMount",value:function(){if(location.search.startsWith("?q=")){var e=window.location.search.replace("?","").split("&");e&&e.length>0&&e.forEach(function(e){var t=e.split("="),r=u(t,2),n=r[0],a=r[1];"q"!=n&&sessionStorage.setItem(n,decodeURI(a))})}}},{key:"render",value:function(){var t=this;return e.createElement("div",{className:"filter"},e.createElement(m.default,{floatingtext:"每页查询数量",placeholder:"默认每页显示 10 条数据，取值范围在 1 ~ 50",value:sessionStorage.getItem("size"),errortext:this.state.size_error,onChange:function(e){return t.onSizeChange(e)}}),e.createElement(m.default,{floatingtext:"排除帖子",placeholder:"为空时，查询全部帖子；目前仅支持单个帖子 id",value:sessionStorage.getItem("excluded"),onChange:function(e){return t.onExcludedChange(e)}}),e.createElement("div",{className:"horiz"},e.createElement(m.default,{floatingtext:"发帖的起始日期",placeholder:"不设置则为 2017-01-01",value:this.getDay(sessionStorage.getItem("gte")),errortext:this.state.gte_error,onChange:function(e){return t.onDateChange("gte",e)}}),e.createElement(m.default,{floatingtext:"发帖的结束日期",placeholder:"格式为 YYYY-MM-DD",value:this.getDay(sessionStorage.getItem("lte")),errortext:this.state.lte_error,onChange:function(e){return t.onDateChange("lte",e)}})),e.createElement("div",{className:"horiz"},e.createElement(d.default,{waves:"md-waves-effect",name:this.getName(g,sessionStorage.getItem("sort")),items:g,floatingtext:"查询结果排序",onChange:function(e,r){return t.onSortChange(e,r)}}),e.createElement(d.default,{waves:"md-waves-effect",disable:!(sessionStorage.getItem("sort")==g[1].value),name:this.getName(v,sessionStorage.getItem("order")),items:v,floatingtext:"发帖时间",onChange:function(e,r){return t.onOrderChange(e,r)}})))}}]),r}(e.Component);t.Render=c}).call(t,r(10),r(36))},96:function(e,t,r){(function(e,t){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}r(105),r(106);var o=r(98),s=a(o),i=r(99),l=a(i),c=r(97),u=(a(c),r(100)),f=n(u),p=r(35),m=n(p);f.Init(),m.Render({root:"body"}),e.render(location.search.startsWith("?q=")?t.createElement(l.default,null):t.createElement(s.default,null),$(".main")[0])}).call(t,r(36),r(10))},97:function(e,t,r){(function(e){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=function(t){function s(){return r(this,s),n(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return a(s,t),o(s,[{key:"render",value:function(){return e.createElement("div",null," Controlbar ")}}]),s}(e.Component);t.default=s}).call(t,r(10))},98:function(e,t,r){(function(e,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(24),f=o(u),p=r(57),m=a(p),h=function(t){function r(){return s(this,r),i(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return l(r,t),c(r,[{key:"onKeyDown",value:function(e){13==e.keyCode&&this.search(e.target.value)}},{key:"onClick",value:function(){this.search(this.refs.search.refs.target.value)}},{key:"arrowOnClick",value:function(){m.Render($(".filtergp")[0]),$(".filtergp").toggleClass("filtergp-top")}},{key:"search",value:function(e){if(""!=e.trim()){var t=window.location.origin+window.location.pathname+("?q="+e);Object.keys(sessionStorage).forEach(function(e){return t+="&"+e+"="+sessionStorage[e]}),sessionStorage.clear(),window.location.href=t}else(new n).Render("不能为空，请输入正确的值。")}},{key:"componentWillMount",value:function(){sessionStorage.clear()}},{key:"componentDidMount",value:function(){$(this.refs.search.refs.target).focus()}},{key:"render",value:function(){var t=this;return e.createElement("div",{className:"entry"},e.createElement("div",{className:"logo"},e.createElement("img",{src:"./assets/images/logo@2x.png"})),e.createElement("div",{className:"searchbar"},e.createElement("div",{className:"search"},e.createElement(f.default,{ref:"search",placeholder:"请输入查询的关键字",onKeyDown:function(e){return t.onKeyDown(e)}}),e.createElement("span",{className:"bar",onClick:function(){return t.onClick()}}),e.createElement("span",{className:"arrow",onClick:function(){return t.arrowOnClick()}}),e.createElement("div",{className:"filtergp"}))),e.createElement("div",{className:"desc"},"一个便捷的 CC98 站内搜索引擎，基于 ",e.createElement("a",{href:"https://www.sov2ex.com/",target:"_blank"},"sov2ex"),"  。",e.createElement("br",null),e.createElement("a",{href:"https://github.com/CoolSpring8/socc98",target:"_blank"},"了解更多")))}}]),r}(e.Component);t.default=h}).call(t,r(10),r(25))},99:function(e,t,r){(function(e,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(24),m=o(p),h=r(58),d=o(h),g=r(57),v=a(g),y=r(60),b=o(y),w=function(t){var r=t.highlight.content;return r=r&&r.length>0?r[0]:t.content,e.createElement("div",{className:"resultcard"},e.createElement("div",{className:"title"},e.createElement("a",{href:t.topicurl,target:"_blank"},b.default.spacing(t.topicname))),e.createElement("div",{className:"desc"},b.default.spacing(r.replace(/<\/?em>/gi,""))),e.createElement("div",{className:"details"},e.createElement("a",{href:"https://www.cc98.org/user/name/"+t.user,target:"_blank"},t.member)," 于 ",e.createElement("span",{className:"date"},t.posttime.replace("T"," "))," 发表， ",e.createElement("span",{className:"replies"},t.lc," 楼")))},E=function(t){return e.createElement("div",{className:"empty"},e.createElement("span",{className:"bg"}),t.text)},k=function(){return e.createElement("div",{className:"loading"},e.createElement("svg",{className:"spinner",width:"100",height:"100",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},e.createElement("circle",{className:"path",fill:"none",strokeWidth:"3",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})))},A=function(t){return e.createElement("div",{className:"pagingbg",style:t.style},e.createElement("div",{className:"paginghr"},e.createElement("div",{className:"divider"}),e.createElement("span",{className:"page"},"第 "+t.page+" 页，共计 "+t.count+" 页"),e.createElement("div",{className:"divider"})))},C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABWUlEQVQ4T61UbVUDQRBLFIADWgXgAFAADgAFFAW0CigOWgfgABRQBxwOQEF4uTfbt7fduwPK/Lv9yGaSzBH/XKzhSZoAuABwBuAQwCeAFwDPJJshDjuAkuYAbgOodndJ8q4PtAMoaQXgKg5/AdgEs5NgexB7Xj8naead2gIGs/vYXQOY5RckufXE3sceSc6qgKHZW7S5Jnnd11Lx8LTUtGUoyS89AHCbk1or+QOSbMxRjWUCfApXX0na2cGStAzjds4nQEfiFMCCpHUaA/QZ690LmBg6Z5c/ABxlmDR0DCz0Thx+q6En4z0uVeOQADMDvVR3OZxObfhzTnJRtl6ANSSnvcEOUE/AcRxyNKyt23eora07yWtF8iZfKEevnIaaPx+RwbTXAR3629goz3Aqs/ePoSlm3vtb0CrgWGxCnvxH4qXWzD8DVkDbDO8FmKXDZjkZm70BS3m+Adf+mhXFbtFFAAAAAElFTkSuQmCC",_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAtklEQVQ4T+2TUQ0CMRBE3ygACTjgJCABHIACkAIKwAFIQAI4QAIoGNKkJBxpr71wn7ef7fbtZHYqBi4NzGME/u9oy0PbM+DYE7uR9Pi8+QVOgSswr4TegYWkZxIYDqPKGzApQF9A860u9CdjY7uJSnPQAAvKwuBWZXNoewmcMypXki6pu85g214nlhSWcMrZUfwptvfANgIOknZd3haBcVEBSgmWXUplZJJtVQr7DBiBfdxK974BrbYqFVDVxssAAAAASUVORK5CYII=",S=function(t){function r(){var e,t,n,a;s(this,r);for(var o=arguments.length,l=Array(o),c=0;c<o;c++)l[c]=arguments[c];return t=n=i(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(l))),n.state={cost:void 0,list:[],count:0,disable:!1},a=t,i(n,a)}return l(r,t),f(r,[{key:"onSearchClick",value:function(){var e=this;setTimeout(function(){return e.search(e.refs.search.refs.target.value)},500)}},{key:"arrowOnClick",value:function(){v.Render($(".filtergp")[0]),$(".filtergp").toggleClass("filtergp-top")}},{key:"onKeyDown",value:function(e){13==e.keyCode&&this.search(e.target.value)}},{key:"search",value:function(e){if(/[%#&]/gi.test(e))(new n).Render("不能包含特殊字符 % # &");else if(""!=e.trim()){var t=window.location.origin+window.location.pathname+("?q="+e);Object.keys(sessionStorage).forEach(function(e){return t+="&"+e+"="+sessionStorage[e]}),sessionStorage.clear(),window.location.href=t.replace(/&page=\d+/gi,"")}else(new n).Render("不能为空，请输入正确的值。")}},{key:"validation",value:function(e,t){switch(e){case"page":(!/\d+$/.test(t)||t<1)&&(t=1,(new n).Render(2,"page 参数错误，取值范围最小值为 1 的正整数，请确认。"));break;case"size":(!/[1-9]+/.test(t)||t<1||t>50)&&(t=10,(new n).Render(2,"size 参数错误，取值范围 1 ~ 50 的正整数，请确认。"));break;case"order":/^(0|1)$/.test(t)||(t=0,(new n).Render(2,"order 参数错误，取值范围 0 和 1，请确认。"));break;case"sort":/^(sumup|created|eatmelon)$/.test(t)||(t="sumup",(new n).Render(2,"sort 参数错误，取值范围 sumup， created 和 eatmelon，请确认。"));break;case"gte":case"lte":/\d+$/.test(t)||(new n).Render(2,e+" 参数错误，正确格式为 yyyy-mm-dd，请确认。")}return t}},{key:"parse",value:function(e){var t=Math.floor(e.total/this.props.size),r=this.state.list.concat(e.hits);t=t*this.props.size>this.props.max?Math.floor(this.props.max/this.props.size):t,this.setState({list:r,cost:{took:e.took,total:e.total},disable:this.props.page>=t,count:0==t?1:t})}},{key:"fetch",value:function(){var e=this,t=this.props.page,r=(t-1)*this.props.size,a=this.props.url+"?q="+this.props.q+"&sort="+this.props.sort+"&order="+this.props.order+"&from="+r+"&size="+this.props.size+"&excluded="+this.props.excluded+"&lte="+parseInt(this.props.lte)/1e3+"&gte="+parseInt(this.props.gte)/1e3;$.ajax({url:a,dataType:"json",crossDomain:!0}).done(function(t){e.parse(t)}).fail(function(t){(new n).Render(2,"当前发生了一些错误，请重新输入。"),e.failed()})}},{key:"onPagingClick",value:function(){this.props.page++,this.props.page>this.state.count?(this.setState({disable:!0}),(new n).Render("当前已经是最后一页。")):(this.fetch(),/page=\d+/.test(window.location.search)&&history.pushState("","",window.location.search.replace(/page=\d+/,"page="+this.props.page)))}},{key:"failed",value:function(){this.props.q="",this.setState({list:[],cost:{total:0}})}},{key:"componentWillMount",value:function(){var e=this;try{var t=decodeURI(location.search.trim());if(t.startsWith("?q=")&&"?q="!=t){var r=t.replace("?","").split("&");r&&r.length>0&&r.forEach(function(t){var r=t.split("="),n=u(r,2),a=n[0],o=n[1];e.props[a]=e.validation(a,o)}),""!=this.props.q?(this.fetch(),$("head title").text(this.props.q+" - SOCC98 搜索结果")):((new n).Render("搜索内容有误，请重新搜索。"),this.failed())}else(new n).Render("搜索内容有误，请重新搜索。"),this.failed()}catch(e){(new n).Render("不能包含特殊字符 % # &"),this.failed()}}},{key:"render",value:function(){var t=this,r=!1,n=this.state.list.map(function(t){return e.createElement(w,c({},t._source,{highlight:t.highlight}))});return this.state.cost?0==this.state.cost.total?(r=!0,n=e.createElement(E,{text:"Oops~ 并未搜索到任何内容，请重新确认搜索关键字!"})):this.props.page>this.state.count&&(r=!0,n=e.createElement(E,{text:"关键字："+this.props.q+" 查询结果共有 "+this.state.count+" 页，已超过最大页数，请重新确认。"})):(r=!0,n=e.createElement(k,null)),e.createElement("div",{className:"searchpage",style:{height:r?"100%":"auto"}},e.createElement("div",{className:"top"},e.createElement("div",{className:"logo"},e.createElement("a",{href:"./"},e.createElement("img",{src:"./assets/images/logo@1x.png"}))),e.createElement("div",{className:"searchbar"},e.createElement("div",{className:"search"},e.createElement(m.default,{ref:"search",value:/[%#&]/gi.test(this.props.q)?this.props.q:decodeURI(this.props.q),placeholder:"请输入查询的关键字",onKeyDown:function(e){return t.onKeyDown(e)}}),e.createElement("div",{className:"bar"},e.createElement(d.default,{hoverColor:"transparent",backgroundColor:"transparent",icon:C,waves:"md-waves-effect md-waves-circle",onClick:function(){return t.onSearchClick()}})),e.createElement("div",{className:"arrow"},e.createElement(d.default,{hoverColor:"transparent",backgroundColor:"transparent",icon:_,waves:"md-waves-effect md-waves-circle",onClick:function(){return t.arrowOnClick()}})),e.createElement("div",{className:"filtergp"}))),e.createElement("div",{className:"placeholder"})),e.createElement("div",{className:"cost",style:{visibility:r?"hidden":"visible"}},e.createElement("span",null,"共计 ",this.state.cost&&this.state.cost.total," 个结果，耗时 ",this.state.cost&&this.state.cost.took," 毫秒")),e.createElement("div",{className:"searchresults",style:{height:r?"100%":"auto"}},n),e.createElement(A,{page:this.props.page,count:this.state.count,style:{visibility:r?"hidden":"visible"}}),e.createElement("div",{className:"paging",style:{visibility:r?"hidden":"visible"}},e.createElement(d.default,{type:"raised",text:this.state.disable?"已全部加载完毕":"加载更多",disable:this.state.disable,color:"#fff",backgroundColor:"rgba(3, 169, 244, 1)",waves:"md-waves-effect md-waves-button",onClick:function(){return t.onPagingClick()}})),e.createElement("div",{className:"footer"},e.createElement("div",{className:"groups"},e.createElement("div",{className:"links"},e.createElement("a",{href:"./",className:"logo"},e.createElement("img",{src:"./assets/images/logo@1x.png"})),e.createElement("ul",null,e.createElement("li",null,e.createElement("a",{target:"_blank",href:"http://service.weibo.com/share/share.php?url=https://sov2ex.com&title=SOV2EX - 一个便捷的 v2ex 站内搜索引擎"},e.createElement("span",{className:"icon weibo"}))),e.createElement("li",null,e.createElement("a",{target:"_blank",href:"https://www.douban.com/share/service?href=https://sov2ex.com&name=SOV2EX - 一个便捷的 v2ex 站内搜索引擎"},e.createElement("span",{className:"icon douban"}))),e.createElement("li",null,e.createElement("a",{target:"_blank",href:"https://twitter.com/intent/tweet?text=SOV2EX - 一个便捷的 v2ex 站内搜索引擎&url=https://sov2ex.com"},e.createElement("span",{className:"icon twitter"}))),e.createElement("li",null,e.createElement("a",{target:"_blank",href:"https://www.facebook.com/sharer.php?u=https://sov2ex.com"},e.createElement("span",{className:"icon facebook"}))),e.createElement("li",null,e.createElement("a",{target:"_blank",href:"https://plus.google.com/share?url=https://sov2ex.com"},e.createElement("span",{className:"icon gplus"}))),e.createElement("li",null,e.createElement("a",{target:"_blank",href:"https://t.me/share/url?url=https://sov2ex.com"},e.createElement("span",{className:"icon telegram"}))))),e.createElement("div",{className:"links"},e.createElement("h2",null,"链接"),e.createElement("a",{href:"https://github.com/CoolSpring8/socc98",target:"_blank"},"关于"),e.createElement("a",{href:"https://github.com/CoolSpring8/socc98/issues",target:"_blank"},"提交问题"))),e.createElement("div",{className:"copyright"},e.createElement("span",null,"SOCC98 - 一个便捷的 CC98 站内搜索引擎"),e.createElement("br",null),e.createElement("span",null,e.createElement("a",{href:"https://github.com/Bynil/sov2ex"}," SOV2EX "),"© 2017 ",e.createElement("a",{href:"https://sov2ex.com"},"sov2ex.com")," by ",e.createElement("a",{href:"http://www.gexiao.me/",target:"_blank"},"默默")," & ",e.createElement("a",{href:"http://kenshin.wang",target:"_blank"},"Kenshin Wang")))))}}]),r}(e.Component);S.defaultProps={url:"https://www.socc98.com/api/search",q:void 0,page:1,size:10,max:1e3,sort:"sumup",excluded:0,order:0,gte:14832e8,lte:0},S.propTypes={page:e.PropTypes.number,size:e.PropTypes.number,order:e.PropTypes.oneOf([0,1]),sort:e.PropTypes.oneOf(["sumup","created","eatmelon"])},t.default=S}).call(t,r(10),r(25))},100:function(e,t,r){(function(e){"use strict";function r(){a?a!=n&&(localStorage.version=n,(new e).Render(n+" 升级提示",o[n])):(localStorage.version=n,(new e).Render("欢迎使用",o["1.0.0"]))}Object.defineProperty(t,"__esModule",{value:!0});var n="1.0.0",a=localStorage.version,o={"1.0.0":'一个便捷的 CC98 站内搜索引擎，详细请看 <a href="https://github.com/CoolSpring8/socc98" target="_blank">功能介绍</a>'};t.Init=r}).call(t,r(25))},105:function(e,t){},106:function(e,t){}});