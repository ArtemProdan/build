"use strict";(self.webpackChunksamurai=self.webpackChunksamurai||[]).push([[665],{4665:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var s=n(9439),c=n(2791),a=n(127),r=n(184);function i(e){var t=e.card,n=e.ind,s=e.onCardClick;return(0,r.jsx)("li",{className:"item",onClick:function(){return s(t,n)},children:t.link?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{className:"item__img",src:t.link,alt:t.title}),(0,r.jsx)("div",{className:"item__overlay",children:(0,r.jsx)("p",{className:"item__name",children:t.title})})]}):(0,r.jsx)(a.p,{})})}function u(e){var t=(0,c.useState)(-1),n=(0,s.Z)(t,2),a=n[0],u=n[1];return(0,c.useEffect)((function(){if(a<e.cardList.length-1){var t=setTimeout((function(){u(a+1)}),250);return function(){return clearTimeout(t)}}}),[a,e.cardList]),(0,r.jsx)("main",{className:"contentCat",children:(0,r.jsx)("section",{className:"galleryCat content__section",children:(0,r.jsx)("ul",{className:"gallery__list",children:e.cardList.slice(0,a+1).map((function(t,n){return(0,r.jsx)(i,{card:t,ind:n,onCardClick:e.onCardClick},t.id)}))})})})}var o=n(3433);function l(e){var t=e.comment;return(0,r.jsxs)("div",{className:"popup__comment",children:[(0,r.jsx)("p",{className:"popup__text",children:t.text}),(0,r.jsx)("p",{className:"popup__date",children:t.date})]})}var p=n(5025);function d(e){var t=e.card,n=c.useState(!1),a=(0,s.Z)(n,2),i=a[0],u=a[1],d=c.useState([]),m=(0,s.Z)(d,2),_=m[0],v=m[1];c.useEffect((function(){u(!!t&&t.isLiked)}),[t]),c.useEffect((function(){v(t?t.comments.reverse():[])}),[t]);var f=c.useRef(),x=c.useRef();return(0,r.jsxs)("div",{className:"popup__container",children:[(0,r.jsx)("img",{className:"popup__img",src:t?t.link:"",alt:t?t.title:""}),(0,r.jsxs)("div",{className:"popup__comments-section",children:[(0,r.jsxs)("div",{className:"popup__about",children:[(0,r.jsx)("h2",{className:"popup__title",children:t?t.title:""}),(0,r.jsxs)("div",{className:"popup__rate",children:[(0,r.jsx)("p",{className:"popup__count",children:t&&i?"1":"0"}),(0,r.jsx)("button",{type:"button","aria-label":"\u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",className:"popup__like-btn ".concat(t&&i&&"popup__like-btn_liked"),onClick:function(){u(!i)}})]})]}),(0,r.jsx)("div",{className:"popup__comments",children:t&&_.map((function(e,t){return(0,r.jsx)(l,{comment:e},t+1)}))}),(0,r.jsxs)("form",{name:"form",className:"popup__form",onSubmit:function(e){e.preventDefault();var t=f.current.value,n=new Date,s={text:t,date:"".concat(n.getDate(),"/").concat(n.getMonth()+1,"/").concat(n.getFullYear())};v([].concat((0,o.Z)(_),[s])),f.current.value="",f.current.classList.remove("active"),x.current.classList.remove("active")},children:[(0,r.jsx)("textarea",{className:"popup__input",ref:f,placeholder:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0430\u0442\u0430\u0440\u0438\u0439",onClick:function(){f.current.classList.add("active"),x.current.classList.add("active")}}),(0,r.jsx)("button",{type:"submit",className:"popup__sbmt_btn",ref:x,children:(0,r.jsx)("img",{src:p.Z,alt:"send"})})]})]})]})}function m(e){var t=e.card,n=e.onClose,s=e.prevCard,c=e.nextCard;return(0,r.jsxs)("div",{className:"popup ".concat(t&&"popup_opened"),children:[(0,r.jsx)("div",{className:"pop_btn popup__prev",onClick:s}),(0,r.jsx)("div",{className:"pop_btn popup__next",onClick:c}),(0,r.jsx)("button",{type:"button",className:"popup__close_btn",onClick:n}),(0,r.jsx)(d,{store:e.store,card:t,removeActiveInput:e.removeActiveInput})]})}var _=n(8687),v=n(7689),f=(0,_.$j)((function(e){return{isAuth:e.auth.isAuth,cardList:e.cardList}}),{})((function(e){var t=(0,c.useState)(!1),n=(0,s.Z)(t,2),a=n[0],i=n[1],o=(0,c.useState)(null),l=(0,s.Z)(o,2),p=l[0],d=l[1],_=(0,c.useState)(null),f=(0,s.Z)(_,2),x=f[0],j=f[1];(0,c.useEffect)((function(){i(!0)}),[]);return e.isAuth?a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{onCardClick:function(e,t){d(e),j(t)},cardList:e.cardList}),(0,r.jsx)(m,{card:p,onClose:function(){d(null)},prevCard:function(){d(e.cardList[x-1]),j(x-1)},nextCard:function(){d(e.cardList[x+1]),j(x+1),e.removeActiveInput()},removeActiveInput:e.removeActiveInput,store:e.store})]}):(0,r.jsx)("h1",{children:"LOADING"}):(0,r.jsx)(v.Fg,{to:"/login"})}))}}]);
//# sourceMappingURL=665.f48c730a.chunk.js.map