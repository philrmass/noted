import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import './reset';
import './style';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
