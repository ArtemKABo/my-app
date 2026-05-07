import React, { useState } from "react";

const List = (props) => {
    const [ ink, setInk] = useState(3);
    const [item, setItem] = useState(props.items);

    function addItem(asd){
        setInk(ink + 1);
        setItem([...item, `I${ink}`]);//asd
    }

    return(
    <div>
        <ul>
            {item.map((el, index) => {
               return <li key ={index}>{el}</li>
            })}
        </ul>
        <button onClick={()=>addItem()}>
            add Item
        </button>
    </div>
    );
};

export default List;