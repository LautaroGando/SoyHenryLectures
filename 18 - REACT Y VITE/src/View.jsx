import User from "./User";

const View = () => {

    const handleUserButtonClick = (info) => {

        console.log(info);

    };

    return (
        <div>
            <User handleUserButtonClick={handleUserButtonClick}/>
            <User2 />
        </div>
    )

};

export default View;