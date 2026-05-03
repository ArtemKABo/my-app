import react from "react";
import User from "./User";

const UserList = () => {
    const users = [
        { id: 1, name: 'John', email: 'john@exampl.com'},
        { id: 2, name: 'Jane', email: 'jene@exampl.com'},
        { id: 3, name: 'Joke', email: 'joke@exampl.com'}
    ];

    return (
        <div>
            <h1>User List</h1>
            {users.map((user, index) =>
            <User id={user.id} name={user.name} email={user.email}/>
            )}
        </div>
    )
}
export default UserList;