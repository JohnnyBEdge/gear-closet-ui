import React from 'react';

const Item = ({item, desc, removeGear}) => {
    return(
        <div>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <button onClick={() => removeGear(item._id)}>Remove Item</button>
            <button>Edit Item</button>
        </div>
    )
}


export default Item;