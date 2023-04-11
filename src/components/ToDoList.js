import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
    const [check, setCheck] = useState([]);

    const addCheck = () => {
        const inputText = document.querySelector('form input[type="text"]');
        // spread operator
        setCheck([...check, inputText.value]);
    }

    const removeCheck = value => {
        setCheck(oldValues => {
            return oldValues.filter(elt => elt !== value)
        })
    }

    return (
        <div>
            <form action="#">
                <input type="text" name="" id="" placeholder="Add ToDo" />
                <input type="button" value="Add ToDo" onClick={addCheck} />
            </form>
            <article>
                {check.map((elt) => {
                    return (
                        <div>
                            <ToDoItem task={elt} />
                            <button onClick={() => removeCheck(elt)}>delete</button>
                        </div>
                    )
                })}
            </article>
        </div>
    );
}

export default ToDoList;