import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Error = () => {

    const [countDown, setCountDown] = useState(5);

    const navigate = useNavigate();

    useEffect(() => {

        const countDownInterval = setInterval(() => {
            
            setCountDown(prevCount => prevCount - 1)

        }, 1000);

        setTimeout(() => {
            
            clearInterval(countDownInterval);

            navigate("/home");

        }, 5000);

        return () => clearInterval(countDownInterval)

    }, [navigate]);

    return (

        <div>
            <h1>Pagina no encontrada</h1>
            <h2>Serás redireccionado al Home en {countDown} segundos.</h2>
        </div>

    )

}

export default Error