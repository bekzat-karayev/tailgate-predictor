import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './store/store';
import App from './components/App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const Page = () => (
  <Provider store={store}>
  <App />
 </Provider>
);

root.render(<Page />);