import React from 'react';
import './NewItem.css';

class NewItem extends React.Component {

    render() {
        return (
            <div className='new-item-input'>
                <span>
                    <label>New Item</label>
                    <input />
                </span>
                <button className='btn-add'>Add</button>
            </div>
        );
    }
};

export default NewItem;