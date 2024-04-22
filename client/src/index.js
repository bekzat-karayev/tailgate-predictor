import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './store/store';
import App from './components/App';
import Login from './components/Login'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const Page = () => (
  <Provider store={store}>
  <Login />
 </Provider>
);

root.render(<Page />);