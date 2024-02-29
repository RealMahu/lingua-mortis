import './footer.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
	return (
		<footer>
			<div className="footer-row-top">
				<div className="footer-row-items">
					<a href="https://www.discord.gg/linguamortis" target="_blank" rel="noopener noreferrer" className="footer-icon-wrapper">
						<i className="bi bi-discord"></i>
					</a>
					<a href="ts3server://54.37.203.32?port=5029&password=EVMortis&channel=Default%20Channel" target="_self" className="footer-icon-wrapper">
						<i class="bi bi-dash-circle"></i>
					</a>
					<a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer" className="footer-icon-wrapper">
						<i className="bi bi-twitch"></i>
					</a>
					<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="footer-icon-wrapper">
						<i className="bi bi-youtube"></i>
					</a>
				</div>
			</div>
			<div className="footer-boxL">
				<ul className="footer-boxL-list">
					<li>
						<a href="https://www.newworld.com/en-us" target="_blank" rel="noopener noreferrer">New World</a>
					</li>
					<li>
						<a href="https://www.newworld.com/en-us/news" target="_blank" rel="noopener noreferrer">New World - News</a>
					</li>
					<li>
						<a href="https://www.newworld.com/en-us/support/server-status" target="_blank" rel="noopener noreferrer">New World - Server Status</a>
					</li>
					<li>
						<a href="https://www.nwdb.info/" target="_blank" rel="noopener noreferrer">NW-DataBase</a>
					</li>
					<li>
						<a href="https://new-world.guide" target="_blank" rel="noopener noreferrer">NW-GUIDE</a>
					</li>
				</ul>
			</div>
			<div className="footer-boxM">
				<h2>Lingua Mortis</h2>
				<p>Teabaggen die Boys! <span>~QBulma</span></p>
			</div>
			<div className="footer-boxR">
				<ul className="footer-boxR-list">
					<li><NavLink to="/imprint">Impressum</NavLink></li>
					<li><NavLink to="/privacy-policy">Datenschutz</NavLink></li>
					<li><NavLink to="/cookie-policy">Cookie-Richtlinie</NavLink></li>
					<li><NavLink to="/sitemap">Sitemap</NavLink></li>
				</ul>
			</div>
			<div className="footer-row-bot">
				<small className="copyright">&copy; Copyright 2024 - Lingua Mortis</small>
				<small className="developer">Developed and designed by <span><a href="https://github.com/RealMahu" target="_blank" rel="noopener noreferrer">Astrapi</a></span></small>
			</div>
	</footer>
	)
}

export default Footer