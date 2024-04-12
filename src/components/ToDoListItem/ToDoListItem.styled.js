import styled from "styled-components";

export const ToDoItemStyled = styled.li`
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
`;
