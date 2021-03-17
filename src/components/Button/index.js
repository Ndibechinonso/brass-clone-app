import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "#3e7eee" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  padding: 10px 20px;
  border-color: #3e7eee;
  outline: none;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: rgba(62, 126, 238, 0.9);
  }
`;

export default Button;
