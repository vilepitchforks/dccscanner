(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{4334:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rnr",function(){return l(1400)}])},9359:function(e,n,l){"use strict";var t=l(5893),a=l(1664),o=l.n(a),r=l(6105),i=l.n(r);n.Z=function(e){var n=e.user;return n=n[0].toUpperCase(),(0,t.jsxs)("nav",{className:i().navbar,children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(o(),{href:"/",children:(0,t.jsx)("img",{className:i().logo+" cursor-pointer",src:"/logo192.png"})}),(0,t.jsx)(o(),{href:"/rnr",children:(0,t.jsx)("a",{className:"text-white",children:"R&R"})})]}),(0,t.jsx)("div",{className:i().avatar,children:n})]})}},1400:function(e,n,l){"use strict";l.r(n),l.d(n,{__N_SSP:function(){return x}});var t=l(7568),a=l(4051),o=l.n(a),r=l(5893),i=l(7294),s=l(9008),c=l.n(s),d=l(9669),u=l.n(d),v=l(9359),x=!0;n.default=function(e){var n,l=e.user,a=e.availableBrands,s=(0,i.useState)(null),d=s[0],x=s[1],p=(0,i.useState)(null),h=p[0],m=p[1],f=(0,i.useState)([]),g=f[0],b=f[1],j=(0,i.useState)(!1),y=j[0],w=j[1],N=(0,i.useState)(null),_=N[0],k=N[1],R=function(){var e=(0,t.Z)(o().mark((function e(){var n,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),k(null),n=h?"/single":"/multi",e.prev=3,e.next=6,u()("/api".concat(n,"?brand=").concat(d,"&locale=").concat(h));case 6:l=e.sent.data,b(l.map((function(e){var n,l,t,a,o,r,i,s,c,d,u,v,x,p,h,m,f=null===e||void 0===e||null===(n=e.dccValidation)||void 0===n?void 0:n.details;return{Locale:e.locale,"Wrong Locale":(null===(l=f.locale)||void 0===l?void 0:l.ok)?"":null===(t=f.locale)||void 0===t?void 0:t.fromSite,"Has DCC":null===e||void 0===e||null===(a=e.dccValidation)||void 0===a?void 0:a.dccExists,"Invalid Keys":null===f||void 0===f||null===(o=f.keys)||void 0===o?void 0:o.invalidKeys.join(", "),"Missing Required Keys":null===f||void 0===f||null===(r=f.keys)||void 0===r?void 0:r.missingRequiredKeys.join(", "),"Wrong PDP URL":(null===f||void 0===f||null===(i=f.productPageURL)||void 0===i?void 0:i.ok)?"":null===f||void 0===f||null===(s=f.productPageURL)||void 0===s?void 0:s.fromSite,"Wrong Img URL":(null===f||void 0===f||null===(c=f.productImageURL)||void 0===c?void 0:c.ok)?"":null===f||void 0===f||null===(d=f.productImageURL)||void 0===d?void 0:d.productImageURL,"Category Path":(null===f||void 0===f||null===(u=f.categoryPath)||void 0===u?void 0:u.ok)?"":JSON.stringify(null===f||void 0===f||null===(v=f.productImageURL)||void 0===v?void 0:v.categoryPath),"GTINs OK":null===f||void 0===f||null===(x=f.GTINs)||void 0===x?void 0:x.ok,"Auth Email":null===e||void 0===e||null===(p=e.postReviewsParams)||void 0===p?void 0:p.HostedAuthentication_AuthenticationEmail,"Auth CB":null===e||void 0===e||null===(h=e.postReviewsParams)||void 0===h?void 0:h.HostedAuthentication_CallbackURL,FP:null===e||void 0===e||null===(m=e.postReviewsParams)||void 0===m?void 0:m.fp}}))),w(!1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),console.warn("Error occurred while scanning all locales."),w(!1),k("Error occurred while scaning locales, please try again.",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"RnR Checker"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(v.Z,{user:l}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("div",{className:"mb-3 xl:w-96",children:[(0,r.jsx)("p",{className:"mt-10",children:"Brand:"}),(0,r.jsxs)("select",{className:"form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none","aria-label":"Default select example",defaultValue:"Open this select menu",onInput:function(e){return x(e.target.value)},children:[(0,r.jsx)("option",{children:"--Select Brand--"}),a.map((function(e){var n=e.brand;return(0,r.jsx)("option",{value:n,children:n},n)}))]}),(0,r.jsx)("p",{className:"mt-10",children:"Locale:"}),(0,r.jsxs)("select",{className:"form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none","aria-label":"Default select example",defaultValue:"Open this select menu",onInput:function(e){return m(e.target.value)},children:[(0,r.jsx)("option",{children:d?"--Select Locale--":"--Select Brand--"}),d?null===(n=a.find((function(e){var n=e.brand;return d===n})))||void 0===n?void 0:n.locales.map((function(e){return(0,r.jsx)("option",{value:e,children:e},e)})):null]}),(0,r.jsxs)("div",{className:"flex flex-col justify-center space-x-2",children:[(0,r.jsx)("button",{type:"button",className:"mt-10 inline-block rounded bg-green-600 px-6 py-2.5 text-xl font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:text-gray-100 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg",onClick:d&&R,children:y?"Loading...":"Go"}),_?(0,r.jsx)("p",{className:"text-red-500",children:_}):null]})]})}),(0,r.jsx)("div",{className:"mx-auto mt-10 flex w-[1280px] flex-col",children:(0,r.jsx)("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,r.jsx)("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:(0,r.jsx)("div",{className:"overflow-hidden",children:(0,r.jsxs)("table",{className:"min-w-full",children:[(0,r.jsx)("thead",{className:"border-b bg-white",children:(0,r.jsxs)("tr",{children:[g.length?(0,r.jsx)("th",{scope:"col",className:"px-6 py-4 text-left text-xl font-medium text-gray-900",children:"#"}):null,Object.keys(g[0]||{}).map((function(e){return(0,r.jsx)("th",{scope:"col",className:"px-6 py-4 text-left text-xl font-medium text-gray-900",children:e},e)}))]})}),(0,r.jsx)("tbody",{children:g.map((function(e,n){return(0,r.jsxs)("tr",{className:"border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100",children:[(0,r.jsx)("td",{className:"whitespace-nowrap px-6 py-4 text-xl font-medium text-gray-900",children:n+1}),Object.keys(e).map((function(n){return(0,r.jsx)("td",{className:"whitespace-nowrap px-6 py-4 text-xl font-light text-gray-900",children:"boolean"===typeof e[n]?e[n]?"\u2714":"\u2716":e[n]},n)}))]},n)}))})]})})})})})]})}},6105:function(e){e.exports={navbar:"Navbar_navbar__7Exjr",logo:"Navbar_logo__keI4H",avatar:"Navbar_avatar__GT_gS"}}},function(e){e.O(0,[996,669,774,888,179],(function(){return n=4334,e(e.s=n);var n}));var n=e.O();_N_E=n}]);