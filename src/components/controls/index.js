import React from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Controls({ openModal, cartItems, totalPrice, totalCount }) {
    // console.log('Controls');
    return <div className='Controls'>
        <div className="cartView">
            В корзине: {cartItems.length === 0 ? 'пусто' + ' ' : + totalCount + ' ' + plural(totalCount, 'товар', 'товара', 'товаров') + ' ' + ' / ' + totalPrice + ' ' + '₽'}
        </div>
        <button onClick={openModal}>Перейти</button>
    </div>
}

Controls.propTypes = {
    onCreate: propTypes.func.isRequired
}

Controls.defaultProps = {
    onCreate: () => { }
}

export default React.memo(Controls);
