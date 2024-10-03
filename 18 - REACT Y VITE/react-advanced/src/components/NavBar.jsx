import UserPortrait from "./UserPortrait";
import { useToggle } from "../hooks/useToggle";

import "../styles/NavBar.css";

function NavBar() {

    const {isLogged, toggleHandler} = useToggle(false);

    return (

        <div className="nav-container">
            <div className="buttons">
                <button onClick={toggleHandler}>{isLogged ? "Logout" : "Login"}</button>
            </div>
            <UserPortrait status={isLogged} />
        </div>

    )

};

export default NavBar;