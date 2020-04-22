import React from 'react';

class Item extends React.Component{
    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    };

    handleDelete = (e) => {
        e.preventDefault();
        const id = this.props.item._id;
        console.log(id)
        fetch(`http://localhost:5000/api/gear`,{
            method: 'delete',
            body: JSON.stringify({"_id":id}),
            headers: {
                "content-type": "application/json"
            }
        }).then(this.props.getGear);
    };

    handleEdit = (e) => {
        e.preventDefault();
        console.log('edited item')
    };

    render(){

        return(
            <div className='item-container'>
                <h3>{this.props.item.name}</h3>
                <p>{this.props.item.desc}</p>
                <input type="button" value="Delete" onClick={this.handleDelete} />
                <input type="button" value="Edit" onClick={this.handleEdit} />
            </div>
        );
    };
};

export default Item;