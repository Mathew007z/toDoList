import './item-list-container.css'
import { useState,useEffect } from 'react'
import Item from '../Item/Item'





const ItemListContainer = () => {
// Inicamos estado
const [posts, setPosts] = useState([]);


// Enganchamos el fetch a la mutacion del estado.
useEffect(()=>{


    // Hacemos la llamada al Json.
    fetch('/data/data.json')
    .then((res) => res.json())
    .then((obj) => setPosts(obj));

    // pasamos como segundo parametro un array vacio, para indicar que se ejecute al redireccionar.
},[])


return(
    <div className='listProd'>
        {posts.map((prod)=>
        <Item data={prod}
         key={prod.id}
         />
         )}
    </div>
)

}


export default ItemListContainer


