import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js';
import App from './app.js';

const root = document.getElementById("app");

// Состояние приложения
const store = new Store({
  items: [
    { code: 1, title: 'Название элемента', price: 100 },
    { code: 2, title: 'Некий объект', price: 200 },
    { code: 3, title: 'Заголовок', price: 1000 },
    { code: 4, title: 'Короткое название', price: 2500 },
    { code: 5, title: 'Запись', price: 850 },
    { code: 6, title: 'Пример названия', price: 1005 },
    { code: 7, title: 'Седьмой', price: 1034 }
  ]
  // cartItems: []

});

// Сообщаем реакту что и куда рендерить.
store.subscribe(() => {
  ReactDOM.render(<App store={store} />, root);
});

// Сообщаем реакту что и куда рендерить.
ReactDOM.render(<App store={store} />, root);
