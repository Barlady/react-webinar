import React from "react";
import propTypes from 'prop-types';
import Item from "../item";
import './styles.css';

function List({ items, addItem }) {
    // console.log('List');
    return (
        <div className='List'>{items.map(item =>
            <div className='List__item' key={item.code}>
                <Item item={item} addItem={addItem} />
            </div>
        )}
        </div>
    )
}

List.propTypes = {
    items: propTypes.arrayOf(propTypes.object).isRequired,
    onSelectItem: propTypes.func,
    onDeleteItem: propTypes.func
}

List.defaultProps = {
    items: [],
    onDeleteItem: () => { },
    onSelectItem: () => { }
}

export default React.memo(List);