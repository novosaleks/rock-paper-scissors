(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],[,,,,,,,,,function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},,,function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),r=t(3),a=t.n(r),i=t(2),o=(t(9),t.p+"static/media/logo-bonus.9bf8aeb8.svg"),l=t(0),d=function(e){var c=e.score;return Object(l.jsx)("header",{className:"app-header",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"app-header__content",children:[Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{className:"app-header__logo",src:o,alt:"logo"})}),Object(l.jsxs)("div",{className:"app-header__content-score",children:[Object(l.jsx)("div",{className:"score_label",children:"SCORE"}),Object(l.jsx)("div",{className:"score_point",children:c})]})]})})})},j=t.p+"static/media/bg-pentagon.1ad6d365.svg",u=(t(11),t.p+"static/media/icon-rock.476e90a9.svg"),m=t.p+"static/media/icon-spock.f4d7eee8.svg",p=t.p+"static/media/icon-paper.8b57a6b1.svg",b=t.p+"static/media/icon-scissors.3b1a5d7e.svg",O=t.p+"static/media/icon-lizard.0f83914c.svg",f=(t(12),function(e){var c=e.type,t={rock:u,spock:m,paper:p,scissors:b,lizard:O};return Object(l.jsx)("div",{className:"game-item ".concat(c),children:Object(l.jsx)("div",{className:"game-item__content",children:Object(l.jsx)("img",{src:t[c],alt:c})})})}),h=function(e){var c=e.selectItem;return Object(l.jsx)("section",{className:"app-interface",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"app-interface__field",children:[Object(l.jsx)("img",{src:j,alt:"pentagon"}),Object(l.jsx)("div",{className:"app-interface__wrapper",onClick:function(){return c("spock")},children:Object(l.jsx)(f,{type:"spock"})}),Object(l.jsx)("div",{className:"app-interface__wrapper",onClick:function(){return c("scissors")},children:Object(l.jsx)(f,{type:"scissors"})}),Object(l.jsx)("div",{className:"app-interface__wrapper",onClick:function(){return c("paper")},children:Object(l.jsx)(f,{type:"paper"})}),Object(l.jsx)("div",{className:"app-interface__wrapper",onClick:function(){return c("rock")},children:Object(l.jsx)(f,{type:"rock"})}),Object(l.jsx)("div",{className:"app-interface__wrapper",onClick:function(){return c("lizard")},children:Object(l.jsx)(f,{type:"lizard"})})]})})})},x=(t(13),function(e){var c=e.switchModal;return Object(l.jsx)("footer",{className:"app-footer",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("button",{onClick:c,className:"app-footer__rules",children:"RULES"})})})}),v=(t(14),t.p+"static/media/image-rules-bonus.dc641008.svg"),_=t.p+"static/media/icon-close.bde602ec.svg",g=function(e){var c=e.switchModal;return Object(l.jsx)("div",{onClick:c,className:"app-modal overlay",children:Object(l.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:"modal",children:[Object(l.jsxs)("div",{className:"modal__header",children:[Object(l.jsx)("h2",{className:"modal__header-title dark",children:"RULES"}),Object(l.jsx)("img",{src:_,onClick:c,alt:"close",className:"modal__header-close close-desktop"})]}),Object(l.jsxs)("div",{className:"modal__content",children:[Object(l.jsx)("img",{src:v,alt:"rules",className:"modal__content-rules"}),Object(l.jsx)("img",{src:_,onClick:c,alt:"close",className:"modal__header-close close-mobile"})]})]})})},N=function(e){var c=e.children,t=e.id,n=document.createElement("div");return n.id=t,Object(s.useEffect)((function(){return document.body.prepend(n),document.body.style.overflow="hidden",function(){n.remove(),document.body.style.overflow=""}}),[n]),a.a.createPortal(c,n)},S=(t(15),t(16),function(e){var c,t=e.result,n=e.dropSelection,r=e.changeScore,a=Object(s.useCallback)((function(){return r(t)}),[]);Object(s.useEffect)((function(){a()}),[t,a]),function(e){e[e.LOSE=-1]="LOSE",e[e.DRAW=0]="DRAW",e[e.WIN=1]="WIN"}(c||(c={}));var i="DRAW"===c[t]?"DRAW!":"YOU ".concat(c[t],"!");return Object(l.jsxs)("div",{className:"game-result",children:[Object(l.jsx)("h2",{className:"game-result__title",children:i}),Object(l.jsx)("button",{onClick:n,className:"game-result__reset",children:"PLAY AGAIN"})]})}),k=function(){return function(e){return function(c){var t=Object(s.useState)(null),n=Object(i.a)(t,2),r=n[0],a=n[1];Object(s.useEffect)((function(){var e,t=Math.floor(5*Math.random());!function(e){e[e.spock=0]="spock",e[e.scissors=1]="scissors",e[e.paper=2]="paper",e[e.rock=3]="rock",e[e.lizard=4]="lizard"}(e||(e={}));var s=e[t],n=[[0,1,-1,1,-1],[-1,0,1,-1,1],[1,-1,0,1,-1],[-1,1,-1,0,1],[1,-1,1,-1,0]][e[c.playerSelection]][t];a({result:n,computerSelection:s})}),[c.playerSelection]);var o,d=r?r.result:0,j=r&&("rock"===(o=r.computerSelection)||"paper"===o||"scissors"===o||"lizard"===o||"spock"===o)?Object(l.jsx)(f,{type:r.computerSelection}):Object(l.jsx)(l.Fragment,{}),u=r?Object(l.jsx)(S,{changeScore:c.changeScore,dropSelection:c.dropSelection,result:d}):Object(l.jsx)(l.Fragment,{}),m=c.playerSelection?Object(l.jsx)(f,{type:c.playerSelection}):Object(l.jsx)(l.Fragment,{});return Object(l.jsx)(e,{ResultView:u,ComputerSelection:j,PlayerSelection:m,result:r?r.result:0})}}},y=(t(17),function(){return Object(l.jsx)("div",{className:"winner-indicator",children:Object(l.jsx)("div",{className:"winner-indicator__middle",children:Object(l.jsx)("div",{className:"winner-indicator__inner"})})})}),w=k()((function(e){var c=e.ResultView,t=e.ComputerSelection,n=e.PlayerSelection,r=e.result,a=Object(s.useState)(!1),o=Object(i.a)(a,2),d=o[0],j=o[1],u=Object(s.useState)(!1),m=Object(i.a)(u,2),p=m[0],b=m[1];return Object(s.useEffect)((function(){setTimeout((function(){j(!0),setTimeout((function(){b(!0)}),1e3)}),1e3)}),[]),Object(l.jsx)("section",{className:"game-process",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row justify-content-center",children:[Object(l.jsxs)("div",{className:"col-lg-4 col-md-4 col-6 game-process-selection game-process__player-selection",children:[Object(l.jsx)("h2",{children:"YOU PICKED"}),Object(l.jsxs)("div",{className:"game-process__item",children:[n,Object(l.jsx)("div",{className:"winner-indicator__wrapper ".concat(p&&1===r?"indicator_active":""),children:Object(l.jsx)(y,{})})]})]}),p?Object(l.jsx)("div",{className:"col-lg-3 mt-md-5 col-md-4 col-12 order-1 order-md-0 game-process-result ".concat(p?"":"d-none"),children:c}):null,Object(l.jsxs)("div",{className:"col-lg-4 col-md-4 col-6 game-process-selection game-process__computer-selection",children:[Object(l.jsx)("h2",{children:"THE HOUSE PICKED"}),Object(l.jsxs)("div",{className:"game-process__item",children:[d?t:Object(l.jsx)("div",{className:"empty-item"}),Object(l.jsx)("div",{className:"winner-indicator__wrapper ".concat(p&&-1===r?"indicator_active":""),children:Object(l.jsx)(y,{})})]})]})]})})})})),C=function(){var e=Object(s.useState)(!1),c=Object(i.a)(e,2),t=c[0],n=c[1],r=Object(s.useState)(null),a=Object(i.a)(r,2),o=a[0],j=a[1],u=Object(s.useState)(0),m=Object(i.a)(u,2),p=m[0],b=m[1];Object(s.useEffect)((function(){var e=localStorage.getItem("game-score");e&&b(+e)}),[]);var O=function(){return n((function(e){return!e}))},f=t?Object(l.jsx)(N,{id:"modal-root",children:Object(l.jsx)(g,{switchModal:O})}):null,v=o?Object(l.jsx)(w,{dropSelection:function(){return j(null)},changeScore:function(e){return b((function(c){if(!c&&1!==e)return c;var t=c+e;return localStorage.setItem("game-score",String(t)),t}))},playerSelection:o}):Object(l.jsx)(h,{selectItem:j});return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{score:p}),v,Object(l.jsx)(x,{switchModal:O}),f]})};t(18),t(19),t(20);a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.acee075e.chunk.js.map