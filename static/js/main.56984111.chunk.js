(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n.n(r),a=n(4),c=n(5),o=n(7),i=n(6),l=n(1),u=n.n(l),b=n(0),d=function(t){var e=t.goodsArray;return Object(b.jsx)("ul",{className:"app__list",children:e.map((function(t){return Object(b.jsx)("li",{className:"app__item",children:t},t)}))})},p=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),h=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={goods:[].concat(p),sortBy:"default",isReversed:!1,start:!1},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,r=e.start,s=e.sortBy,a=e.isReversed;return n.sort((function(t,e){switch(s){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),a&&n.reverse(),Object(b.jsx)("div",{className:"app",children:r?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"app__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.setState({sortBy:"alphabet"})},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.setState({sortBy:"length"})},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.setState({goods:[].concat(p),sortBy:"default",isReversed:!1})},children:"Reset"})]}),Object(b.jsx)(d,{goodsArray:n})]}):Object(b.jsx)("button",{type:"button",className:"app__start",onClick:function(){return t.setState({start:!0})},children:"Start"})})}}]),n}(u.a.Component),j=h;s.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.56984111.chunk.js.map