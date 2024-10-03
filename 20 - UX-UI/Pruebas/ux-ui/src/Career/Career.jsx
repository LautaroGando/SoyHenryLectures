// styles
import styles from "./Career.module.css";

// components
import { Images } from "./components/Images/Images";
import { Values } from "./components/Values/Values";

export const Career = () => {

    return (

        <>
            <div className={styles.container}>
                <h2 style={{ marginBottom: "20px" }}>Careers</h2>
                <div className={styles.subContainer}>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, tenetur! Dolor deleniti excepturi reprehenderit eius perferendis deserunt.</span>
                    <button>Browse Open Positions</button>
                </div>
            </div>
            <br />
            <Images />
            <br />
            <Values />
        </>

    )

};

export default Career;