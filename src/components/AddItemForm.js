import React from 'react';

class AddItemForm extends React.Component{

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

    handleCheck = (e) => {
        const seasons = this.state.use_seasons;
         if(e.target.checked){
            seasons.push(e.target.value);
        };
        this.setState({use_seasons: seasons})
    }


    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/api/gear`,{
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify([this.state])
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
        }))
            .then(this.props.getGear)
            
        }

    render(){

        return (
            <form id="item_form" onSubmit={this.handleSubmit}>
            <h2>Add Item to the Closet</h2>

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
                    value={this.state.use_category} 
                    onChange={this.handleChange}/>

                <p>Which seasons do you use this item?</p>

                <div className="check-container">
                    <input type="checkbox" name="use_seasons" value="Spring" onClick={this.handleCheck}/>
                    <label>Spring</label>
                    <input type="checkbox" name="use_seasons" value="Summer" onClick={this.handleCheck}/>
                    <label>Summer</label>
                    <input type="checkbox" name="use_seasons" value="Fall" onClick={this.handleCheck}/>
                    <label>Fall</label>
                    <input type="checkbox" name="use_seasons" value="Winter" onClick={this.handleCheck}/>
                    <label>Winter</label>
                </div>
                

                {/* <input 
                    name="use_seasons"
                    placeholder="Use Seasons"
                    type='text' 
                    value={this.state.value} 
                    onChange={this.handleChange}/> */}

                <textarea 
                    name="notes"
                    placeholder="notes"
                    type='text' 
                    value={this.state.notes} 
                    onChange={this.handleChange}></textarea>


            <button id="submit_btn" type='submit'>Submit</button>
        </form>
        );
    };
}

export default AddItemForm;