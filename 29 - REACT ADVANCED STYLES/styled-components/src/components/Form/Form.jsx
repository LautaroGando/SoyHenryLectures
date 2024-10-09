import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styled from "styled-components";

const StyledContainer = styled.div`
    width: 300px;
    height: 60vh;
    min-height: 270px;
    margin: auto;
    position: relative;
    padding: 1.5rem;
    border-radius: 2rem;
    margin-bottom: 1rem;
    background-color: ${props => props.theme.colors.primaryBg};
    color: ${props => props.theme.colors.primaryText};
    transition: height .5s ease-in;

    &:hover {
        height: 70vh;
    }

    @media screen and (max-width: 500px) {
        border: 3px solid violet;
        width: 50%;
    }
`;
/* background - color: palevioletred; */

const SpecialButton = styled(Button)`
    background-color: violet;

    &:hover {
        color: black;
        background-color: azure;
    }
`;

const Form = (props) => {

    return (

        <>
            <form>
                <StyledContainer>
                    <p> Formulario Genérico </p>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Input name={'username'} label={'Nombre de usuario'} />
                        <Input name={'password'} label={'contraseña'} type={'password'} />
                    </div>
                    <Button>Submit</Button>
                    <SpecialButton>SpecialButton</SpecialButton>
                </StyledContainer>
            </form>
        </>

    )

};

export default Form;