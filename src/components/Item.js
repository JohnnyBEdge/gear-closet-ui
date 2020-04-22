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

// class Item extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             _id: this.props._id,
//             confirmDelete: false,
//         }

//         this.handleDelete = this.handleDelete.bind(this);

//     };

//     handleDelete = (e) => {
//         e.preventDefault();
//         let result = window.confirm("Are you sure you want to delete this item?");
//         this.setState({confirmDelete:result}, () =>{
//             const id = this.state._id;
//             if(this.state.confirmDelete){
//                 fetch(`http://localhost:5000/api/gear`,{
//                     method: 'delete',
//                     body: JSON.stringify({"_id":id}),
//                     headers: {
//                         "content-type": "application/json"
//                     }
//                 }).then(this.setState({confirmDelete:false}))
//                     .then(this.props.getGear);
//             }
            
//         })
//     }
    
//     // toggleModal = (e) => {
//     //     e.preventDefault();
//     //     if(this.state.isOpen = false){
//     //         this.setState({isOpen: true})
//     //     } else {
//     //         this.setState({isOpen: false})
//     //     }
//     // };


    

//     render(){

//         return(
//             <div className='item-container'>
                
//                 <h3>{this.props.item.name}</h3>
//                 <p>{this.props.item.desc}</p>
//                 <input type="button" value="Delete" onClick={this.handleDelete} />
//                 <input type="button" value="Edit" onClick={this.toggleModal} />

//                 {/* <Modal isOpen={this.state.isOpen} onRequestClose={this.toggleModal} >
//                     <h1>Update form here</h1>
//                     <button onClick={this.toggleModal}>Close Modal</button>
//                 </Modal> */}
//             </div>
//         );
//     };
// };

export default Item;