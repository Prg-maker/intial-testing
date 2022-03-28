import { useState } from "react"



type ListProps = {
  initalItems: string[]
}



export function List({
  initalItems
} : ListProps) {

  const [newItem , setNewItem] = useState('')

  const [list , setList] = useState(initalItems)

  function addToList(){
    setTimeout(()=> {
      setList(state => [...state , newItem])
    } , 500)
  }

  function removeFromList(item: string){
    setTimeout(()=> {
      setList(state => state.filter(item => item != item))
    } , 500)
  }

  return (

    <>
      <input placeholder="Novo item" value={newItem} onChange={e => setNewItem(e.target.value)}/>

      <ul>
        {list.map(item => (
          <li key={item}>
            {item}
            <button onClick={ () => removeFromList(item)}>Delete</button>
          </li>
        )
        )}
      </ul>

      <button onClick={addToList}>Add new name</button>
    </>
  )
}


