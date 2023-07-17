"use strict";(self.webpackChunkadminto_react=self.webpackChunkadminto_react||[]).push([[5136],{55136:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var i=n(89743),s=n(2677),o=n(9140),r=n(51649),l=n(3221),c=n(87812),a=n(80184),d=(0,l.$L)((function(t){var e,n=t.swal;return(0,a.jsxs)("table",{className:"table table-borderless table-centered mb-0",children:[(0,a.jsx)("thead",{className:"table-light",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{style:{width:"50%"},children:"Alert Type"}),(0,a.jsx)("th",{children:"Example"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A basic message"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-basic",onClick:function(){return n.fire({title:"Any fool can use a computer!"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A title with a text under"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-title",onClick:function(){return n.fire({title:"The Internet?",text:"That thing is still around?",icon:"question"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A success message!"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-success",onClick:function(){return n.fire({title:"Good job!",text:"You clicked the button!",icon:"success"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A modal window with a long content inside:"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-long-content",onClick:function(){return n.fire({imageUrl:"https://placeholder.pics/svg/300x1500",imageHeight:1500,imageAlt:"A tall image"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A custom positioned dialog"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-custom-position",onClick:function(){return n.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A modal with a title, an error icon, a text, and a footer"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-error",onClick:function(){return n.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:"<a href>Why do I have this issue?</a>"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:'A confirm dialog, with a function attached to the "Confirm"-button...'}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-warning",onClick:function(){return n.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#28bb4b",cancelButtonColor:"#f34e4e",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&n.fire("Deleted!","Your file has been deleted.","success")}))},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:'By passing a parameter, you can execute something else for "Cancel".'}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-params",onClick:function(){return n.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",confirmButtonClass:"btn btn-success mt-2",cancelButtonClass:"btn btn-danger ms-2 mt-2",buttonsStyling:!1}).then((function(t){t.value?n.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",confirmButtonColor:"#4a4fea"}):t.dismiss===n.DismissReason.cancel&&n.fire({title:"Cancelled",text:"Your imaginary file is safe :)",icon:"error",confirmButtonColor:"#4a4fea"})}))},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A message with custom Image Header"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-image",onClick:function(){return n.fire({title:"Admin to",text:"Responsive Bootstrap 5 Admin Dashboard",imageUrl:c,imageHeight:50,confirmButtonColor:"#4a4fea",animation:!1})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A message with auto close timer"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"sa-close",onClick:function(){return n.fire({title:"Auto close alert!",html:"I will close in <strong></strong> seconds.",timer:2e3,onBeforeOpen:function(){n.showLoading(),e=setInterval((function(){n.getContent().querySelector("strong").textContent=n.getTimerLeft()}),100)},onClose:function(){clearInterval(e)}}).then((function(t){t.dismiss===n.DismissReason.timer&&console.log("I was closed by the timer")}))},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Custom HTML description and buttons"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"custom-html-alert",onClick:function(){return n.fire({title:"<i>HTML</i> <u>example</u>",icon:"info",html:'You can use <b>bold text</b>, <a href="//coderthemes.com/">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,confirmButtonClass:"btn btn-confirm",cancelButtonClass:"btn btn-cancel ms-1",confirmButtonText:'<i class="mdi mdi-thumb-up-outline"></i> Great!',cancelButtonText:'<i class="mdi mdi-thumb-down-outline"></i>'})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A message with custom width, padding and background"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"custom-padding-width-alert",onClick:function(){return n.fire({title:"Custom width, padding, background.",width:600,padding:100,background:"#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)"})},children:"Click me"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Ajax request example"}),(0,a.jsx)("td",{children:(0,a.jsx)("button",{type:"button",className:"btn btn-info btn-xs",id:"ajax-alert",onClick:function(){return n.fire({title:"Submit email to run ajax request",input:"email",showCancelButton:!0,confirmButtonText:"Submit",showLoaderOnConfirm:!0,confirmButtonColor:"#4a4fea",cancelButtonColor:"#f34e4e",preConfirm:function(t){return new Promise((function(e,n){setTimeout((function(){"taken@example.com"===t?n("This email is already taken."):e()}),2e3)}))},allowOutsideClick:!1}).then((function(t){n.fire({icon:"success",title:"Ajax request finished!",confirmButtonColor:"#4a4fea",html:"Submitted email: "+t})}))},children:"Click me"})})]})]})]})})),u=function(){return(0,r.Tt)({title:"Sweet Alerts",breadCrumbItems:[{path:"/extended-ui/sweet-alert",label:"Extended UI"},{path:"/extended-ui/sweet-alert",label:"Sweet Alerts",active:!0}]}),(0,a.jsx)(i.Z,{children:(0,a.jsx)(s.Z,{children:(0,a.jsx)(o.Z,{children:(0,a.jsxs)(o.Z.Body,{children:[(0,a.jsx)("h4",{className:"header-title",children:"Examples"}),(0,a.jsx)("p",{className:"sub-header",children:"A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes"}),(0,a.jsx)(d,{})]})})})})}},87812:function(t,e,n){t.exports=n.p+"static/media/logo-sm.36666d7ee59225de503a.png"}}]);
//# sourceMappingURL=5136.df8db65e.chunk.js.map