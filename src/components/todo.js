import { useState } from "react";

export function Todo({ item,onUpdate,onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  
  function FormEdit(){
    const [newvalue, setnewvalue] = useState(item.title)
    function handleSubmit(e){
        e.preventdefault();
    }

    function handleChange(e){
        const value = e.target.value
        setnewvalue(value);
    }

    function handleClickUpdate(){
        onUpdate(item.id,newvalue)
        setIsEdit(false)
    }

    return<form className="todoUpdateForm " onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange} value={newvalue}></input>
        <button className="button" onClick={handleClickUpdate}>Update</button>
    </form>
  }

  function TodoElement(){
    
    return (<div className="Todoinfo">
            <span className="todoTitle">{item.title}</span>
           <button className="button" onClick={() => setIsEdit(true)}>Edit</button>
          <button className="button-delete" onClick={(e)=>onDelete(item.id)}>Delete </button>
        </div>)
  }
  
  return (
    // eslint-disable-next-line no-unreachable
    <div className="todo">
      {isEdit ? <FormEdit/> : <TodoElement/>}
    </div>
  );
}
