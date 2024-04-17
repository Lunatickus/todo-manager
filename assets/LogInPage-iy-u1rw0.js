import{u as p,a as u,b as m,l as c,Q as h,t as g,r as x,j as o}from"./index-CPF2A1o_.js";import{u as b,c as f,a as n,b as w,I as j,d as y}from"./index-CashrPcU.js";import{M as E}from"./GlobalStyles--PE8j3BW.js";const S=p.form`
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
`;function v(){const r=u(),t=m(),{mutate:a,isPending:i}=b({mutationFn:s=>c(s),onSuccess:s=>{r.setQueryData([h.user],s),t("/toDos")},onError:s=>{g(s)}});return{signUpMutation:a,isPending:i}}const F=f().shape({email:n().email("Enter valid email. For example user@gmail.com").required(),password:n().min(6,"Password must be at least 6 characters.").required()}),B=()=>{const[r,t]=x.useState(!1),{isPending:a,signUpMutation:i}=v(),e=w({initialValues:{email:"",password:""},validationSchema:F,onSubmit:(l,{resetForm:d})=>{i(l),d()}});return o.jsx(E,{children:o.jsxs("section",{className:"section",children:[a&&o.jsx("h1",{children:"Loading..."}),o.jsxs(S,{onSubmit:e.handleSubmit,autoComplete:"off",children:[o.jsxs("div",{className:"form-input-wrapper",children:[o.jsxs("label",{className:"form-label",children:[o.jsx("input",{type:"email",name:"email",className:"form-input",style:e.touched.email&&e.errors.email&&{borderColor:"#EF5050"},onChange:e.handleChange,value:e.values.email,onBlur:e.handleBlur,placeholder:"Email"}),e.touched.email&&e.errors.email&&o.jsx("p",{className:"register-form-input-error",children:e.errors.email})]}),o.jsxs("label",{className:"form-label",children:[o.jsx("input",{type:r?"text":"password",name:"password",className:"form-input form-input-password",style:e.touched.password&&e.errors.password&&{borderColor:"#EF5050"},onChange:e.handleChange,value:e.values.password,onBlur:e.handleBlur,placeholder:"Password"}),e.touched.password&&e.errors.password&&o.jsx("p",{className:"register-form-input-error",children:e.errors.password}),o.jsx("button",{type:"button",className:"password-show-button",onClick:()=>t(!r),children:r?o.jsx(j,{size:20}):o.jsx(y,{size:20})})]})]}),o.jsx("button",{type:"submit",className:"form-submit",disabled:a,children:"Log In"})]})]})})};export{B as default};
