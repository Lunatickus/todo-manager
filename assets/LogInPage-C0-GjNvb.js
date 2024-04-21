import{u as l,r as p,a as d,j as r,l as m}from"./index-B17r12tF.js";import{c,a as s,u,I as h,b as x}from"./index-BdaFotf_.js";import{M as f}from"./GlobalStyles-CAwb62qr.js";const b=l.form`
  .form-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }

  .form-label {
    position: relative;
  }

  .form-input {
    width: 100%;
    padding: 16px 18px;
    border: 1px solid rgba(25, 26, 21, 0.1);
    border-radius: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    letter-spacing: 0%;
    color: #191A15;
    outline: none;
  }

  .form-input::placeholder {
    color: #191A15;
  }

  .register-form-input-error {
    position: absolute;
    font-size: 14px;
    color: #ef5050;
    font-weight: 400;
    line-height: 128.5%;
  }

  .form-submit {
    width: 100%;
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

  .password-show-button {
    position: absolute;
    top: 16px;
    right: 18px;
    background-color: transparent;
    padding: 0;
    border: none;
  }

  .form-input-password {
    padding-right: 38px;
  }
`,g=c().shape({email:s().email("Enter valid email. For example user@gmail.com").required(),password:s().min(6,"Password must be at least 6 characters.").required()}),E=()=>{const[o,a]=p.useState(!1),t=d(),e=u({initialValues:{email:"",password:""},validationSchema:g,onSubmit:(i,{resetForm:n})=>{t(m(i)),n()}});return r.jsx(f,{children:r.jsx("section",{className:"section",children:r.jsxs(b,{onSubmit:e.handleSubmit,autoComplete:"off",children:[r.jsxs("div",{className:"form-input-wrapper",children:[r.jsxs("label",{className:"form-label",children:[r.jsx("input",{type:"email",name:"email",className:"form-input",style:e.touched.email&&e.errors.email&&{borderColor:"#EF5050"},onChange:e.handleChange,value:e.values.email,onBlur:e.handleBlur,placeholder:"Email"}),e.touched.email&&e.errors.email&&r.jsx("p",{className:"register-form-input-error",children:e.errors.email})]}),r.jsxs("label",{className:"form-label",children:[r.jsx("input",{type:o?"text":"password",name:"password",className:"form-input form-input-password",style:e.touched.password&&e.errors.password&&{borderColor:"#EF5050"},onChange:e.handleChange,value:e.values.password,onBlur:e.handleBlur,placeholder:"Password"}),e.touched.password&&e.errors.password&&r.jsx("p",{className:"register-form-input-error",children:e.errors.password}),r.jsx("button",{type:"button",className:"password-show-button",onClick:()=>a(!o),children:o?r.jsx(h,{size:20}):r.jsx(x,{size:20})})]})]}),r.jsx("button",{type:"submit",className:"form-submit",children:"Log In"})]})})})};export{E as default};
