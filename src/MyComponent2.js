import react, { useEffect, useState } from "react";

const MyComponent2 = () => {
    const [name, setName] = useState('');

    useEffect(() => {

       // console.log("Имя изменено на - {name}")
    },[name]);

    return (
        <div>
            {name && <h2>Привет - {name}</h2>}
            <input value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Введите имя"/>
        </div>
    )
}

export default MyComponent2;
