import{u as e,j as t}from"./index-B17r12tF.js";import{M as i}from"./GlobalStyles-CAwb62qr.js";e.form`
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
`;e.div`
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
`;document.getElementById("modal");e.form`
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
`;e.li`
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
`;e.ul`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;const n=()=>t.jsx(i,{children:t.jsx("section",{className:"section",children:t.jsx("h1",{className:"section-title",children:"ToDo Manager"})})});export{n as default};
