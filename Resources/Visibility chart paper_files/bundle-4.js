(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{582:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var s=r(380),l=r(60),i=r(15),a=r(374),o=r(62),n=r(37),c=r(41),d=r(365),u=r(8),p=r.n(u),f=r(14);function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}class m extends f.PureComponent{componentDidMount(){Object(n.a)(o.a.create(l.a.Serp.NO_PAPERS_FOUND,{query:this.props.query,suggestedQuery:this.props.suggestedQuery}))}render(){const{hasFacets:e,isMobile:t,query:r,suggestedQuery:l}=this.props;let i=null;e&&"undefined"!=typeof window&&window.history&&window.history.length>0&&(i=f.createElement("button",{onClick:()=>window.history.back(),className:"link-button"},Object(c.c)(e=>e.search.emptyResults.removeFacetsLabel)));const a=e&&""===r?f.createElement(s.a,{content:e=>e.search.emptyResults.labelWithFacetsNoQuery}):e&&r?f.createElement(s.a,{content:e=>e.search.emptyResults.labelWithFacets,args:[r]}):r?f.createElement(s.a,{content:e=>e.search.emptyResults.labelWithQuery,args:[r]}):f.createElement(s.a,{content:e=>e.search.emptyResults.labelWithoutQuery});return f.createElement("div",{className:t?"padded":""},t?null:f.createElement("h1",{className:"bold","data-test-id":"no-papers-found"},Object(c.c)(e=>e.search.emptyResults.headline)),f.createElement("p",null,a),i,l&&f.createElement(b,{suggestedQuery:l}))}}const b=e=>{let{suggestedQuery:t}=e;return f.createElement("p",{className:"query-suggestions"},Object(c.c)(e=>e.search.emptyResults.suggestionText)+" ",f.createElement("strong",null,f.createElement(d.a,h({},i.a.routeForQuery(t),{onClick:function(){Object(n.a)(a.a.create(l.a.Serp.SUGGESTED_QUERY,{suggestedQuery:t}))}}),t),"?"))};b.propTypes={suggestedQuery:p.a.string.isRequired}},584:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var s=r(27),l=r(0),i=r(29),a=r.n(i);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showSortExplanation:!1,showResultCount:!0,sortDisplayType:"select",scrollToTopOfPage:!0,searchResultLayout:{showSortStat:!1},sorts:l.b.List(),filtersExpandedByDefault:!1};o(this,"showSortExplanation",void 0),o(this,"showResultCount",void 0),o(this,"sortDisplayType",void 0),o(this,"scrollToTopOfPage",void 0),o(this,"searchResultLayout",void 0),o(this,"sorts",void 0),o(this,"filtersExpandedByDefault",void 0),e.sorts&&0!==e.sorts.size||(e.sorts=s.a.paperSearch()),a()(this,e)}}},605:function(e,t,r){"use strict";var s,l,i,a=r(366),o=r(404),n=r(369),c=r(375),d=r(523),u=r(524),p=r(526),f=r(395),h=r(1),m=r(60),b=r(125),E=r(105),y=r(443),w=r(41),g=r(124),O=r(80),S=r(14),F=r(363),_=r.n(F),T=r(8),j=r.n(T);class C extends S.PureComponent{render(){const{allFilters:e,filters:t,searchControl:r,query:s,response:l,onChangeYearFilter:i,onHideClick:o,injectQueryStore:n}=this.props,b=this.context.envInfo.isMobile,g=l.stats.get("coAuthors"),O=l.stats.get("authors"),F=l.stats.get("venues"),T=Object(E.b)(l.stats.get("fieldsOfStudy"));return S.createElement(f.a,{ariaProps:{"aria-modal":"true"},modalId:null,className:_()({"dropdown-filter-modal":!0,"dropdown-filter-modal__mobile":b}),onHideClick:o},S.createElement("div",{className:"dropdown-filter-modal__container"},S.createElement("div",{className:"dropdown-filter-modal__filters"},S.createElement("h2",{className:"dropdown-filter-modal__header"},e?Object(w.c)(e=>e.filterBar.dropdownLabels.allFilters):Object(w.c)(e=>e.filterBar.dropdownLabels.moreFilters)),!!r&&S.createElement("div",{className:"search-container"},r),t.contains(y.b.DATE)&&S.createElement(d.a,{analyticsEvent:m.a.Serp.YEAR_SLIDER,centerBucketPopover:!0,filterCallback:i,filters:l.stats,histogramWidth:200,yearFilter:s.yearFilter,yearBuckets:null,showPresetButtons:!0}),t.contains(y.b.HAS_PDF)&&S.createElement(p.a,null),t.contains(y.b.FIELD_OF_STUDY)&&!!T&&!T.isEmpty()&&S.createElement(u.a,{title:Object(w.c)(e=>e.filterBar.dropdownTitles.fieldOfStudy),filterType:"fieldsOfStudy",filters:T,collapsible:!1,injectQueryStore:n}),t.contains(y.b.COAUTHOR)&&!!g&&!g.isEmpty()&&S.createElement(u.a,{title:Object(w.c)(e=>e.filterBar.dropdownTitles.coAuthor),filterType:"coAuthor",filters:g,collapsible:!1,injectQueryStore:n}),t.contains(y.b.AUTHOR)&&!!O&&!O.isEmpty()&&S.createElement(u.a,{title:Object(w.c)(e=>e.filterBar.dropdownTitles.author),filterType:"author",filters:O,collapsible:!1,injectQueryStore:n}),t.contains(y.b.VENUE)&&!!F&&!F.isEmpty()&&S.createElement(u.a,{title:Object(w.c)(e=>e.filterBar.dropdownTitles.venue),filterType:"venue",filters:F,collapsible:!1,maxLabelLength:h.a.data.MAX_VENUE_LENGTH,injectQueryStore:n})),S.createElement("div",{className:"dropdown-filter-modal__footer"},S.createElement(c.default,{label:Object(w.c)(e=>e.filterBar.dropdownLabels.clearFilters),onClick:this.props.onClearFilters}),S.createElement(a.default,{type:"primary",label:Object(w.c)(e=>e.filterBar.dropdownLabels.applyFilters),onClick:o}))))}}s=C,l="contextTypes",i={dispatcher:j.a.instanceOf(g.a).isRequired,envInfo:j.a.instanceOf(b.a).isRequired,history:j.a.instanceOf(O.a).isRequired,router:j.a.object.isRequired},l in s?Object.defineProperty(s,l,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[l]=i;var P=r(394),R=r(364),A=r(514),v=r(61),N=r(15),D=r(27),I=r(74),L=r(479),Y=r(16),B=r(0);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return k}));const x="undefined"!=typeof Intl&&"NumberFormat"in Intl,V=B.b.Map({[D.a.RECENCY.id]:Object(w.c)(e=>e.filterBar.sort.recencyDescription),[D.a.TOTAL_CITATIONS.id]:Object(w.c)(e=>e.filterBar.sort.citationCountDescription),[D.a.INFLUENTIAL_CITATIONS.id]:Object(w.c)(e=>e.filterBar.sort.influenceCountDescription)});class k extends S.Component{constructor(){super(...arguments),U(this,"toggleDenseView",()=>{const{isCompact:e}=this.state;e?this.context.userPrefsStore.removeLocalPreference(I.a.DENSE_PAPER_VIEW):this.context.userPrefsStore.setLocalPreference(I.a.DENSE_PAPER_VIEW,1)}),U(this,"showAllFilters",()=>{this.setState({isAllFiltersVisible:!0})}),U(this,"showMoreFilters",()=>{this.setState({isMoreFiltersVisible:!0})}),U(this,"showSomeFilters",()=>{this.setState({isSomeFiltersVisible:!0})}),U(this,"hideModals",()=>{this.setState({isAllFiltersVisible:!1,isMoreFiltersVisible:!1,isSomeFiltersVisible:!1})}),U(this,"onClearFilters",()=>{const{doFullQueryReset:e,query:t}=this.props;N.a.changeRouteForQuery(Object(Y.j)(t,!e,!0),this.context.history,this.context.router),this.props.onClearFilters&&this.props.onClearFilters(),this.setState({clearedFilterMessage:Object(w.c)(e=>e.filterBar.dropdownLabels.clearedFilters)})}),U(this,"onClearAnnouncementComplete",()=>{this.setState({clearedFilterMessage:""})}),U(this,"isDatesSelected",()=>{const{response:e,query:t}=this.props,r=e.stats.get("years");if(!r||r.isEmpty())return!1;const s=r.first().get("year"),l=r.last().get("year"),i=t.yearFilter;return i&&i.get("min")&&i.get("max")&&(i.get("min")!==s||i.get("max")!==l)}),U(this,"checkFilterStates",e=>{const{query:t}=this.props,r=t.coAuthors.size>0&&e.contains(y.b.COAUTHOR),s=t.authors.size>0&&e.contains(y.b.AUTHOR),l=t.venues.size>0&&e.contains(y.b.VENUE),i=t.requireViewablePdf&&e.contains(y.b.HAS_PDF),a=this.isDatesSelected()&&e.contains(y.b.DATE),o=t.fieldsOfStudy.size>0&&e.contains(y.b.FIELD_OF_STUDY);return r||s||l||i||a||o}),U(this,"shouldShowFilter",e=>{const{envInfo:{isMobile:t}}=this.context;return this.props.config.startVisible.contains(e)&&!t}),U(this,"shouldShowFilterWithStat",(e,t)=>{const{envInfo:{isMobile:r}}=this.context;return this.props.config.startVisible.contains(e)&&!!t&&!t.isEmpty()&&!r}),this.state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({isAllFiltersVisible:!1,isMoreFiltersVisible:!1,isSomeFiltersVisible:!1,clearedFilterMessage:""},this.stateFromUserPreferencesStore()),this.context.userPrefsStore.registerComponent(this,()=>{this.setState(this.stateFromUserPreferencesStore())})}stateFromUserPreferencesStore(){return{isCompact:!!this.context.userPrefsStore.getLocalPreference(I.a.DENSE_PAPER_VIEW)}}render(){const{config:e,response:t,query:r,className:s,injectQueryStore:l,onChangeYearFilter:i,showResultCount:f,searchControl:b,sortControl:g,isSearchbarFocused:O}=this.props,{isCompact:F}=this.state,{envInfo:{isMobile:T}}=this.context,j=t.stats.get(A.a.COAUTHOR.pluralId)||B.b.Set(),N=t.stats.get(A.a.AUTHOR.pluralId),I=t.stats.get(A.a.VENUE.pluralId),Y=Object(E.b)(t.stats.get(A.a.FIELDS_OF_STUDY.pluralId)),M=j.toList().map(e=>e.get("documentCount")).reduce((e,t)=>e+t,0),U=r.coAuthors.size>0,k=r.authors.size>0,Q=r.venues.size>0,q=r.fieldsOfStudy.size>0,H=this.isDatesSelected(),W=this.checkFilterStates(e.startInModal),z=this.checkFilterStates(e.collapseToModal),G=this.checkFilterStates(e.startVisible.concat(e.startInModal)),J=!!g,X=x?new Intl.NumberFormat("en-US",{maximumSignificantDigits:3}).format(t.totalResults):Object(v.d)(t.totalResults),K=G?Object(w.c)(e=>e.filterBar.activeFilters):"",Z=t.totalResults>=1e3?Object(w.c)(e=>e.filterBar.approxResultCount,X,r.queryString,K):t.totalResults>1?Object(w.c)(e=>e.filterBar.exactResultCount,X,r.queryString,K):Object(w.c)(e=>e.filterBar.singleResultCount,r.queryString,K),$=r.sort!=D.a.RELEVANCE.id&&null!=V.get(r.sort)?V.get(r.sort):null;return S.createElement("div",{className:_()("dropdown-filters",s)},S.createElement("div",{className:"dropdown-filters__controls"},!!f&&S.createElement("h1",{"aria-live":"polite","aria-atomic":"true",className:"dropdown-filters__result-header"},S.createElement("div",{className:"dropdown-filters__result-count"},Z),$&&S.createElement("div",{className:_()("dropdown-filters__sort-description",T?"dropdown-filters__sort-description__mobile":"")},$)),S.createElement("div",{className:"centered-max-width-content"},S.createElement(P.a,{className:"flex-row-vcenter dropdown-filters__outer-flex-container"},S.createElement(P.a,{className:"flex-row-vcenter dropdown-filters__filter-flex-container"},!!b&&b,!O&&S.createElement(S.Fragment,null,this.shouldShowFilter(y.b.FIELD_OF_STUDY)&&S.createElement(o.default,{className:"dropdown-filters__fields_of_study",label:Object(w.c)(e=>e.filterBar.dropdownTitles.fieldOfStudy),type:q?a.TYPE.PRIMARY:a.TYPE.DEFAULT,contents:()=>S.createElement(u.a,{title:Object(w.c)(e=>e.filterBar.dropdownTitles.fieldOfStudy),filterType:A.a.FIELDS_OF_STUDY.pluralId,filters:Y,displayDocCount:!1,collapsible:!1,injectQueryStore:l,hasSelection:q})}),this.shouldShowFilter(y.b.DATE)&&S.createElement(o.default,{className:"dropdown-filters__dates",label:Object(w.c)(e=>e.filterBar.dropdownLabels.date),type:H?a.TYPE.PRIMARY:a.TYPE.DEFAULT,contents:()=>S.createElement(d.a,{analyticsEvent:m.a.Serp.YEAR_SLIDER,centerBucketPopover:!0,filterCallback:i,filters:t.stats,yearFilter:r.yearFilter,yearBuckets:null,showPresetButtons:!0})}),this.shouldShowFilterWithStat(y.b.COAUTHOR,j)&&S.createElement(o.default,{disabled:0==M,className:"dropdown-filters__coauthor",label:Object(w.c)(e=>e.filterBar.dropdownLabels.coAuthor),type:U?a.TYPE.PRIMARY:a.TYPE.DEFAULT,contents:()=>S.createElement(u.a,{title:Object(w.c)(e=>e.filterBar.dropdownTitles.coAuthor),filterType:A.a.COAUTHOR.id,filters:j,collapsible:!1,injectQueryStore:l})}),this.shouldShowFilter(y.b.HAS_PDF)&&S.createElement(p.a,{className:"has-pdf-toggle",isToggle:!0,injectQueryStore:l}),this.shouldShowFilterWithStat(y.b.AUTHOR,N)&&S.createElement(o.default,{className:"dropdown-filters__author",label:Object(w.c)(e=>e.filterBar.dropdownLabels.author),type:k?a.TYPE.PRIMARY:a.TYPE.DEFAULT,contents:()=>S.createElement(u.a,{title:Object(w.c)(e=>e.filterBar.dropdownTitles.author),filterType:A.a.AUTHOR.id,filters:N,collapsible:!1,injectQueryStore:l,hasSelection:k})}),this.shouldShowFilterWithStat(y.b.VENUE,I)&&S.createElement(o.default,{className:"dropdown-filters__venues",label:Object(w.c)(e=>e.filterBar.dropdownLabels.venue),type:Q?a.TYPE.PRIMARY:a.TYPE.DEFAULT,contents:()=>S.createElement(u.a,{title:Object(w.c)(e=>e.filterBar.dropdownTitles.venue),filterType:A.a.VENUE.id,filters:I,collapsible:!1,maxLabelLength:h.a.data.MAX_VENUE_LENGTH,injectQueryStore:l,hasSelection:Q})}),!this.props.config.startInModal.isEmpty()&&S.createElement("div",{className:"dropdown-filters__modal-button flex-item"},S.createElement(a.default,{className:"dropdown-filters__some_filters",type:W?a.TYPE.PRIMARY:a.TYPE.SECONDARY,label:Object(w.c)(e=>e.filterBar.dropdownLabels.moreFilters),onClick:this.showSomeFilters})),S.createElement("div",{className:"dropdown-filters__modal-button flex-item"},S.createElement(a.default,{className:"dropdown-filters__more_filters",type:z?a.TYPE.PRIMARY:a.TYPE.SECONDARY,label:Object(w.c)(e=>e.filterBar.dropdownLabels.moreFilters),onClick:this.showMoreFilters})),S.createElement("div",{className:"dropdown-filters__modal-button"},S.createElement(a.default,{className:"dropdown-filters__mobile_filters",type:G?a.TYPE.PRIMARY:a.TYPE.SECONDARY,label:Object(w.c)(e=>e.filterBar.dropdownLabels.allFilters),onClick:this.showAllFilters})),(G||this.props.config.includeClearOnQuery&&r.queryString)&&S.createElement(c.default,{ariaProps:{"aria-label":Object(w.c)(e=>e.filterBar.dropdownLabels.clearFilters)},label:Object(w.c)(e=>e.filterBar.dropdownLabels.clear),onClick:this.onClearFilters,"data-test-id":"clear-filters-button"}),S.createElement(L.b,{message:this.state.clearedFilterMessage,politeness:L.a.ASSERTIVE,durationMs:1e3,onAnnouncementCompletion:this.onClearAnnouncementComplete}))),S.createElement(P.a,{className:"flex-row-vcenter dropdown-filters__sort-flex-container"},J&&g,!T&&S.createElement(P.a,{className:"dropdown-filters__density-toggle"},S.createElement(n.default,{ariaProps:{"aria-label":Object(w.c)(e=>e.filterBar.densityToggle.regularViewAria)},className:"dropdown-filters__density-toggle-off",disabled:!F,onClick:this.toggleDenseView,type:a.TYPE.DEFAULT,icon:S.createElement(R.a,{icon:"view-regular",height:"14",width:"14"})}),S.createElement(n.default,{ariaProps:{"aria-label":Object(w.c)(e=>e.filterBar.densityToggle.denseViewAria)},className:"dropdown-filters__density-toggle-on",disabled:F,onClick:this.toggleDenseView,type:a.TYPE.DEFAULT,icon:S.createElement(R.a,{icon:"view-dense",height:"14",width:"14"})})))))),this.state.isSomeFiltersVisible&&S.createElement(C,{filters:e.startInModal,onChangeYearFilter:i,onClearFilters:this.onClearFilters,onHideClick:this.hideModals,query:r,response:t,injectQueryStore:l}),this.state.isMoreFiltersVisible&&S.createElement(C,{filters:e.startInModal.concat(e.collapseToModal),onChangeYearFilter:i,onClearFilters:this.onClearFilters,onHideClick:this.hideModals,query:r,response:t,injectQueryStore:l}),this.state.isAllFiltersVisible&&S.createElement(C,{allFilters:!0,searchControl:b,filters:e.startInModal.concat(e.startVisible),onChangeYearFilter:i,onClearFilters:this.onClearFilters,onHideClick:this.hideModals,query:r,response:t,injectQueryStore:l}))}}U(k,"contextTypes",{envInfo:j.a.instanceOf(b.a).isRequired,history:j.a.instanceOf(O.a).isRequired,router:j.a.object.isRequired,userPrefsStore:j.a.instanceOf(I.b).isRequired})}}]);
//# sourceMappingURL=bundle-4.js.map