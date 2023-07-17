"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[9086],{79086:function(e,l,a){a.r(l),a.d(l,{default:function(){return S}});var s=a(29439),t=a(72791),n=a(9140),c=a(89743),r=a(2677),i=a(11087),d=a(76512),o=a(56150),m=a(13587),h=a.n(m),x=a(51649),j=a(59513),u=a.n(j),b=a(81694),p=a.n(b),f=a(80184),N=(0,t.forwardRef)((function(e,l){return(0,f.jsx)("input",{type:"text",className:p()("form-control",e.inputClass),onClick:e.onClick,value:e.value,onChange:function(){console.log("date value changed")},ref:l})})),v=(0,t.forwardRef)((function(e,l){return(0,f.jsxs)("div",{className:"input-group position-relative",ref:l,children:[(0,f.jsx)("input",{type:"text",className:p()("form-control",e.inputClass),onClick:e.onClick,value:e.value,readOnly:!0}),(0,f.jsx)("span",{className:"input-group-text",children:(0,f.jsx)("i",{className:"ri-calendar-event-fill"})})]})})),g=function(e){var l=!0===(e.hideAddon||!1)?(0,f.jsx)(N,{inputClass:e.inputClass}):(0,f.jsx)(v,{inputClass:e.inputClass});return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(u(),{calendarClassName:e.calendarClassName||"shadow",selectsRange:e.selectsRange,startDate:e.startDate,endDate:e.endDate,selected:e.value,onChange:function(l){return e.onChange(l)},customInput:l,timeIntervals:e.tI,showTimeSelect:e.showTimeSelect,timeFormat:e.timeFormat||"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat||"MM/dd/yyyy",minDate:e.minDate,maxDate:e.maxDate,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})},C=function(){return(0,f.jsx)(n.Z,{children:(0,f.jsxs)(n.Z.Body,{children:[(0,f.jsx)("h4",{className:"header-title",children:(0,f.jsx)(i.rU,{rel:"noreferrer",to:"https://github.com/JedWatson/react-select",target:"_blank",children:"React select"})}),(0,f.jsx)("p",{className:"mb-1 mt-3 fw-bold text-muted",children:"Single Selection"}),(0,f.jsx)("p",{className:"text-muted font-14",children:"React-Select based Select element"}),(0,f.jsx)(d.ZP,{className:"react-select react-select-container",classNamePrefix:"react-select",options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]}),(0,f.jsx)("p",{className:"mb-1 mt-3 fw-bold text-muted",children:"Multiple Selection"}),(0,f.jsx)("p",{className:"text-muted font-14",children:"React-Select based Select (Multiple) element"}),(0,f.jsx)(d.ZP,{isMulti:!0,options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],className:"react-select react-select-container",classNamePrefix:"react-select"})]})})},_=function(){var e=(0,t.useState)([]),l=(0,s.Z)(e,2),a=l[0],c=l[1],r=(0,t.useState)([]),i=(0,s.Z)(r,2),d=i[0],m=i[1],h=[{id:1,value:"chocolate",label:"Chocolate"},{id:2,value:"strawberry",label:"Strawberry"},{id:3,value:"vanilla",label:"Vanilla"}];return(0,f.jsx)(n.Z,{children:(0,f.jsxs)(n.Z.Body,{children:[(0,f.jsx)("h4",{className:"header-title",children:(0,f.jsx)("a",{rel:"noreferrer",href:"http://ericgio.github.io/react-bootstrap-typeahead/",target:"_blank",children:"Typeahead"})}),(0,f.jsx)("p",{className:"mb-1 mt-3 fw-bold text-muted",children:"Single Selection"}),(0,f.jsx)("p",{className:"text-muted font-14",children:"Typeahead based Select element"}),(0,f.jsx)(o.pY,{id:"select2",labelKey:"label",multiple:!1,onChange:function(e){c(e)},options:h,placeholder:"Choose a state...",selected:a}),(0,f.jsx)("p",{className:"mb-1 mt-3 fw-bold text-muted",children:"Multiple Selection"}),(0,f.jsx)("p",{className:"text-muted font-14",children:"Typeahead based Select (Multiple) element"}),(0,f.jsx)(o.pY,{id:"select3",labelKey:"label",multiple:!0,onChange:function(e){m(e)},options:h,placeholder:"Choose a state...",selected:d})]})})},y=function(){var e=(0,t.useState)(new Date),l=(0,s.Z)(e,2),a=l[0],d=l[1],o=function(e){e&&d(e)};return(0,f.jsx)(n.Z,{children:(0,f.jsxs)(n.Z.Body,{children:[(0,f.jsx)("h4",{className:"header-title",children:"Date & Time Picker"}),(0,f.jsxs)("p",{className:"text-muted font-14",children:["A simple date picker using ",(0,f.jsx)(i.rU,{to:"https://reactdatepicker.com/",children:"ReactJS Datepicker"})]}),(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"Single Date"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(g,{hideAddon:!0,value:a,onChange:function(e){o(e)}})]})}),(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"Single Date with multiple months"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(g,{hideAddon:!0,monthsShown:2,value:a,onChange:function(e){o(e)}})]})})]}),(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"Custom date format"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(g,{hideAddon:!0,dateFormat:"yyyy-MM-dd",value:a,onChange:function(e){o(e)}})]})}),(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"Specific date range"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(g,{hideAddon:!0,minDate:new Date,maxDate:new Date((new Date).setDate((new Date).getDate()+7)),value:a,onChange:function(e){o(e)}})]})})]}),(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"Select Time"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(g,{hideAddon:!0,showTimeSelect:!0,timeFormat:"HH:mm",tI:60,dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time",value:a,onChange:function(e){o(e)}})]})}),(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"Time only"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(g,{hideAddon:!0,showTimeSelect:!0,showTimeSelectOnly:!0,tI:60,dateFormat:"h:mm aa",timeCaption:"Time",value:a,onChange:function(e){o(e)}})]})})]})]})})},Z=function(){return(0,f.jsx)(n.Z,{children:(0,f.jsxs)(n.Z.Body,{children:[(0,f.jsx)("h4",{className:"header-title",children:"Input Masks"}),(0,f.jsxs)("p",{className:"text-muted font-14",children:["Input masks by"," ",(0,f.jsx)(i.rU,{to:"https://github.com/text-mask/text-mask/tree/master/react#readme",children:"react-text-mask"})]}),(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"Phone Number with Area Code"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(h(),{mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(__) ____-____",className:"form-control"})]})}),(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"US Phone Number"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(h(),{mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(___) ___-____",className:"form-control"})]})})]}),(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"Date"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(h(),{mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],placeholder:"__/__/____",className:"form-control"})]})}),(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsxs)("div",{className:"mb-3",children:[(0,f.jsx)("label",{className:"form-label",children:"Time"})," ",(0,f.jsx)("br",{}),(0,f.jsx)(h(),{mask:[/\d/,/\d/,":",/\d/,/\d/,":",/\d/,/\d/],placeholder:"__:__:__",className:"form-control"})]})})]})]})})},S=function(){return(0,x.Tt)({title:"Advanced Form",breadCrumbItems:[{path:"/forms/advanced",label:"Forms"},{path:"/forms/advanced",label:"Advanced Form",active:!0}]}),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsx)(C,{})}),(0,f.jsx)(r.Z,{lg:6,children:(0,f.jsx)(_,{})})]}),(0,f.jsx)(c.Z,{children:(0,f.jsx)(r.Z,{xs:12,children:(0,f.jsx)(y,{})})}),(0,f.jsx)(c.Z,{children:(0,f.jsx)(r.Z,{xs:12,children:(0,f.jsx)(Z,{})})})]})}}}]);
//# sourceMappingURL=9086.0af100fc.chunk.js.map