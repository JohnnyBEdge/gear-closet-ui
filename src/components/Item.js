import React from 'react';


const Item = ({item, removeGear, updateGear}) => {

    return(
        <div className="item-container">

                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <button onClick={() => removeGear(item._id)}>Remove Item</button>
                <button onClick={() => updateGear(item)}>Edit Item</button>
            
        </div>
    )
}


export default Item;