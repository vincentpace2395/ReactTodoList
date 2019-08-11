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

    onCloseHandler = () => {
        return (
            this.setState({
                isAddingItem: false
            }, () => {
                console.log(this.state.isAddingItem)
            })
        )
    };

    render() {
        return (
            <React.Fragment>
                <button className='btn btn-default' onClick={this.onAddItemHandler}>Add Item</button>
                {this.state.isAddingItem ? (
                    <React.Fragment>
                        <button
                            onClick={this.onCloseHandler}
                            className='btn-close'>
                            Close
                        </button>
                        <NewItem />
                    </React.Fragment>
                ): null}
            </React.Fragment>


        );
    }
};

export default AddItem;