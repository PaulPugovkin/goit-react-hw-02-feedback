(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={list:"StatisticList_list__1Mzj-",statisticList:"StatisticList_statisticList__2o_s9 StatisticList_list__1Mzj-",statisticItem:"StatisticList_statisticItem__29TFk",statWrapper:"StatisticList_statWrapper__1DvIE",isActive:"StatisticList_isActive__2gCJW"}},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var c=a(2),s=a(6),i=a.n(s),n=(a(15),a(4)),r=a(7),o=a(8),l=a(10),d=a(9),b=a(3),u=a.n(b),j=a(1),_=a.n(j),h=a(0),O=function(t){var e=t.good,a=t.neutral,c=t.bad,s=t.total,i=t.positivePercent;return Object(h.jsxs)("div",{className:(_.a.statWrapper,_.a.isActive),children:[Object(h.jsx)("h2",{children:"Statistics"}),Object(h.jsxs)("ul",{className:_.a.statisticList,children:[Object(h.jsx)("li",{className:_.a.statisticItem,children:Object(h.jsxs)("span",{children:["Good: ",e]})}),Object(h.jsx)("li",{className:_.a.statisticItem,children:Object(h.jsxs)("span",{children:["Neutral:",a]})}),Object(h.jsx)("li",{className:_.a.statisticItem,children:Object(h.jsxs)("span",{children:["Bad:",c]})}),Object(h.jsx)("li",{className:_.a.statisticItem,children:Object(h.jsxs)("span",{children:["Total:",s]})}),Object(h.jsx)("li",{className:_.a.statisticItem,children:Object(h.jsxs)("span",{children:["Positive feedback: ",i,"%"]})})]})]})},k=["good","neutral","bad"],p=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0,clicked:!1,total:0},t.handlerClickOnRate=function(e){var a,c=e.currentTarget.name;t.setState((a={},Object(n.a)(a,c,t.state[c]+1),Object(n.a)(a,"clicked",!0),Object(n.a)(a,"total",t.state.total+1),a))},t.countPositiveFeedbackPercentage=function(){return Math.round(100/t.state.total*t.state.good)},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.state,a=e.good,c=e.neutral,s=e.bad,i=e.total;return Object(h.jsxs)("div",{className:u.a.wrapper,children:[Object(h.jsx)("h2",{children:"Please leave feedback"}),Object(h.jsx)("ul",{className:u.a.list,children:k.map((function(e){return Object(h.jsx)("li",{className:u.a.item,children:Object(h.jsx)("button",{name:e,onClick:t.handlerClickOnRate,type:"button",className:u.a[e],children:e})})}))}),this.state.clicked?Object(h.jsx)(O,{good:a,neutral:c,bad:s,total:i,positivePercent:this.countPositiveFeedbackPercentage()}):Object(h.jsx)("h2",{children:"No feedback given"})]})}}]),a}(c.Component);var m=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p,{})})};i.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))},3:function(t,e,a){t.exports={wrapper:"FeedbackCounter_wrapper__Pz5Cj",list:"FeedbackCounter_list__2Dxok",item:"FeedbackCounter_item__2dQAq",button:"FeedbackCounter_button__2Yk8u",good:"FeedbackCounter_good__2dz6t FeedbackCounter_button__2Yk8u",neutral:"FeedbackCounter_neutral__2Ytwc FeedbackCounter_button__2Yk8u",bad:"FeedbackCounter_bad__2-cOY FeedbackCounter_button__2Yk8u"}}},[[17,1,2]]]);
//# sourceMappingURL=main.ace6c6c8.chunk.js.map