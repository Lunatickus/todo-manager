import{u as s,r as m,a as p,j as r,b as d}from"./index-B17r12tF.js";import{c,a as o,u as h,I as u,b as g}from"./index-BdaFotf_.js";import{M as x}from"./GlobalStyles-CAwb62qr.js";s.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -2%;
  color: #191A15;
  margin-bottom: 20px;
`;s.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 0%;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 40px;
`;const b=s.form`
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
`,f=c().shape({name:o().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),email:o().email("Enter valid email. For example user@gmail.com").required(),password:o().min(6,"Password must be at least 6 characters.").required()}),C=()=>{const[a,t]=m.useState(!1),n=p(),e=h({initialValues:{name:"",email:"",password:""},validationSchema:f,onSubmit:(i,{resetForm:l})=>{n(d(i)),l()}});return r.jsx(x,{children:r.jsx("section",{className:"section",children:r.jsxs(b,{onSubmit:e.handleSubmit,autoComplete:"off",children:[r.jsxs("div",{className:"form-input-wrapper",children:[r.jsxs("label",{className:"form-label",children:[r.jsx("input",{type:"text",name:"name",className:"form-input",style:e.touched.name&&e.errors.name&&{borderColor:"#EF5050"},onChange:e.handleChange,value:e.values.name,onBlur:e.handleBlur,placeholder:"Name"}),e.touched.name&&e.errors.name&&r.jsx("p",{className:"register-form-input-error",children:e.errors.name})]}),r.jsxs("label",{className:"form-label",children:[r.jsx("input",{type:"email",name:"email",className:"form-input",style:e.touched.email&&e.errors.email&&{borderColor:"#EF5050"},onChange:e.handleChange,value:e.values.email,onBlur:e.handleBlur,placeholder:"Email"}),e.touched.email&&e.errors.email&&r.jsx("p",{className:"register-form-input-error",children:e.errors.email})]}),r.jsxs("label",{className:"form-label",children:[r.jsx("input",{type:a?"text":"password",name:"password",className:"form-input form-input-password",style:e.touched.password&&e.errors.password&&{borderColor:"#EF5050"},onChange:e.handleChange,value:e.values.password,onBlur:e.handleBlur,placeholder:"Password"}),e.touched.password&&e.errors.password&&r.jsx("p",{className:"register-form-input-error",children:e.errors.password}),r.jsx("button",{type:"button",className:"password-show-button",onClick:()=>t(!a),children:a?r.jsx(u,{size:20}):r.jsx(g,{size:20})})]})]}),r.jsx("button",{type:"submit",className:"form-submit",children:"Sign Up"})]})})})};export{C as default};
