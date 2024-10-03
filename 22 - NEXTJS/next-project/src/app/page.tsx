import styles from "./page.module.css";
import { Button, Card, Checkbox, Input } from "@mui/material";

export default function Home() {

  return (

    <main className={styles.main}>
      <h1>Hello Material UI</h1>
      <Card>
        <Button variant="contained" color="success">Haz click aquí</Button>
        <br />
        <Input color="info" />
        <br />
        <Checkbox />
      </Card>
    </main>

  );

}
