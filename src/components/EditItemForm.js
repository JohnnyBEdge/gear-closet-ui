import React from 'react';
import Modal from 'react-modal'
import '../comp-styling/EditItemForm.css';

Modal.setAppElement('#root');

class EditItemForm extends React.Component{
    constructor(props){
        console.log("constructor", props.item)
        super(props);
        this.state = {
            name: this.props.item.name,
            brand: this.props.item.brand,
            desc: this.props.item.desc,
            purchase_date: this.props.item.purchase_date,
            price: this.props.item.price,
            use_category: this.props.item.use_category,
            use_seasons: this.props.item.use_seasons,
            notes: this.props.item.notes
    }
    }

    handleChange = ( { target } ) => {
        const key = target.name;
        this.setState({ [key] : target.value }, () => console.log(this.state[key]));
    }
    handleSubmit = (event) => {
        event.preventDefault(); 
        fetch(`http://localhost:5000/api/gear/${this.props.item._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(() => this.setState({
            name: '',
            brand: '',
            desc: '',
            purchase_date: '',
            price: 0,
            use_category: [],
            use_seasons: [],
            notes: ''
        })).then(this.props.getGear)
        
        this.props.closeModal();
    }

    render(){
        console.log("render",this.props.item)
        return (
            <Modal isOpen={this.props.modalIsOpen} onRequestClose={this.props.closeModal}>
                <form id="edit_form" onSubmit={this.handleSubmit}>
                    <h2>Edit Item</h2>

                        <input 
                            name="name" 
                            placeholder="name" 
                            type='text' 
                            value={this.state.name} 
                            onChange={this.handleChange} />

                        <input 
                            name="brand"
                            placeholder="brand"
                            type='text' 
                            value={this.state.brand} 
                            onChange={this.handleChange}/>
                    
                        <textarea 
                            name="desc"
                            placeholder="Description"
                            type='text' 
                            value={this.state.desc} 
                            onChange={this.handleChange}></textarea>
                    
                        <input 
                            name="purchase_date"
                            placeholder="Purchase date (ex: Jan 2020)"
                            type='text' 
                            value={this.state.purchase_date} 
                            onChange={this.handleChange}/>

                        <input 
                            name="price"
                            placeholder="price"
                            type='number' 
                            value={this.state.price} 
                            onChange={this.handleChange}/>

                        <input 
                            name="use_category"
                            placeholder="Use Categories"
                            type='text' 
                            value={this.state.category} 
                            onChange={this.handleChange}/>

                        <input 
                            name="use_seasons"
                            placeholder="Use Seasons"
                            type='text' 
                            value={this.state.use_seasons} 
                            onChange={this.handleChange}/>

                        <textarea 
                            name="notes"
                            placeholder="notes"
                            type='text' 
                            value={this.state.notes} 
                            onChange={this.handleChange}></textarea>


                    <button id="submit_btn" type='submit'>Submit Changes</button>
                    <button id="close_modal_btn" type='button' onClick={() => this.props.closeModal()}>Cancel</button>
                </form>
            </Modal>

        );
    };
}

export default EditItemForm;