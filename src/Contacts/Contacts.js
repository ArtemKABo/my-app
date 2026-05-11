import React, { useEffect, useState } from "react";
import "./Contacts.css";

const Contacts = () => {

    const [dataFromApi, setDataFromApi] = useState(null);
    const [isLoaded, setIsloaded] = useState(false);
    const [userName, setUserName] = useState("");
    const [isDelete, setIsDelete] = useState(false);

    useEffect(()=>{
        console.log(isLoaded);
    }, [isLoaded]);

    const fetchData = (data) => {
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "PUT",
            body: JSON.stringify({
                title: data,
                body: "body",
            })
        })
        .then((data) => data.json())
        .then((res) => {
            setDataFromApi(res.id);
            setIsloaded(true);
        });
        
    };

    const onChangeOurInpute = (e) => {
        if(e.target.value) {
            setUserName(e.target.value);
            fetchData(e.target.value);
        }
    };

    const delUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${dataFromApi}`,{
            method: "DELETE",
        }).then(()=>setIsDelete(true));
    }

    return(
        <div className="contact-page-container container">
            <p className="contact-page-container__head-text">
                Contact page
                </p>
        <div>
            <p>Enter your data</p>
            <input type="text" onChange={(e) => onChangeOurInpute(e)}/>
        </div>
        <div>
            {isLoaded ? <p>Ваш айди</p> : <p>Ваш айди еще не загружен</p>}
            {isLoaded && <p>айди - {dataFromApi}</p>}
        </div>
        { isLoaded && (
            <div>
                <button onClick={() => delUser()}>
                    {isDelete
                    ? "Пользователь удален"
                    : `Удалить пользователя - ${userName}`}
                </button>
            </div>
        )}
        </div>
    );
};

export default Contacts;