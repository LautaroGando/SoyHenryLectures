import "../styles/UserPortrait.css";

function UserPortrait({status}) {

    return (

        <div>
            {status ? (
                <img className="icon" src="" alt="user" />
            ) : (
                <img className="icon" src="" alt="user" />
            )}
        </div>

    )

};

export default UserPortrait;