import React from 'react';

class AddItem extends React.Component{

        state = {
            name: '',
            brand: '',
            desc: '',
            purchase_date: '',
            price: 0,
            use_category: [],
            use_seasons: [],
            notes: ''
        }
    
    handleChange = ({target}) => {
        const key = target.name;
        this.setState({[key]: target.value});
    };


    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/api/gear`,{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify([this.state])
        })
            .then(this.props.getGear)
            .then(() => this.setState({
                name: '',
                brand: '',
                desc: '',
                purchase_date: '',
                price: 0,
                use_category: [],
                use_seasons: [],
                notes: ''
            }));
        }

    render(){

        return (
            <form id="item_form" onSubmit={this.handleSubmit}>
            <h2>Add Item to the Closet</h2>

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


            <button id="submit_btn" type='submit'>Submit</button>
        </form>
        );
    };
}

export default AddItem;