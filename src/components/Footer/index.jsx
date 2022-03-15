import logo from '../../assets/logo-white.svg'
import './style.css'

function Footer() {
	return (
		<div className="footer-wrapper">
			<img src={logo} className="footer-logo" />
			<p className="footer-credit">© 2020 Kasa. All rights reserved</p>
		</div>
	)
}

export default Footer
