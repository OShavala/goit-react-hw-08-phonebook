import styled from 'styled-components';

export const Section = styled.section`
  max-width: 540px;
`;

export const Form = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0px;
    
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
     outline: none;
  }
`;

export const FormList = styled.ul`
  padding: 0;
  display: flex;
`;

export const FormListItem = styled.li`
  margin-right: 10px;
  p {
    margin-bottom: 8px;
    font-size: 18px;
  }
`;

export const FormButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  margin: 0px auto;
  border: none;
  border-radius: 5px;
  background-color: rgb(57, 23, 23);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.03em;
  cursor: pointer;
  margin-top: 20px;

  &:hover,
  &:focus {
    background-color: #fff;
    color: rgb(57, 23, 23);
    cursor: pointer;
  }

  svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
`;