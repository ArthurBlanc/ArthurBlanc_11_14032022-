import logo from '../../assets/logo-white.svg'
import './style.css'

function Footer() {
	return (
		<footer className="footer-wrapper">
			<img src={logo} className="footer-logo" />
			<p className="footer-credit">© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer
