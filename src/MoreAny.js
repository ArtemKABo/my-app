import react, { useEffect, useState } from "react";

const MoreAny = (props) => {
    const [name, setName] = useState(props.propVal);

    const [newName, setNN] = useState('');
    //let newName = '';

    useEffect(() => {
        setName(props.propVal);

    },[props.propVal]);

    return (
        <div>
            <p>Props - {props.propVal}</p>
            <p>State - {name}</p>
            <input onChange={(event) => setNN(event.target.value)}
            placeholder="Введите состояние"/>
            <button onClick={()=>setName(newName)}>
            Изменить Состояние
        </button>
        </div>
    )
}

export default MoreAny;
