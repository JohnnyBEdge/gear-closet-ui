import React from 'react';
import AddItem from './AddItem';
import Item from './Item'



class ItemsContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
        this.getGear = this.getGear.bind(this);

    };

    getGear(){
        fetch(`http://localhost:5000/api/gear`)
            .then(response =>response.json())
            .then(data => this.setState({items:data}, () => console.log(this.state.items)))
    };

    componentDidMount(){
        this.getGear();
    };

    render(){

        const item = this.state.items.map(item =>
            <li key={item._id}><Item item={item} getGear={this.getGear}/></li>
            );

        return(
            <>
                <AddItem getGear={this.getGear} />
                <ul>
                    {item}
                </ul>
            </>
        );
    };
};

export default ItemsContainer;