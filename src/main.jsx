import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<AppRout
er />);
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

createRoot (document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);