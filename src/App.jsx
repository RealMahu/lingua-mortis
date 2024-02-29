import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import EventPage from './pages/EventPage/EventPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NewsPage from './pages/NewsPage/NewsPage';
import LoginRegisterPage from './pages/LoginRegisterPage/LoginRegisterPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import 'react-toastify/dist/ReactToastify.css'
import './app.scss';
import AdminPage from './pages/AdminPage/AdminPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
		<>
			<Navbar />
			<ToastContainer
				autoClose={3000}
				theme="dark"
				pauseOnHover={false}
				pauseOnFocusLoss={false}
				newestOnTop
				draggable
			/>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />}/>
					<Route path='/news' element={<NewsPage />}/>
					<Route path='/events' element={<EventPage />}/>
					<Route path='/contact' element={<ContactPage />}/>
					<Route path='/login' element={<LoginRegisterPage />}/>
					<Route path='/profile' element={<ProfilePage />}/>
					<Route path='/admin' element={<AdminPage />}/>
					<Route path='*' element={<ErrorPage />}/>
				</Routes>
			</main>
			<Footer />
    </>
  );
}

export default App;
