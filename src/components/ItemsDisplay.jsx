import React,{useState} from 'react'
import { itemData } from '../data'
const ItemsDisplay = () => {
    const [displayItem,setDisplayItem] = useState(itemData)
   
    
  return (
    <div className='itemSection'>
      {
        displayItem.map((data)=> {
            return(
            <div className='gallery'> 
               <img src={`${process.env.PUBLIC_URL}/${data.item_image}`} alt={data.item_image} />
            </div>
        )
    })}
    </div>
  )
}

export default ItemsDisplay
