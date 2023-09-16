import React from 'react';
import ModelList from "./ModelsList/ModelList";



const Carpentry = (props) => {
    return (
        <div>
            <ModelList state = {props.state}/>

        </div>

    )
}

export default Carpentry;