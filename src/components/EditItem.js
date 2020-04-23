import React from 'react';
import Modal from 'react-modal'
import '../comp-styling/EditItem.css';

class EditItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            brand: '',
            desc: '',
            purchase_date: '',
            price: 0,
            use_category: [],
            use_seasons: [],
            notes: ''
        }

    }

        
    
    // handleChange = ({target}) => {
    //     const key = target.name;
    //     this.setState({[key]: target.value});
    // };


    handleSubmit = (e) => {
        e.preventDefault();
    };

       
    render(){

        return (
            <Modal isOpen={this.props.modalIsOpen} onRequestClose={this.props.closeModal}>
                <form id="edit_form" onSubmit={this.handleSubmit}>
                    <h2>Edit Item</h2>

                        <input 
                            name="name" 
                            placeholder="name" 
                            type='text' 
                            value={this.state.value} 
                            onChange={this.handleChange} />

                        <input 
                            name="brand"
                            placeholder="brand"
                            type='text' 
                            value={this.state.value} 
                            onChange={this.handleChange}/>
                    
                        <textarea 
                            name="desc"
                            placeholder="Description"
                            type='text' 
                            value={this.state.value} 
                            onChange={this.handleChange}></textarea>
                    
                        <input 
                            name="purchase_date"
                            placeholder="Purchase date (ex: Jan 2020)"
                            type='text' 
                            value={this.state.value} 
                            onChange={this.handleChange}/>

                        <input 
                            name="price"
                            placeholder="price"
                            type='number' 
                            value={this.state.value} 
                            onChange={this.handleChange}/>

                        <input 
                            name="use_category"
                            placeholder="Use Categories"
                            type='text' 
                            value={this.state.value} 
                            onChange={this.handleChange}/>

                        <input 
                            name="use_seasons"
                            placeholder="Use Seasons"
                            type='text' 
                            value={this.state.value} 
                            onChange={this.handleChange}/>

                        <textarea 
                            name="notes"
                            placeholder="notes"
                            type='text' 
                            value={this.state.value} 
                            onChange={this.handleChange}></textarea>


                    <button id="submit_btn" type='submit'>Submit Changes</button>
                    <button id="close_modal_btn" type='button' onClick={() => this.props.closeModal()}>Cancel</button>
                </form>
            </Modal>

        );
    };
}

export default EditItem;