(this["webpackJsonpreact-scratch"]=this["webpackJsonpreact-scratch"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/background.9cbad1d1.png"},19:function(e,a,t){e.exports=t.p+"static/media/logo_smreina.12da53fe.png"},24:function(e,a,t){e.exports=t(50)},29:function(e,a,t){},31:function(e,a,t){},49:function(e){e.exports=JSON.parse('{"api":{"invokeUrl":"https://misioneros-backend.herokuapp.com/visit"}}')},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),s=t.n(r),c=(t(29),t(2)),i=t(3),o=t.n(i),m=t(21),u=t(14),d=t(15),p=t(16),E=t(23),v=t(22),b=t(17),h=t(18),f=t.n(h),N=t(19),g=t.n(N),w=(t(31),t(20)),C=t.n(w),x=t(49),y=function(e){Object(E.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={newvisit:{Nombre:"",Email:"",Celular:"",Plataforma:""},visits:[]},e.handleAddVisit=function(){var a=Object(u.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,n={Nombre:e.state.newvisit.Nombre,Email:e.state.newvisit.Email,Celular:e.state.newvisit.Celular,Plataforma:e.state.newvisit.Plataforma},a.next=5,C.a.post("".concat(x.api.invokeUrl),n);case 5:e.setState({visits:[].concat(Object(m.a)(e.state.visits),[e.state.newvisit])}),e.setState({newvisit:{Nombre:"",Email:"",Celular:"",Plataforma:""}}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log("An error has ocurred: ".concat(a.t0));case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}(),e.onAddNameChange=function(a){return e.setState({newvisit:Object(c.a)(Object(c.a)({},e.state.newvisit),{},{Nombre:a.target.value})})},e.onAddEmailChange=function(a){return e.setState({newvisit:Object(c.a)(Object(c.a)({},e.state.newvisit),{},{Email:a.target.value})})},e.onAddPhoneChange=function(a){return e.setState({newvisit:Object(c.a)(Object(c.a)({},e.state.newvisit),{},{Celular:a.target.value})})},e.onAddPlatformChange=function(a){return e.setState({newvisit:Object(c.a)(Object(c.a)({},e.state.newvisit),{},{Plataforma:a.target.value})})},e}return Object(p.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-contact100"},l.a.createElement("div",{className:"wrap-contact100"},l.a.createElement("form",{onSubmit:function(a){return e.handleAddVisit(a)},className:"contact100-form validate-form"},l.a.createElement("span",{className:"contact100-form-title"},"\xbf Estar\xedas interesado en recibir la Visita Misionera Virtual desde la comodidad de tu hogar? ",l.a.createElement("br",null),"Llena el siguiente formulario para agendar nuestra visita."),l.a.createElement("label",{className:"label-input100"},"Escribe tu nombre completo"),l.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Tu nombre aqu\xed"},l.a.createElement("input",{id:"first-name",className:"input100",type:"text",name:"Nombre",placeholder:"Tu nombre aqu\xed",value:this.state.newvisit.Nombre,onChange:this.onAddNameChange,required:!0}),l.a.createElement("span",{className:"focus-input100"})),l.a.createElement("label",{className:"label-input100"},"Escribe tu correo electr\xf3nico"),l.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Direccion de correo debe ser valida"},l.a.createElement("input",{id:"email",className:"input100",type:"email",name:"Email",placeholder:"Tu correo electr\xf3nico aqu\xed",value:this.state.newvisit.Email,onChange:this.onAddEmailChange,required:!0}),l.a.createElement("span",{className:"focus-input100"})),l.a.createElement("label",{className:"label-input100"},"Escribe tu numero de contacto"),l.a.createElement("div",{className:"wrap-input100"},l.a.createElement("input",{id:"phone",className:"input100",type:"phone",name:"Celular",placeholder:"Tu numero de celular aqu\xed",value:this.state.newvisit.Celular,onChange:this.onAddPhoneChange,required:!0}),l.a.createElement("span",{className:"focus-input100"})),l.a.createElement("label",{className:"label-input100"},"Cu\xe1l plataforma para videollamadas sueles usar?"),l.a.createElement("div",{className:"wrap-input100 validate-input","data-validate":"Debes seleccionar una de las opciones"},l.a.createElement("input",{type:"radio",id:"zoom",name:"Plataforma",value:"Zoom",onChange:this.onAddPlatformChange}),l.a.createElement("label",null,"\xa0\xa0Zoom"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"facebook",name:"Plataforma",value:"Facebook",onChange:this.onAddPlatformChange}),l.a.createElement("label",null,"\xa0\xa0Facebook"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"meet",name:"Plataforma",value:"Google Meet",onChange:this.onAddPlatformChange}),l.a.createElement("label",null,"\xa0\xa0Google Meet"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"whatsapp",name:"Plataforma",value:"Whatsapp",onChange:this.onAddPlatformChange}),l.a.createElement("label",null,"\xa0\xa0Whatsapp"),l.a.createElement("br",null),l.a.createElement("input",{type:"radio",id:"other",name:"Plataforma",value:"Otra",onChange:this.onAddPlatformChange}),l.a.createElement("label",null,"\xa0\xa0Otra"),l.a.createElement("br",null)),l.a.createElement("div",{className:"container-contact100-form-btn"},l.a.createElement(b.a,{trigger:l.a.createElement("button",{type:"submit",className:"contact100-form-btn"},"Enviar datos "),closeOnDocumentClick:!0,modal:!0,position:"bottom-center"},l.a.createElement("span",{className:"confirm-data"},"Te agradecemos por llenar el formulario. En proximos dias nos estaremos comunicando para agendar la Visita Misionera. ",l.a.createElement("strong",null,"GRACIAS!"))))),l.a.createElement("div",{className:"contact100-more flex-col-c-m",style:{backgroundImage:"url(".concat(f.a,")")}},l.a.createElement("img",{src:g.a,alt:"Logo Santa Maria Reina"}),l.a.createElement("br",null),l.a.createElement("div",{className:"flex-w size1 p-b-47"},l.a.createElement("div",{className:"txt1 p-r-25"},l.a.createElement("span",{className:"lnr lnr-book"})),l.a.createElement("div",{className:"flex-col size2"},l.a.createElement("span",{className:"txt1 p-b-20"},l.a.createElement("i",null,'"He aqu\xed, yo estoy a la puerta y llamo; si alguno oye mi voz entrar\xe9 y cenar\xe9 con \xe9l."'),l.a.createElement("br",null),"Ap 3, 20"))),l.a.createElement("br",null),l.a.createElement("div",{className:"dis-flex size1 p-b-47"},l.a.createElement("div",{className:"txt1 p-r-25"},l.a.createElement("span",{className:"lnr lnr-users"})),l.a.createElement("div",{className:"flex-col size2"},l.a.createElement("span",{className:"txt1 p-b-20"},"Te conectar\xe1s con 2 personas del Grupo Misionero"))),l.a.createElement("div",{className:"dis-flex size1 p-b-47"},l.a.createElement("div",{className:"txt1 p-r-25"},l.a.createElement("span",{className:"lnr lnr-laptop-phone"})),l.a.createElement("div",{className:"flex-col size2"},l.a.createElement("span",{className:"txt1 p-b-20"},"En Modo Videollamada sin salir de tu hogar"))),l.a.createElement("div",{className:"dis-flex size1 p-b-47"},l.a.createElement("div",{className:"txt1 p-r-25"},l.a.createElement("span",{className:"lnr lnr-calendar-full"})),l.a.createElement("div",{className:"flex-col size2"},l.a.createElement("span",{className:"txt1 p-b-20"},"Visita agendada previamente"))),l.a.createElement("div",{className:"dis-flex size1 p-b-47"},l.a.createElement("div",{className:"txt1 p-r-25"},l.a.createElement("span",{className:"lnr lnr-clock"})),l.a.createElement("div",{className:"flex-col size2"},l.a.createElement("span",{className:"txt1 p-b-20"},"Tiempo estimado: 20 a 30 minutos"),l.a.createElement("br",null))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.da709bf5.chunk.js.map