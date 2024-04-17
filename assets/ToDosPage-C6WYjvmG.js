import{u as f,r as x,j as e,i as z,t as y,k as g,m as O,o as A}from"./index-CPF2A1o_.js";import{M}from"./GlobalStyles--PE8j3BW.js";const F=f.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .form-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0%;
    color: #191a15;
  }

  .form-input {
    width: 500px;
    height: 52px;
    padding: 16px 18px;
    border: 1px solid rgb(25, 26, 21);
    border-radius: 12px;
    color: #191a15;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0%;
    outline: none;
    background-color: transparent;
  }

  .form-textarea {
    resize: none;
    height: 116px;
    margin-bottom: 10px;
    font-family: inherit;
  }

  .form-submit {
    width: 500px;
    height: 52px;
    padding-top: 16px;
    padding-bottom: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -1%;
    color: #fbfbfb;
    border-radius: 30px;
    background-color: #3470ff;
    border: none;
    transition: 250ms linear;
  }

  .form-submit:hover {
    background-color: #255ee8;
  }
`,T=({addToDo:t})=>{const[o,l]=x.useState(""),[i,s]=x.useState(""),d=r=>{r.preventDefault(),!(o.trim()===""&&i.trim()==="")&&(t({title:o,description:i,isDone:!1,subToDos:[]}),l(""),s(""))};return e.jsxs(F,{onSubmit:d,children:[e.jsxs("label",{className:"form-label",children:[e.jsx("span",{children:"ToDo title"}),e.jsx("input",{type:"text",name:"title",className:"form-input",required:!0,value:o,onChange:r=>l(r.target.value)})]}),e.jsxs("label",{className:"form-label",children:[e.jsx("span",{children:"Description"}),e.jsx("textarea",{name:"description",className:"form-textarea form-input",value:i,onChange:r=>s(r.target.value)})]}),e.jsx("button",{type:"submit",className:"form-submit",children:"Add ToDo"})]})};var w;function D(){return D=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i])}return t},D.apply(this,arguments)}var B=function(o){return x.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none"},o),w||(w=x.createElement("path",{stroke:"#191A15",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M24 8 8 24M8 8l16 16"})))};const L=f.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(25, 26, 21, 0.6);
  transition: 250ms linear;

  .modal {
    position: absolute;
    max-height: 580px;
    max-width: 566px;
    min-width: 320px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    padding: 32px;
    overflow: auto;
    background-color: white;
  }

  .close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    transition: 250ms linear;
    border: none;
    padding: 0;
  }
`,$=document.getElementById("modal"),j=({children:t,closeModal:o})=>{x.useEffect(()=>{function i({code:d}){d==="Escape"&&o()}document.body.style.overflow="hidden";const s=window.innerWidth-document.body.offsetWidth+"px";return document.body.style.paddingRight=s,window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i),document.body.style.overflow="auto",document.body.style.paddingRight="0px"}},[o]);const l=({target:i,currentTarget:s})=>{i===s&&o()};return z.createPortal(e.jsx(L,{onClick:l,children:e.jsxs("div",{className:"modal",children:[e.jsx("button",{type:"button",className:"close-btn",onClick:o,children:e.jsx(B,{})}),t]})}),$)},R=f.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .form-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0%;
    color: #191a15;
  }

  .form-input {
    width: 500px;
    height: 52px;
    padding: 16px 18px;
    border: 1px solid rgb(25, 26, 21);
    border-radius: 12px;
    color: #191a15;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0%;
    outline: none;
    background-color: transparent;
  }

  .form-textarea {
    resize: none;
    height: 116px;
    margin-bottom: 10px;
    font-family: inherit;
  }

  .form-submit {
    width: 500px;
    height: 52px;
    padding-top: 16px;
    padding-bottom: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -1%;
    color: #FBFBFB;
    border-radius: 30px;
    background-color: #3470FF;
    border: none;
    transition: 250ms linear;
  }

  .form-submit:hover {
    background-color: #255EE8;
  }
`,P=({toDoTitle:t,toDoDescription:o,editToDo:l,closeModal:i})=>{const[s,d]=x.useState(t||""),[r,a]=x.useState(o||""),n=s===t&&r===o,m=c=>{c.preventDefault(),l(t,{title:s,description:r}),i(),d(""),a("")};return e.jsxs(R,{onSubmit:m,children:[e.jsxs("label",{className:"form-label",children:[e.jsx("span",{children:"ToDo title"}),e.jsx("input",{type:"text",name:"title",className:"form-input",required:!0,value:s,onChange:c=>d(c.target.value)})]}),e.jsxs("label",{className:"form-label",children:[e.jsx("span",{children:"Description"}),e.jsx("textarea",{name:"description",className:"form-input form-textarea",value:r,onChange:c=>a(c.target.value)})]}),e.jsx("button",{className:"form-submit",type:"submit",disabled:n,children:"Edit ToDo"})]})},W=f.li`
  width: 100%;
  padding: 16px 18px;
  border: 1px solid rgb(25, 26, 21);
  border-radius: 12px;
  text-align: start;

  .title-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .checkbox-wrapper {
    display: flex;
    gap: 8px;
  }

  .item-title {
    color: rgb(25, 26, 21);
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0%;
  }

  .item-text {
    color: rgb(25, 26, 21);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0%;
  }

  .item-description {
    margin-bottom: 10px;
  }

  .item-btn-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .item-btn {
    padding: 14px;
    border-radius: 30px;
    background: rgb(52, 112, 255);
    color: rgb(251, 251, 251);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -1%;
    border-color: transparent;
  }
`,_=({item:t,changeToDoStatus:o,removeToDo:l,editToDo:i,updateToDos:s})=>{const{title:d,description:r,isDone:a,subToDos:n}=t,[m,c]=x.useState(!1),[S,b]=x.useState(!1),k=p=>{if(n.find(u=>u.title===p.title)){y("ToDo already exists!");return}n.push(p),g(`${p.title} toDo successfully added!`),s(),b(!1)},E=p=>{const u=n.find(h=>h.title===p);u.isDone=!u.isDone,s()},N=p=>{const u=n.findIndex(h=>h.title===p);n.splice(u,1),s(),g(`${p} toDo was deleted`)},C=(p,u)=>{const h=n.findIndex(I=>I.title===p);n[h]={...n[h],...u},s(),g(`${p} toDo was edited`)};return e.jsxs(W,{children:[e.jsxs("div",{className:"title-wrapper",children:[e.jsx("h3",{className:"item-title",children:d}),e.jsxs("div",{className:"checkbox-wrapper",children:[e.jsx("p",{className:"item-text",children:"Done"}),e.jsx("input",{type:"checkbox",checked:a,onChange:()=>o(d)})]})]}),r&&e.jsx("p",{className:"item-text item-description",children:r}),e.jsxs("div",{className:"item-btn-wrapper",children:[e.jsx("button",{type:"button",onClick:()=>c(!0),className:"item-btn",children:"Edit ToDo"}),e.jsx("button",{type:"button",onClick:()=>l(d),className:"item-btn",children:"Delete ToDo"}),e.jsx("button",{type:"button",onClick:()=>b(!0),className:"item-btn",children:"Add SubToDo"})]}),n.length!==0&&e.jsx(v,{toDos:n,changeToDoStatus:E,removeToDo:N,editToDo:C,updateToDos:s,completed:a}),m&&e.jsx(j,{closeModal:()=>c(!1),children:e.jsx(P,{toDoTitle:d,toDoDescription:r,editToDo:i,closeModal:()=>c(!1)})}),S&&e.jsx(j,{closeModal:()=>b(!1),children:e.jsx(T,{addToDo:k})})]})},q=f.ul`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`,v=({toDos:t,changeToDoStatus:o,removeToDo:l,editToDo:i,updateToDos:s,completed:d})=>e.jsx(q,{children:t.map(r=>(d&&(r.isDone=d),e.jsx(_,{item:r,changeToDoStatus:o,removeToDo:l,editToDo:i,updateToDos:s},r.title)))}),K=()=>{const[t,o]=x.useState(()=>JSON.parse(window.localStorage.getItem(O))??[]);x.useEffect(()=>{(async()=>{const n=await A();console.log(n)})()},[]);const l=a=>{if(t.find(n=>n.title===a.title)){y("ToDo already exists!");return}g(`${a.title} toDo successfully added!`),o(n=>[...n,a])},i=a=>{const n=t.find(m=>m.title===a);n.isDone=!n.isDone,o([...t])},s=a=>{const n=t.filter(m=>m.title!==a);o([...n]),g(`${a} toDo was deleted`)},d=(a,n)=>{const m=t.findIndex(c=>c.title===a);t[m]={...t[m],...n},o([...t]),g(`${a} toDo was edited`)},r=()=>{o([...t])};return e.jsx(M,{children:e.jsxs("section",{className:"section",children:[e.jsx("h1",{className:"section-title",children:"ToDo Manager"}),e.jsx(T,{addToDo:l}),t.length!==0&&e.jsx(v,{toDos:t,changeToDoStatus:i,removeToDo:s,editToDo:d,updateToDos:r})]})})};export{K as default};
