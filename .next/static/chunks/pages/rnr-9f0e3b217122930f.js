(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{4334:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rnr",function(){return t(1400)}])},9359:function(e,n,t){"use strict";var r=t(5893),l=t(1664),a=t.n(l),i=t(6105),o=t.n(i);n.Z=function(e){var n=e.user;return n=n[0].toUpperCase(),(0,r.jsxs)("nav",{className:o().navbar,children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(a(),{href:"/",children:(0,r.jsx)("img",{className:o().logo+" cursor-pointer",src:"/logo192.png"})}),(0,r.jsx)(a(),{href:"/rnr",children:(0,r.jsx)("a",{className:"text-white",children:"R&R"})})]}),(0,r.jsx)("div",{className:o().avatar,children:n})]})}},1400:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return p}});var r=t(2236),l=t(7568),a=t(797),i=t(4051),o=t.n(i),s=t(5893),c=t(7294),u=t(9008),d=t.n(u),v=t(9669),x=t.n(v),f=t(9359),p=!0;n.default=function(e){var n,t=e.user,i=e.availableBrands,u=(0,c.useState)(null),v=u[0],p=u[1],h=(0,c.useState)(null),g=h[0],m=h[1],b=(0,c.useState)([]),w=b[0],j=b[1],y=(0,c.useState)(!1),N=y[0],k=y[1],R=(0,c.useState)(null),_=R[0],E=R[1],S=function(e){return e.map((function(e){var n,t,r,l,a,i,o,s,c,u,d,v,x,f,p,h,g,m,b,w,j,y=null===e||void 0===e||null===(n=e.dccValidation)||void 0===n?void 0:n.details,N=null===e||void 0===e||null===(t=e.getReviews)||void 0===t?void 0:t.getReviewsResponse,k=null===e||void 0===e||null===(r=e.submitReview)||void 0===r?void 0:r.submitReviewResponse;return{Locale:e.locale,"Has DCC":null===e||void 0===e||null===(l=e.dccValidation)||void 0===l?void 0:l.dccExists,"Wrong Locale":(null===(a=y.locale)||void 0===a?void 0:a.ok)?"":null===(i=y.locale)||void 0===i?void 0:i.fromSite,"Invalid Keys":null===y||void 0===y||null===(o=y.keys)||void 0===o?void 0:o.invalidKeys.join(", "),"Missing Required Keys":null===y||void 0===y||null===(s=y.keys)||void 0===s?void 0:s.missingRequiredKeys.join(", "),"Wrong PDP URL":(null===y||void 0===y||null===(c=y.productPageURL)||void 0===c?void 0:c.ok)?"":null===y||void 0===y||null===(u=y.productPageURL)||void 0===u?void 0:u.fromSite,"Wrong Img URL":(null===y||void 0===y||null===(d=y.productImageURL)||void 0===d?void 0:d.ok)?"":null===y||void 0===y||null===(v=y.productImageURL)||void 0===v?void 0:v.productImageURL,"Category Path":(null===y||void 0===y||null===(x=y.categoryPath)||void 0===x?void 0:x.ok)?"":JSON.stringify(null===y||void 0===y||null===(f=y.categoryPath)||void 0===f?void 0:f.categoryPath),"GTIN Errors":null===y||void 0===y||null===(p=y.GTINs)||void 0===p?void 0:p.messages.join(", "),"Get Reviews Errors":(null===N||void 0===N?void 0:N.HasErrors)?null===N||void 0===N?void 0:N.Errors.map((function(e){return e.Message})).join(", "):"","Post Review Errors":(null===k||void 0===k?void 0:k.HasErrors)?null===k||void 0===k?void 0:k.Errors.map((function(e){return e.Message})).join(", "):"","Auth Email":null===e||void 0===e||null===(h=e.submitReview)||void 0===h||null===(g=h.submitReviewParams)||void 0===g?void 0:g.HostedAuthentication_AuthenticationEmail,"Auth CB":null===e||void 0===e||null===(m=e.submitReview)||void 0===m||null===(b=m.submitReviewParams)||void 0===b?void 0:b.HostedAuthentication_CallbackURL,FP:null===e||void 0===e||null===(w=e.submitReview)||void 0===w||null===(j=w.submitReviewParams)||void 0===j?void 0:j.fp}}))},P=function(){var e=(0,l.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),E(null),e.prev=2,e.next=5,x()("/api/single?brand=".concat(v,"&locale=").concat(n));case 5:t=e.sent.data,j((function(e){return(0,a.Z)(e).concat((0,a.Z)(S(t)))})),k(!1),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),console.warn("Error occurred while scanning all locales.",e.t0.message),k(!1),E("Error occurred while scaning locales, please try again.");case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(n){return e.apply(this,arguments)}}(),L=function(){var e=(0,l.Z)(o().mark((function e(){var n,t,l,a,s,c,u,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v){e.next=2;break}return e.abrupt("return");case 2:n=i.find((function(e){var n=e.brand;return v===n})).locales,t=!1,l=!1,e.prev=4,s=(0,r.Z)(n);case 6:return e.next=8,s.next();case 8:if(!(t=!(c=e.sent).done)){e.next=17;break}return u=c.value,d=u,console.log("Scanning locale: ",d),e.next=14,P(d);case 14:t=!1,e.next=6;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(4),l=!0,a=e.t0;case 23:if(e.prev=23,e.prev=24,!t||null==s.return){e.next=28;break}return e.next=28,s.return();case 28:if(e.prev=28,!l){e.next=31;break}throw a;case 31:return e.finish(28);case 32:return e.finish(23);case 33:case"end":return e.stop()}}),e,null,[[4,19,23,33],[24,,28,32]])})));return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d(),{children:[(0,s.jsx)("title",{children:"RnR Checker"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(f.Z,{user:t}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsxs)("div",{className:"mb-3 xl:w-96",children:[(0,s.jsx)("p",{className:"mt-10",children:"Brand:"}),(0,s.jsxs)("select",{className:"form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none","aria-label":"Default select example",defaultValue:"Open this select menu",onInput:function(e){return p(e.target.value)},children:[(0,s.jsx)("option",{children:"--Select Brand--"}),i.map((function(e){var n=e.brand;return(0,s.jsx)("option",{value:n,children:n},n)}))]}),(0,s.jsx)("p",{className:"mt-10",children:"Locale:"}),(0,s.jsxs)("select",{className:"form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none","aria-label":"Default select example",defaultValue:"Open this select menu",onInput:function(e){return m(e.target.value)},children:[(0,s.jsx)("option",{children:v?"--Select Locale--":"--Select Brand--"}),v?null===(n=i.find((function(e){var n=e.brand;return v===n})))||void 0===n?void 0:n.locales.map((function(e){return(0,s.jsx)("option",{value:e,children:e},e)})):null]}),(0,s.jsxs)("div",{className:"flex flex-col justify-center space-x-2",children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("button",{type:"button",className:"mt-10 inline-block rounded bg-green-600 px-6 py-2.5 text-xl font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:text-gray-100 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg",onClick:function(){return v&&P(g)},children:N?"Loading...":"Scan"}),(0,s.jsx)("button",{type:"button",className:"mt-10 inline-block rounded bg-green-600 px-6 py-2.5 text-xl font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-700 hover:text-gray-100 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg",onClick:v&&L,children:"Scan all"})]}),_?(0,s.jsx)("p",{className:"text-red-500",children:_}):null]})]})}),(0,s.jsx)("div",{className:"mx-auto mt-10 flex w-[1280px] flex-col",children:(0,s.jsx)("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,s.jsx)("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:(0,s.jsx)("div",{className:"overflow-hidden",children:(0,s.jsxs)("table",{className:"min-w-full",children:[(0,s.jsx)("thead",{className:"border-b bg-white",children:(0,s.jsxs)("tr",{children:[w.length?(0,s.jsx)("th",{scope:"col",className:"px-6 py-4 text-left text-xl font-medium text-gray-900",children:"#"}):null,Object.keys(w[0]||{}).map((function(e){return(0,s.jsx)("th",{scope:"col",className:"px-6 py-4 text-left text-xl font-medium text-gray-900",children:e},e)}))]})}),(0,s.jsx)("tbody",{children:w.map((function(e,n){return(0,s.jsxs)("tr",{className:"border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100",children:[(0,s.jsx)("td",{className:"whitespace-nowrap px-6 py-4 text-xl font-medium text-gray-900",children:n+1}),Object.keys(e).map((function(n){return(0,s.jsx)("td",{className:"whitespace-nowrap px-6 py-4 text-xl font-light text-gray-900",children:"boolean"===typeof e[n]?e[n]?"\u2714":"\u2716":e[n]},n)}))]},n)}))})]})})})})})]})}},6105:function(e){e.exports={navbar:"Navbar_navbar__7Exjr",logo:"Navbar_logo__keI4H",avatar:"Navbar_avatar__GT_gS"}}},function(e){e.O(0,[682,157,774,888,179],(function(){return n=4334,e(e.s=n);var n}));var n=e.O();_N_E=n}]);