"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[9863],{66177:function(e,t,s){s.r(t),s.d(t,{default:function(){return Y}});var n,a=s(89743),r=s(2677),i=s(51649),o=s(93433),l=s(29439),c=s(72791),d=s(9140),u=s(1413),m=s(45987),h=s(81694),x=s.n(h),f=s(49726),j=s(4942),v=s(27726),Z=s(72709),p=s(80184),g=(n={},(0,j.Z)(n,v.d0,"showing"),(0,j.Z)(n,v.Ix,"showing show"),n),b=c.forwardRef((function(e,t){return(0,p.jsx)(Z.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,transitionClasses:g}))}));b.displayName="ToastFade";var N=b,y=s(39007),w=s(10162),C=s(80473),k=c.createContext({onClose:function(){}}),T=["bsPrefix","closeLabel","closeVariant","closeButton","className","children"],P=c.forwardRef((function(e,t){var s=e.bsPrefix,n=e.closeLabel,a=e.closeVariant,r=e.closeButton,i=e.className,o=e.children,l=(0,m.Z)(e,T);s=(0,w.vE)(s,"toast-header");var d=(0,c.useContext)(k),h=(0,y.Z)((function(e){null==d||null==d.onClose||d.onClose(e)}));return(0,p.jsxs)("div",(0,u.Z)((0,u.Z)({ref:t},l),{},{className:x()(s,i),children:[o,r&&(0,p.jsx)(C.Z,{"aria-label":n,variant:a,onClick:h,"data-dismiss":"toast"})]}))}));P.displayName="ToastHeader",P.defaultProps={closeLabel:"Close",closeButton:!0};var B=P,S=(0,s(66543).Z)("toast-body"),E=["bsPrefix","className","transition","show","animation","delay","autohide","onClose","bg"],H=c.forwardRef((function(e,t){var s=e.bsPrefix,n=e.className,a=e.transition,r=void 0===a?N:a,i=e.show,o=void 0===i||i,l=e.animation,d=void 0===l||l,h=e.delay,j=void 0===h?5e3:h,v=e.autohide,Z=void 0!==v&&v,g=e.onClose,b=e.bg,y=(0,m.Z)(e,E);s=(0,w.vE)(s,"toast");var C=(0,c.useRef)(j),T=(0,c.useRef)(g);(0,c.useEffect)((function(){C.current=j,T.current=g}),[j,g]);var P=(0,f.Z)(),B=!(!Z||!o),S=(0,c.useCallback)((function(){B&&(null==T.current||T.current())}),[B]);(0,c.useEffect)((function(){P.set(S,C.current)}),[P,S]);var H=(0,c.useMemo)((function(){return{onClose:g}}),[g]),A=!(!r||!d),L=(0,p.jsx)("div",(0,u.Z)((0,u.Z)({},y),{},{ref:t,className:x()(s,n,b&&"bg-".concat(b),!A&&(o?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}));return(0,p.jsx)(k.Provider,{value:H,children:A&&r?(0,p.jsx)(r,{in:o,unmountOnExit:!0,children:L}):L})}));H.displayName="Toast";var A=Object.assign(H,{Body:S,Header:B}),L=s(87812),R=function(){var e=(0,c.useState)(!0),t=(0,l.Z)(e,2),s=t[0],n=t[1],i=(0,c.useState)(!0),u=(0,l.Z)(i,2),m=u[0],h=u[1],x=(0,c.useState)(!0),f=(0,l.Z)(x,2),j=f[0],v=f[1],Z=(0,c.useState)([{time:"just now",desc:"See? Just like this."},{time:"2 seconds ago",desc:"Heads up, toasts will stack automatically"}]),g=(0,l.Z)(Z,2),b=g[0],N=g[1];return(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Bootstrap Toasts"}),(0,p.jsx)("p",{className:"text-muted font-14",children:"Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(r.Z,{lg:6,children:[(0,p.jsx)("h5",{className:"mb-2",children:"Basic"}),(0,p.jsx)("p",{className:"text-muted font-14",children:"Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your \u201ctoasted\u201d content and strongly encourage a dismiss button."}),(0,p.jsx)("div",{className:"p-3",children:(0,p.jsxs)(A,{onClose:function(){return n(!1)},show:s,delay:5e3,autohide:!0,children:[(0,p.jsxs)(A.Header,{children:[(0,p.jsx)("img",{src:L,alt:"brand-logo",height:"12",className:"me-1"}),(0,p.jsx)("strong",{className:"me-auto",children:"Adminto"}),(0,p.jsx)("small",{className:"ms-5",children:"11 mins ago"})]}),(0,p.jsx)(A.Body,{children:"Hello, world! This is a toast message."})]})})]}),(0,p.jsxs)(r.Z,{lg:6,children:[(0,p.jsx)("h5",{className:"mb-2",children:"Translucent"}),(0,p.jsx)("p",{className:"text-muted font-14",children:"Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the backdrop-filter CSS property, we\u2019ll also attempt to blur the elements under a toast."}),(0,p.jsx)("div",{className:"p-3 bg-light",children:(0,p.jsxs)(A,{onClose:function(){return h(!1)},show:m,delay:8e3,autohide:!0,children:[(0,p.jsxs)(A.Header,{children:[(0,p.jsx)("img",{src:L,alt:"brand-logo",height:"12",className:"me-1"}),(0,p.jsx)("strong",{className:"me-auto",children:"Adminto"}),(0,p.jsx)("small",{className:"ms-5",children:"11 mins ago"})]}),(0,p.jsx)(A.Body,{children:"Hello, world! This is a toast message."})]})})]})]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsxs)(r.Z,{lg:6,className:"mt-4",children:[(0,p.jsx)("h5",{className:"mb-2",children:"Stacking"}),(0,p.jsx)("p",{className:"text-muted font-14",children:"When you have multiple toasts, we default to vertiaclly stacking them in a readable manner."}),(0,p.jsx)("div",{className:"p-3",children:(0,p.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"200px"},children:(0,p.jsx)("div",{className:"toast-container",style:{position:"absolute",top:0,right:0},children:(b||[]).map((function(e,t){return(0,p.jsxs)(A,{onClose:function(){return function(e){var t=(0,o.Z)(b);t.splice(e,1),N(t)}(t)},delay:11e3,autohide:!0,children:[(0,p.jsxs)(A.Header,{children:[(0,p.jsx)("img",{src:L,alt:"brand-logo",height:"12",className:"me-1"}),(0,p.jsx)("strong",{className:"me-auto",children:"Adminto"}),(0,p.jsx)("small",{className:"ms-5",children:e.time})]}),(0,p.jsx)(A.Body,{children:e.desc})]},t.toString())}))})})})]}),(0,p.jsxs)(r.Z,{lg:6,className:"mt-4",children:[(0,p.jsx)("h5",{className:"mb-2",children:"Placement"}),(0,p.jsxs)("p",{className:"text-muted font-14",children:["Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you\u2019re only ever going to show one toast at a time, put the positioning styles right on the ",(0,p.jsx)("code",{children:".toast"}),"."]}),(0,p.jsx)("div",{className:"p-3",children:(0,p.jsx)("div",{"aria-live":"polite","aria-atomic":"true",className:"d-flex justify-content-center align-items-center",style:{minHeight:"200px"},children:(0,p.jsxs)(A,{onClose:function(){return v(!1)},show:j,children:[(0,p.jsxs)(A.Header,{children:[(0,p.jsx)("img",{src:L,alt:"brand-logo",height:"12",className:"me-1"}),(0,p.jsx)("strong",{className:"me-auto",children:"Adminto"}),(0,p.jsx)("small",{className:"ms-5",children:"1 mins ago"})]}),(0,p.jsx)(A.Body,{children:"Heads up, toasts will stack automatically"})]})})})]})]})]})})},_=s(43360),O=function(){var e=(0,c.useState)(!0),t=(0,l.Z)(e,2),s=t[0],n=t[1],a=(0,c.useState)(!0),r=(0,l.Z)(a,2),i=r[0],o=r[1],u=(0,c.useState)(!0),m=(0,l.Z)(u,2),h=m[0],x=m[1],f=(0,c.useState)(!0),j=(0,l.Z)(f,2),v=j[0],Z=j[1];return(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Custom content"}),(0,p.jsx)("p",{className:"text-muted",children:"Alternatively, you can also add additional controls and components to toasts."}),(0,p.jsxs)(A,{className:"d-flex align-items-center mt-4",show:s,onClose:function(){return n(!1)},delay:5e3,autohide:!0,children:[(0,p.jsx)(A.Body,{children:"Hello, world! This is a toast message."}),(0,p.jsx)(_.Z,{variant:"",onClick:function(){return n(!1)},className:"btn-close ms-auto me-2"})]}),(0,p.jsxs)(A,{className:"d-flex align-items-center text-white bg-primary border-0 mt-4",show:i,onClose:function(){return o(!1)},delay:8e3,autohide:!0,children:[(0,p.jsx)(A.Body,{children:"Hello, world! This is a toast message."}),(0,p.jsx)(_.Z,{variant:"",onClick:function(){return o(!1)},className:"btn-close btn-close-white ms-auto me-2"})]}),(0,p.jsx)(A,{className:"mt-4",show:h,onClose:function(){return x(!1)},delay:1e4,autohide:!0,children:(0,p.jsxs)(A.Body,{children:["Hello, world! This is a toast message.",(0,p.jsxs)("div",{className:"mt-2 pt-2 border-top",children:[(0,p.jsx)(_.Z,{className:"btn-sm me-1",children:"Take action"}),(0,p.jsx)(_.Z,{variant:"secondary",onClick:function(){return x(!1)},className:"btn-sm",children:"Close"})]})]})}),(0,p.jsx)(A,{className:"text-white bg-primary mt-4",show:v,onClose:function(){return Z(!1)},delay:12e3,autohide:!0,children:(0,p.jsxs)(A.Body,{children:["Hello, world! This is a toast message.",(0,p.jsxs)("div",{className:"mt-2 pt-2 border-top",children:[(0,p.jsx)(_.Z,{variant:"light",className:"btn-sm me-1",children:"Take action"}),(0,p.jsx)(_.Z,{variant:"secondary",onClick:function(){return Z(!1)},className:"btn-sm",children:"Close"})]})]})})]})})},F=s(21827),I=["bsPrefix","position","className","as"],D={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},M=c.forwardRef((function(e,t){var s=e.bsPrefix,n=e.position,a=e.className,r=e.as,i=void 0===r?"div":r,o=(0,m.Z)(e,I);return s=(0,w.vE)(s,"toast-container"),(0,p.jsx)(i,(0,u.Z)((0,u.Z)({ref:t},o),{},{className:x()(s,n&&"position-absolute ".concat(D[n]),a)}))}));M.displayName="ToastContainer";var V=M,z=function(){var e=(0,c.useState)("top-start"),t=(0,l.Z)(e,2),s=t[0],n=t[1];return(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Placement"}),(0,p.jsxs)("p",{className:"text-muted font-14",children:["Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you\u2019re only ever going to show one toast at a time, put the positioning styles right on the",(0,p.jsx)("code",{children:".toast"}),"."]}),(0,p.jsxs)("div",{className:"mb-3",children:[(0,p.jsx)("label",{htmlFor:"selectToastPlacement",children:"Toast placement"}),(0,p.jsx)(F.Z.Select,{id:"selectToastPlacement",className:"mt-2",onChange:function(e){return n(e.currentTarget.value)},children:(["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"]||[]).map((function(e){return(0,p.jsx)("option",{value:e,children:e},e)}))})]}),(0,p.jsx)("div",{"aria-live":"polite","aria-atomic":"true",className:"bg-light position-relative",style:{minHeight:"294px"},children:(0,p.jsx)(V,{className:"p-3",position:s,children:(0,p.jsxs)(A,{children:[(0,p.jsxs)(A.Header,{closeButton:!1,children:[(0,p.jsx)("img",{src:L,className:"me-1",alt:"",height:"12"}),(0,p.jsx)("strong",{className:"me-auto",children:"Adminto"}),(0,p.jsx)("small",{children:"11 mins ago"})]}),(0,p.jsx)(A.Body,{children:"Hello, world! This is a toast message."})]})})})]})})},U=s(2469),q=["primary","secondary","success","danger","warning","info","light","dark"],J=function(){return(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Default Alert"}),(0,p.jsxs)("p",{className:"sub-header",children:["Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight ",(0,p.jsx)("code",{children:"variant"}),"s."]}),(q||[]).map((function(e,t){return(0,p.jsxs)(U.Z,{variant:e,children:["This is a ",(0,p.jsx)("strong",{children:e})," alert\u2014check it out!"]},t.toString())}))]})})},W=function(){var e=(0,c.useState)(["primary","secondary","success","danger","warning","info","light","dark"]),t=(0,l.Z)(e,2),s=t[0],n=t[1];return(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Dismissing Alerts"}),(0,p.jsxs)("p",{className:"sub-header",children:["Add the ",(0,p.jsx)("code",{children:"dismissible"})," prop to add a functioning dismiss button to the Alert."]}),s.map((function(e,t){return(0,p.jsxs)(U.Z,{variant:e,onClose:function(){return function(e){var t=(0,o.Z)(s);t.splice(e,1),n(t)}(t)},dismissible:!0,children:[(0,p.jsxs)("strong",{children:[e," - "]})," A simple ",e," alert\u2014check it out!"]},t.toString())}))]})})},G=["primary","secondary","success","danger","warning","info","light","dark"],K=function(){return(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Custom Background Alert"}),(0,p.jsxs)("p",{className:"sub-header",children:["Use ",(0,p.jsx)("code",{children:".bg-*"}),",",(0,p.jsx)("code",{children:".border-0"})," classes."]}),(G||[]).map((function(e,t){return(0,p.jsxs)(U.Z,{variant:e,className:x()("bg-"+e,"border-0","light"===e?"text-dark":"text-white","dark"===e?"text-light":"text-white"),children:["This is a ",(0,p.jsx)("strong",{children:e})," alert\u2014check it out!"]},t.toString())}))]})})},Q=function(){var e=(0,c.useState)(["primary","secondary","success","danger","warning","info","light","dark"]),t=(0,l.Z)(e,2),s=t[0],n=t[1];return(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Dismissing Custom Background Alert"}),(0,p.jsxs)("p",{className:"sub-header",children:["Use ",(0,p.jsx)("code",{children:".bg-*"}),",",(0,p.jsx)("code",{children:".border-0"})," classes."]}),s.map((function(e,t){return(0,p.jsxs)(U.Z,{variant:e,className:x()("bg-"+e,"light"===e?"text-dark":"text-white","dark"===e?"text-light":"text-white"),onClose:function(){return function(e){var t=(0,o.Z)(s);t.splice(e,1),n(t)}(t)},dismissible:!0,children:[(0,p.jsxs)("strong",{children:[e," - "]})," A simple ",e," alert\u2014check it out!"]},t.toString())}))]})})},X=function(){var e=(0,c.useState)([]),t=(0,l.Z)(e,2),s=t[0],n=t[1];return(0,p.jsx)(d.Z,{children:(0,p.jsxs)(d.Z.Body,{children:[(0,p.jsx)("h4",{className:"header-title",children:"Alert Live example"}),(0,p.jsx)("p",{className:"sub-header",children:"Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button."}),(s||[]).map((function(e,t){return(0,p.jsx)(U.Z,{onClose:function(){return function(e){var t=(0,o.Z)(s);t.splice(e,1),n(t)}(t)},dismissible:!0,children:"Nice, you triggered this alert message!"},t.toString())})),(0,p.jsx)(_.Z,{onClick:function(){return n((function(e){return[].concat((0,o.Z)(e),[e.length])}))},children:"Show live alert"})]})})},Y=function(){return(0,i.Tt)({title:"Notifications",breadCrumbItems:[{path:"/base-ui/notifications",label:"Base UI"},{path:"/base-ui/notifications",label:"Notifications",active:!0}]}),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.Z,{children:(0,p.jsx)(r.Z,{xs:12,children:(0,p.jsx)(R,{})})}),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(r.Z,{lg:6,children:(0,p.jsx)(O,{})}),(0,p.jsx)(r.Z,{lg:6,children:(0,p.jsx)(z,{})})]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(r.Z,{lg:6,children:(0,p.jsx)(J,{})}),(0,p.jsx)(r.Z,{lg:6,children:(0,p.jsx)(W,{})})]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(r.Z,{lg:6,children:(0,p.jsx)(K,{})}),(0,p.jsx)(r.Z,{lg:6,children:(0,p.jsx)(Q,{})})]}),(0,p.jsx)(a.Z,{children:(0,p.jsx)(r.Z,{lg:6,children:(0,p.jsx)(X,{})})})]})}},49726:function(e,t,s){s.d(t,{Z:function(){return l}});var n=s(72791),a=s(55746),r=s(91683),i=Math.pow(2,31)-1;function o(e,t,s){var n=s-Date.now();e.current=n<=i?setTimeout(t,n):setTimeout((function(){return o(e,t,s)}),i)}function l(){var e=(0,a.Z)(),t=(0,n.useRef)();return(0,r.Z)((function(){return clearTimeout(t.current)})),(0,n.useMemo)((function(){var s=function(){return clearTimeout(t.current)};return{set:function(n,a){void 0===a&&(a=0),e()&&(s(),a<=i?t.current=setTimeout(n,a):o(t,n,Date.now()+a))},clear:s}}),[])}},91683:function(e,t,s){s.d(t,{Z:function(){return a}});var n=s(72791);function a(e){var t=function(e){var t=(0,n.useRef)(e);return t.current=e,t}(e);(0,n.useEffect)((function(){return function(){return t.current()}}),[])}},3070:function(e,t,s){var n=s(97357),a=!1,r=!1;try{var i={get passive(){return a=!0},get once(){return r=a=!0}};n.Z&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(o){}t.ZP=function(e,t,s,n){if(n&&"boolean"!==typeof n&&!r){var i=n.once,o=n.capture,l=s;!r&&i&&(l=s.__once||function e(n){this.removeEventListener(t,e,o),s.call(this,n)},s.__once=l),e.addEventListener(t,l,a?n:o)}e.addEventListener(t,s,n)}},97357:function(e,t){t.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},92899:function(e,t,s){var n=s(3070),a=s(36382);t.Z=function(e,t,s,r){return(0,n.ZP)(e,t,s,r),function(){(0,a.Z)(e,t,s,r)}}},78376:function(e,t,s){function n(e){return e&&e.ownerDocument||document}s.d(t,{Z:function(){return n}})},36382:function(e,t){t.Z=function(e,t,s,n){var a=n&&"boolean"!==typeof n?n.capture:n;e.removeEventListener(t,s,a),s.__once&&e.removeEventListener(t,s.__once,a)}},2469:function(e,t,s){var n=s(1413),a=s(45987),r=s(81694),i=s.n(r),o=s(72791),l=s(32592),c=s(39007),d=s(16445),u=s(10162),m=s(72709),h=s(80473),x=s(27472),f=s(66543),j=s(80184),v=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],Z=(0,x.Z)("h4");Z.displayName="DivStyledAsH4";var p=(0,f.Z)("alert-heading",{Component:Z}),g=(0,f.Z)("alert-link",{Component:d.Z}),b={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},N=o.forwardRef((function(e,t){var s=(0,l.Ch)(e,{show:"onClose"}),r=s.bsPrefix,o=s.show,d=s.closeLabel,x=s.closeVariant,f=s.className,Z=s.children,p=s.variant,g=s.onClose,b=s.dismissible,N=s.transition,y=(0,a.Z)(s,v),w=(0,u.vE)(r,"alert"),C=(0,c.Z)((function(e){g&&g(!1,e)})),k=!0===N?m.Z:N,T=(0,j.jsxs)("div",(0,n.Z)((0,n.Z)({role:"alert"},k?void 0:y),{},{ref:t,className:i()(f,w,p&&"".concat(w,"-").concat(p),b&&"".concat(w,"-dismissible")),children:[b&&(0,j.jsx)(h.Z,{onClick:C,"aria-label":d,variant:x}),Z]}));return k?(0,j.jsx)(k,(0,n.Z)((0,n.Z)({unmountOnExit:!0},y),{},{ref:void 0,in:o,children:T})):o?T:null}));N.displayName="Alert",N.defaultProps=b,t.Z=Object.assign(N,{Link:g,Heading:p})},43360:function(e,t,s){var n=s(1413),a=s(29439),r=s(45987),i=s(81694),o=s.n(i),l=s(72791),c=s(15341),d=s(10162),u=s(80184),m=["as","bsPrefix","variant","size","active","className"],h=l.forwardRef((function(e,t){var s=e.as,i=e.bsPrefix,l=e.variant,h=e.size,x=e.active,f=e.className,j=(0,r.Z)(e,m),v=(0,d.vE)(i,"btn"),Z=(0,c.FT)((0,n.Z)({tagName:s},j)),p=(0,a.Z)(Z,2),g=p[0],b=p[1].tagName;return(0,u.jsx)(b,(0,n.Z)((0,n.Z)((0,n.Z)({},j),g),{},{ref:t,className:o()(f,v,x&&"active",l&&"".concat(v,"-").concat(l),h&&"".concat(v,"-").concat(h),j.href&&j.disabled&&"disabled")}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=h},9140:function(e,t,s){s.d(t,{Z:function(){return S}});var n=s(1413),a=s(45987),r=s(81694),i=s.n(r),o=s(72791),l=s(10162),c=s(66543),d=s(27472),u=s(80184),m=["bsPrefix","className","variant","as"],h=o.forwardRef((function(e,t){var s=e.bsPrefix,r=e.className,o=e.variant,c=e.as,d=void 0===c?"img":c,h=(0,a.Z)(e,m),x=(0,l.vE)(s,"card-img");return(0,u.jsx)(d,(0,n.Z)({ref:t,className:i()(o?"".concat(x,"-").concat(o):x,r)},h))}));h.displayName="CardImg";var x=h,f=s(96040),j=["bsPrefix","className","as"],v=o.forwardRef((function(e,t){var s=e.bsPrefix,r=e.className,c=e.as,d=void 0===c?"div":c,m=(0,a.Z)(e,j),h=(0,l.vE)(s,"card-header"),x=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:h}}),[h]);return(0,u.jsx)(f.Z.Provider,{value:x,children:(0,u.jsx)(d,(0,n.Z)((0,n.Z)({ref:t},m),{},{className:i()(r,h)}))})}));v.displayName="CardHeader";var Z=v,p=["bsPrefix","className","bg","text","border","body","children","as"],g=(0,d.Z)("h5"),b=(0,d.Z)("h6"),N=(0,c.Z)("card-body"),y=(0,c.Z)("card-title",{Component:g}),w=(0,c.Z)("card-subtitle",{Component:b}),C=(0,c.Z)("card-link",{Component:"a"}),k=(0,c.Z)("card-text",{Component:"p"}),T=(0,c.Z)("card-footer"),P=(0,c.Z)("card-img-overlay"),B=o.forwardRef((function(e,t){var s=e.bsPrefix,r=e.className,o=e.bg,c=e.text,d=e.border,m=e.body,h=e.children,x=e.as,f=void 0===x?"div":x,j=(0,a.Z)(e,p),v=(0,l.vE)(s,"card");return(0,u.jsx)(f,(0,n.Z)((0,n.Z)({ref:t},j),{},{className:i()(r,v,o&&"bg-".concat(o),c&&"text-".concat(c),d&&"border-".concat(d)),children:m?(0,u.jsx)(N,{children:h}):h}))}));B.displayName="Card",B.defaultProps={body:!1};var S=Object.assign(B,{Img:x,Title:y,Subtitle:w,Body:N,Link:C,Text:k,Header:Z,Footer:T,ImgOverlay:P})},96040:function(e,t,s){var n=s(72791).createContext(null);n.displayName="CardHeaderContext",t.Z=n},80473:function(e,t,s){var n=s(1413),a=s(45987),r=s(52007),i=s.n(r),o=s(72791),l=s(81694),c=s.n(l),d=s(80184),u=["className","variant"],m={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},h=o.forwardRef((function(e,t){var s=e.className,r=e.variant,i=(0,a.Z)(e,u);return(0,d.jsx)("button",(0,n.Z)({ref:t,type:"button",className:c()("btn-close",r&&"btn-close-".concat(r),s)},i))}));h.displayName="CloseButton",h.propTypes=m,h.defaultProps={"aria-label":"Close"},t.Z=h},72709:function(e,t,s){var n,a=s(1413),r=s(45987),i=s(4942),o=s(81694),l=s.n(o),c=s(72791),d=s(27726),u=s(71380),m=s(67202),h=s(85007),x=s(80184),f=["className","children","transitionClasses"],j=(n={},(0,i.Z)(n,d.d0,"show"),(0,i.Z)(n,d.cn,"show"),n),v=c.forwardRef((function(e,t){var s=e.className,n=e.children,i=e.transitionClasses,o=void 0===i?{}:i,d=(0,r.Z)(e,f),v=(0,c.useCallback)((function(e,t){(0,m.Z)(e),null==d.onEnter||d.onEnter(e,t)}),[d]);return(0,x.jsx)(h.Z,(0,a.Z)((0,a.Z)({ref:t,addEndListener:u.Z},d),{},{onEnter:v,childRef:n.ref,children:function(e,t){return c.cloneElement(n,(0,a.Z)((0,a.Z)({},t),{},{className:l()("fade",s,n.props.className,j[e],o[e])}))}}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",t.Z=v},42391:function(e){var t=function(){};e.exports=t},87812:function(e,t,s){e.exports=s.p+"static/media/logo-sm.36666d7ee59225de503a.png"}}]);
//# sourceMappingURL=9863.f973f01d.chunk.js.map