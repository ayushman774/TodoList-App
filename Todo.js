import React from 'react'
import { useState } from 'react'
import ItemList from './ItemList'

const Todo = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([""]);

    const itemsChange = (e) => {
        setInputList(e.target.value)
    }
    const itemList = () => {
        setItems((prevItem) => {
            return [...prevItem, inputList];
        });
        setInputList("")
    }

    const deleteItems = (id) => {
setItems((prevItem)=>{
    return prevItem.filter((arr, index)=>{
        return index !== id
    })
})
    }
    

    return (
        <>
            <div className="main_div">

                <div className="center_div">

                    <figure>
                        <img src="https://png.pngitem.com/pimgs/s/509-5099434_todo-app-logo-transparent-hd-png-download.png" alt="Todo Logo" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>

                    <input type="text" placeholder="Add Items" value={inputList} onChange={itemsChange} />
                    <button className="add-btn" title="Add Item" onClick={itemList}>+</button>

                    <ul>
                        {items.map((itemValue, index) => {
                            return <ItemList key={index} id={index} text={itemValue} 
                                     onSelect={deleteItems}

                            />
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo
