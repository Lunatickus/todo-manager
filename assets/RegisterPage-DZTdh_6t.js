import{u as l,a as d,b as u,c,Q as h,t as g,r as x,j as r}from"./index-CPF2A1o_.js";import{u as b,c as f,a as i,b as w,I as j,d as y}from"./index-CashrPcU.js";import{M as N}from"./GlobalStyles--PE8j3BW.js";l.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -2%;
  color: #191A15;
  margin-bottom: 20px;
`;l.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: 0%;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 40px;
`;const C=l.form`
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
`;function E(){const o=d(),t=u(),{mutate:s,isPending:n}=b({mutationFn:a=>c(a),onSuccess:a=>{o.setQueryData([h.user],a),t("/toDos")},onError:a=>{g(a)}});return{signUpMutation:s,isPending:n}}const S=f().shape({name:i().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),email:i().email("Enter valid email. For example user@gmail.com").required(),password:i().min(6,"Password must be at least 6 characters.").required()}),B=()=>{const[o,t]=x.useState(!1),{isPending:s,signUpMutation:n}=E(),e=w({initialValues:{name:"",email:"",password:""},validationSchema:S,onSubmit:(m,{resetForm:p})=>{n(m),p()}});return r.jsx(N,{children:r.jsxs("section",{className:"section",children:[s&&r.jsx("h1",{children:"Loading..."}),r.jsxs(C,{onSubmit:e.handleSubmit,autoComplete:"off",children:[r.jsxs("div",{className:"form-input-wrapper",children:[r.jsxs("label",{className:"form-label",children:[r.jsx("input",{type:"text",name:"name",className:"form-input",style:e.touched.name&&e.errors.name&&{borderColor:"#EF5050"},onChange:e.handleChange,value:e.values.name,onBlur:e.handleBlur,placeholder:"Name"}),e.touched.name&&e.errors.name&&r.jsx("p",{className:"register-form-input-error",children:e.errors.name})]}),r.jsxs("label",{className:"form-label",children:[r.jsx("input",{type:"email",name:"email",className:"form-input",style:e.touched.email&&e.errors.email&&{borderColor:"#EF5050"},onChange:e.handleChange,value:e.values.email,onBlur:e.handleBlur,placeholder:"Email"}),e.touched.email&&e.errors.email&&r.jsx("p",{className:"register-form-input-error",children:e.errors.email})]}),r.jsxs("label",{className:"form-label",children:[r.jsx("input",{type:o?"text":"password",name:"password",className:"form-input form-input-password",style:e.touched.password&&e.errors.password&&{borderColor:"#EF5050"},onChange:e.handleChange,value:e.values.password,onBlur:e.handleBlur,placeholder:"Password"}),e.touched.password&&e.errors.password&&r.jsx("p",{className:"register-form-input-error",children:e.errors.password}),r.jsx("button",{type:"button",className:"password-show-button",onClick:()=>t(!o),children:o?r.jsx(j,{size:20}):r.jsx(y,{size:20})})]})]}),r.jsx("button",{type:"submit",className:"form-submit",disabled:s,children:"Sign Up"})]})]})})};export{B as default};
