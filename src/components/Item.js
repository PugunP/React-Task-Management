import "./Item.css"
import { BsFillTrashFill } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";

export default function Item(props){
    const {data, deleteTask, editTask} = props
    return(
        <div className="list-item">
            <p className="title">{data.title}</p>
            <div className="button-container">
            <BsFillTrashFill className="btn" onClick={()=>deleteTask(data.id)}/>
            <MdOutlineModeEdit className="btn" onClick={()=>editTask(data.id)}/>
            </div>
        </div>
    )
}