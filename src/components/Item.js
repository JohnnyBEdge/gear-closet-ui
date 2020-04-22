import React from 'react';

class Item extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            _id: this.props._id,
            confirmDelete: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
    };

    handleDelete = (e) => {
        e.preventDefault();
        let result = window.confirm("Are you sure you want to delete this item?");
        // const id = this.props.item._id;
        this.setState({confirmDelete:result}, () =>{
            const id = this.state._id;
            if(this.state.confirmDelete){
                fetch(`http://localhost:5000/api/gear`,{
                    method: 'delete',
                    body: JSON.stringify({"_id":id}),
                    headers: {
                        "content-type": "application/json"
                    }
                }).then(this.setState({confirmDelete:false}))
                    .then(this.props.getGear);
            }
            
        })
    }
    


    // handleEdit = (e) => {
    //     e.preventDefault();
    //     console.log('edited item')
    // };

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