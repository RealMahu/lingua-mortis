import { useContext, useState, useEffect } from 'react'
import { LoggedinContext } from '../../contexts/LogginContext'
import { NavLink, useLocation } from 'react-router-dom'
import LMLogo from "../../assets/LM-Logo.webp"
import Me from "../../assets/me.jpg"
import { toast } from 'react-toastify'
import './navbar.scss'

const Navbar = () => {
	const [openProfileMenu, setOpenProfileMenu] = useState(false);
	const {isLoggedIn, isAdmin} = useContext(LoggedinContext);

	const navItems = ["Home", "News", "Events", "Contact"]

	const toggleProfileMenu = () => {
		setOpenProfileMenu(prev => !prev)
	}

	const handleLogout = () => {
		toast.success("You're getting logged out!")
	}

	const location = useLocation();

	useEffect(() => {
		const navAv = document.getElementById("navAvatar");
		if (location.pathname === "/admin" || location.pathname === "/profile"){
			navAv.style.borderColor = "#190a2c"
		} else {
			navAv.style.borderColor = "#fff"
		}
	}, [location])

	return (
		<>
			<nav>
				<div className="nav-wrapper">
					<div className="logo-wrapper">
						<NavLink className="logo-link" to="/">
							<img src={LMLogo} alt="" />
							<h2>Lingua Mortis</h2>
						</NavLink>
					</div>
					<div className="link-wrapper">
						<ul>
							{navItems.map((item, index) => (
								<li key={index}><NavLink title='navlink' className="nav-link" to={item === "Home" ? "/" : item.toLowerCase()}>{item}</NavLink></li>
							))}
							<li>
								{isLoggedIn
									? (
											<div className="profile-wrapper" onClick={toggleProfileMenu}>
													<div className='avatar-wrapper'>
														<img id='navAvatar' src={Me} alt="" />
													</div>
												{openProfileMenu && 
													<div className="profile-menu">
														<NavLink to="/profile"><i className="bi bi-person-bounding-box"></i><p>Profile</p></NavLink>
														<hr />
														{isAdmin && (
															<>
																<NavLink to="/admin"><i className="bi bi-shield-lock"></i><p>Admin</p></NavLink>
																<hr />
															</>
														)}
														<NavLink onClick={(() => {handleLogout();})}><i className="bi bi-box-arrow-in-right"></i><p>Logout</p></NavLink>
													</div>
												}
											</div>
										)
									: (<NavLink to="login" title='navlink' className="nav-link">Login</NavLink>)
								}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar