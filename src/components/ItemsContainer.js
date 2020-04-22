import React from 'react';
import AddItem from './AddItem';
import Item from './Item';



class ItemsContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
        this.getGear = this.getGear.bind(this);

    };

    getGear = () => {
        fetch(`http://localhost:5000/api/gear`)
            .then(response =>response.json())
            .then(data => this.setState({items:data}, () => console.log(this.state.items)))
    };

    removeGear = (id) => {
        fetch(`http://localhost:5000/api/gear/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(this.getGear)
    }

    componentDidMount(){
        this.getGear();
    };

    render(){

        const displayItems = this.state.items.map((item) => {
            return <Item key={item._id} item={item} removeGear={this.removeGear}/>
        });

        return(
            <>
                <AddItem getGear={this.getGear} />
                {displayItems}
            </>
        );
    };
};

export default ItemsContainer;