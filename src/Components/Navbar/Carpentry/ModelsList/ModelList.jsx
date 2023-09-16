import InputArray from "./inputArray/inputArray";

const ModelList = (props) => {

    let modelsArray = props.state.map(model => <button name="model" value={model.id} id={model.id} /*onClick={}*/> {model.id.toUpperCase()}</button>  )



return  (
    <div>
        {modelsArray}
        <InputArray state = {props.state}/>
    </div>
)
}
export default ModelList
