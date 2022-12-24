
import './App.css';
import Counter from './components/Counter';
import {Provider} from 'react-redux'
import store from './components/store'
import Post from './components/Post';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter />
      <Post />
    </div>
    </Provider>
  );
}

export default App;
