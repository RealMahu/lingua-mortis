import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoggedinContextProvider } from './contexts/LogginContext';
import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
		<LoggedinContextProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</LoggedinContextProvider>
  </Router>
);