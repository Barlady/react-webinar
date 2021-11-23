import React, { useState } from 'react';
import ListItem from './ListItem';
import './style.css';

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({ store }) {

  // const [count, setCount] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  // // const [newCount, setNewCount] = useState(0);
  // const [selectedTitle, setSelectedTitle] = useState('');


  // const countItem = (code) => {
  //   store.getState().items.map(item => {
  //     if (item.code === code) {
  //       const selectTitle = item.title;
  //       // console.log(selectTitle)

  //       const currentCount = count[code - 1];
  //       const nextCount = currentCount + 1;
  //       count[code - 1] = nextCount;
  //       // setCount(currentCount + 1);
  //       const arr = count;

  //       arr[code - 1] = nextCount
  //       setCount(arr)
  //       console.log(count)
  //       // console.log()
  //       // console.log(count > 0 ? selectTitle + '| Выделялся ' + count + 'раз' : item.title)
  //       // console.log(item.title + count)
  //     } else {
  //       // console.log(item.title);
  //     }
  //   })
  // }




  return (
    <div className='App'>
      <div className='App__head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='Controls'>
        <button onClick={() => store.createItem()}> Добавить</button>
      </div>
      <div className='App__center'>
        <div className='List'>{store.getState().items.map(item =>
          <div
            key={item.code}
            className={'List__item' + (item.selected ? ' List__item_selected' : '')}
          >
            <div className='Item' onClick={() => store.selectItem(item.code)}>
              <div className='Item__number'>{item.code}</div>
              <div className='Item__title' onClick={() => store.selectTitle(item.code)}>{item.count > 0 ? item.title + ' | Выделялся ' + item.count + 'раз' : item.title}</div>
              <div className='Item__actions'>
                <button onClick={() => store.deleteItem(item.code)}>
                  Удалить
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;