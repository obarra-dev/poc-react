import User from "../components/user"

function Users({users}) {
    return (
        <>
            <h1>Users</h1>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <User user={user}/>
                        </div>
                    )
                }

                )
            }
        </>
    )
}

export default Users

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    // it logs in the server side
    console.log(data)

    return {
        props: {
            users: data,
        }
    }
}