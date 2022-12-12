import { Provider } from 'react-redux';
import store from './store/index';
import Navigation from './navigation';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}

export default App;
