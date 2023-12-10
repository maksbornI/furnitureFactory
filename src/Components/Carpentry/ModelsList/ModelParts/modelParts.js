import { sizeModelActionCreate} from "../../../../Redux/store";
import PartList from "../PartList/PartList";


const ModelParts = (props) => {
    let modelParts = []
    let sizeArrayReducer = (e) => {

        let id = e.target.id;
        let action = sizeModelActionCreate(id,)
        props.curStateAdd(action, id)
    }
    for (let i in props.currModel.partOfModel) {

        modelParts.push(<lable>
            <input key={props.currModel.partOfModel[i].id} id={props.currModel.partOfModel[i].id}/>
            <button onClick={sizeArrayReducer} id={props.currModel.partOfModel[i].id}>{props.currModel.partOfModel[i].id} </button>
        </lable>)

    }

    return (
        <div>
            <div>
                {modelParts}
            </div>
<div>
    <PartList/>
</div>
        </div>)
}
export default  ModelParts