import { useState } from "react";

const ToDoItem = (props) => {

    const [checked, setChecked] = useState(true);
    console.log(checked);
    return (
        <form action="">
            <input type="checkbox" name="" id="" onChange={() => setChecked(!checked)} />
            <label style={{ textDecoration: checked ? "none" : "line-through", color: checked ? "darkblue" : "darksalmon" }}>{props.task}</label>
        </form>
    );
}

export default ToDoItem;