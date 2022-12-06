import './item.css'

import ItemList from '../ItemList/ItemList'


const Item = ( {data} ) => {



    return(

        <ItemList>
        <div className='contain-card'>
            <p className='paraGp'>{data.nombre}</p>
            <p className='paraGp'>{data.precio}</p>
            <img src={data.image} className='image' alt={data.image}/>
            <div className='details'>
                <button className='button'>Ver Detalle</button>
            </div>

        </div>
        </ItemList>

    )

}
 

export default Item;