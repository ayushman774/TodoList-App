import React from 'react'

const ItemList = (props) => {

  return (
    <>
    <div className="todo_style">
    <button className="delete" title="Delete Item" onClick={()=>{ props.onSelect(props.id)}}> X </button>
    <br />
      <li>{props.text}</li>
      <br />
      
      </div>
    </>
  )
}

export default ItemList
