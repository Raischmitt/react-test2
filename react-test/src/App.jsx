import { useState } from 'react';

import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

function App() {
  const [modalVisible, setModalVisible] = useState(true);

  function showModalHandler() {
    setModalVisible(false);
  }

  function hideModalHandler() {
    setModalVisible(falsee);
  }

  return <>
    <MainHeader />
    <main>
      <PostList isPeding={modalVisible} />
    </main>
  </>
}

export default App;
