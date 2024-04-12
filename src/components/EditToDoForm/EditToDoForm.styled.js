import styled from "styled-components";

export const EditFormStyled = styled.form`
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
`;
