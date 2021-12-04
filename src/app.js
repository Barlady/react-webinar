import React, { useCallback, useState } from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";
import Modal from "./components/modal";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({ store }) {
  // console.log('App');

  const [modalActive, setModalActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.count, 0);
  const totalCount = cartItems.reduce((a, c) => a + c.count, 0);

  const callbacks = {
    onCreateItem: useCallback(() => store.createItem(), [store]),
    onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    onDeleteItem: useCallback((code) => store.deleteItem(code), [store])
  }

  const openModal = () => {
    setModalActive(true);
  }

  const addItem = (item) => {
    const index = cartItems.findIndex(x => x.code === item.code);
    if (cartItems[index] !== undefined) {
      cartItems[index].count++;
      setCartItems(
        [...cartItems]
      );
    } else {
      setCartItems([...cartItems, { ...item, count: 1 }])
    }

  }

  return (
    <Layout head={<h1>Магазин</h1>}>
      <Modal active={modalActive} setActive={setModalActive} cartItems={cartItems} totalPrice={totalPrice} totalCount={totalCount} addItem={addItem} />
      <Controls openModal={openModal} cartItems={cartItems} totalPrice={totalPrice} totalCount={totalCount} />
      <List items={store.getState().items}
        // onSelectItem={callbacks.onSelectItem}
        addItem={addItem} />
    </Layout>
  );
}

export default App;