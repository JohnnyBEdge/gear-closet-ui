import React from 'react';

class AddItem extends React.Component{
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

    this.handleName = this.handleName.bind(this);
    this.handleBrand = this.handleBrand.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handlePurchaseDate = this.handlePurchaseDate.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleUseCategory = this.handleUseCategory.bind(this);
    this.handleUseSeasons = this.handleUseSeasons.bind(this);
    this.handleNotes = this.handleNotes.bind(this);

    };

    handleName = (e) => {
        this.setState({name: e.target.value});
    };
    handleBrand = (e) => {
        this.setState({brand: e.target.value});
    };
    handleDesc = (e) => {
        this.setState({desc: e.target.value});
    };
    handlePurchaseDate = (e) => {
        this.setState({purchase_date: e.target.value});
    };
    handlePrice = (e) => {
        this.setState({price: e.target.value});
    };
    handleUseCategory = (e) => {
        this.setState({use_category: e.target.value});
    };
    handleUseSeasons = (e) => {
        this.setState({use_seasons: e.target.value});
    };
    handleNotes = (e) => {
        this.setState({notes: e.target.value});
    };


    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/api/gear`,{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify([this.state])
        }).then(this.props.getGear);

        }

  
    

    render(){

        return (

            <form id="item_form">
                <h2>Add Item to the Closet</h2>

                <label>Name:</label>
                    <input 
                        type='text' 
                        value={this.state.value} 
                        onChange={this.handleName}/>

                <label>Brand:</label>
                    <input 
                        type='text' 
                        value={this.state.value} 
                        onChange={this.handleBrand}/>
                
                <label>Description:</label>
                    <textarea 
                        type='text' 
                        value={this.state.value} 
                        onChange={this.handleDesc}></textarea>
                
                <label>Purchase Date:</label>
                    <input 
                        type='text' 
                        value={this.state.value} 
                        onChange={this.handlePurchaseDate}/>

                <label>Price:</label>
                    <input 
                        type='number' 
                        value={this.state.value} 
                        onChange={this.handlePrice}/>

                <label>Use categories:</label>
                    <input 
                        type='text' 
                        value={this.state.value} 
                        onChange={this.handleUseCategory}/>

                <label>Use Seasons:</label>
                    <input 
                        type='text' 
                        value={this.state.value} 
                        onChange={this.handleUseSeasons}/>

                <label>Notes:</label>
                    <textarea 
                        type='text' 
                        value={this.state.value} 
                        onChange={this.handleNotes}></textarea>


                <button id="submit_btn" type='submit' onClick={this.handleSubmit}>Submit</button>
            </form>

        );
    };
};

export default AddItem;