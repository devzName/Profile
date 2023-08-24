import logo from '../assets/img/logo.png'
import { useState, useEffect } from "react"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import telegram from '../assets/img/telegram.svg'
import { HashLink } from 'react-router-hash-link'
import { Navbar, Nav, Container } from "react-bootstrap"
import { BrowserRouter as Router } from "react-router-dom"
import { APP_LINK } from "../common/helpers"


const NavBar = (props) => {
	const { t } = props
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", onScroll)

		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value)
	}

	return (
		<Router>
			<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
				<Container>
					<Navbar.Brand href="/">
						<img src={logo} alt="Logo" style={{width: "60%", padding : "2px"}} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t('lng_home')}</Nav.Link>
							<Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{t('lng_skill')}</Nav.Link>
							<Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t('lng_projects')}</Nav.Link>
							<Nav.Link href="#cv" className={activeLink === 'cv' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cv')}>{t('lng_cv')}</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
								<a href="#"><img src={navIcon1} alt="" /></a>
								<a href={APP_LINK.facebook} target="_blank"><img src={navIcon2} alt="facebook" /></a>
								<a href={APP_LINK.telegram} target="_blank"><img src={telegram} alt="telegram" /></a>
							</div>
							<HashLink to='#connect'>
								<button className="vvd"><span>{t('lng_connect')}</span></button>
							</HashLink>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	)
}

export default NavBar
