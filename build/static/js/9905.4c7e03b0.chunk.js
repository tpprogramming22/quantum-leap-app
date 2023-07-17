"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[9905],{22826:function(e,s,a){a.d(s,{y:function(){return k},J:function(){return c}});var n=a(1413),l=a(72791),r=a(4259),i=a(80184),c=function(e){var s=e.defaultValues,a=e.resolver,c=e.children,t=e.onSubmit,d=e.formClass,o=(0,r.cI)({defaultValues:s,resolver:a}),m=o.handleSubmit,x=o.register,h=o.control,u=o.formState.errors;return(0,i.jsx)("form",{onSubmit:m(t),className:d,noValidate:!0,children:Array.isArray(c)?c.map((function(e){return e.props&&e.props.name?l.createElement(e.type,(0,n.Z)({},(0,n.Z)((0,n.Z)({},e.props),{},{register:x,key:e.props.name,errors:u,control:h}))):e})):c})},t=a(29439),d=a(45987),o=a(99410),m=a(21827),x=a(81694),h=a.n(x),u=["name","placeholder","refCallback","errors","control","register","className"],j=["type","name","placeholder","endIcon","register","errors","comp","rows","className","refCallback"],p=["type","label","name","placeholder","register","errors","comp","rows","className","refCallback"],Z=["type","label","name","placeholder","register","errors","comp","className","children","refCallback"],f=["label","type","name","placeholder","endIcon","register","errors","control","className","labelClassName","containerClass","refCallback","children","action","rows"],b=function(e){var s=e.name,a=e.placeholder,r=e.refCallback,c=e.errors,x=(e.control,e.register),j=e.className,p=(0,d.Z)(e,u),Z=(0,l.useState)(!1),f=(0,t.Z)(Z,2),b=f[0],N=f[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.Z,{className:"mb-0",children:[(0,i.jsx)(m.Z.Control,(0,n.Z)((0,n.Z)({type:b?"text":"password",placeholder:a,name:s,id:s,as:"input",ref:function(e){r&&r(e)},className:j,isInvalid:!(!c||!c[s])},x?x(s):{}),{},{autoComplete:s},p)),(0,i.jsx)("div",{className:h()("input-group-text","input-group-password",{"show-password":b}),"data-password":b?"true":"false",children:(0,i.jsx)("span",{className:"password-eye",onClick:function(){N(!b)}})})]}),c&&c[s]?(0,i.jsx)(m.Z.Control.Feedback,{type:"invalid",className:"d-block",children:c[s].message}):null]})},N=function(e){var s=e.type,a=e.name,l=e.placeholder,r=e.endIcon,c=e.register,t=e.errors,o=e.comp,x=e.rows,h=e.className,u=e.refCallback,p=(0,d.Z)(e,j);return(0,i.jsx)(i.Fragment,{children:"password"===s&&r?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(b,(0,n.Z)({name:a,placeholder:l,refCallback:u,errors:t,register:c,className:h},p))}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z.Control,(0,n.Z)((0,n.Z)({type:s,placeholder:l,name:a,as:o,id:a,ref:function(e){u&&u(e)},className:h,isInvalid:!(!t||!t[a])},c?c(a):{}),{},{rows:x},p)),t&&t[a]?(0,i.jsx)(m.Z.Control.Feedback,{type:"invalid",className:"d-block",children:t[a].message}):null]})})},v=function(e){var s=e.type,a=e.label,l=e.name,r=(e.placeholder,e.register),c=e.errors,t=(e.comp,e.rows,e.className),o=e.refCallback,x=(0,d.Z)(e,p);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z.Check,(0,n.Z)((0,n.Z)({type:s,label:a,name:l,id:l,ref:function(e){o&&o(e)},className:t,isInvalid:!(!c||!c[l])},r?r(l):{}),x)),c&&c[l]?(0,i.jsx)(m.Z.Control.Feedback,{type:"invalid",className:"d-block",children:c[l].message}):null]})},y=function(e){var s=e.type,a=e.label,l=e.name,r=(e.placeholder,e.register),c=e.errors,t=(e.comp,e.className),o=e.children,x=e.refCallback,h=(0,d.Z)(e,Z);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z.Select,(0,n.Z)((0,n.Z)({type:s,label:a,name:l,id:l,ref:function(e){x&&x(e)},children:o,className:t,isInvalid:!(!c||!c[l])},r?r(l):{}),h)),c&&c[l]?(0,i.jsx)(m.Z.Control.Feedback,{type:"invalid",children:c[l].message}):null]})},k=function(e){var s=e.label,a=e.type,l=e.name,r=e.placeholder,c=e.endIcon,t=e.register,o=e.errors,x=(e.control,e.className),h=e.labelClassName,u=e.containerClass,j=e.refCallback,p=e.children,Z=e.action,b=e.rows,k=(0,d.Z)(e,f),C="textarea"===a?"textarea":"select"===a?"select":"input",w=void 0===c||c;return(0,i.jsx)(i.Fragment,{children:"hidden"===a?(0,i.jsx)("input",(0,n.Z)((0,n.Z)({type:a,name:l},t?t(l):{}),k)):(0,i.jsx)(i.Fragment,{children:"select"===a?(0,i.jsxs)(m.Z.Group,{className:u,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z.Label,{className:h,children:s}),Z&&Z]}):null,(0,i.jsx)(y,(0,n.Z)({type:a,name:l,placeholder:r,refCallback:j,errors:o,register:t,comp:C,className:x,children:p},k))]}):(0,i.jsx)(i.Fragment,{children:"checkbox"===a||"radio"===a?(0,i.jsx)(m.Z.Group,{className:u,children:(0,i.jsx)(v,(0,n.Z)({type:a,label:s,name:l,placeholder:r,refCallback:j,errors:o,register:t,comp:C,className:x,rows:b},k))}):(0,i.jsxs)(m.Z.Group,{className:u,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.Z.Label,{className:h,children:s}),Z&&Z]}):null,(0,i.jsx)(N,(0,n.Z)({type:a,name:l,placeholder:r,endIcon:w,refCallback:j,errors:o,register:t,comp:C,className:x,rows:b},k))]})})})})}},79905:function(e,s,a){a.r(s);var n=a(29439),l=a(72791),r=a(9140),i=a(74342),c=a(69532),t=a(21827),d=a(89743),o=a(2677),m=a(43360),x=a(3593),h=a(11087),u=a(42555),j=a(81724),p=a(61265),Z=a(4259),f=a(51649),b=a(22826),N=a(80184),v=function(){var e=(0,l.useState)("account"),s=(0,n.Z)(e,2),a=s[0],x=s[1];return(0,N.jsx)(r.Z,{children:(0,N.jsxs)(r.Z.Body,{children:[(0,N.jsx)("h4",{className:"header-title mb-3",children:" Basic Wizard"}),(0,N.jsx)(u.en,{children:(0,N.jsx)(u.Rg,{children:(0,N.jsxs)(i.Z.Container,{id:"left-tabs-example",defaultActiveKey:"account",activeKey:a||"account",onSelect:function(e){return x(e)},children:[(0,N.jsxs)(c.Z,{variant:"pills",as:"ul",className:"nav-justified bg-light form-wizard-header mb-4",children:[(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"account",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-account-circle me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Account"})]})}),(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"profile",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-face-profile me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Profile"})]})}),(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"contact",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-checkbox-marked-circle-outline me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Finish"})]})})]}),(0,N.jsxs)(i.Z.Content,{className:"pb-0 mb-0 pt-0",children:[(0,N.jsx)(i.Z.Pane,{eventKey:"account",children:(0,N.jsx)(u.h8,{id:"account",render:function(e){var s=e.next;return(0,N.jsxs)(t.Z,{children:[(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"uname",column:!0,md:3,children:"User name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"text",name:"uname",id:"uname",defaultValue:"Coderthemes"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"examplePassword",column:!0,md:3,children:"Password"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"password",name:"examplePassword",id:"examplePassword1",defaultValue:"12345"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"examplerePassword",column:!0,md:3,children:"Re-Password"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"password",name:"exampleRepassword",id:"examplerePassword1",defaultValue:"12345"})})]}),(0,N.jsx)("ul",{className:"pager wizard mb-0 list-inline text-end mt-2",children:(0,N.jsx)("li",{className:"next list-inline-item",children:(0,N.jsx)(m.Z,{onClick:function(){x("profile"),s()},variant:"secondary",children:"Next"})})})]})}})}),(0,N.jsx)(i.Z.Pane,{eventKey:"profile",children:(0,N.jsx)(u.h8,{id:"profile",render:function(e){var s=e.next,a=e.previous;return(0,N.jsxs)(t.Z,{children:[(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"fname",column:!0,md:3,children:"First name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"text",name:"fname",id:"fname1",defaultValue:"Francis"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"lname",column:!0,md:3,children:"Last name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"text",name:"lname",id:"lname1",defaultValue:"Brinkman"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"phone",column:!0,md:3,children:"Email"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"email",name:"exampleemail",id:"exampleemail",defaultValue:"cory1979@hotmail.com"})})]}),(0,N.jsxs)("ul",{className:"pager wizard mb-0 list-inline mt-2",children:[(0,N.jsx)("li",{className:"previous list-inline-item",children:(0,N.jsx)(m.Z,{onClick:function(){x("account"),a()},variant:"secondary",children:"Previous"})}),(0,N.jsx)("li",{className:"next list-inline-item float-end",children:(0,N.jsx)(m.Z,{onClick:function(){x("contact"),s()},variant:"secondary",children:"Next"})})]})]})}})}),(0,N.jsx)(i.Z.Pane,{eventKey:"contact",children:(0,N.jsx)(u.h8,{id:"contact",render:function(e){var s=e.previous;return(0,N.jsxs)(t.Z,{children:[(0,N.jsx)(d.Z,{children:(0,N.jsx)(o.Z,{sm:12,children:(0,N.jsxs)("div",{className:"text-center",children:[(0,N.jsx)("h2",{className:"mt-0",children:(0,N.jsx)("i",{className:"mdi mdi-check-all"})}),(0,N.jsx)("h3",{className:"mt-0",children:"Thank you !"}),(0,N.jsx)("p",{className:"w-75 mb-2 mx-auto",children:"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet."}),(0,N.jsx)("div",{className:"mb-3",children:(0,N.jsxs)(t.Z.Check,{type:"checkbox",id:"check-box-1",className:"d-inline-block",children:[(0,N.jsx)(t.Z.Check.Input,{type:"checkbox"})," ",(0,N.jsx)(t.Z.Check.Label,{children:"I agree with the Terms and Conditions"})]})})]})})}),(0,N.jsxs)("ul",{className:"pager wizard mb-0 list-inline",children:[(0,N.jsx)("li",{className:"previous list-inline-item",children:(0,N.jsx)(m.Z,{onClick:function(){x("profile"),s()},variant:"secondary",children:"Previous"})}),(0,N.jsx)("li",{className:"next list-inline-item float-end",children:(0,N.jsx)(m.Z,{variant:"primary",children:"Submit"})})]})]})}})})]})]})})})]})})},y=function(){var e=(0,l.useState)("account"),s=(0,n.Z)(e,2),a=s[0],x=s[1];return(0,N.jsx)(r.Z,{children:(0,N.jsxs)(r.Z.Body,{children:[(0,N.jsx)("h4",{className:"header-title mb-3",children:" Button Wizard"}),(0,N.jsx)(u.en,{children:(0,N.jsx)(u.Rg,{children:(0,N.jsxs)(i.Z.Container,{id:"left-tabs-example",defaultActiveKey:"account",activeKey:a||"account",onSelect:function(e){return x(e)},children:[(0,N.jsxs)(c.Z,{variant:"pills",as:"ul",className:"nav-justified bg-light form-wizard-header mb-4",children:[(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"account",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-account-circle me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Account"})]})}),(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"profile",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-face-profile me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Profile"})]})}),(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"contact",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-checkbox-marked-circle-outline me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Finish"})]})})]}),(0,N.jsxs)(i.Z.Content,{className:"pb-0 mb-0 pt-0",children:[(0,N.jsx)(i.Z.Pane,{eventKey:"account",children:(0,N.jsx)(u.h8,{id:"account",render:function(e){var s=e.next;return(0,N.jsxs)(t.Z,{children:[(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"uname2",column:!0,md:3,children:"User name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"text",name:"uname2",id:"uname2",defaultValue:"Coderthemes"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"examplePassword",column:!0,md:3,children:"Password"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"password",name:"examplePassword",id:"examplePassword2",placeholder:"password placeholder",defaultValue:"12345"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"examplerePassword",column:!0,md:3,children:"Re-Password"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"password",name:"exampleRepassword",id:"examplerePassword2",placeholder:"password",defaultValue:"12345"})})]}),(0,N.jsxs)("div",{className:"float-end",children:[(0,N.jsx)(m.Z,{onClick:function(){x("profile"),s()},variant:"secondary",className:"button-next me-1",children:"Next"}),(0,N.jsx)(m.Z,{onClick:function(){x("contact")},variant:"secondary",className:"button-last",children:"Last"})]}),(0,N.jsxs)("div",{className:"float-start",children:[(0,N.jsx)(m.Z,{onClick:function(){x("account")},variant:"secondary",className:"button-first me-1",children:"First"}),(0,N.jsx)(m.Z,{disabled:!0,variant:"secondary",className:"button-previous",children:"Previous"})]}),(0,N.jsx)("div",{className:"clearfix"})]})}})}),(0,N.jsx)(i.Z.Pane,{eventKey:"profile",children:(0,N.jsx)(u.h8,{id:"profile",render:function(e){var s=e.next,a=e.previous;return(0,N.jsxs)(t.Z,{children:[(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"fname2",column:!0,md:3,children:"First name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"text",name:"fname2",id:"fname2",placeholder:"Enter first name"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"lname2",column:!0,md:3,children:"Last name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"text",name:"lname2",id:"lname2",placeholder:"enter last name"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"exampleemail2",column:!0,md:3,children:"Email"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"email",name:"exampleemail2",id:"exampleemail2",defaultValue:"cory1979@hotmail.com"})})]}),(0,N.jsxs)("div",{className:"float-end",children:[(0,N.jsx)(m.Z,{onClick:function(){x("contact"),s()},variant:"secondary",className:"button-next me-1",children:"Next"}),(0,N.jsx)(m.Z,{onClick:function(){x("contact")},variant:"secondary",className:"button-last",children:"Last"})]}),(0,N.jsxs)("div",{className:"float-start",children:[(0,N.jsx)(m.Z,{onClick:function(){x("account")},variant:"secondary",className:"button-first me-1",children:"First"}),(0,N.jsx)(m.Z,{onClick:function(){x("account"),a()},variant:"secondary",className:"button-previous",children:"Previous"})]}),(0,N.jsx)("div",{className:"clearfix"})]})}})}),(0,N.jsx)(i.Z.Pane,{eventKey:"contact",children:(0,N.jsx)(u.h8,{id:"contact",render:function(e){var s=e.previous;return(0,N.jsxs)(t.Z,{children:[(0,N.jsx)(d.Z,{children:(0,N.jsx)(o.Z,{sm:12,children:(0,N.jsxs)("div",{className:"text-center",children:[(0,N.jsx)("h2",{className:"mt-0",children:(0,N.jsx)("i",{className:"mdi mdi-check-all"})}),(0,N.jsx)("h3",{className:"mt-0",children:"Thank you !"}),(0,N.jsx)("p",{className:"w-75 mb-2 mx-auto",children:"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet."}),(0,N.jsx)("div",{className:"mb-3",children:(0,N.jsxs)(t.Z.Check,{type:"checkbox",id:"check-box-2",className:"d-inline-block",children:[(0,N.jsx)(t.Z.Check.Input,{type:"checkbox"})," ",(0,N.jsx)(t.Z.Check.Label,{children:"I agree with the Terms and Conditions"})]})})]})})}),(0,N.jsxs)("div",{className:"float-end",children:[(0,N.jsx)(m.Z,{disabled:!0,variant:"secondary",className:"button-next me-1",children:"Next"}),(0,N.jsx)(m.Z,{onClick:function(){x("contact")},variant:"secondary",className:"button-last",children:"Last"})]}),(0,N.jsxs)("div",{className:"float-start",children:[(0,N.jsx)(m.Z,{onClick:function(){x("account")},variant:"secondary",className:"button-first me-1",children:"First"}),(0,N.jsx)(m.Z,{onClick:function(){x("profile"),s()},variant:"secondary",className:"button-previous",children:"Previous"})]}),(0,N.jsx)("div",{className:"clearfix"})]})}})})]})]})})})]})})},k=function(){var e=(0,l.useState)("account"),s=(0,n.Z)(e,2),a=s[0],j=s[1],p=["account","profile","contact"];return(0,N.jsx)(r.Z,{children:(0,N.jsxs)(r.Z.Body,{children:[(0,N.jsx)("h4",{className:"header-title mb-3",children:"Wizard with Progress bar"}),(0,N.jsx)(u.en,{render:function(e){e.step,e.steps;return(0,N.jsx)(u.Rg,{children:(0,N.jsxs)(i.Z.Container,{id:"left-tabs-example",defaultActiveKey:"account",activeKey:a||"account",onSelect:function(e){return j(e)},children:[(0,N.jsxs)(c.Z,{variant:"pills",as:"ul",className:"nav-justified bg-light form-wizard-header mb-3",children:[(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"account",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-account-circle me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Account"})]})}),(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"profile",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-face-profile me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Profile"})]})}),(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"contact",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-checkbox-marked-circle-outline me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Finish"})]})})]}),(0,N.jsx)(x.Z,{animated:!0,striped:!0,variant:"success",now:(p.indexOf(a)+1)/p.length*100,className:"mb-3",style:{height:7}}),(0,N.jsxs)(i.Z.Content,{className:"pb-0 mb-0 pt-0",children:[(0,N.jsx)(i.Z.Pane,{eventKey:"account",children:(0,N.jsx)(u.h8,{id:"account",render:function(e){var s=e.next;return(0,N.jsxs)(t.Z,{children:[(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"uname",column:!0,md:3,children:"User name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"text",name:"uname",id:"uname3",defaultValue:"Coderthemes"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"examplePassword",column:!0,md:3,children:"Password"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"password",name:"examplePassword",id:"examplePassword3",defaultValue:"12345"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"examplerePassword",column:!0,md:3,children:"Re-Password"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"password",name:"exampleRepassword",id:"examplerePassword3",defaultValue:"12345"})})]}),(0,N.jsx)("ul",{className:"pager wizard mb-0 list-inline text-end mt-2",children:(0,N.jsx)("li",{className:"next list-inline-item",children:(0,N.jsx)(m.Z,{onClick:function(){j("profile"),s()},variant:"secondary",children:"Next"})})})]})}})}),(0,N.jsx)(i.Z.Pane,{eventKey:"profile",children:(0,N.jsx)(u.h8,{id:"profile",render:function(e){var s=e.next,a=e.previous;return(0,N.jsxs)(t.Z,{children:[(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"fname",column:!0,md:3,children:"First name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"text",name:"fname",id:"fname3",defaultValue:"Francis"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"lname",column:!0,md:3,children:"Last name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"text",name:"lname",id:"lname3",defaultValue:"Brinkman"})})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{htmlFor:"phone",column:!0,md:3,children:"Email"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(t.Z.Control,{type:"email",name:"exampleemail",id:"exampleemail3",defaultValue:"cory1979@hotmail.com"})})]}),(0,N.jsxs)("ul",{className:"pager wizard mb-0 list-inline mt-2",children:[(0,N.jsx)("li",{className:"previous list-inline-item",children:(0,N.jsx)(m.Z,{onClick:function(){j("account"),a()},variant:"secondary",children:"Previous"})}),(0,N.jsx)("li",{className:"next list-inline-item float-end",children:(0,N.jsx)(m.Z,{onClick:function(){j("contact"),s()},variant:"secondary",children:"Next"})})]})]})}})}),(0,N.jsx)(i.Z.Pane,{eventKey:"contact",children:(0,N.jsx)(u.h8,{id:"contact",render:function(e){var s=e.previous;return(0,N.jsxs)(t.Z,{children:[(0,N.jsx)(d.Z,{children:(0,N.jsx)(o.Z,{sm:12,children:(0,N.jsxs)("div",{className:"text-center",children:[(0,N.jsx)("h2",{className:"mt-0",children:(0,N.jsx)("i",{className:"mdi mdi-check-all"})}),(0,N.jsx)("h3",{className:"mt-0",children:"Thank you !"}),(0,N.jsx)("p",{className:"w-75 mb-2 mx-auto",children:"Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet."}),(0,N.jsx)("div",{className:"mb-3",children:(0,N.jsxs)(t.Z.Check,{type:"checkbox",id:"check-box-3",className:"d-inline-block",children:[(0,N.jsx)(t.Z.Check.Input,{type:"checkbox"})," ",(0,N.jsx)(t.Z.Check.Label,{children:"I agree with the Terms and Conditions"})]})})]})})}),(0,N.jsxs)("ul",{className:"pager wizard mb-0 list-inline",children:[(0,N.jsx)("li",{className:"previous list-inline-item",children:(0,N.jsx)(m.Z,{onClick:function(){j("profile"),s()},variant:"secondary",children:"Previous"})}),(0,N.jsx)("li",{className:"next list-inline-item float-end",children:(0,N.jsx)(m.Z,{variant:"primary",children:"Submit"})})]})]})}})})]})]})})}})]})})},C=function(){var e=(0,l.useState)("account"),s=(0,n.Z)(e,2),a=s[0],x=s[1],f=(0,p.X)(j.Ry().shape({uname:j.Z_().required(""),password:j.Z_().required(""),rePassword:j.Z_().required("")})),v=(0,p.X)(j.Ry().shape({firstname:j.Z_().required(""),lastname:j.Z_().required(""),exampleemail4:j.Z_().required("").email("Enter valid email")})),y=(0,Z.cI)({resolver:f}),k=(0,Z.cI)({resolver:v});return(0,N.jsx)(r.Z,{children:(0,N.jsxs)(r.Z.Body,{children:[(0,N.jsx)("h4",{className:"header-title mb-3",children:"Wizard with Validation"}),(0,N.jsx)(u.en,{render:function(e){e.step,e.steps;return(0,N.jsx)(u.Rg,{children:(0,N.jsxs)(i.Z.Container,{id:"left-tabs-example",defaultActiveKey:"account",activeKey:a||"account",children:[(0,N.jsxs)(c.Z,{variant:"pills",as:"ul",className:"nav-justified bg-light form-wizard-header mb-3",children:[(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"account",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-account-circle me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Account"})]})}),(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"profile",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-face-profile me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Profile"})]})}),(0,N.jsx)(c.Z.Item,{as:"li",children:(0,N.jsxs)(c.Z.Link,{as:h.rU,to:"#",eventKey:"contact",className:"rounded-0 pt-2 pb-2",children:[(0,N.jsx)("i",{className:"mdi mdi-checkbox-marked-circle-outline me-1"}),(0,N.jsx)("span",{className:"d-none d-sm-inline",children:"Finish"})]})})]}),(0,N.jsxs)(i.Z.Content,{className:"pb-0 mb-0 pt-0",children:[(0,N.jsx)(i.Z.Pane,{eventKey:"account",children:(0,N.jsx)(u.h8,{id:"account",render:function(e){var s=e.next;return(0,N.jsxs)("form",{name:"login-form",id:"login-form",onSubmit:y.handleSubmit((function(){x("profile"),s()})),children:[(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{column:!0,md:3,children:"Username"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(b.y,{type:"text",name:"uname",id:"uname4",register:y.register,errors:y.formState.errors,control:y.control},"uname4")})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{column:!0,md:3,children:"Password"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(b.y,{type:"password",name:"password",endIcon:!1,register:y.register,errors:y.formState.errors,control:y.control},"password")})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{column:!0,md:3,children:"Re Password"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(b.y,{type:"password",name:"rePassword",endIcon:!1,register:y.register,errors:y.formState.errors,control:y.control},"repassword")})]}),(0,N.jsx)("ul",{className:"list-inline wizard mb-0",children:(0,N.jsx)("li",{className:"next list-inline-item float-end",children:(0,N.jsx)(m.Z,{variant:"secondary",type:"submit",children:"Next"})})})]})}})}),(0,N.jsx)(i.Z.Pane,{eventKey:"profile",children:(0,N.jsx)(u.h8,{id:"profile",render:function(e){var s=e.next,a=e.previous;return(0,N.jsxs)("form",{name:"profile-form",id:"profile-form",onSubmit:k.handleSubmit((function(){x("contact"),s()})),children:[(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{column:!0,md:3,children:"First Name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(b.y,{type:"text",name:"firstname",register:k.register,errors:k.formState.errors,control:k.control},"firstname")})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{column:!0,md:3,children:"Last Name"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(b.y,{type:"text",name:"lastname",register:k.register,errors:k.formState.errors,control:k.control},"lastname")})]}),(0,N.jsxs)(t.Z.Group,{as:d.Z,className:"mb-3",children:[(0,N.jsx)(t.Z.Label,{column:!0,md:3,children:"Email"}),(0,N.jsx)(o.Z,{md:9,children:(0,N.jsx)(b.y,{type:"email",name:"exampleemail4",register:k.register,errors:k.formState.errors,control:k.control},"exampleemail4")})]}),(0,N.jsxs)("ul",{className:"list-inline wizard mb-0",children:[(0,N.jsx)("li",{className:"previous list-inline-item",children:(0,N.jsx)(m.Z,{onClick:function(){x("account"),a()},variant:"secondary",children:"Previous"})}),(0,N.jsx)("li",{className:"next list-inline-item float-end",children:(0,N.jsx)(m.Z,{variant:"secondary",type:"submit",children:"Next"})})]})]})}})}),(0,N.jsx)(i.Z.Pane,{eventKey:"contact",children:(0,N.jsx)(u.h8,{id:"contact",render:function(e){var s=e.previous;return(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(o.Z,{sm:12,children:(0,N.jsxs)("div",{className:"text-center",children:[(0,N.jsx)("h2",{className:"mt-0",children:(0,N.jsx)("i",{className:"mdi mdi-check-all"})}),(0,N.jsx)("h3",{className:"mt-0",children:"Thank you !"}),(0,N.jsx)("p",{className:"w-75 mb-2 mx-auto",children:"Quisque nec turpis at urna dictum luctus.Suspendisse convallis dignissim eros at volutpat.In egestas mattis dui.Aliquam mattis dictum aliquet."}),(0,N.jsx)("div",{className:"mb-3",children:(0,N.jsxs)(t.Z.Check,{type:"checkbox",id:"check-box-4",className:"d-inline-block",children:[(0,N.jsx)(t.Z.Check.Input,{type:"checkbox"})," ",(0,N.jsx)(t.Z.Check.Label,{children:"I agree with the Terms and Conditions"})]})})]})}),(0,N.jsx)(o.Z,{sm:12,children:(0,N.jsxs)("ul",{className:"list-inline wizard mb-0",children:[(0,N.jsx)("li",{className:"previous list-inline-item",children:(0,N.jsx)(m.Z,{onClick:function(){x("profile"),s()},variant:"secondary",children:"Previous"})}),(0,N.jsx)("li",{className:"next list-inline-item float-end",children:(0,N.jsx)(m.Z,{variant:"secondary",children:"Submit"})})]})})]})}})})]})]})})}})]})})};s.default=function(){return(0,f.Tt)({title:"Form Wizard",breadCrumbItems:[{path:"/forms/wizard",label:"Forms"},{path:"/forms/wizard",label:"Form Wizard",active:!0}]}),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(o.Z,{xl:6,children:(0,N.jsx)(v,{})}),(0,N.jsx)(o.Z,{xl:6,children:(0,N.jsx)(y,{})})]}),(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(o.Z,{xl:6,children:(0,N.jsx)(k,{})}),(0,N.jsx)(o.Z,{lg:6,children:(0,N.jsx)(C,{})})]})]})}}}]);
//# sourceMappingURL=9905.4c7e03b0.chunk.js.map