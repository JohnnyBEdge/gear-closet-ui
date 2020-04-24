import React from 'react';
import AddItemForm from './AddItemForm';
import Item from './Item';
import EditItemForm from './EditItemForm';



class ItemsContainer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: [],
            modalIsOpen: false,
            updateGear: {}
        }
        this.getGear = this.getGear.bind(this);

    };

    getGear = () => {
        fetch(`${process.env.REACT_APP_API_URL}/api/gear`)
            .then(response =>response.json())
            .then(data => this.setState({items:data}, () => console.log(this.state.items)))
    };

    removeGear = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}/api/gear/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(this.getGear)
    }
    updateGear = (item) => {
        this.setState({
            updateGear:item,
            modalIsOpen: true
        })
       
    };

    closeModal = () => {
        this.setState({modalIsOpen: false})
    };

    componentDidMount(){
        this.getGear();
    };

    render(){

        const displayItems = this.state.items.map((item) => {
            return <Item key={item._id} 
                        item={item} 
                        removeGear={this.removeGear} 
                        updateGear={this.updateGear}/>
        });

        let editForm;
        if(this.state.modalIsOpen){
            editForm =  <EditItemForm key={this.state.updateGear._id} 
                                modalIsOpen={this.state.modalIsOpen} 
                                closeModal={this.closeModal} 
                                item={this.state.updateGear}
                                getGear={this.getGear}/>
        }


        return(
            <>
                <AddItemForm getGear={this.getGear} />
                <div className="items-container">

                        {displayItems}
                        {editForm}  

               </div>
            </>
        );
    };
};

export default ItemsContainer;