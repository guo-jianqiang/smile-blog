(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[388],{35655:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});n(15144);var a=n(2307),r=(n(75314),n(11187)),l=(n(54277),n(74048)),c=(n(77785),n(59361)),s=n(63038),u=n.n(s),o=n(67294),d=n(65117),i=n(87757),f=n.n(i),m=n(48926),k=n.n(m),g=/^https?/,p=function CecIcon(e){var t=e.type,n=e.defaultUrl,a=e.className,r=e.style,l=(0,o.useRef)(null),c=(0,o.useState)(),s=u()(c,2),d=s[0],i=s[1],m=g.test(t);(0,o.useEffect)((function(){m||p().then((function(e){i(e)}))}),[]);var p=function(){var e=k()(f().mark((function _callee(){var e,a;return f().wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return e=t+".svg",r.next=3,fetch(n+e);case 3:return a=r.sent,r.abrupt("return",a.text());case 5:case"end":return r.stop()}}),_callee)})));return function fetchSvg(){return e.apply(this,arguments)}}(),y=a?"cec-icon"+" ".concat(a):"cec-icon";return m?o.createElement("img",{src:t,style:r,className:a}):o.createElement("span",{ref:l,className:y,style:r,dangerouslySetInnerHTML:{__html:d||""}})};p.setDefaultUrl=function(e){p.defaultProps||(p.defaultProps={}),p.defaultProps.defaultUrl=e};p.setDefaultUrl("http://localhost:8089/icon/");const y=function Table(){var e=(0,o.useState)(!0),t=u()(e,2),n=t[0],s=t[1],i=[{title:"Name",dataIndex:"name",key:"name",render:function render(e){return o.createElement("a",null,e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags",render:function render(e){return o.createElement(o.Fragment,null,e.map((function(e){var t=e.length>5?"geekblue":"green";return"loser"===e&&(t="volcano"),o.createElement(c.Z,{color:t,key:e},e.toUpperCase())})))}},{title:"Action",key:"action",render:function render(e,t){return o.createElement(l.default,{size:"middle"},o.createElement("a",null,"Invite ",t.name),o.createElement("a",null,"Delete"))}}];return(0,d.useDidRecover)((function(){r.default.success("\u8fdb\u5165\u7f13\u5b58")})),(0,o.useEffect)((function(){r.default.success("\u521d\u59cb\u5316"),setTimeout((function(){s(!1)}),1e3)}),[]),o.createElement(o.Fragment,null,o.createElement(a.Z,{columns:i,rowKey:"key",dataSource:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"1",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],loading:n}))}}}]);