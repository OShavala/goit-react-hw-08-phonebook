import styled from 'styled-components';

export const ContForm = styled.div`
  h1,
  h2 {
    text-align: center;
    font-size: 28px;
    color: #fff;
    
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: 0px;
`;

export const ContactItem = styled.li`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 0px 0px 0px 20px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  
`;

export const ContactIcon = styled.div`
  margin-right: 15px;
  border-radius: 4px;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ContactText = styled.p`
  font-size: 18px;
`;

export const ContactDelete = styled.button`
  display: inline-block;
  padding: 10px 12px;
  margin: 0px 10px;
  border: none;
  border-radius: 5px;
  background-color: #391717;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  cursor: pointer;

 

  &:hover,
  &:focus {
    background-color: #fff;
    color: #391717;
  }

  
`;