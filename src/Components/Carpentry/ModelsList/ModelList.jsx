import {currModel, curStateActionCreate} from "../../../Redux/store";
import ModelParts from "./ModelParts/modelParts";


const ModelList = (props) => {
    let curStateReducer = (e) => {

        let id = e.target.id;
        let action = curStateActionCreate(id)
        props.curStateAdd(action)
    }
    let modelsArray = []
    for (let i in props.state) {
        modelsArray.push(<button name="model" value={props.state[i].id} id={props.state[i].id} key={props.state[i].id}
                                 onClick={curStateReducer}> {props.state[i].id.toUpperCase()}</button>)
    }

    return (
        <div>
            <div>
                {modelsArray}
            </div>
            <div>
               <ModelParts currModel = {currModel} curStateAdd = {props.curStateAdd} />
            </div>
        </div>
    )
}
export default ModelList
