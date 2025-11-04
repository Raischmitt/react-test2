import { useState } from 'react';

import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

function App() {
  const [modalVisible, setModalVisible] = useState(true);

  function showModalHandler() {
    setModalVisible(false);
  }

  function hideModalHandler() {
    setModalVisible(false);
  }

  return <>
    <MainHeader onCreatePost={showModalHandler} />
    <main>
      <PostList isPeding={modalVisible} onStopPosting={hideModalHandler} />
    </main>
  </>
}

export default App;
