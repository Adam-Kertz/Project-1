(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{593:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a(123),n=a(374),s=a(60),o=a(42),i=a(62),c=a(37),l=a(594),u=a(363),h=a.n(u),d=a(8),m=a.n(d),p=a(14);function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class y extends p.Component{constructor(){super(...arguments),f(this,"_resizeObserver",void 0),f(this,"handleResize",e=>{const t=e[0].contentRect.width,a=this.authorCards.current.querySelectorAll("."+l.a);this.firstNewContent.current=t<=500?a.item(1):t<=760&&t>500?a.item(2):null}),f(this,"toggleDisplayLimit",()=>{this.setState(e=>{const t=3===e.limit?this.props.authors.size:3;return Object(c.a)(n.a.create(s.a.Serp.MATCHED_AUTHOR_LIST_TOGGLE,{more:t===this.props.authors.size})),{limit:t}})}),this.state={limit:3},this.authorCards=p.createRef(),this.firstNewContent=p.createRef()}componentDidMount(){Object(c.a)(i.a.create(s.a.Serp.MATCHED_AUTHOR_LIST,{count:this.props.authors.size,authorIds:JSON.stringify(this.props.authors.map(e=>e.id))})),this._resizeObserver=new ResizeObserver(this.handleResize);const e=Object(o.b)(document);this._resizeObserver.observe(e)}componentWillUnmount(){const e=Object(o.b)(document);this._resizeObserver.unobserve(e)}componentDidUpdate(e,t){if(t.limit!==this.state.limit&&this.state.limit===this.props.authors.size)if(this.firstNewContent&&this.firstNewContent.current)this.firstNewContent.current.focus();else{this.authorCards.current.querySelectorAll("."+l.a).item(3).focus()}}render(){const e=this.props.authors.take(this.state.limit),t=this.props.authors.size>3,a=this.state.limit==this.props.authors.size,r=h()("flex-container","flex-wrap","matched-author-shoveler__list",{"matched-author-shoveler__list__short":!a,"matched-author-shoveler__list__full":a});return p.createElement("div",{className:"matched-author-shoveler"},p.createElement("ul",{ref:this.authorCards,className:r},e.map((e,t)=>p.createElement("li",{key:`matched-author-${e.id}-${t}`,className:"matched-author-shoveler__list-item matched-author-shoveler__list-item-"+t},p.createElement(l.b,{author:e,index:t})))),t?p.createElement("button",{"aria-expanded":a,onClick:this.toggleDisplayLimit,className:"matched-author-shoveler-toggle link-button","data-test-id":"matched-author-shoveler-toggle"},this.props.authors.size>this.state.limit?"Show All Authors":"Hide Authors"):null)}}f(y,"contextTypes",{api:m.a.instanceOf(r.a).isRequired})},594:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(402),n=a(364),s=a(365),o=a(374),i=a(60),c=a(41),l=a(37),u=a(122),h=a(14);const d="matched-author-shoveler__author-link";function m(t){const{api:a}=Object(u.d)(),[c,m]=h.useState(null);return h.useEffect(()=>{e((async function(){const e=await a.fetchAuthorStatsByAuthorId(t.author.id);m(e.resultData)}))},[t.author.id]),h.createElement(r.default,{className:"matched-author-shoveler__card",key:t.author.toString()},h.createElement("div",{className:"matched-author-shoveler__author-icon"},h.createElement(n.a,{icon:"user",width:"30",height:"30"})),h.createElement("ul",{className:"matched-author-shoveler__content"},h.createElement("li",null,h.createElement(s.a,{to:"AUTHOR_PROFILE",params:{authorId:t.author.id,slug:t.author.slug},onClick:()=>{Object(l.a)(o.a.create(i.a.Serp.MATCHED_AUTHOR,{authorId:t.author.id,index:t.index}))},className:d,"data-test-id":"matched-author-link",enableVisitedStyle:!0},h.createElement("span",{className:"matched-author-shoveler__author-title","data-test-id":"matched-author-link-name"},t.author.name))),h.createElement(p,{stats:c})))}const p=e=>{let{stats:t}=e;return t?h.createElement("li",{className:"matched-author-shoveler__metadata"},h.createElement("span",{className:"matched-author-shoveler__metadata__item"},Object(c.a)(e=>e.serp.matchedAuthor.stats.publications,t.totalPaperCount)),t.totalCitationCount>0?h.createElement("span",{className:"matched-author-shoveler__metadata__item"},Object(c.a)(e=>e.serp.matchedAuthor.stats.citations,t.totalCitationCount)):null,t.fieldsOfStudy.length>0?h.createElement("span",{className:"matched-author-shoveler__metadata__item"},t.fieldsOfStudy[0]):null):h.createElement("li",{className:"matched-author-shoveler__metadata"},h.createElement("span",{className:"matched-author-shoveler__metadata__placeholder matched-author-shoveler__metadata__placeholder-short"}," "),h.createElement("span",{className:"matched-author-shoveler__metadata__placeholder matched-author-shoveler__metadata__placeholder-long"}," "),h.createElement("span",{className:"matched-author-shoveler__metadata__placeholder matched-author-shoveler__metadata__placeholder-long"}," "))}}).call(this,a(595).setImmediate)},595:function(e,t,a){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(n.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new s(n.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},a(596),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a(107))},596:function(e,t,a){(function(e,t){!function(e,a){"use strict";if(!e.setImmediate){var r,n,s,o,i,c=1,l={},u=!1,h=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}()?e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){s.port2.postMessage(e)}):h&&"onreadystatechange"in h.createElement("script")?(n=h.documentElement,r=function(e){var t=h.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,n.removeChild(t),t=null},n.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(o="setImmediate$"+Math.random()+"$",i=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&p(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",i,!1):e.attachEvent("onmessage",i),r=function(t){e.postMessage(o+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var n={callback:e,args:t};return l[c]=n,r(c),c++},d.clearImmediate=m}function m(e){delete l[e]}function p(e){if(u)setTimeout(p,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(void 0,a)}}(t)}finally{m(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,a(107),a(333))},597:function(e,t,a){"use strict";var r=a(15),n=a(365),s=a(8),o=a.n(s),i=a(14),c=a.n(i);const l=e=>{let{originalQuery:t,modifiedQuery:a}=e;return c.a.createElement("div",{className:"modified-query-notification"},c.a.createElement("p",{className:"original"},"Sorry, we couldn't find any papers about ",t,"."),c.a.createElement("p",null,"Results for ",c.a.createElement(n.a,r.a.routeForQuery(a),a)," ","(without quotes):"))};l.propTypes={originalQuery:o.a.string.isRequired,modifiedQuery:o.a.string.isRequired},t.a=l},861:function(e,t,a){"use strict";a.r(t);var r=a(422),n=a(42),s=a(383),o=a(605),i=a(371),c=a(122),l=a(593),u=a(372),h=a(584),d=a(66),m=a(440),p=a(373),f=a(449),y=a(427),g=a(393),b=a(582),_=a(60),O=a(35),v=a(597),S=a(444),E=a(87),w=a(132),j=a(127),C=a(377),T=a(363),I=a.n(T),N=a(0),q=a(8),R=a.n(q),P=a(14);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){D(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class L extends P.PureComponent{constructor(){super(...arguments),D(this,"trackAuthorClick",e=>{let{paper:t,eventData:a,compData:r}=e;const{analyticsLocation:n,queryStore:s}=this.context;Object(p.d)({paper:t,analyticsLocation:n,eventData:a,compData:r});const{authorId:o}=r,i=Object(d.a)(s,{paperSha:t.id,paperIndex:a.index});Object(d.c)(x({},i,{authorId:parseInt(o)}))}),D(this,"trackLibraryClick",e=>{let{paper:t,eventData:a,compData:r}=e;const{analyticsLocation:n,queryStore:s}=this.context;Object(p.f)({paper:t,analyticsLocation:n,compData:r,eventData:a});const o=Object(d.a)(s,{paperSha:t.id,paperIndex:a.index});Object(d.e)(o)}),D(this,"trackTitleClick",e=>{let{paper:t,eventData:a}=e;const{analyticsLocation:r,queryStore:n}=this.context;Object(p.g)({paper:t,analyticsLocation:r,eventData:a});const s=Object(d.a)(n,{paperSha:t.id,paperIndex:a.index});Object(d.g)(s)}),this.state=x({},this.getStateFromWeblabStore()),this.context.weblabStore.registerComponent(this,()=>{this.setState(this.getStateFromWeblabStore())})}getStateFromWeblabStore(){return{isPaperRowV2FontOnly:this.context.weblabStore.isVariationEnabled(O.b.PaperRowV2FontOnly.KEY,O.b.PaperRowV2FontOnly.Variation.PAPER_ROW_V2_FONT_ONLY)}}componentDidUpdate(e){if(!N.b.is(e.searchResults,this.props.searchResults)&&!this.props.searchResults.results.isEmpty()){const e=n.a.scrollTop(),t=this.refs["search-result-"+(this.props.searchResults.results.size-1)];if(t){const a=n.a.offsetFromBody(t);a<e&&n.a.scrollTop(a-20)}}}render(){const{searchResults:e,queryState:t,showInfluentialCount:a}=this.props,{results:r,query:n,modifiedQueryString:s,querySuggestions:o}=e,{isPaperRowV2FontOnly:i}=this.state;if(r.isEmpty()){var c;const t=o.isEmpty()||null===(c=o.first())||void 0===c?void 0:c.text;return P.createElement(b.a,{isMobile:!0,query:n.queryString,hasFacets:Object(E.c)(e),suggestedQuery:t})}{const e=I()("results-list",{"results-are-updating":"filtering"===t});return P.createElement("div",{className:e},s?P.createElement(v.a,{originalQuery:n.queryString,modifiedQuery:s}):null,r.map((e,t)=>P.createElement(p.c,{key:e.id,paper:e,eventData:{index:(n.page-1)*n.pageSize+t},onClickAuthor:this.trackAuthorClick,onClickLibrary:this.trackLibraryClick,onClickTitle:this.trackTitleClick},P.createElement(f.default,{paper:e,className:I()("search-papers__paper-card",{"paper-v2-font-only":i}),controls:P.createElement(y.default,{paper:e,hic:a}),footer:P.createElement(m.a,{paper:e}),abstract:P.createElement(S.b,{paper:e,query:n.queryString,className:"tldr__paper-card"}),title:P.createElement(g.default,{paper:e,titleTagName:"h2"})}))))}}}D(L,"contextTypes",{analyticsLocation:R.a.object,queryStore:R.a.instanceOf(w.a).isRequired,weblabStore:R.a.instanceOf(j.b).isRequired});var A=Object(C.b)(_.a.Serp)(L),F=a(464),z=a(11),Q=a(443),M=a(27);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function V(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"SearchResultsPage",(function(){return Y}));const H=new h.a;class Y extends P.PureComponent{constructor(){super(...arguments),V(this,"onChangeSort",e=>{const{queryStore:t,router:a}=this.context;t.routeToSort(e,a)}),V(this,"onChangeYearFilter",(e,t)=>{const{queryStore:a,router:r}=this.context;a.routeToYearRange(e,t,r)}),V(this,"loadPage",e=>{this.context.queryStore.routeToPage(e.toString(),this.context.router)})}componentDidUpdate(e){e.query.page!==this.props.query.page&&n.a.scrollTop(0)}isFiltering(){return this.props.queryState===z.a.FILTERING}renderLoading(){return P.createElement(u.a,{className:"search",header:P.createElement(r.a,{submitSearchOnFieldOfStudyChange:!0}),footer:!1},P.createElement("div",{className:"content flex-row-vcenter"},P.createElement(i.a,{className:"flex-centered",width:"32",height:"32",testId:"icon-loading-serp"})))}renderSearchResults(){const{query:e,queryResponse:t,queryState:a,showInfluentialCount:n}=this.props,{matchedAuthors:i,totalPages:c}=t;return P.createElement(u.a,{className:"search",header:P.createElement(r.a,{submitSearchOnFieldOfStudyChange:!0})},P.createElement("section",{className:"content",role:"main",id:"main-content"},P.createElement(o.a,{className:"dropdown-filters-breakpoints__serp",config:Q.d,query:e,response:t,showResultCount:!0,onChangeYearFilter:this.onChangeYearFilter,sortControl:P.createElement(F.a,{className:"dropdown-filters__sort-control",onChangeSort:this.onChangeSort,options:H.sorts,sort:e.sort}),injectQueryStore:this.context.queryStore,isSearchbarFocused:!1,doFullQueryReset:!1}),i.isEmpty()?null:P.createElement(l.a,{queryString:e.queryString,authors:i}),P.createElement(A,{searchResults:t,queryState:a,showInfluentialCount:n}),P.createElement(s.default,{className:"pagination",onPaginate:this.loadPage,pageNumber:e.page,totalPages:c,maxVisiblePageButtons:4,size:s.SIZE.LARGE,"data-test-id":"result-page-pagination"})))}render(){const{isLoading:e}=this.props;return e?this.renderLoading():this.renderSearchResults()}}V(Y,"contextTypes",{queryStore:R.a.instanceOf(w.a).isRequired,router:R.a.object.isRequired});t.default=Object(c.c)(Y,e=>function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){V(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(c.e)(e.queryStore,e=>({query:e.getQuery(),queryResponse:e.getQueryResponse(),showInfluentialCount:e.getQuery().sort===M.a.INFLUENTIAL_CITATIONS.id,isLoading:e.isLoading(),queryState:e.getQueryState()}))))}}]);
//# sourceMappingURL=bundle-26.js.map