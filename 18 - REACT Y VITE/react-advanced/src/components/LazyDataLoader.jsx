import { useFetch } from "../hooks/useFetch"

const LazyDataLoader = () => {

    const { data, error } = useFetch("users");

    return (

        <div>
            {
                error ? (
                    <p style={{ color: "black" }}>{error}</p>
                ) : (
                    <ul>
                        {
                            data?.map(user => {
                                return <li key={user.id} style={{ color: "black" }}>{user.name}</li>
                            })
                        }
                    </ul>
                )
            }
        </div>

    )

};

export default LazyDataLoader;