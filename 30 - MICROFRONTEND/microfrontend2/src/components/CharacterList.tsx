import React, { useEffect, useState } from "react";

interface Character {
    id: number,
    name: string,
};

export const CharacterList: React.FC = () => {

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {

        const fetchData = () => {

            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => {

                    if(!response.ok) {

                        throw new Error("Network response was not ok");

                    };

                    return response.json() as Promise<Character[]>;

                })
                .then((data) => {
                    
                    setCharacters(data);
                        
                })
                .catch((error) => {

                    console.log("Error al obtener los datos:", error);

                });

                fetchData();

        };

    }, []);

    return (

        <div>
            <h1>Lista de Personajes</h1>
            <ul>
                {
                    characters.map((character) => (
                        <li key={character.id}>{character.name}</li>
                    ))
                }
            </ul>
        </div>

    )

};

export default CharacterList;