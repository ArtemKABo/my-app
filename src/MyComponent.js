import react from "react";

const MyComponent = (props) =>{
    const {prop2} = props;
    return(
        <div>
            <p>{props.prop1}</p>
            <p>{prop2}</p>
        </div>
    )
}

export default MyComponent;