import styled from "styled-components";

const StyledInput = styled.input`
    background-color: pink;
    color: violet;
    border: none;
    padding: .8rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    display: block;
    box-sizing: border-box;
`;

export const Input = (props) => {

    const {name, label, type="text"} = props;

    return (

        <>
            <label style={{marginBottom: ".4rem"}}>{label}</label>
            <StyledInput name={name} type={type} />
        </>

    )

};

export default Input;