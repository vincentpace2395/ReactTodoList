import React from 'react';
import './AddItem.css';
import NewItem from './NewItemForm/NewItem';

class AddItem extends React.Component {
    state = {
        isAddingItem: false
    };

    onAddItemHandler = () => {
        return (
            this.setState({
                isAddingItem: true
            }, () => {
                console.log(this.state.isAddingItem)
            })
        );
    };

    render() {
        return (
            <React.Fragment>
                <button className='btn btn-default' onClick={this.onAddItemHandler}>Add Item</button>
                {this.state.isAddingItem ? <NewItem /> : null}
            </React.Fragment>


        );
    }
};

export default AddItem;