(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),c=n(20),r=n.n(c),a=n(9),d=n(5),s=n(2),p=n(0);function l(){return Object(p.jsx)(u,{children:Object(p.jsx)("h1",{children:"Super Kanban 3000"})})}var u=s.b.header.withConfig({displayName:"AppHeader__Header",componentId:"sc-qmrk0v-0"})(["padding:0 12px;"]);function j(t){var e=t.onAdd,n=Object(o.useState)(""),i=Object(d.a)(n,2),c=i[0],r=i[1];return Object(p.jsxs)(b,{onSubmit:function(t){t.preventDefault(),e(c),r("")},children:[Object(p.jsx)("input",{type:"text",name:"new-todo",placeholder:"Describe the new todo",value:c,onChange:function(t){return r(t.target.value)}}),Object(p.jsx)("button",{children:"Add"})]})}var b=s.b.form.withConfig({displayName:"NewTodo__Form",componentId:"sc-1sqp046-0"})(["padding:12px;display:grid;grid-template-columns:1fr min-content;input{display:block;width:100%;}"]);function f(t){var e=t.todo,n=t.onAdvance,o=t.onDelete;return Object(p.jsxs)(h,{children:[Object(p.jsx)("p",{children:e.description}),Object(p.jsxs)(x,{children:[n&&Object(p.jsx)("button",{onClick:function(){return n(e)},children:"Advance"}),o&&Object(p.jsx)("button",{onClick:function(){return o(e.id)},children:"Delete"})]})]})}var h=s.b.section.withConfig({displayName:"TodoItem__Wrapper",componentId:"sc-6lr0op-0"})(["border:1px solid #333;box-shadow:1px 2px 4px #666;padding:12px;p{margin:0 0 12px 0;}"]),x=s.b.div.withConfig({displayName:"TodoItem__ButtonGroup",componentId:"sc-6lr0op-1"})(["display:flex;justify-content:space-between;"]);function O(t){var e=t.title,n=t.todos,o=t.onAdvance,i=t.onDelete;return Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{children:e}),Object(p.jsx)(g,{children:n.map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)(f,{todo:t,onAdvance:o,onDelete:i})},t.description)}))})]})}var g=s.b.ul.withConfig({displayName:"TodoList__List",componentId:"sc-xh6uet-0"})(["list-style:none;padding:0;margin:0;display:grid;grid-row-gap:12px;"]);function m(t){var e=t.todos,n=t.onAdvance,o=t.onDelete,i=e.filter((function(t){return"OPEN"===t.status})),c=e.filter((function(t){return"IN_PROGRESS"===t.status})),r=e.filter((function(t){return"DONE"===t.status}));return Object(p.jsxs)(v,{children:[Object(p.jsx)(O,{title:"Todo",todos:i,onAdvance:n}),Object(p.jsx)(O,{title:"Doing",todos:c,onAdvance:n}),Object(p.jsx)(O,{title:"Done",todos:r,onDelete:o})]})}var v=s.b.main.withConfig({displayName:"Boards__Wrapper",componentId:"sc-1sbig3z-0"})(["padding:0 12px;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-column-gap:12px;overflow-y:scroll;"]),y=n(4),w=n.n(y),_={OPEN:"IN_PROGRESS",IN_PROGRESS:"DONE"};function N(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1],c=function(){return w.a.get("/api/todo").then((function(t){return i(t.data)})).catch(console.error)};Object(o.useEffect)((function(){w.a.get("/api/todo").then((function(t){return i(t.data)})).catch(console.error)}),[]);return Object(p.jsxs)(I,{children:[Object(p.jsx)(l,{}),Object(p.jsx)(m,{todos:n,onAdvance:function(t){var e=Object(a.a)(Object(a.a)({},t),{},{status:_[t.status]});w.a.put("/api/todo/".concat(t.id),e).then(c).catch(console.error)},onDelete:function(t){return w.a.delete("/api/todo/".concat(t)).then(c).catch(console.error)}}),Object(p.jsx)(j,{onAdd:function(t){var e={description:t,status:"OPEN"};w.a.post("/api/todo",e).then(c).catch(console.error)}})]})}var D,I=s.b.div.withConfig({displayName:"App__PageLayout",componentId:"sc-1w71qjg-0"})(["position:fixed;top:0;left:0;width:100%;height:100%;display:grid;grid-template-rows:min-content 1fr min-content;"]),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),o(t),i(t),c(t),r(t)}))},C=n(24),S=Object(s.a)(D||(D=Object(C.a)(["\n  * {\n    box-sizing: border-box;\n  }\n  \n  html, body {\n    margin: 0;\n    font-family: sans-serif;\n  }\n"])));r.a.render(Object(p.jsxs)(i.a.StrictMode,{children:[Object(p.jsx)(S,{}),Object(p.jsx)(N,{})]}),document.getElementById("root")),A()}},[[50,1,2]]]);
//# sourceMappingURL=main.aa0e0d83.chunk.js.map