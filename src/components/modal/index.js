import React from "react";
import './styles.css';

function Modal({ active, setActive, cartItems, totalPrice, totalCount }) {

    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div className="modal__content">
                <div className="modal__header">
                    <div className='header__content'>
                        <h1>Корзина</h1>
                        <button className="" onClick={() => setActive(false)}>Закрыть</button>
                    </div>
                </div>
                <div className='cartItems'>
                    {cartItems.map((item) =>
                        <div key={item.code} className='Item'>
                            <div className='Item__number'>{item.code}</div>
                            <div className='Item__title'>
                                {item.title}
                            </div>
                            <div className='Item__price'>{item.price * item.count + ' ' + '₽'}</div>
                            <div className='Item__count'>{item.count + 'шт.'}</div>
                        </div>
                    )}
                </div>
                <div className='total'>
                    <div>
                        <b>Итого:</b>
                    </div>
                    <div className='total__price'>
                        <b>{totalPrice + ' ' + '₽'}</b>
                    </div>
                    <div className='total__count'>
                        <b>{totalCount + ' ' + 'шт.'}</b>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default React.memo(Modal);