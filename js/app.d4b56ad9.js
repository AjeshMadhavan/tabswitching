(function(){"use strict";var e={2759:function(e,t,a){var r=a(5471),s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("tabs-page")],1)},n=[],l=a(1233),u=function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",[t("div",{staticClass:"navbar"},[t("div",{staticClass:"navbar__tab",class:"home"===a.currentTab?"navbar__tab--active":"",on:{click:function(e){return a.changeTab("home")}}},[e._v("Add User Details")]),t("div",{staticClass:"navbar__tab",class:"about"===a.currentTab?"navbar__tab--active":"",on:{click:function(e){return a.changeTab("about")}}},[e._v("List User Details")])]),"home"===a.currentTab?t(a.VueAddUser,{on:{passUserData:a.handleUserData}}):"about"===a.currentTab?t(a.VueListUser,{attrs:{userData:a.userData}}):t("div",[t("h1",[e._v("This is link page")])])],1)},i=[],o=(a(4114),a(4710)),c=a(174),_=a(6950),d=function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",{staticClass:"container"},[t(c.A,{ref:"addUserForm",staticClass:"container__form",model:{value:a.isFormValid,callback:function(e){a.isFormValid=e},expression:"isFormValid"}},[t(_.A,{staticClass:"container__form__input",attrs:{rules:[a.rules.required],label:"First name",maxlength:15},on:{keypress:a.handleNameInput},model:{value:a.users.name.value,callback:function(t){e.$set(a.users.name,"value",t)},expression:"users.name.value"}}),t(_.A,{staticClass:"container__form__input container__form__input--appearance-none",attrs:{rules:[a.rules.required,a.rules.isAgeLesser],label:"Age",type:"number"},on:{keypress:a.handleAgeInput},model:{value:a.users.age.value,callback:function(t){e.$set(a.users.age,"value",t)},expression:"users.age.value"}}),t(_.A,{staticClass:"container__form__input",attrs:{rules:[a.rules.required,a.rules.email],label:"E-mail",maxlength:20},model:{value:a.users.email.value,callback:function(t){e.$set(a.users.email,"value",t)},expression:"users.email.value"}}),t(o.A,{staticClass:"container__form__button",attrs:{disabled:!a.isFormValid,color:"success"},on:{click:function(e){return a.validate({name:a.users.name.value,age:a.users.age.value,email:a.users.email.value})}}},[e._v(" Submit ")])],1)],1)},f=[],b=(0,r.defineComponent)({__name:"VueAddUser",emits:["passUserData"],setup(e,{emit:t}){const a=(0,r.ref)(!0),s=(0,r.ref)(),n=["e",".","-","+"],l={required:e=>!!e||"Required",isAgeLesser:e=>e>=18||"Age is less",email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid e-mail"}},u=(0,r.ref)({name:{value:"",isError:!1},age:{value:null,isError:!1},email:{value:"",isError:!1}}),i=e=>{const t=e?.key,a=/^[a-zA-Z]+$/;a.test(t)||" "===t||e.preventDefault()},o=e=>{const t=e.key,a=null!==u.value.age.value&&String(u.value.age.value).length>2;(n.includes(t)||a)&&e.preventDefault()},c=e=>{t("passUserData",e),s.value?.reset()};return{__sfc:!0,emit:t,isFormValid:a,addUserForm:s,restrictedAgeInputCharacters:n,rules:l,users:u,handleNameInput:i,handleAgeInput:o,validate:c}}}),v=b,p=a(1656),m=(0,p.A)(v,d,f,!1,null,"69af8ce4",null),h=m.exports,g=a(5488),y=a(2498),A=function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(g.A,[a.props.userData.length?t(y.A,{staticClass:"table",attrs:{"fixed-header":"",height:"300px"}},[t("thead",{staticClass:"table__table-head"},[t("tr",{staticClass:"table__table-head__row"},[t("th",{staticClass:"table__table-head__row__table-data"},[e._v("S No")]),t("th",{staticClass:"table__table-head__row__table-data"},[e._v("Name")]),t("th",{staticClass:"table__table-head__row__table-data"},[e._v("Age")]),t("th",{staticClass:"table__table-head__row__table-data"},[e._v("Email")])])]),t("tbody",{staticClass:"table__table-body"},e._l(a.props.userData,(function(a,r){return t("tr",{key:r,staticClass:"table__table-body__row"},[t("td",{staticClass:"table__table-body__row__table-data"},[e._v(e._s(r+1))]),t("td",{staticClass:"table__table-body__row__table-data"},[e._v(e._s(a.name))]),t("td",{staticClass:"table__table-body__row__table-data"},[e._v(e._s(a.age))]),t("td",{staticClass:"table__table-body__row__table-data"},[e._v(e._s(a.email))])])})),0)]):t(g.A,[t("h3",[e._v("User Data is Empty !")])])],1)},C=[],w=(0,r.defineComponent)({__name:"VueListUser",props:{userData:null},setup(e){const t=e;return{__sfc:!0,props:t}}}),x=w,k=(0,p.A)(x,A,C,!1,null,"03253a80",null),D=k.exports,O=(0,r.defineComponent)({__name:"TabsPage",setup(e){const t=(0,r.ref)("home"),a=(0,r.ref)([]),s=e=>{t.value=e},n=e=>{a.value.push(e)};return{__sfc:!0,currentTab:t,userData:a,changeTab:s,handleUserData:n,VueAddUser:h,VueListUser:D}}}),T=O,U=(0,p.A)(T,u,i,!1,null,"19c21dee",null),P=U.exports,j=function(e,t,a,r){var s,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,a,r);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(l=(n<3?s(l):n>3?s(t,a,l):s(t,a))||l);return n>3&&l&&Object.defineProperty(t,a,l),l};let V=class extends l.lD{};V=j([(0,l.uA)({components:{TabsPage:P}})],V);var F=V,S=F,E=(0,p.A)(S,s,n,!1,null,null,null),I=E.exports,L=a(5651),$=a.n(L);a(4301);r["default"].use($());var q=new($())({});r["default"].config.productionTip=!1,new r["default"]({vuetify:q,render:e=>e(I)}).$mount("#app")}},t={};function a(r){var s=t[r];if(void 0!==s)return s.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,s,n){if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],n=e[c][2];for(var u=!0,i=0;i<r.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(u=!1,n<l&&(l=n));if(u){e.splice(c--,1);var o=s();void 0!==o&&(t=o)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,n,l=r[0],u=r[1],i=r[2],o=0;if(l.some((function(t){return 0!==e[t]}))){for(s in u)a.o(u,s)&&(a.m[s]=u[s]);if(i)var c=i(a)}for(t&&t(r);o<l.length;o++)n=l[o],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},r=self["webpackChunktabswitching"]=self["webpackChunktabswitching"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(2759)}));r=a.O(r)})();
//# sourceMappingURL=app.d4b56ad9.js.map