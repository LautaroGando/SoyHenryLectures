import styles from './Home.module.css';

const Home = () => {

    return (

        <main className={styles.main}>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Rsv2VkoIpk0?si=Ef0tPAJpuI2ysV2_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </main>

    )

};

export default Home;