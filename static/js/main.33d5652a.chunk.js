(this["webpackJsonpProjetao-2-Linker"]=this["webpackJsonpProjetao-2-Linker"]||[]).push([[0],{75:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t(2),i=t(16),o=t.n(i),s=t(4),c=t(9),u=Object(r.createContext)(),d=t(79),p=t(78),l=t(8),h=t(6),j=t(7);function b(){var n=Object(h.a)(["\n    .fade-enter {\n        opacity: 0.01;\n    }\n\n    .fade-enter.fade-enter-active {\n        opacity: 1;\n        transition: opacity 300ms ease-in;\n    }\n\n    .fade-exit {\n        opacity: 1;\n    }\n\n    .fade-exit.fade-exit-active {\n        opacity: 0.01;\n        transition: opacity 10ms ease-in;\n    }\n\n    div.transition-group {\n        position: relative;\n    }\n\n    section.route-section {\n        position: absolute;\n        width: 100%;\n        top: 0;\n        left: 0;\n    }\n"]);return b=function(){return n},n}var x=j.a.div(b()),f=t(18),m=t(11),O=t.n(m);function g(){var n=Object(h.a)(["\n    width: 35vw;\n    height: 100vh;\n    padding: 32vh 5%;\n    text-align: center;\n\n    input, button {\n        width: 90%;\n        border: none;\n        border-radius: 3px;\n        padding: 13px 5px;\n        outline-style: none;\n        margin: 5px 0;\n        font-size: 16px;\n        font-weight: bold;\n    }\n\n    button {\n        background-color: #1877F2;\n        color: #FFF;\n        margin-bottom: 20px;\n    }\n\n    a {\n        text-decoration: underline;\n        color: #FFF;\n        font-size: 14px;\n        display: block;\n    }\n\n    @media (max-width: 600px) {\n        height: 65vw;\n        padding: 10vw 5vw;\n        width: 100vw;\n\n        input, button {\n\n        }\n    }\n"]);return g=function(){return n},n}function v(){var n=Object(h.a)(["\n    padding: 30vh 8vw;\n    width: 75vw;\n    height: 100vh;\n    color: #FFF;\n    background-color: #151515;\n    font-weight: bold;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\n\n    h1 {\n        font-family: 'Passion One', cursive;\n        font-size: 106px;\n    }\n\n    h2 {\n        font-size: 43px;\n    }\n\n    @media (max-width: 600px) {\n        padding: 5vw;\n        width: 100vw;\n        height: 35vh;\n        text-align: center;\n\n        h1 {\n            font-size: 24vw;\n        }\n\n        h2 {\n            font-size: 10vw;\n        }\n    }\n"]);return v=function(){return n},n}function k(){var n=Object(h.a)(["\n    display: flex;\n\n    @media (max-width: 600px) {\n        display: block;\n    }\n"]);return k=function(){return n},n}var w=j.a.div(k()),y=j.a.div(v()),F=j.a.form(g());function C(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(""),d=Object(s.a)(o,2),p=d[0],h=d[1],j=Object(r.useState)(!1),b=Object(s.a)(j,2),x=b[0],m=b[1],g=Object(r.useContext)(u),v=g.userInfo,k=g.setUserInfo,C=Object(l.f)();return Object(a.jsxs)(w,{children:[Object(a.jsxs)(y,{children:[Object(a.jsx)("h1",{children:"Linkr"}),Object(a.jsx)("h2",{children:"save, share and discover the best links on the web"})]}),Object(a.jsxs)(F,{onSubmit:function(n){if(n.preventDefault(),!x)if(""!==t&&""!==p){m(!0);var e=O.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_in",{email:t,password:p});e.then((function(n){var e=n.data;k(Object(f.a)(Object(f.a)({},v),{},{data:e})),C.push("/Timeline")})),e.catch((function(){alert("E-mail ou senha incorretos"),m(!1)}))}else alert("Por favor, preencha todos os campos")},children:[Object(a.jsx)("input",{type:"email",onChange:function(n){return i(n.target.value)},value:t,placeholder:"e-mail"}),Object(a.jsx)("input",{type:"password",onChange:function(n){return h(n.target.value)},value:p,placeholder:"password"}),Object(a.jsx)("button",{type:"submit",children:"Log In"}),Object(a.jsx)(c.b,{to:"/SignUp",children:"First time? Create an account!"})]})]})}function S(){var n=Object(r.useState)(""),e=Object(s.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(""),d=Object(s.a)(o,2),p=d[0],h=d[1],j=Object(r.useState)(""),b=Object(s.a)(j,2),x=b[0],m=b[1],g=Object(r.useState)(""),v=Object(s.a)(g,2),k=v[0],C=v[1],S=Object(r.useState)(!1),z=Object(s.a)(S,2),I=z[0],P=z[1],D=Object(r.useContext)(u),U=D.userInfo,L=D.setUserInfo,T=Object(l.f)();return Object(a.jsxs)(w,{children:[Object(a.jsxs)(y,{children:[Object(a.jsx)("h1",{children:"Linkr"}),Object(a.jsx)("h2",{children:"save, share and discover the best links on the web"})]}),Object(a.jsxs)(F,{onSubmit:function(n){if(n.preventDefault(),!I)if(""!==t&&""!==p&&""!==x&&""!==k){P(!0);var e=O.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_up",{email:t,password:p,username:x,pictureUrl:k});e.then((function(n){var e=n.data;L(Object(f.a)(Object(f.a)({},U),{},{data:e})),T.push("/Timeline")})),e.catch((function(){alert("E-mail inserido j\xe1 cadastrado"),P(!1)}))}else alert("Por favor, preencha todos os campos")},children:[Object(a.jsx)("input",{type:"email",onChange:function(n){return i(n.target.value)},value:t,placeholder:"e-mail"}),Object(a.jsx)("input",{type:"password",onChange:function(n){return h(n.target.value)},value:p,placeholder:"password"}),Object(a.jsx)("input",{type:"text",onChange:function(n){return m(n.target.value)},value:x,placeholder:"username"}),Object(a.jsx)("input",{type:"url",onChange:function(n){return C(n.target.value)},value:k,placeholder:"picture url"}),Object(a.jsx)("button",{type:"submit",children:"Log In"}),Object(a.jsx)(c.b,{to:"/Login",children:"Switch back to log in"})]})]})}var z=t(28);function I(){var n=Object(h.a)([" \n    background: #171717;\n    position: fixed;\n    right: 170px;\n    top: 217px;\n    border-radius: 20px;\n    color: white;\n    font-weight: 700;\n    width: 20%;\n    padding: 15px 20px;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n\n    h1 {\n        font-size:27px;  \n        margin-bottom:12px;\n        width:100%;     \n    }\n\n    div {\n        width:calc(100% + 40px);\n        height:1px;\n        background:#484848;\n    }\n\n    ul {\n        margin-top: 15px;\n        width:100%;\n    }\n\n    li {\n        margin-bottom:10px;\n        font-size:19px;\n        font-family: 'Lato' , sans-serif;\n    }\n\n    li::before {\n        content: \"#\";\n    }\n\n    a {\n        color:inherit;\n    }\n\n    @media (max-width: 600px) {\n        display: none;\n    }\n"]);return I=function(){return n},n}function P(){var n=Object(h.a)(["\n    background: #FFF;\n    display:flex;\n    padding: 10px 20px;\n    border-radius: 13px; \n    width: 46vw;\n    margin-bottom:20px;\n\n    h1 {\n        color:#707070;\n        font-weight:300;\n        font-size:20px;\n        margin-bottom:10px;\n    }\n\n    img {\n        width:53px;\n        height:53px;\n        border-radius:50%;\n        margin-right: 15px;\n    }\n\n    input {\n        background: #EFEFEF;\n        font-size:15px;\n        font-family:inherit;\n        font-weight:300;\n        outline:none;\n        border: none;\n        width:100%;\n        margin-bottom:5px;\n        padding: 5px;\n        border-radius: 4px;\n\n    }\n\n    textarea {\n        outline:none;\n        border:none;\n        background: #EFEFEF;\n        width:100%;\n        resize: none;\n        padding: 5px;\n        border-radius: 4px;\n        font-family:inherit;\n        font-size:15px;        \n        font-weight:300;\n    }\n\n    & > div {\n        width:100%;\n    }\n\n    div div {\n        display:flex;\n        justify-content:flex-end;\n    }\n\n    button {\n        font-family: inherit;\n        font-size: 14px;\n        font-weight: 700;\n        border: none;\n        padding: 5px 20px;\n        background: #1877F2;\n        color: white;\n        border-radius: 5px;\n        margin-top: 5px;\n        outline: none;\n        cursor: pointer;\n    }\n\n    @media(max-width: 600px) {\n        width: 100vw;\n        border-radius: 2px;\n        margin-bottom: 0px;\n    }\n"]);return P=function(){return n},n}function D(){var n=Object(h.a)(["\n    padding-top: 100px;\n    padding-left: 17vw;\n    display: flex;\n    font-family: 'Lato',sans-serif;\n    flex-direction: column;\n    align-items: flex-start;\n\n    & > span {\n        color:white;\n        font-weight:bold;\n        font-size:43px;\n        font-family: 'Oswald' , sans-serif;\n        margin-bottom:25px;\n        padding: 30px 0 20px 0;\n    }\n\n    @media(max-width: 600px) {\n        padding-top: 60px;\n        padding-left: 0;\n\n        & > span {\n            width: 100vw;\n            text-align: center;\n            margin-bottom: 10px;\n        }\n    }\n"]);return D=function(){return n},n}function U(){var n=Object(h.a)(["\n    position:fixed;\n    top:0;\n    width:100%;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    background:#151515;\n    padding:5px 20px;\n    z-index:1;\n\n    h1 {\n        font-family: 'Passion one', sans-serif;\n        font-weight:bold;\n        color:white;\n        font-size:49px;\n    }\n\n    a {\n        color: inherit;\n    }\n\n    & > div {\n        display: flex;\n        align-items: center;\n        cursor: pointer;\n    }\n\n    img {\n        width:53px;\n        height:53px;\n        border-radius:50%;\n        cursor: pointer;\n    }\n    \n    svg {\n        color: white;\n        margin-right: 5px;\n        cursor: pointer;\n        font-size: 25px;\n    }\n"]);return U=function(){return n},n}var L=j.a.header(U()),T=j.a.main(D()),E=j.a.article(P()),M=j.a.aside(I());function H(){var n=Object(h.a)(["\n    position: fixed;\n    font-family: 'Lato',sans-serif;\n    font-size:17px;\n    background: #171717;\n    right: 0;\n    top: ",";\n    transition: top .5s ease-in-out;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    padding: 17px;\n    color:white;\n    border-radius: 0px 0px 0px 20px;\n\n    a {\n        color:inherit;\n        display:block;\n    }\n\n    a:first-child { \n        margin-bottom: 5px;\n    }\n\n    button {\n        font-family: inherit;\n        font-size: inherit;\n        color: inherit;\n        background: none;\n        border: none;\n        padding: 0;\n        margin-top: 2px;\n        cursor: pointer;\n    }\n"]);return H=function(){return n},n}function B(n){var e=n.avatar,t=n.id,i=n.username,o=Object(r.useState)(!1),d=Object(s.a)(o,2),p=d[0],h=d[1],j=Object(r.useContext)(u).setUserInfo,b=Object(l.f)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(L,{children:[Object(a.jsx)("h1",{children:Object(a.jsx)(c.b,{to:"/timeline",children:"linkr"})}),Object(a.jsxs)("div",{onClick:function(){h(!p)},children:[p?Object(a.jsx)(z.b,{}):Object(a.jsx)(z.a,{}),Object(a.jsx)("img",{src:e})]})]}),Object(a.jsxs)(N,{isDroped:p,children:[Object(a.jsx)(c.b,{to:{pathname:"/UserPosts:my-posts",state:{id:t,username:i}},children:"My posts"}),Object(a.jsx)(c.b,{to:{pathname:"/my-likes",state:{id:t}},children:"My likes"}),Object(a.jsx)("button",{onClick:function(){j({}),b.push("/")},children:"Logout"})]})]})}var N=j.a.div(H(),(function(n){return n.isDroped?"63px":"-34px"}));function R(n){var e=n.userData,t=e.token,i=e.user,o=Object(r.useContext)(u),c=o.refresh,d=o.setRefresh,p=Object(r.useState)(""),l=Object(s.a)(p,2),h=l[0],j=l[1],b=Object(r.useState)(""),x=Object(s.a)(b,2),f=x[0],m=x[1],g=Object(r.useState)(!1),v=Object(s.a)(g,2),k=v[0],w=v[1],y=Object(r.useState)("Publicar"),F=Object(s.a)(y,2),C=F[0],S=F[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(E,{children:[Object(a.jsx)("img",{src:i.avatar}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"O que voc\xea tem para favoritar hoje?"}),Object(a.jsx)("input",{placeholder:"http://...",onChange:function(n){return j(n.target.value)},value:h}),Object(a.jsx)("textarea",{rows:"5",placeholder:"Comente sobre o link !",onChange:function(n){return m(n.target.value)},value:f}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){if(!k)if(""!==f&&""!==h){w(!0),S("Publicando...");var n=O.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts",{link:h,text:f},{headers:{"User-Token":t}});n.then((function(){w(!1),S("Publicar"),j(""),m(""),d(!c)})),n.catch((function(){alert("Houve um erro ao publicar o seu link"),w(!1),S("Publicar")}))}else alert("Preencha todos os campos, por favor")},children:C})})]})]})})}function _(){var n=Object(h.a)(["\n    width: 100%;\n    margin-bottom: 8px;\n\n    span, input {\n        margin: 10px 3px;\n        font-size: 18px;\n        font-weight: 700;\n    }\n    \n    input {\n        width: 87%;\n        outline: none;\n        border: none;\n        border-radius: 4px;\n        background: #FFF;\n        color: #171717;\n        padding: 5px 5px;\n    }\n    \n"]);return _=function(){return n},n}function q(n){var e=n.userData.token,t=Object(r.useContext)(u),i=t.refresh,o=t.setRefresh,d=Object(r.useState)([]),p=Object(s.a)(d,2),h=p[0],j=p[1],b=Object(r.useState)(""),x=Object(s.a)(b,2),f=x[0],m=x[1],g=Object(l.f)();return Object(r.useEffect)((function(){var n=O.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/trending",{headers:{"User-Token":e}});n.then((function(n){return j(n.data.hashtags)})),n.catch((function(){return window.location="http://localhost:9000"}))}),[]),Object(a.jsxs)(M,{children:[Object(a.jsx)("h1",{children:"trending"}),Object(a.jsxs)(J,{onSubmit:function(n){n.preventDefault(),""===f?alert("Preencha o campo com um assunto"):(g.push({pathname:"/HashtagPage:".concat(f),state:f}),o(!i))},children:[Object(a.jsx)("span",{children:"#"}),Object(a.jsx)("input",{type:"search",placeholder:"Assunto",onChange:function(n){return m(n.target.value)},value:f})]}),Object(a.jsx)("div",{}),Object(a.jsx)("ul",{children:h.map((function(n){return Object(a.jsx)("li",{onClick:function(){o(!i)},children:Object(a.jsx)(c.b,{to:{pathname:"/HashtagPage:".concat(n.name),state:n.name},children:n.name})},n.id)}))})]})}var J=j.a.form(_()),A=t(45),G=t(43),K=t.n(G),Q=t(44);function V(){var n=Object(h.a)(["\n    margin-top: 10px;\n    display: flex;\n    border: 2px solid #C4C4C4;\n    border-radius: 11px;\n    overflow: hidden;\n    height: 155px;\n    cursor: pointer;\n\n    img {\n        height: 100%;\n        max-width: 462px;\n    }\n\n    h4, p {\n        padding: 10px;\n        word-break: break-word;\n        color: #B7B7B7;\n    }\n\n    p { \n        font-size:11px;\n    }\n\n    @media(max-width: 600px) {\n        height: 15vh;\n    }\n"]);return V=function(){return n},n}function W(){var n=Object(h.a)(["\n    width:53px;\n    height:53px;\n    border-radius:50%;\n    margin-right: 15px;\n    cursor: pointer;\n"]);return W=function(){return n},n}function X(){var n=Object(h.a)(["\n    background: #151515;\n    display:flex;\n    margin: 10px 0vw;\n    padding: 10px 20px;\n    border-radius: 13px; \n    width: 46vw;\n    color: #FFF;\n    position: relative;\n    overflow-wrap: anywhere;\n\n    h3 {\n        color: #FFF;\n        font-weight:300;\n        font-size:20px;\n        margin-bottom:10px;\n    }\n    \n    p {\n        color: #B7B7B7;\n    }\n\n    span {\n        color: #FFF;\n        font-weight: bold;\n        cursor: pointer;\n    }\n\n    svg {\n        position: absolute;\n        top: 80px;\n        left: 32px;\n        cursor: pointer;\n        font-size: 26px;\n        color: #FFF;\n\n        &.selected {\n            color: #f0293d;\n        }\n    }\n\n    @media(max-width: 600px) {\n        width: 100vw;\n        border-radius: 2px;\n        margin: 30px 0vw;\n    }\n"]);return X=function(){return n},n}var Y=j.a.div(X()),Z=j.a.img(W()),$=j.a.a(V()),nn=t(29),en=t(22);function tn(n,e,t){var a;if(n)switch(t.length){case 0:a="no likes yet";break;case 1:a="you liked the post";break;case 2:a="you and \n                ".concat(e===t[0]["user.username"]||e===t[0].username?t[1]["user.username"]||t[1].username:t[0]["user.username"]||t[0].username," \n                    liked the post");break;default:a="you, \n                ".concat(e===t[0]["user.username"]||e===t[0].username?t[1]["user.username"]||t[1].username:t[0]["user.username"]||t[0].username," \n                    , and ").concat(t.length-2," others liked the post")}else switch(t.length){case 0:a="no likes yet";break;case 1:a="".concat(t[0]["user.username"]||t[0].username," liked the post");break;case 2:a="".concat(t[0]["user.username"]||t[0].username," and ").concat(t[1]["user.username"]||e===t[0].username," liked the post");break;default:a="".concat(t[0]["user.username"]||t[0].username,", ").concat(t[1]["user.username"]||t[0].username," , and ").concat(t.length-2," others liked the post")}return a}function an(n){var e=Object(r.useContext)(u),t=e.userInfo,i=e.refresh,o=e.setRefresh,c=t.data,d=c.user,p=d.id,l=d.username,h=Object(r.useState)(!1),j=Object(s.a)(h,2),b=j[0],x=j[1],f=n.postId,m=n.postUsername,g=n.userId,v=n.postLikes,k={id:g,username:m};function w(n){("like"===n?O.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/".concat(f,"/like"),k,{headers:{"User-Token":c.token}}):O.a.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/".concat(f,"/dislike"),k,{headers:{"User-Token":c.token}})).then((function(){return o(!i)})),x(!b)}return v.forEach((function(n){p!==n.userId&&p!==n.id||(b=!0)})),Object(a.jsx)(a.Fragment,{children:b?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(nn.a,{onClick:function(){return w("dislike")},className:"selected","data-tip":tn(b,l,v),onMouseOver:function(){en.a.show()}}),Object(a.jsx)(en.a,{})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(nn.b,{onClick:function(){return w("like")},"data-tip":tn(b,l,v),onMouseOver:function(){en.a.show()}}),Object(a.jsx)(en.a,{})]})})}function rn(n){Object(r.useContext)(u).userInfo.data;var e=n.imgSrc,t=n.link,i=n.linkDescription,o=n.linkTitle,s=n.text,d=n.user,p=n.postId,h=n.postLikes,j=d.id,b=d.username,x=d.avatar,f=Object(l.f)();return Object(a.jsxs)(Y,{children:[Object(a.jsx)(c.b,{to:{pathname:"/UserPosts:".concat(j),state:{id:j,username:b}},children:Object(a.jsx)(Z,{src:x})}),Object(a.jsx)(an,{postId:p,username:b,userId:j,postLikes:h}),Object(a.jsxs)("div",{children:[Object(a.jsx)(c.b,{to:{pathname:"/UserPosts:".concat(j),state:{id:j,username:b}},children:Object(a.jsx)("h3",{children:b})}),Object(a.jsx)("p",{children:Object(a.jsx)(Q.a,{onHashtagClick:function(n){return function(n){n=n.slice(1),f.push("/HashtagPage:".concat(n),n)}(n)},children:s})}),Object(a.jsxs)($,{href:t,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:o}),Object(a.jsx)("p",{children:i}),Object(a.jsx)("p",{children:t})]}),Object(a.jsx)("img",{src:e})]})]})]})}function on(){var n=Object(h.a)(["\n    width: 15vw;\n    margin: 0 20vw;\n\n    @media (max-width: 600px) {\n        width: 60vw;\n    }\n"]);return on=function(){return n},n}function sn(){var n=Object(h.a)(["\n    text-align: center;\n    font-size: 56px;\n    color: #FFF;\n"]);return sn=function(){return n},n}function cn(n){var e,t=Object(r.useContext)(u),i=t.refresh,o=t.setRefresh,c=n.userData,d=n.id,p=n.hashtag,l=n.liked,h=Object(r.useState)([]),j=Object(s.a)(h,2),b=j[0],x=j[1],f=Object(r.useState)(!1),m=Object(s.a)(f,2),g=m[0],v=m[1],k=Object(r.useState)(!1),w=Object(s.a)(k,2),y=w[0],F=w[1],C=Object(r.useState)(0),S=Object(s.a)(C,2),z=S[0],I=S[1],P=Object(r.useState)(!1),D=Object(s.a)(P,2),U=D[0],L=D[1];Object(r.useEffect)((function(){null===d?e=O.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts?offset=".concat(z,"&limit=11"),{headers:{"User-Token":c.token}}):d&&l?e=O.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked",{headers:{"User-Token":c.token}}):d?e=O.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/".concat(d,"/posts?offset=").concat(z,"&limit=11"),{headers:{"User-Token":c.token}}):(e=O.a.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/hashtags/".concat(p,"/posts?offset=").concat(z,"&limit=11"),{headers:{"User-Token":c.token}}),v(!1)),e.then((function(n){v(!0);var e=[],t={id:"uniaoFagnerParato"};n.data.posts.forEach((function(n,a){a<10?e.push(n):t=n})),x([].concat(Object(A.a)(b),e)),"uniaoFagnerParato"!==t.id&&L(!0)})),e.catch((function(){return F(!0)}))}),[i]);var T=[];return 0!==b.length&&b.map((function(n){T.push(Object(a.jsx)(rn,{imgSrc:n.linkImage,link:n.link,linkDescription:n.linkDescription,linkTitle:n.linkTitle,text:n.text,user:n.user,postId:n.id,postLikes:n.likes},n.id))})),Object(a.jsx)(a.Fragment,{children:g?y?Object(a.jsx)(un,{children:"Houve uma falha ao obter os posts, por favor atualize a p\xe1gina"}):0===b.length?Object(a.jsx)(un,{children:"Nenhum post encontrado"}):Object(a.jsx)(K.a,{loadMore:function(){b.length<10||(L(!1),I(z+10),o(!i))},hasMore:U,children:T}):Object(a.jsx)(dn,{src:"https://pa1.narvii.com/6534/a6fc552442c170aedda8e27af187b901602f7634_00.gif"})})}var un=j.a.h4(sn()),dn=j.a.img(on());function pn(){var n=Object(r.useContext)(u).userInfo.data;void 0===n&&(window.location="http://localhost:9000");var e=n.user,t=e.avatar,i=e.id;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B,{avatar:t,id:i}),Object(a.jsxs)(T,{children:[Object(a.jsx)("span",{children:Object(a.jsx)("h1",{children:"timeline"})}),Object(a.jsx)(R,{userData:n}),Object(a.jsx)(q,{userData:n}),Object(a.jsx)(cn,{userData:n,id:null})]})]})}function ln(){var n=Object(r.useContext)(u).userInfo.data,e=Object(l.g)().state,t=e.id,i=e.username;void 0===n&&(window.location="http://localhost:9000");var o=n.user.id,s=n.user.avatar;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B,{avatar:s,id:o}),Object(a.jsxs)(T,{children:[t===o?Object(a.jsx)("span",{children:Object(a.jsx)("h1",{children:"My posts"})}):Object(a.jsx)("span",{children:Object(a.jsxs)("h1",{children:[i,"'s posts"]})}),Object(a.jsx)(q,{userData:n}),Object(a.jsx)(cn,{userData:n,id:t})]})]})}function hn(){var n=Object(r.useContext)(u).userInfo.data,e=Object(l.g)().state;void 0===n&&(window.location="http://localhost:9000");var t=n.user,i=t.avatar,o=t.id;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B,{avatar:i,id:o}),Object(a.jsxs)(T,{children:[Object(a.jsx)("span",{children:Object(a.jsxs)("h1",{children:["# ",e]})}),Object(a.jsx)(q,{userData:n}),Object(a.jsx)(cn,{userData:n,hashtag:e})]})]})}function jn(){var n=Object(r.useContext)(u).userInfo.data,e=Object(l.g)().state.id;void 0===n&&(window.location="http://localhost:9000");var t=n.user.id,i=n.user.avatar;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B,{avatar:i,id:t}),Object(a.jsxs)(T,{children:[Object(a.jsx)("span",{children:Object(a.jsx)("h1",{children:"My Likes"})}),Object(a.jsx)(q,{userData:n}),Object(a.jsx)(cn,{userData:n,id:e,liked:!0})]})]})}var bn=Object(l.h)((function(n){var e=n.location;return Object(a.jsx)(x,{children:Object(a.jsx)(d.a,{className:"transition-group",children:Object(a.jsx)(p.a,{timeout:{enter:300,exit:300},classNames:"fade",unmountOnExit:!0,children:Object(a.jsx)("section",{className:"route-section",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/Signup",component:S}),Object(a.jsx)(l.a,{path:"/Timeline",component:pn}),Object(a.jsx)(l.a,{path:"/User:id",component:ln}),Object(a.jsx)(l.a,{path:"/HashtagPage:hashtag",component:hn}),Object(a.jsx)(l.a,{path:"/my-likes",component:jn}),Object(a.jsx)(l.a,{path:"/",component:C})]})})},e.key)})})}));function xn(){var n=Object(r.useState)({}),e=Object(s.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(!1),d=Object(s.a)(o,2),p=d[0],l=d[1];return Object(a.jsx)(u.Provider,{value:{userInfo:t,setUserInfo:i,refresh:p,setRefresh:l},children:Object(a.jsx)(c.a,{children:Object(a.jsx)(bn,{})})})}var fn=document.querySelector("#root");o.a.render(Object(a.jsx)(xn,{}),fn)}},[[75,1,2]]]);
//# sourceMappingURL=main.33d5652a.chunk.js.map