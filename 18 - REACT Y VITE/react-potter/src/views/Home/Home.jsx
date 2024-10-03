import { useEffect } from "react";
import Register from "../Register/Register";
import axios from "axios";

const Home = () => {

    useEffect(() => {

        axios.get("https://hp-api.onrender.com/api/characters").then(res => {

            res;

        });

    }, []);

    return (

        <div>
            <Register />
        </div>

    )

}

export default Home;