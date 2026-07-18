import react, { useEffect, useState } from "react";

const initialState = () => {
    return -1;
}

const MyComponent = (props) =>{

    const [counter, setCounter] = useState(initialState);
    const [isOpened, setIsOpened] = useState(false);

    const [x1, setX1 ] = useState(1);
    const [x2, setX2 ] = useState(1);

    const hendlerSetCounter = () => {
        setCounter(counter + 1);
    }

const hendlerSetMouseMove = (event) => {
    setX2(event.clientX);
}

useEffect(() => {
    document.body.addEventListener('mousemove', (event) => {
        setX1(window.event.clientX);
    });
}, [])

    return(
        <div>
            <button onClick={() => hendlerSetCounter()}>Click me Now!</button>
            <button onClick={() => setIsOpened(!isOpened)}>
                {isOpened ? 'Скрыть' : 'Плказать'}
            </button>
            <p>counter - {counter}</p>
            {
                isOpened && 
                <div>
                    <span>Ну что вы смотрите, прекратите!</span>
                </div>
            }
            <div>
                Координата мыши (X) - {x1}
            </div>
            <div onMouseMove={(event) => hendlerSetMouseMove(event)}>
                Координата мыши (X) в области - {x2}
            </div>
        </div>
    )
}

export default MyComponent;