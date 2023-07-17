"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[3067],{22826:function(e,a,r){r.d(a,{y:function(){return g},J:function(){return t}});var s=r(1413),l=r(72791),n=r(4259),i=r(80184),t=function(e){var a=e.defaultValues,r=e.resolver,t=e.children,o=e.onSubmit,d=e.formClass,c=(0,n.cI)({defaultValues:a,resolver:r}),m=c.handleSubmit,u=c.register,h=c.control,p=c.formState.errors;return(0,i.jsx)("form",{onSubmit:m(o),className:d,noValidate:!0,children:Array.isArray(t)?t.map((function(e){return e.props&&e.props.name?l.createElement(e.type,(0,s.Z)({},(0,s.Z)((0,s.Z)({},e.props),{},{register:u,key:e.props.name,errors:p,control:h}))):e})):t})},o=r(29439),d=r(45987),c=r(99410),m=r(21827),u=r(81694),h=r.n(u),p=["name","placeholder","refCallback","errors","control","register","className"],x=["type","name","placeholder","endIcon","register","errors","comp","rows","className","refCallback"],b=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],j=["type","label","name","placeholder","register","errors","comp","className","children","refCallback"],Z=["label","type","name","placeholder","endIcon","register","errors","control","className","labelClassName","containerClass","refCallback","children","action","rows"],v=function(e){var a=e.name,r=e.placeholder,n=e.refCallback,t=e.errors,u=(e.control,e.register),x=e.className,b=(0,d.Z)(e,p),j=(0,l.useState)(!1),Z=(0,o.Z)(j,2),v=Z[0],y=Z[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c.Z,{className:"mb-0",children:[(0,i.jsx)(m.Z.Control,(0,s.Z)((0,s.Z)({type:v?"text":"password",placeholder:r,name:a,id:a,as:"input",ref:function(e){n&&n(e)},className:x,isInvalid:!(!t||!t[a])},u?u(a):{}),{},{autoComplete:a},b)),(0,i.jsx)("div",{className:h()("input-group-text","input-group-password",{"show-password":v}),"data-password":v?"true":"false",children:(0,i.jsx)("span",{className:"password-eye",onClick:function(){y(!v)}})})]}),t&&t[a]?(0,i.jsx)(m.Z.Control.Feedback,{type:"invalid",className:"d-block",children:t[a].message}):null]})},y=function(e){var a=e.type,r=e.name,l=e.placeholder,n=e.endIcon,t=e.register,o=e.errors,c=e.comp,u=e.rows,h=e.className,p=e.refCallback,b=(0,d.Z)(e,x);return(0,i.jsx)(i.Fragment,{children:"password"===a&&n?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(v,(0,s.Z)({name:r,placeholder:l,refCallback:p,errors:o,register:t,className:h},b))}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z.Control,(0,s.Z)((0,s.Z)({type:a,placeholder:l,name:r,as:c,id:r,ref:function(e){p&&p(e)},className:h,isInvalid:!(!o||!o[r])},t?t(r):{}),{},{rows:u},b)),o&&o[r]?(0,i.jsx)(m.Z.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message}):null]})})},f=function(e){var a=e.type,r=e.label,l=e.name,n=(e.placeholder,e.register),t=e.errors,o=(e.comp,e.rows,e.className),c=e.refCallback,u=(0,d.Z)(e,b);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z.Check,(0,s.Z)((0,s.Z)({type:a,label:r,name:l,id:l,ref:function(e){c&&c(e)},className:o,isInvalid:!(!t||!t[l])},n?n(l):{}),u)),t&&t[l]?(0,i.jsx)(m.Z.Control.Feedback,{type:"invalid",className:"d-block",children:t[l].message}):null]})},C=function(e){var a=e.type,r=e.label,l=e.name,n=(e.placeholder,e.register),t=e.errors,o=(e.comp,e.className),c=e.children,u=e.refCallback,h=(0,d.Z)(e,j);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z.Select,(0,s.Z)((0,s.Z)({type:a,label:r,name:l,id:l,ref:function(e){u&&u(e)},children:c,className:o,isInvalid:!(!t||!t[l])},n?n(l):{}),h)),t&&t[l]?(0,i.jsx)(m.Z.Control.Feedback,{type:"invalid",children:t[l].message}):null]})},g=function(e){var a=e.label,r=e.type,l=e.name,n=e.placeholder,t=e.endIcon,o=e.register,c=e.errors,u=(e.control,e.className),h=e.labelClassName,p=e.containerClass,x=e.refCallback,b=e.children,j=e.action,v=e.rows,g=(0,d.Z)(e,Z),N="textarea"===r?"textarea":"select"===r?"select":"input",w=void 0===t||t;return(0,i.jsx)(i.Fragment,{children:"hidden"===r?(0,i.jsx)("input",(0,s.Z)((0,s.Z)({type:r,name:l},o?o(l):{}),g)):(0,i.jsx)(i.Fragment,{children:"select"===r?(0,i.jsxs)(m.Z.Group,{className:p,children:[a?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z.Label,{className:h,children:a}),j&&j]}):null,(0,i.jsx)(C,(0,s.Z)({type:r,name:l,placeholder:n,refCallback:x,errors:c,register:o,comp:N,className:u,children:b},g))]}):(0,i.jsx)(i.Fragment,{children:"checkbox"===r||"radio"===r?(0,i.jsx)(m.Z.Group,{className:p,children:(0,i.jsx)(f,(0,s.Z)({type:r,label:a,name:l,placeholder:n,refCallback:x,errors:c,register:o,comp:N,className:u,rows:v},g))}):(0,i.jsxs)(m.Z.Group,{className:p,children:[a?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z.Label,{className:h,children:a}),j&&j]}):null,(0,i.jsx)(y,(0,s.Z)({type:r,name:l,placeholder:n,endIcon:w,refCallback:x,errors:c,register:o,comp:N,className:u,rows:v},g))]})})})})}},84070:function(e,a,r){r.r(a);var s=r(29439),l=r(72791),n=r(9140),i=r(21827),t=r(99410),o=r(43360),d=r(89743),c=r(2677),m=r(4259),u=r(81724),h=r(61265),p=r(51649),x=r(22826),b=r(80184),j=function(){var e=(0,l.useState)(!1),a=(0,s.Z)(e,2),r=a[0],d=a[1];return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Bootstrap Validation - Normal"}),(0,b.jsx)("p",{className:"sub-header",children:"Provide valuable, actionable feedback to your users with HTML5 form validation\u2013available in all our supported browsers."}),(0,b.jsxs)(i.Z,{noValidate:!0,validated:r,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),d(!0)},children:[(0,b.jsxs)(i.Z.Group,{className:"mb-3",controlId:"validationCustom01",children:[(0,b.jsx)(i.Z.Label,{children:"First name"}),(0,b.jsx)(i.Z.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),(0,b.jsx)(i.Z.Control.Feedback,{children:"Looks good!"})]}),(0,b.jsxs)(i.Z.Group,{className:"mb-3",controlId:"validationCustom02",children:[(0,b.jsx)(i.Z.Label,{children:"Last name"}),(0,b.jsx)(i.Z.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),(0,b.jsx)(i.Z.Control.Feedback,{children:"Looks good!"})]}),(0,b.jsxs)(i.Z.Group,{className:"mb-3",controlId:"validationCustomUsername",children:[(0,b.jsx)(i.Z.Label,{children:"Username"}),(0,b.jsxs)(t.Z,{hasValidation:!0,children:[(0,b.jsx)(t.Z.Text,{id:"inputGroupPrepend",children:"@"}),(0,b.jsx)(i.Z.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),(0,b.jsx)(i.Z.Control.Feedback,{type:"invalid",children:"Please choose a username."})]})]}),(0,b.jsxs)(i.Z.Group,{className:"mb-3",controlId:"validationCustom03",children:[(0,b.jsx)(i.Z.Label,{children:"City"}),(0,b.jsx)(i.Z.Control,{type:"text",placeholder:"City",required:!0}),(0,b.jsx)(i.Z.Control.Feedback,{type:"invalid",children:"Please provide a valid city."})]}),(0,b.jsxs)(i.Z.Group,{className:"mb-3",controlId:"validationCustom04",children:[(0,b.jsx)(i.Z.Label,{children:"State"}),(0,b.jsx)(i.Z.Control,{type:"text",placeholder:"State",required:!0}),(0,b.jsx)(i.Z.Control.Feedback,{type:"invalid",children:"Please provide a valid state."})]}),(0,b.jsxs)(i.Z.Group,{className:"mb-3",controlId:"validationCustom05",children:[(0,b.jsx)(i.Z.Label,{children:"Zip"}),(0,b.jsx)(i.Z.Control,{type:"text",placeholder:"Zip",required:!0}),(0,b.jsx)(i.Z.Control.Feedback,{type:"invalid",children:"Please provide a valid zip."})]}),(0,b.jsx)(i.Z.Group,{className:"mb-3",children:(0,b.jsx)(i.Z.Check,{id:"validation-check",required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})}),(0,b.jsx)(o.Z,{type:"submit",children:"Submit form"})]})]})})},Z=function(){var e=(0,l.useState)(!1),a=(0,s.Z)(e,2),r=a[0],d=a[1];return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title",children:"Bootstrap Validation (Tooltips)"}),(0,b.jsxs)("p",{className:"sub-header",children:["If your form layout allows it, you can swap the ",(0,b.jsx)("code",{children:".valid | invalid-feedback"})," classes for"," ",(0,b.jsx)("code",{children:".valid | invalid-tooltip"})," classes to display validation feedback in a styled tooltip."]}),(0,b.jsxs)(i.Z,{noValidate:!0,validated:r,onSubmit:function(e){!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),d(!0)},children:[(0,b.jsxs)(i.Z.Group,{className:"position-relative mb-3",controlId:"validationTooltip01",children:[(0,b.jsx)(i.Z.Label,{children:"First name"}),(0,b.jsx)(i.Z.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),(0,b.jsx)(i.Z.Control.Feedback,{tooltip:!0,children:"Looks good!"})]}),(0,b.jsxs)(i.Z.Group,{className:"position-relative mb-3",controlId:"validationTooltip02",children:[(0,b.jsx)(i.Z.Label,{children:"Last name"}),(0,b.jsx)(i.Z.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),(0,b.jsx)(i.Z.Control.Feedback,{tooltip:!0,children:"Looks good!"})]}),(0,b.jsxs)(i.Z.Group,{className:"position-relative mb-3",controlId:"validationCustonTooltipme",children:[(0,b.jsx)(i.Z.Label,{children:"Username"}),(0,b.jsxs)(t.Z,{hasValidation:!0,children:[(0,b.jsx)(t.Z.Text,{id:"inputGroupPrepend",children:"@"}),(0,b.jsx)(i.Z.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),(0,b.jsx)(i.Z.Control.Feedback,{type:"invalid",tooltip:!0,children:"Please choose a username."})]})]}),(0,b.jsxs)(i.Z.Group,{className:"position-relative mb-3",controlId:"validationTooltip03",children:[(0,b.jsx)(i.Z.Label,{children:"City"}),(0,b.jsx)(i.Z.Control,{type:"text",placeholder:"City",required:!0}),(0,b.jsx)(i.Z.Control.Feedback,{type:"invalid",tooltip:!0,children:"Please provide a valid city."})]}),(0,b.jsxs)(i.Z.Group,{className:"position-relative mb-3",controlId:"validationTooltip04",children:[(0,b.jsx)(i.Z.Label,{children:"State"}),(0,b.jsx)(i.Z.Control,{type:"text",placeholder:"State",required:!0}),(0,b.jsx)(i.Z.Control.Feedback,{type:"invalid",tooltip:!0,children:"Please provide a valid state."})]}),(0,b.jsxs)(i.Z.Group,{className:"position-relative mb-3",controlId:"validationTooltip05",children:[(0,b.jsx)(i.Z.Label,{children:"Zip"}),(0,b.jsx)(i.Z.Control,{type:"text",placeholder:"Zip",required:!0}),(0,b.jsx)(i.Z.Control.Feedback,{type:"invalid",tooltip:!0,children:"Please provide a valid zip."})]}),(0,b.jsx)(o.Z,{type:"submit",children:"Submit form"})]})]})})},v=function(){var e=(0,h.X)(u.Ry().shape({username:u.Z_().required("Please enter Username"),email:u.Z_().required("Please enter Email address"),password:u.Z_().required("Please enter Password"),confirmpassword:u.Z_().oneOf([u.iH("password"),null],"Passwords don't match").required("This value is required."),checkbox:u.Xg().oneOf([!0],"Must accept Terms and Conditions")}));return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title mt-0 mb-1",children:"Basic Form"}),(0,b.jsx)("p",{className:"sub-header",children:"React validation with react-hook-form library."}),(0,b.jsxs)(x.J,{onSubmit:function(){},resolver:e,defaultValues:{username:"test"},children:[(0,b.jsx)(x.y,{label:"Username",type:"text",name:"username",placeholder:"Enter your name",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Email address",type:"email",name:"email",placeholder:"Enter email",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Password",type:"password",name:"password",placeholder:"Password",endIcon:!1,containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Confirm Password",type:"password",name:"confirmpassword",placeholder:"Password",endIcon:!1,containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Remember me",type:"checkbox",name:"checkbox",containerClass:"mb-2"}),(0,b.jsxs)("div",{className:"text-md-end mb-0",children:[(0,b.jsx)(o.Z,{variant:"primary",className:"me-1",type:"submit",children:"Submit"}),(0,b.jsx)(o.Z,{variant:"secondary",type:"reset",children:"Cancel"})]})]})]})})},y=function(){var e=(0,h.X)(u.Ry().shape({email2:u.Z_().required("Please enter Email address"),password2:u.Z_().required("Please enter Password"),confirmPassword2:u.Z_().oneOf([u.iH("password"),null],"Passwords don't match").required("This value is required."),webSite:u.Z_().required("Please enter URL"),horizontalCheck:u.Xg().oneOf([!0],"Must accept Terms and Conditions")})),a=(0,m.cI)({defaultValues:{email2:"adminto@coderthemes.com"},resolver:e}),r=a.handleSubmit,s=a.register,l=a.control,t=a.formState.errors;return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title mt-0 mb-1",children:"Horizontal Form"}),(0,b.jsx)("p",{className:"sub-header",children:"React validation with react-hook-form library."}),(0,b.jsxs)("form",{name:"chat-form",id:"chat-form",onSubmit:r((function(){})),children:[(0,b.jsxs)(i.Z.Group,{as:d.Z,className:"mb-2",children:[(0,b.jsxs)(i.Z.Label,{column:!0,md:4,children:["Email ",(0,b.jsx)("span",{className:"text-danger",children:"*"})]}),(0,b.jsx)(c.Z,{md:7,children:(0,b.jsx)(x.y,{type:"email",name:"email2",placeholder:"Email",register:s,errors:t,control:l},"email2")})]}),(0,b.jsxs)(i.Z.Group,{as:d.Z,className:"mb-2",children:[(0,b.jsxs)(i.Z.Label,{column:!0,md:4,children:["Password ",(0,b.jsx)("span",{className:"text-danger",children:"*"})]}),(0,b.jsx)(c.Z,{md:7,children:(0,b.jsx)(x.y,{type:"password",name:"password2",placeholder:"Password",register:s,endIcon:!1,errors:t,control:l},"password2")})]}),(0,b.jsxs)(i.Z.Group,{as:d.Z,className:"mb-2",children:[(0,b.jsxs)(i.Z.Label,{column:!0,md:4,children:["Confirm Password ",(0,b.jsx)("span",{className:"text-danger",children:"*"})]}),(0,b.jsx)(c.Z,{md:7,children:(0,b.jsx)(x.y,{type:"password",name:"confirmPassword2",placeholder:"Password",register:s,endIcon:!1,errors:t,control:l},"confirmPassword2")})]}),(0,b.jsxs)(i.Z.Group,{as:d.Z,className:"mb-2",children:[(0,b.jsxs)(i.Z.Label,{column:!0,md:4,children:["Web Site ",(0,b.jsx)("span",{className:"text-danger",children:"*"})]}),(0,b.jsx)(c.Z,{md:7,children:(0,b.jsx)(x.y,{type:"url",name:"webSite",placeholder:"URL",register:s,errors:t,control:l},"webSite")})]}),(0,b.jsx)(i.Z.Group,{as:d.Z,className:"mb-2",controlId:"horizontalCheck",children:(0,b.jsx)(c.Z,{md:{span:8,offset:4},children:(0,b.jsx)(x.y,{label:"Remember me",type:"checkbox",name:"horizontalCheck",register:s,errors:t,control:l},"horizontalCheck")})}),(0,b.jsx)(i.Z.Group,{as:d.Z,className:"mb-2",children:(0,b.jsxs)(c.Z,{sm:{span:8,offset:4},children:[(0,b.jsx)(o.Z,{variant:"primary",className:"me-1",type:"submit",children:"Submit"}),(0,b.jsx)(o.Z,{variant:"secondary",type:"reset",children:"Cancel"})]})})]})]})})},f=function(){var e=(0,h.X)(u.Ry().shape({requiredInput:u.Z_().required("This value is required."),email:u.Z_().required("This value is required.").email("This value should be a valid email."),equalTo1:u.Z_().required("This value is required."),equalTo2:u.Z_().oneOf([u.iH("equalTo1"),null],"This value should be the same.").required("This value is required."),url:u.Z_().required("This value is required.").url("This value should be a valid url."),digits:u.Rx().typeError("This value should be digits.").required("This value is required.").integer("This value should be digits").positive(),numberInput:u.Rx().typeError("This value should be digits.").required("This value is required."),alphaNumeric:u.Z_().required("This value is required.").matches(/^[a-zA-Z0-9]+$/,"This value should be a valid alphanumeric."),textAreaInput:u.Z_().required("This value is required.")}));return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title mt-0 mb-1",children:"Validation type"}),(0,b.jsx)("p",{className:"sub-header",children:"React validation with react-hook-form library."}),(0,b.jsxs)(x.J,{onSubmit:function(){},resolver:e,children:[(0,b.jsx)(x.y,{label:"Required",type:"text",name:"requiredInput",placeholder:"Type Something",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Equal To",type:"password",name:"equalTo1",placeholder:"Password",endIcon:!1}),(0,b.jsx)(x.y,{type:"password",name:"equalTo2",placeholder:"Re-Type Password",endIcon:!1,containerClass:"mt-1 mb-2"}),(0,b.jsx)(x.y,{label:"E-Mail",type:"email",name:"email",placeholder:"Enter a valid e-mail",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"URL",type:"url",name:"url",placeholder:"URL",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Digits",type:"text",name:"digits",placeholder:"Enter only digits",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Number",type:"text",name:"numberInput",placeholder:"Enter only numbers",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Alphanumeric",type:"text",name:"alphaNumeric",containerClass:"mb-2",placeholder:"Enter alphanumeric value"}),(0,b.jsx)(x.y,{label:"Textarea",type:"textarea",name:"textAreaInput",containerClass:"mb-2",rows:4}),(0,b.jsx)("div",{children:(0,b.jsxs)("div",{children:[(0,b.jsx)(o.Z,{variant:"primary",className:"waves-effect waves-light me-1",type:"submit",children:"Submit"}),(0,b.jsx)(o.Z,{variant:"secondary",type:"reset",className:" waves-effect",children:"Cancel"})]})})]})]})})},C=function(){var e=(0,h.X)(u.Ry().shape({minLenInput:u.Z_().required("This value is required.").min(6,"This value is too short. It should have 6 characters or more."),maxLenInput:u.Z_().required("This value is required.").max(6,"This value is too long. It should have 6 characters or fewer."),rangeLenInput:u.Z_().min(5,"This value length is invalid. It should be between 5 and 10 characters long.").max(10,"This value length is invalid. It should be between 5 and 10 characters long.").required("This value is required."),minValueInput:u.Rx().min(6,"This value should be greater than or equal to 6.").required("This value is required."),maxValueInput:u.Rx().max(6,"This value should be less than or equal to 6.").required("This value is required."),rangeValueInput:u.Rx().min(6,"This value should be between 6 and 100.").max(100,"This value should be between 6 and 100.").required("This value is required."),regEx:u.Z_().required("This value is required.").matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,"This value seems to be invalid.")}));return(0,b.jsx)(n.Z,{children:(0,b.jsxs)(n.Z.Body,{children:[(0,b.jsx)("h4",{className:"header-title mt-0 mb-1",children:"Range validation"}),(0,b.jsx)("p",{className:"sub-header",children:"React validation with react-hook-form library."}),(0,b.jsxs)(x.J,{onSubmit:function(){},resolver:e,children:[(0,b.jsx)(x.y,{label:"Min Length",type:"text",name:"minLenInput",placeholder:"Min 6 chars.",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Max Length",type:"text",name:"maxLenInput",placeholder:"Max 6 chars",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Range Length",type:"text",name:"rangeLenInput",placeholder:"Text between 5 - 10 chars length",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Min Value",type:"text",name:"minValueInput",placeholder:"Min value is 6",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Max Value",type:"text",name:"maxValueInput",placeholder:"Max value is 6",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Range Value",type:"text",name:"rangeValueInput",placeholder:"Number between 6 - 100",containerClass:"mb-2"}),(0,b.jsx)(x.y,{label:"Regular Exp",type:"text",name:"regEx",placeholder:"Hex. Color",containerClass:"mb-2"}),(0,b.jsx)("div",{children:(0,b.jsxs)("div",{children:[(0,b.jsx)(o.Z,{variant:"primary",className:"me-1 waves-effect waves-light",type:"submit",children:"Submit"}),(0,b.jsx)(o.Z,{variant:"secondary",type:"reset",className:"waves-effect",children:"Cancel"})]})})]})]})})};a.default=function(){return(0,p.Tt)({title:"Validation",breadCrumbItems:[{path:"/forms/validation",label:"Forms"},{path:"/forms/validation",label:"Validation",active:!0}]}),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(j,{})}),(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(Z,{})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(v,{})}),(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(y,{})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(f,{})}),(0,b.jsx)(c.Z,{lg:6,children:(0,b.jsx)(C,{})})]})]})}},43360:function(e,a,r){var s=r(1413),l=r(29439),n=r(45987),i=r(81694),t=r.n(i),o=r(72791),d=r(15341),c=r(10162),m=r(80184),u=["as","bsPrefix","variant","size","active","className"],h=o.forwardRef((function(e,a){var r=e.as,i=e.bsPrefix,o=e.variant,h=e.size,p=e.active,x=e.className,b=(0,n.Z)(e,u),j=(0,c.vE)(i,"btn"),Z=(0,d.FT)((0,s.Z)({tagName:r},b)),v=(0,l.Z)(Z,2),y=v[0],f=v[1].tagName;return(0,m.jsx)(f,(0,s.Z)((0,s.Z)((0,s.Z)({},b),y),{},{ref:a,className:t()(x,j,p&&"active",o&&"".concat(j,"-").concat(o),h&&"".concat(j,"-").concat(h),b.href&&b.disabled&&"disabled")}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=h},9140:function(e,a,r){r.d(a,{Z:function(){return P}});var s=r(1413),l=r(45987),n=r(81694),i=r.n(n),t=r(72791),o=r(10162),d=r(66543),c=r(27472),m=r(80184),u=["bsPrefix","className","variant","as"],h=t.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,t=e.variant,d=e.as,c=void 0===d?"img":d,h=(0,l.Z)(e,u),p=(0,o.vE)(r,"card-img");return(0,m.jsx)(c,(0,s.Z)({ref:a,className:i()(t?"".concat(p,"-").concat(t):p,n)},h))}));h.displayName="CardImg";var p=h,x=r(96040),b=["bsPrefix","className","as"],j=t.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,d=e.as,c=void 0===d?"div":d,u=(0,l.Z)(e,b),h=(0,o.vE)(r,"card-header"),p=(0,t.useMemo)((function(){return{cardHeaderBsPrefix:h}}),[h]);return(0,m.jsx)(x.Z.Provider,{value:p,children:(0,m.jsx)(c,(0,s.Z)((0,s.Z)({ref:a},u),{},{className:i()(n,h)}))})}));j.displayName="CardHeader";var Z=j,v=["bsPrefix","className","bg","text","border","body","children","as"],y=(0,c.Z)("h5"),f=(0,c.Z)("h6"),C=(0,d.Z)("card-body"),g=(0,d.Z)("card-title",{Component:y}),N=(0,d.Z)("card-subtitle",{Component:f}),w=(0,d.Z)("card-link",{Component:"a"}),k=(0,d.Z)("card-text",{Component:"p"}),q=(0,d.Z)("card-footer"),T=(0,d.Z)("card-img-overlay"),I=t.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,t=e.bg,d=e.text,c=e.border,u=e.body,h=e.children,p=e.as,x=void 0===p?"div":p,b=(0,l.Z)(e,v),j=(0,o.vE)(r,"card");return(0,m.jsx)(x,(0,s.Z)((0,s.Z)({ref:a},b),{},{className:i()(n,j,t&&"bg-".concat(t),d&&"text-".concat(d),c&&"border-".concat(c)),children:u?(0,m.jsx)(C,{children:h}):h}))}));I.displayName="Card",I.defaultProps={body:!1};var P=Object.assign(I,{Img:p,Title:g,Subtitle:N,Body:C,Link:w,Text:k,Header:Z,Footer:q,ImgOverlay:T})},96040:function(e,a,r){var s=r(72791).createContext(null);s.displayName="CardHeaderContext",a.Z=s},91991:function(e,a,r){var s=r(72791).createContext(null);s.displayName="InputGroupContext",a.Z=s},66543:function(e,a,r){r.d(a,{Z:function(){return h}});var s=r(1413),l=r(45987),n=r(81694),i=r.n(n),t=/-(.)/g;var o=r(72791),d=r(10162),c=r(80184),m=["className","bsPrefix","as"],u=function(e){return e[0].toUpperCase()+(a=e,a.replace(t,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function h(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,n=void 0===r?u(e):r,t=a.Component,h=a.defaultProps,p=o.forwardRef((function(a,r){var n=a.className,o=a.bsPrefix,u=a.as,h=void 0===u?t||"div":u,p=(0,l.Z)(a,m),x=(0,d.vE)(o,e);return(0,c.jsx)(h,(0,s.Z)({ref:r,className:i()(n,x)},p))}));return p.defaultProps=h,p.displayName=n,p}},42391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=3067.e20d9d9a.chunk.js.map