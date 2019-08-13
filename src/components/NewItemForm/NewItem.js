import React from 'react';
import './NewItem.css';

class NewItem extends React.Component {
    state = {
        text: null
    };

    addBtnHandler = () => {
        /*{Add new label with this.state.text}*/
    };

    textChangeHandler = () => {
        return (
            this.setState({
                text: 'x'
            }, () => {
                console.log(this.state.text)
            })
        )
    };

    render() {
        return (
            <div className='new-item-input'>
                <span>
                    <label>New Item</label>
                    <input onChange={this.textChangeHandler}/>
                </span>
                <button
                    className='btn-add'
                    onClick={this.addBtnHandler}>
                    Add
                </button>
            </div>
        );
    }
};

export default NewItem;