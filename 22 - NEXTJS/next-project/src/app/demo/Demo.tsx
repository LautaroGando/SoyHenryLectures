import React from "react";

// components
import Card from "@/components/card";

const Demo: React.FC = () => {

    return (

        <div>
            <h1>Hola Mundo</h1>
            <Card title="Card 1" description="This is card 1" />
            <Card title="Card 2" description="This is card 2" />
            <Card title="Card 3" />
        </div>

    )

};

export default Demo;