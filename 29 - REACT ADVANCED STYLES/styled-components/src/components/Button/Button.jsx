import styled from "styled-components";

export const Button = styled.button`
    background-color: pink;
    font-size: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    padding: .8rem;
    transition: background-color .5s ease-in;

    &:hover {
        background-color: rgb(170, 144, 148);
        color: azure;
    }
`;

export default Button;