import React, { useEffect, useState } from 'react'

const UserInfo = ({ userId }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        fetch(`https://api.example.com/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data));

    }, [userId]);

    if (!user) {

        return <div>Loading...</div>

    };

    return (

        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
        </div>

    )

};

export default UserInfo;