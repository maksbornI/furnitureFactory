import React from 'react';
import ModelList from "./ModelsList/ModelList";
import {currModel} from "../../Redux/store";




const Carpentry = (props) => {


    return (
        <div>
            <ModelList state = {props.state} curStateAdd = {props.curStateAdd} currModel = {currModel}/>

        </div>

    )
}

export default Carpentry;