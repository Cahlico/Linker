(this["webpackJsonpProjetao-2-Linker"]=this["webpackJsonpProjetao-2-Linker"]||[]).push([[0],{96:function(n,e,t){"use strict";t.r(e);var o=t(2),a=t(1),r=t(18),i=t.n(r),c=t(3),s=t(10),u=Object(a.createContext)(),d=Object(a.createContext)(),l=t(100),p=t(99),b=t(9),h=t(5),j=t(6);function x(){var n=Object(h.a)(["\n    .fade-enter {\n        opacity: 0.01;\n    }\n\n    .fade-enter.fade-enter-active {\n        opacity: 1;\n        transition: opacity 300ms ease-in;\n    }\n\n    .fade-exit {\n        opacity: 1;\n    }\n\n    .fade-exit.fade-exit-active {\n        opacity: 0.01;\n        transition: opacity 10ms ease-in;\n    }\n\n    div.transition-group {\n        position: relative;\n    }\n\n    section.route-section {\n        position: absolute;\n        width: 100%;\n        top: 0;\n        left: 0;\n    }\n"]);return x=function(){return n},n}var f=j.a.div(x()),m=t(22),O=t(7),g=t.n(O);function v(){var n=Object(h.a)(["\n    width: 35vw;\n    height: 100vh;\n    padding: 32vh 5%;\n    text-align: center;\n\n    input, button {\n        width: 90%;\n        border: none;\n        border-radius: 3px;\n        padding: 13px 5px;\n        outline-style: none;\n        margin: 5px 0;\n        font-size: 16px;\n        font-weight: bold;\n    }\n\n    button {\n        background-color: #1877F2;\n        color: #FFF;\n        margin-bottom: 20px;\n    }\n\n    button:hover {\n        background-color: #567bcc;\n    }\n\n    a {\n        text-decoration: underline;\n        color: #FFF;\n        font-size: 14px;\n        display: block;\n    }\n\n    img {\n        width: 80%;\n    }\n\n    @media (max-width: 600px) {\n        height: 65vw;\n        padding: 10vw 5vw;\n        width: 100vw;\n\n        input, button {\n\n        }\n    }\n"]);return v=function(){return n},n}function w(){var n=Object(h.a)(["\n    padding: 30vh 8vw;\n    width: 75vw;\n    height: 100vh;\n    color: #FFF;\n    background-color: #151515;\n    font-weight: bold;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\n\n    h1 {\n        font-family: 'Passion One', cursive;\n        font-size: 106px;\n    }\n\n    h2 {\n        font-size: 43px;\n    }\n\n    @media (max-width: 600px) {\n        padding: 5vw;\n        width: 100vw;\n        height: 35vh;\n        text-align: center;\n\n        h1 {\n            font-size: 24vw;\n        }\n\n        h2 {\n            font-size: 10vw;\n        }\n    }\n"]);return w=function(){return n},n}function k(){var n=Object(h.a)(["\n    display: flex;\n\n    @media (max-width: 600px) {\n        display: block;\n    }\n"]);return k=function(){return n},n}var y=j.a.div(k()),F=j.a.div(w()),C=j.a.form(v());function S(){var n=Object(a.useState)(""),e=Object(c.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(""),d=Object(c.a)(i,2),l=d[0],p=d[1],h=Object(a.useState)(!1),j=Object(c.a)(h,2),x=j[0],f=j[1],O=Object(a.useContext)(u),v=O.userInfo,w=O.setUserInfo,k=Object(b.f)();return void 0!==localStorage.data&&k.push("/timeline"),Object(o.jsxs)(y,{children:[Object(o.jsxs)(F,{children:[Object(o.jsx)("h1",{children:"Linkr"}),Object(o.jsx)("h2",{children:"save, share and discover the best links on the web"})]}),Object(o.jsxs)(C,{onSubmit:function(n){if(n.preventDefault(),!x)if(""!==t&&""!==l){f(!0);var e=g.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_in",{email:t,password:l});e.then((function(n){var e=n.data;w(Object(m.a)(Object(m.a)({},v),{},{data:e}));var t=JSON.stringify({data:e});localStorage.data=t,k.push("/timeline")})),e.catch((function(){alert("E-mail ou senha incorretos"),f(!1)}))}else alert("Por favor, preencha todos os campos")},children:[Object(o.jsx)("input",{type:"email",onChange:function(n){return r(n.target.value)},value:t,placeholder:"e-mail"}),Object(o.jsx)("input",{type:"password",onChange:function(n){return p(n.target.value)},value:l,placeholder:"password"}),x?Object(o.jsx)("img",{src:"https://avancar.gov.br/avancar-web/images/loading.gif"}):Object(o.jsx)("button",{type:"submit",children:"Log In"}),Object(o.jsx)(s.b,{to:"/SignUp",children:"First time? Create an account!"})]})]})}function z(){var n=Object(a.useState)(""),e=Object(c.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(""),d=Object(c.a)(i,2),l=d[0],p=d[1],h=Object(a.useState)(""),j=Object(c.a)(h,2),x=j[0],f=j[1],O=Object(a.useState)(""),v=Object(c.a)(O,2),w=v[0],k=v[1],S=Object(a.useState)(!1),z=Object(c.a)(S,2),I=z[0],P=z[1],E=Object(a.useContext)(u),U=E.userInfo,T=E.setUserInfo,D=Object(b.f)();return void 0!==localStorage.data&&D.push("/timeline"),Object(o.jsxs)(y,{children:[Object(o.jsxs)(F,{children:[Object(o.jsx)("h1",{children:"Linkr"}),Object(o.jsx)("h2",{children:"save, share and discover the best links on the web"})]}),Object(o.jsxs)(C,{onSubmit:function(n){if(n.preventDefault(),!I)if(""!==t&&""!==l&&""!==x&&""!==w){P(!0);var e=g.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_up",{email:t,password:l,username:x,pictureUrl:w});e.then((function(n){var e=n.data;T(Object(m.a)(Object(m.a)({},U),{},{data:e})),D.push("/timeline")})),e.catch((function(){alert("E-mail inserido j\xe1 cadastrado"),P(!1)}))}else alert("Por favor, preencha todos os campos")},children:[Object(o.jsx)("input",{type:"email",onChange:function(n){return r(n.target.value)},value:t,placeholder:"e-mail"}),Object(o.jsx)("input",{type:"password",onChange:function(n){return p(n.target.value)},value:l,placeholder:"password"}),Object(o.jsx)("input",{type:"text",onChange:function(n){return f(n.target.value)},value:x,placeholder:"username"}),Object(o.jsx)("input",{type:"url",onChange:function(n){return k(n.target.value)},value:w,placeholder:"picture url"}),I?Object(o.jsx)("img",{src:"https://avancar.gov.br/avancar-web/images/loading.gif"}):Object(o.jsx)("button",{type:"submit",children:"Log In"}),Object(o.jsx)(s.b,{to:"/Login",children:"Switch back to log in"})]})]})}var I=t(34),P=t(15),E=t(52);function U(){var n=Object(h.a)(["\n    width: 38vw;\n    padding: 40px 10px 0px;\n    border-radius: 5px;\n    font-size: 16px;\n    background-color: #E7E7E7;\n    position: absolute;\n    top: 0px;\n    left: 0;\n    z-index: -1;\n\n    a {\n        display: block;\n        margin-bottom: 20px;\n        z-index: 9;\n    }\n\n    img, p span {\n        display: inline-block;\n        padding: 10px;\n    }\n    \n    p {\n        margin-top: -38px;\n        margin-left: 55px;\n        font-weight: 300;\n    }\n\n    span {\n        margin-top: -48px;\n        color: #828282;\n    }\n\n    @media(max-width: 600px) {\n        width: 98vw;\n    }\n"]);return U=function(){return n},n}function T(){var n=Object(h.a)(["\n    position: relative;\n\n    & > svg {\n        color: #adaaaa;\n        cursor: auto;\n        position: fixed;\n        top: 19px;\n        left: 66%;\n    }\n\n    @media(max-width: 600px) {\n        position: absolute;\n        top: 70px;\n        left: 1vw;\n\n        & > svg {\n            top: 76px;\n            left: 90%;\n        }\n    }\n"]);return T=function(){return n},n}function D(){var n=Object(h.a)(["\n    position: fixed;\n    font-family: 'Lato',sans-serif;\n    font-size:17px;\n    background: #171717;\n    right: 0;\n    top: ",";\n    transition: top .5s ease-in-out;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    padding: 17px;\n    color:white;\n    border-radius: 0px 0px 0px 20px;\n    z-index:10;\n\n    a {\n        color:inherit;\n        display:block;\n    }\n\n    a:first-child { \n        margin-bottom: 5px;\n    }\n\n    button {\n        font-family: inherit;\n        font-size: inherit;\n        color: inherit;\n        background: none;\n        border: none;\n        padding: 0;\n        margin-top: 2px;\n        cursor: pointer;\n    }\n\n    @media(max-width: 600px) {\n        right: 0;\n        top: ",";\n    }\n"]);return D=function(){return n},n}function L(){var n=Object(h.a)(["\n    position:fixed;\n    top:0;\n    width:100%;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    background:#151515;\n    padding:5px 20px;\n    z-index:100;\n\n    h1 {\n        font-family: 'Passion one', sans-serif;\n        font-weight:bold;\n        color:white;\n        font-size:49px;\n    }\n\n    input {\n        width: 38vw;\n        padding: 10px 20px;\n        border: none;\n        border-radius: 5px;\n        outline-style: none;\n        font-size: 16px;\n    }\n\n    a {\n        color: inherit;\n    }\n\n    .show-menu {\n        display: flex;\n        align-items: center;\n        cursor: pointer;\n    }\n\n    img {\n        width:53px;\n        height:53px;\n        border-radius:50%;\n        cursor: pointer;\n    }\n    \n    svg {\n        color: white;\n        margin-right: 5px;\n        cursor: pointer;\n        font-size: 25px;\n    }\n\n    @media(max-width: 600px) {\n        input {\n            width: 98vw;\n            z-index: -10;\n        }\n    }\n"]);return L=function(){return n},n}var N=j.a.header(L()),R=j.a.div(D(),(function(n){return n.isDroped?"63px":"-34px"}),(function(n){return n.isDroped?"103px":"-34px"})),B=j.a.div(T()),M=j.a.div(U());function H(n){var e=Object(a.useContext)(u).userInfo.data,t=n.avatar,r=n.id,i=n.username,d=Object(a.useState)(!1),l=Object(c.a)(d,2),p=l[0],h=l[1],j=Object(b.f)(),x=Object(a.useState)(!1),f=Object(c.a)(x,2),m=f[0],O=f[1],v=Object(a.useState)(""),w=Object(c.a)(v,2),k=w[0],y=w[1],F=Object(a.useState)([]),C=Object(c.a)(F,2),S=C[0],z=C[1];return Object(a.useEffect)((function(){k.length<3?z([]):g.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/search?username=".concat(k),{headers:{"User-Token":e.token}}).then((function(n){var e=[],t=[];n.data.users.forEach((function(n){n.id===r||(n.isFollowingLoggedUser?e.push(n):t.push(n))})),z([].concat(e,t))}))}),[k]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(N,{children:[Object(o.jsx)("h1",{children:Object(o.jsx)(s.b,{to:"/timeline",children:"linkr"})}),Object(o.jsxs)(B,{children:[Object(o.jsx)(E.DebounceInput,{placeholder:m?"":"Search for people and friends",onFocus:function(){return O(!0)},onBlur:function(){return O(!1),void setTimeout((function(){return z([])}),300)},minLength:3,debounceTimeout:300,onChange:function(n){return y(n.target.value)}}),m?"":Object(o.jsx)(P.e,{}),Object(o.jsx)(M,{children:S.length?S.map((function(n,e){return n.isFollowingLoggedUser?Object(o.jsxs)(s.b,{to:{pathname:"/UserPosts:".concat(n.id),state:{id:n.id,username:n.username}},children:[Object(o.jsx)("img",{src:n.avatar}),Object(o.jsxs)("p",{children:[n.username," ",Object(o.jsx)("span",{children:"\u2022 following"})]})]},n.id):Object(o.jsxs)(s.b,{to:{pathname:"/UserPosts:".concat(n.id),state:{id:n.id,username:n.username}},children:[Object(o.jsx)("img",{src:n.avatar}),Object(o.jsx)("p",{children:n.username})]},e)})):""})]}),Object(o.jsxs)("div",{onClick:function(){return h(!p),void z([])},className:"show-menu",children:[p?Object(o.jsx)(I.b,{}):Object(o.jsx)(I.a,{}),Object(o.jsx)("img",{src:t})]})]}),Object(o.jsxs)(R,{isDroped:p,children:[Object(o.jsx)(s.b,{to:{pathname:"/UserPosts:my-posts",state:{id:r,username:i}},children:"My posts"}),Object(o.jsx)(s.b,{to:{pathname:"/my-likes",state:{id:r}},children:"My likes"}),Object(o.jsx)("button",{onClick:function(){j.push("/"),localStorage.clear()},children:"Logout"})]})]})}function A(){var n=Object(h.a)([" \n    background: #171717;\n    position: fixed;\n    right: 170px;\n    top: 217px;\n    border-radius: 20px;\n    color: white;\n    font-weight: 700;\n    width: 20%;\n    padding: 15px 20px;\n    display:flex;\n    flex-direction:column;\n    overflow: hidden;\n    align-items:center;\n\n    h1 {\n        font-size:27px;  \n        margin-bottom:12px;\n        width:100%;     \n    }\n\n    div {\n        width:calc(100% + 40px);\n        height:1px;\n        background:#484848;\n    }\n\n    ul {\n        margin-top: 15px;\n        width:100%;\n    }\n\n    li {\n        margin-bottom:10px;\n        font-size:19px;\n        font-family: 'Lato' , sans-serif;\n    }\n\n    li::before {\n        content: \"#\";\n    }\n\n    a {\n        color:inherit;\n    }\n\n    @media (max-width: 600px) {\n        display: none;\n    }\n"]);return A=function(){return n},n}function _(){var n=Object(h.a)(["\n    background: #FFF;\n    display:flex;\n    padding: 10px 20px;\n    border-radius: 13px; \n    width: 46vw;\n    margin-bottom:20px;\n\n    h1 {\n        color:#707070;\n        font-weight:300;\n        font-size:20px;\n        margin-bottom:10px;\n    }\n\n    img {\n        width:53px;\n        height:53px;\n        border-radius:50%;\n        margin-right: 15px;\n    }\n\n    input {\n        background: #EFEFEF;\n        font-size:15px;\n        font-family:inherit;\n        font-weight:300;\n        outline:none;\n        border: none;\n        width:100%;\n        margin-bottom:5px;\n        padding: 5px;\n        border-radius: 4px;\n\n    }\n\n    textarea {\n        outline:none;\n        border:none;\n        background: #EFEFEF;\n        width:100%;\n        resize: none;\n        padding: 5px;\n        border-radius: 4px;\n        font-family:inherit;\n        font-size:15px;        \n        font-weight:300;\n    }\n\n    & > div {\n        width:100%;\n    }\n\n    div div {\n        display:flex;\n        justify-content: space-between;\n    }\n\n    div div span {\n        display: flex;\n\n        svg, p {\n            margin-top: 8px;\n            color: #eb4034;\n            cursor: pointer;\n        }\n\n        .activated {\n            color: #25cc35;\n        }\n\n        svg:hover, p:hover {\n            color: #db3b56;\n\n            &.activated {\n                color: #6fe886;\n            }\n        }\n    }\n\n    button {\n        font-family: inherit;\n        font-size: 14px;\n        font-weight: 700;\n        border: none;\n        padding: 5px 20px;\n        background: #1877F2;\n        color: white;\n        border-radius: 5px;\n        margin-top: 5px;\n        outline: none;\n        cursor: pointer;\n    }\n\n    button:hover {\n        background-color: #567bcc;\n    }\n\n        @media(max-width: 600px) {\n            width: 100vw;\n            border-radius: 2px;\n            margin-bottom: 0px;\n        }\n    }\n"]);return _=function(){return n},n}function q(){var n=Object(h.a)(["\n    padding-top: 100px;\n    padding-left: 17vw;\n    display: flex;\n    font-family: 'Lato',sans-serif;\n    flex-direction: column;\n    align-items: flex-start;\n\n    & > span {\n        color: #FFF;\n        font-weight: bold;\n        font-size: 43px;\n        font-family: 'Oswald' , sans-serif;\n        margin-bottom: 25px;\n        padding: 30px 0 20px 0;\n        width: 86%;\n        display: flex;\n        justify-content: space-between;\n\n        button {\n            border: none;\n            color: #FFF;\n            border-radius: 3px;\n            height: 30px;\n            width: 100px;\n            outline-style: none;\n            font-size: 14px;\n            background-color: #1877F2;\n            margin-top: 20px;\n\n            &.unfollow {\n                background-color: #FFF;\n                color: #1877F2;\n            }\n        }\n\n        button:hover {\n            background-color: #5db0cf;\n\n            &.unfollow {\n                background-color: #d4d6d9;\n            }\n        }\n    }\n\n    @media(max-width: 600px) {\n        padding-top: 100px;\n        padding-left: 0;\n\n        & > span {\n            width: 100vw;\n            margin: 10px 5px;\n            font-size: 30px;\n            \n            button {\n                margin-right: 5px;\n                margin-top: 5px;\n            }\n        }\n    }\n"]);return q=function(){return n},n}var J=j.a.main(q()),W=j.a.article(_()),K=j.a.aside(A());function V(n,e,t){if(n)return t([]),void e(!n);e(!n),navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){var e=n.coords.latitude,o=n.coords.longitude;t({latitude:e,longitude:o})}),G):alert("Geolocaliza\xe7\xe3o n\xe3o \xe9 suportada nesse browser.")}function G(n){switch(n.code){case n.PERMISSION_DENIED:alert("Usu\xe1rio rejeitou a solicita\xe7\xe3o de Geolocaliza\xe7\xe3o");break;case n.POSITION_UNAVAILABLE:alert("Localiza\xe7\xe3o indispon\xedvel");break;case n.TIMEOUT:alert("O tempo da requisi\xe7\xe3o expirou");break;case n.UNKNOWN_ERROR:alert("Ocorreu um erro desconhecido")}}function X(n){var e=n.userData,t=e.token,r=e.user,i=Object(a.useContext)(d),s=i.refresh,u=i.setRefresh,l=Object(a.useState)(""),p=Object(c.a)(l,2),b=p[0],h=p[1],j=Object(a.useState)(""),x=Object(c.a)(j,2),f=x[0],m=x[1],O=Object(a.useState)(!1),v=Object(c.a)(O,2),w=v[0],k=v[1],y=Object(a.useState)("Publicar"),F=Object(c.a)(y,2),C=F[0],S=F[1],z=Object(a.useState)(!1),I=Object(c.a)(z,2),E=I[0],U=I[1],T=Object(a.useState)({}),D=Object(c.a)(T,2),L=D[0],N=D[1];return Object(o.jsxs)(W,{children:[Object(o.jsx)("img",{src:r.avatar}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"O que voc\xea tem para favoritar hoje?"}),Object(o.jsx)("input",{placeholder:"http://...",onChange:function(n){return h(n.target.value)},value:b}),Object(o.jsx)("textarea",{rows:"5",placeholder:"Comente sobre o link !",onChange:function(n){return m(n.target.value)},value:f}),Object(o.jsxs)("div",{children:[E?Object(o.jsxs)("span",{onClick:function(){return V(E,U,N)},children:[Object(o.jsx)(P.d,{className:"activated"}),Object(o.jsx)("p",{className:"activated",children:"Localiza\xe7\xe3o ativada"})]}):Object(o.jsxs)("span",{onClick:function(){return V(E,U,N)},children:[Object(o.jsx)(P.d,{}),Object(o.jsx)("p",{children:"Localiza\xe7\xe3o desativada"})]}),Object(o.jsx)("button",{onClick:function(){if(!w)if(""!==b){k(!0),S("Publicando...");var n=g.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts",{link:b,text:f,geolocation:L},{headers:{"User-Token":t}});n.then((function(){k(!1),S("Publicar"),h(""),m(""),u(!s)})),n.catch((function(){alert("Houve um erro ao publicar o seu link"),k(!1),S("Publicar")}))}else alert("Preencha o link, por favor")},children:C})]})]})]})}function Z(){var n=Object(h.a)(["\n    width: 100%;\n    margin-bottom: 8px;\n\n    span, input {\n        margin: 10px 3px;\n        font-size: 18px;\n        font-weight: 700;\n    }\n    \n    input {\n        width: 87%;\n        outline: none;\n        border: none;\n        border-radius: 4px;\n        background: #FFF;\n        color: #171717;\n        padding: 5px 5px;\n    }\n    \n"]);return Z=function(){return n},n}function Q(n){var e=n.userData.token,t=Object(a.useContext)(d),r=t.refresh,i=t.setRefresh,u=Object(a.useState)([]),l=Object(c.a)(u,2),p=l[0],h=l[1],j=Object(a.useState)(""),x=Object(c.a)(j,2),f=x[0],m=x[1],O=Object(b.f)();return Object(a.useEffect)((function(){var n=g.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending",{headers:{"User-Token":e}});n.then((function(n){return h(n.data.hashtags)})),n.catch((function(){return window.location="http://localhost:9000"}))}),[]),Object(o.jsxs)(K,{children:[Object(o.jsx)("h1",{children:"trending"}),Object(o.jsxs)(Y,{onSubmit:function(n){n.preventDefault(),""===f?alert("Preencha o campo com um assunto"):(O.push({pathname:"/HashtagPage:".concat(f),state:f}),i(!r))},children:[Object(o.jsx)("span",{children:"#"}),Object(o.jsx)("input",{type:"search",placeholder:"Assunto",onChange:function(n){return m(n.target.value)},value:f})]}),Object(o.jsx)("div",{}),Object(o.jsx)("ul",{children:p.map((function(n){return Object(o.jsx)("li",{onClick:function(){i(!r)},children:Object(o.jsx)(s.b,{to:{pathname:"/HashtagPage:".concat(n.name),state:n.name},children:n.name})},n.id)}))})]})}var Y=j.a.form(Z()),$=t(53),nn=t.n($),en=t(21);var tn=t(54),on=t(56),an=t(55),rn=t.n(an);function cn(){var n=Object(h.a)(["\n    width: 38vw;\n    height: 250px;\n    margin-top: 10px;\n    border: 2px solid #C4C4C4;\n    border-radius: 11px;\n\n    @media(max-width: 600px) {\n        height: 15vh;\n        width: 70vw;\n    }\n"]);return cn=function(){return n},n}function sn(){var n=Object(h.a)(["\n    margin-top: 10px;\n    display: flex;\n    border: 2px solid #C4C4C4;\n    border-radius: 11px;\n    overflow: hidden;\n    height: 155px;\n    cursor: pointer;\n\n    img {\n        height: 100%;\n        max-width: 462px;\n    }\n\n    h4, p {\n        padding: 10px;\n        word-break: break-word;\n        color: #B7B7B7;\n    }\n\n    p { \n        font-size:11px;\n    }\n\n    @media(max-width: 600px) {\n        height: 15vh;\n    }\n"]);return sn=function(){return n},n}function un(){var n=Object(h.a)(["\n    width:53px;\n    height:53px;\n    border-radius:50%;\n    margin-right: 15px;\n    cursor: pointer;\n"]);return un=function(){return n},n}function dn(){var n=Object(h.a)(["\n    background: #151515;\n    display:flex;\n    margin: 10px 0vw;\n    padding: 10px 20px;\n    border-radius: 13px; \n    width: 46vw;\n    color: #FFF;\n    position: relative;\n    overflow-wrap: anywhere;\n\n    &>a {\n        width:53px;\n        height:53px;\n        border-radius:50%;\n        margin-right: 15px;\n        cursor: pointer;\n    }\n\n    div > div {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    div > div > span {\n        display: flex;\n    }\n\n    h3 {\n        color: #FFF;\n        font-weight:300;\n        font-size:20px;\n        margin-bottom:10px;\n    }\n    \n    textarea {\n        display: block;\n        color: #4C4C4C;\n        background: white;\n        outline: none;\n        border: none;\n        border-radius: 3px;\n        resize:none;\n        font-family:inherit;\n        font-size:16px;\n        width:95%;\n    }\n\n    p {\n        color: #B7B7B7;\n    }\n\n    span {\n        color: #FFF;\n        font-weight: bold;\n        cursor: pointer;\n    }\n\n    svg {\n        cursor: pointer;\n        font-size: 26px;\n        color: #FFF;\n\n        &.likes {\n            position: absolute;\n            top: 80px;\n            left: 32px;\n        }\n\n        &.redColored {\n            color: #f0293d;\n        }\n\n        &.redColored:hover {\n            color: #db3b56;\n        }\n\n        &.edit {\n            color: #fce63a;\n            margin-right: 7px;\n        }\n\n        &.edit:hover {\n            color: #e8dd68;\n        }\n\n        &.locationPin {\n            font-size: 20px;\n            margin-left: 10px;\n            margin-top: 1px;\n        }\n    }\n\n    strong {\n        position: absolute;\n        top: 115px;\n        left: 25px;\n    }\n\n    @media(max-width: 600px) {\n        width: 100vw;\n        border-radius: 2px;\n        margin: 30px 0vw;\n    }\n"]);return dn=function(){return n},n}var ln=j.a.div(dn()),pn=j.a.img(un()),bn=j.a.a(sn()),hn=j.a.iframe(cn()),jn=t(26);function xn(n,e,t){var o;if(n)switch(t.length){case 0:o="no likes yet";break;case 1:o="you liked the post";break;case 2:o="you and \n                ".concat(e===t[0]["user.username"]||e===t[0].username?t[1]["user.username"]||t[1].username:t[0]["user.username"]||t[0].username," \n                    liked the post");break;default:o="you, \n                ".concat(e===t[0]["user.username"]||e===t[0].username?t[1]["user.username"]||t[1].username:t[0]["user.username"]||t[0].username," \n                    , and ").concat(t.length-2," others liked the post")}else switch(t.length){case 0:o="no likes yet";break;case 1:o="".concat(t[0]["user.username"]||t[0].username," liked the post");break;case 2:o="".concat(t[0]["user.username"]||t[0].username," and ").concat(t[1]["user.username"]||e===t[0].username," liked the post");break;default:o="".concat(t[0]["user.username"]||t[0].username,", ").concat(t[1]["user.username"]||t[0].username," , and ").concat(t.length-2," others liked the post")}return o}function fn(n){var e=Object(a.useContext)(u).userInfo,t=Object(a.useContext)(d),r=t.refresh,i=t.setRefresh,s=e.data,l=s.user,p=l.id,b=l.username,h=Object(a.useState)(0),j=Object(c.a)(h,2),x=j[0],f=j[1],m=Object(a.useState)(!1),O=Object(c.a)(m,2),v=O[0],w=O[1],k=n.postId,y=n.postUsername,F=n.userId,C=n.postLikes,S={id:F,username:y};function z(n){var e;"like"===n?(e=g.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/".concat(k,"/like"),S,{headers:{"User-Token":s.token}}),f(x+1)):(e=g.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/".concat(k,"/dislike"),S,{headers:{"User-Token":s.token}}),f(x-1)),e.then((function(){return i(!r)})),w(!v)}return Object(a.useEffect)((function(){C.forEach((function(n){p!==n.userId&&p!==n.id||w(!0)}))}),[]),Object(o.jsx)(o.Fragment,{children:v?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(P.b,{onClick:function(){return z("dislike")},className:"redColored likes","data-tip":xn(v,b,C),onMouseOver:function(){jn.a.show()}}),Object(o.jsx)(jn.a,{}),Object(o.jsxs)("strong",{children:[C.length+x," likes"]})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(P.c,{onClick:function(){return z("like")},className:"likes","data-tip":xn(v,b,C),onMouseOver:function(){jn.a.show()}}),Object(o.jsx)(jn.a,{}),Object(o.jsxs)("strong",{children:[C.length+x," likes"]})]})})}function mn(n){var e=n.postText,t=n.setEdit,r=n.postId,i=n.setPostText,s=Object(a.useContext)(u).userInfo,l=Object(a.useContext)(d),p=l.refresh,b=l.setRefresh,h=s.data,j=Object(a.useState)(e),x=Object(c.a)(j,2),f=x[0],m=x[1],O=Object(a.useState)(!1),v=Object(c.a)(O,2),w=v[0],k=v[1];return Object(o.jsx)("textarea",{value:f,onChange:function(n){return m(n.target.value)},autoFocus:!0,onFocus:function(n){return m(n.target.defaultValue+" ")},onKeyDown:function(n){return function(n){if(!w&&(27===n.keyCode&&t(!1),13===n.keyCode)){n.preventDefault();var e=g.a.put("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/".concat(r),{text:f.trim()},{headers:{"User-Token":h.token}});k(!0),e.then((function(){k(!1),t(!1),i(f.trim()),b(!p)})),e.catch((function(){k(!1),alert("N\xe3o foi poss\xedvel salvar as altera\xe7\xf5es")}))}}(n)},disabled:w})}var On=t(19),gn=t.n(On);function vn(){var n=Object(h.a)(["\n    display: flex;\n    justify-content: space-between;\n\n    svg {\n        font-size: 40px;\n    }\n"]);return vn=function(){return n},n}function wn(){var n=Object(h.a)(["\n    width: 20%;\n    margin: -20px 40%;\n\n    @media (max-width: 600px) {\n        width: 60vw;\n    }\n"]);return wn=function(){return n},n}function kn(){var n=Object(h.a)(["\n    width: 35vw;\n    height: 220px;\n    background-color: #333333;\n    color: #FFF;\n    text-align: center;\n\n    h4 {\n        font-size: 40px;\n        font-weight: bold;\n        padding: 30px 20px;\n    }\n\n    button {\n        border: none;\n        border-radius: 3px;\n        padding: 10px 5px;\n        outline-style: none;\n        font-size: 16px;\n        font-weight: bold;\n        width: 20%;\n        margin-right: 20px;\n        margin-top: 10px;\n        background-color: #FFF;\n        color: #3091b8;\n\n        &.delete {\n            color: #FFF;\n            background-color: #3091b8;\n        }\n    }\n\n    button:hover {\n        background-color: #d4d6d9;\n\n        &.delete{\n            background-color: #5db0cf;\n        }\n    }\n\n    @media(max-width: 600px) {\n        width: 90vw;\n        height: 38vh;\n        \n         button {\n             width: 30%;\n         }\n    }\n"]);return kn=function(){return n},n}var yn={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#333333",borderRadius:"50px",fontSize:"40px",fontWeight:"bold",padding:"30px 20px",color:"#FFF"}},Fn=j.a.div(kn()),Cn=j.a.img(wn()),Sn=j.a.div(vn());var zn=function(){var n={width:"713px",height:"240px",marginTop:"20px"};return matchMedia("(max-width: 600px)").matches&&(n={width:"88vw",height:"240px",marginTop:"20px",marginLeft:"2vw"}),n}();function In(n){n(!0)}function Pn(n){n(!1)}function En(n){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),r=t[0],i=t[1],s=n.postId,l=n.posts,p=n.setPosts,b=Object(a.useState)(!1),h=Object(c.a)(b,2),j=h[0],x=h[1],f=Object(a.useContext)(u).userInfo,m=Object(a.useContext)(d),O=m.refresh,v=m.setRefresh,w=f.data;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(P.f,{onClick:function(){return In(i)},className:"redColored"}),Object(o.jsx)(gn.a,{isOpen:r,onRequestClose:function(){return Pn(i)},style:yn,contentLabel:"deletion confirmation",children:Object(o.jsxs)(Fn,{children:[Object(o.jsx)("h4",{children:"Tem certeza que deseja excluir essa publica\xe7\xe3o?"}),j?Object(o.jsx)(Cn,{src:"https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif"}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){return Pn(i)},children:"Cancelar"}),Object(o.jsx)("button",{onClick:function(){return function(){x(!0);var n=g.a.delete("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/".concat(s),{headers:{"User-Token":w.token}});n.then((function(){i(!1),x(!1);var n=l.filter((function(n){return n.id!==s}));p(Object(en.a)(n)),v(!O)})),n.catch((function(){i(!1),alert("Houve um erro ao excluir o post"),x(!1)}))}()},className:"delete",children:"Excluir"})]})]})})]})}gn.a.setAppElement(document.getElementById("root"));var Un=t(28);function Tn(n){var e,t,r=n.username,i=Object(a.useState)(!1),s=Object(c.a)(i,2),u=s[0],d=s[1];if(void 0===n.geolocation)return null;e=n.geolocation.latitude,t=n.geolocation.longitude;var l={lat:parseFloat(e),lng:parseFloat(t)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(P.d,{className:"locationPin",onClick:function(){return In(d)}}),Object(o.jsx)(gn.a,{isOpen:u,onRequestClose:function(){return Pn(d)},style:yn,contentLabel:"deletion confirmation",children:Object(o.jsxs)(Un.b,{googleMapsApiKey:"AIzaSyBSoB3AWnM-XD-CnWeZm4w5nvP53H9SHxU",children:[Object(o.jsxs)(Sn,{children:[Object(o.jsxs)("h4",{children:[r,"'s location"]}),Object(o.jsx)(P.a,{onClick:function(){return d(!1)}})]}),Object(o.jsx)(Un.a,{mapContainerStyle:zn,center:l,zoom:14,children:Object(o.jsx)(Un.c,{draggable:!0,position:l})})]})})]})}function Dn(n){var e=Object(a.useContext)(u).userInfo.data.user.id,t=n.imgSrc,r=n.link,i=n.linkDescription,d=n.linkTitle,l=n.text,p=n.user,h=n.postId,j=n.postLikes,x=n.geolocation,f=n.posts,m=n.setPosts,O=p.id,g=p.username,v=p.avatar,w=Object(a.useState)(l),k=Object(c.a)(w,2),y=k[0],F=k[1],C=Object(a.useState)(!1),S=Object(c.a)(C,2),z=S[0],I=S[1],P=Object(b.f)();return Object(o.jsxs)(ln,{children:[Object(o.jsx)(s.b,{to:{pathname:"/UserPosts:".concat(O),state:{id:O,username:g}},children:Object(o.jsx)(pn,{src:v})}),Object(o.jsx)(fn,{postId:h,username:g,userId:O,postLikes:j}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{children:[Object(o.jsx)(s.b,{to:{pathname:"/UserPosts:".concat(O),state:{id:O,username:g}},children:Object(o.jsx)("h3",{children:g})}),Object(o.jsx)(Tn,{geolocation:x,username:g})]}),Object(o.jsx)("div",{children:e===O?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(on.a,{onClick:function(){return I(!z)},className:"edit"}),Object(o.jsx)(En,{postId:h,posts:f,setPosts:m})]}):""})]}),z?Object(o.jsx)(mn,{postText:y,setEdit:I,postId:h,setPostText:F}):Object(o.jsx)("p",{children:Object(o.jsx)(tn.a,{onHashtagClick:function(n){return function(n){n=n.slice(1),P.push("/HashtagPage:".concat(n),n)}(n)},children:y})}),r.includes("https://www.youtube.com/")?Object(o.jsx)(hn,{title:d,frameBorder:"0",allowFullScreen:!0,src:"https://www.youtube.com/embed/".concat(rn()(r))}):Object(o.jsxs)(bn,{href:r,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:d}),Object(o.jsx)("p",{children:i}),Object(o.jsx)("p",{children:r})]}),Object(o.jsx)("img",{src:t})]})]})]})}function Ln(){var n=Object(h.a)(["\n    width: 15vw;\n    margin: 0 20vw;\n\n    @media (max-width: 600px) {\n        width: 60vw;\n    }\n"]);return Ln=function(){return n},n}function Nn(){var n=Object(h.a)(["\n    text-align: center;\n    font-size: 56px;\n    color: #FFF;\n    width: 60%;\n"]);return Nn=function(){return n},n}gn.a.setAppElement(document.getElementById("root"));var Rn=j.a.h4(Nn()),Bn=j.a.img(Ln());function Mn(n){var e=Object(a.useContext)(d),t=e.refresh,r=e.setRefresh,i=n.userData,s=n.id,u=n.hashtag,l=n.liked,p=n.timeline,b=Object(a.useState)([]),h=Object(c.a)(b,2),j=h[0],x=h[1],f=Object(a.useState)(!0),m=Object(c.a)(f,2),O=m[0],v=m[1],w=Object(a.useState)(!1),k=Object(c.a)(w,2),y=k[0],F=k[1],C=[],S=Object(a.useState)(0),z=Object(c.a)(S,2),I=z[0],P=z[1],E=Object(a.useState)(!1),U=Object(c.a)(E,2),T=U[0],D=U[1],L=Object(a.useState)("Houve uma falha ao obter os posts, por favor atualize a p\xe1gina"),N=Object(c.a)(L,2),R=N[0],B=N[1],M=Object(a.useState)(1),H=Object(c.a)(M,2),A=H[0],_=H[1];return Object(a.useEffect)((function(){var n=function(n,e,t,o,a,r,i){var c;return null===n?((c=g.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows",{headers:{"User-Token":o.token}})).then((function(n){0===n.data.users.length&&(i("Voc\xea n\xe3o segue ningu\xe9m ainda, procure por perfis na busca"),r(!0))})),c=g.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/following/posts?offset=".concat(a,"&limit=11"),{headers:{"User-Token":o.token}})):c=n&&e?g.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked",{headers:{"User-Token":o.token}}):t?g.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/".concat(t,"/posts?offset=").concat(a,"&limit=11"),{headers:{"User-Token":o.token}}):g.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/".concat(n,"/posts?offset=").concat(a,"&limit=11"),{headers:{"User-Token":o.token}}),c}(s,l,u,i,I,F,B);if(n.then((function(n){v(!1),function(n,e,t,o){var a=[],r={id:null};n.data.posts.forEach((function(n,e){e<10?a.push(n):r=n})),a=a.filter((function(n){return!t.find((function(e){if(e.id===n.id)return!0}))}));for(var i=[].concat(Object(en.a)(a),Object(en.a)(t)),c=0;c<i.length;c++)for(var s=c;s<i.length;s++)if(i[c].id<i[s].id){var u=i[c];i[c]=i[s],i[s]=u}e(Object(en.a)(i)),null!==r.id&&o(!0)}(n,x,j,D)})),n.catch((function(){return F(!0)})),p){var e=setInterval((function(){return _(A+1)}),15e3);return function(){return clearInterval(e)}}}),[t,A]),function(n,e,t){0!==n.length&&n.map((function(a){t.push(Object(o.jsx)(Dn,{imgSrc:a.linkImage,link:a.link,linkDescription:a.linkDescription,linkTitle:a.linkTitle,text:a.text,user:a.user,postId:a.id,postLikes:a.likes,geolocation:a.geolocation,posts:n,setPosts:e},a.id))}))}(j,x,C),Object(o.jsx)(o.Fragment,{children:O?Object(o.jsx)(Bn,{src:"https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif"}):y?Object(o.jsxs)(Rn,{children:[" ",R," "]}):0===j.length?Object(o.jsx)(Rn,{children:"Nenhum post encontrado"}):Object(o.jsx)(nn.a,{loadMore:function(){j.length<10||(D(!1),P(I+10),r(!t))},hasMore:T,loader:Object(o.jsx)(Bn,{src:"https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif"},0),children:C})})}function Hn(){var n=Object(a.useContext)(u).userInfo.data;void 0===n&&(window.location="http://localhost:9000");var e=n.user,t=e.avatar,r=e.id;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(H,{avatar:t,id:r}),Object(o.jsxs)(J,{children:[Object(o.jsx)("span",{children:Object(o.jsx)("h1",{children:"timeline"})}),Object(o.jsx)(X,{userData:n}),Object(o.jsx)(Q,{userData:n}),Object(o.jsx)(Mn,{userData:n,id:null,timeline:!0})]})]})}function An(n,e,t,o,a,r){var i;n||((i=a?g.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/".concat(t,"/unfollow"),t,{headers:{"User-Token":o.token}}):g.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/".concat(t,"/follow"),t,{headers:{"User-Token":o.token}})).then((function(){r(!a),e(!1)})),i.catch((function(){alert("N\xe3o foi poss\xedvel realizar a opera\xe7\xe3o"),e(!1)})))}function _n(){var n=Object(a.useContext)(u).userInfo.data,e=Object(b.g)().state,t=e.id,r=e.username,i=Object(a.useState)(!1),s=Object(c.a)(i,2),d=s[0],l=s[1],p=Object(a.useState)(!1),h=Object(c.a)(p,2),j=h[0],x=h[1],f=n.user.id,m=n.user.avatar;return void 0===n&&(window.location="http://localhost:9000"),Object(a.useEffect)((function(){g.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/follows",{headers:{"User-Token":n.token}}).then((function(n){n.data.users.forEach((function(n){n.id===t&&l(!0)}))}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(H,{avatar:m,id:f}),Object(o.jsxs)(J,{children:[t===f?Object(o.jsx)("span",{children:Object(o.jsx)("h1",{children:"My posts"})}):Object(o.jsxs)("span",{children:[Object(o.jsxs)("h1",{children:[r,"'s posts"]}),d?Object(o.jsx)("button",{onClick:function(){return An(j,x,t,n,d,l)},className:"unfollow",disabled:j,children:"unfollow"}):Object(o.jsx)("button",{onClick:function(){return An(j,x,t,n,d,l)},disabled:j,children:"follow"})]}),Object(o.jsx)(Q,{userData:n}),Object(o.jsx)(Mn,{userData:n,id:t})]})]})}function qn(){var n=Object(a.useContext)(u).userInfo.data,e=Object(b.g)().state;void 0===n&&(window.location="http://localhost:9000");var t=n.user,r=t.avatar,i=t.id;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(H,{avatar:r,id:i}),Object(o.jsxs)(J,{children:[Object(o.jsx)("span",{children:Object(o.jsxs)("h1",{children:["# ",e]})}),Object(o.jsx)(Q,{userData:n}),Object(o.jsx)(Mn,{userData:n,hashtag:e,id:i})]})]})}function Jn(){var n=Object(a.useContext)(u).userInfo.data,e=Object(b.g)().state.id;void 0===n&&(window.location="http://localhost:9000");var t=n.user.id,r=n.user.avatar;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(H,{avatar:r,id:t}),Object(o.jsxs)(J,{children:[Object(o.jsx)("span",{children:Object(o.jsx)("h1",{children:"My Likes"})}),Object(o.jsx)(Q,{userData:n}),Object(o.jsx)(Mn,{userData:n,id:e,liked:!0})]})]})}var Wn=Object(b.h)((function(n){var e=n.location;return Object(o.jsx)(f,{children:Object(o.jsx)(l.a,{className:"transition-group",children:Object(o.jsx)(p.a,{timeout:{enter:300,exit:300},classNames:"fade",unmountOnExit:!0,children:Object(o.jsx)("section",{className:"route-section",children:Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/Signup",component:z}),Object(o.jsx)(b.a,{path:"/Timeline",component:Hn}),Object(o.jsx)(b.a,{path:"/User:id",component:_n}),Object(o.jsx)(b.a,{path:"/HashtagPage:hashtag",component:qn}),Object(o.jsx)(b.a,{path:"/my-likes",component:Jn}),Object(o.jsx)(b.a,{path:"/",component:S})]})})},e.key)})})}));function Kn(){var n=void 0!==localStorage.data?JSON.parse(localStorage.data):{},e=Object(a.useState)(n),t=Object(c.a)(e,2),r=t[0],i=t[1],l=Object(a.useState)(!1),p=Object(c.a)(l,2),b=p[0],h=p[1];return Object(o.jsx)(u.Provider,{value:{userInfo:r,setUserInfo:i},children:Object(o.jsx)(d.Provider,{value:{refresh:b,setRefresh:h},children:Object(o.jsx)(s.a,{children:Object(o.jsx)(Wn,{})})})})}var Vn=document.querySelector("#root");i.a.render(Object(o.jsx)(Kn,{}),Vn)}},[[96,1,2]]]);
//# sourceMappingURL=main.1ca22122.chunk.js.map