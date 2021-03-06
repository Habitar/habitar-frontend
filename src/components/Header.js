import React, { Component } from 'react'
import AuthService from '../services/AuthService'
import { NavContainer, NavItem, NavLink, SoundWrapper, SmallLogo } from './Header.style'
import Sound from './Sound'

class Header extends Component {

    constructor(props) {
      super(props)
      this.auth = new AuthService()
    }

    handleLogout = () => { // <- Remove local storage, and redirect the user
        this.auth.logout()
        this.history.replace('/login')
    }

    render() {

		let register
        let login
		let text
		let path
		let logo = <a href="/"><SmallLogo width="50px" /></a>


		if(this.auth.loggedIn()) {
			register = ""
		} else {
			register = <NavLink to="/register">
				REGISTER
			</NavLink>
		}

		if(this.auth.loggedIn()) {
			login = <NavLink to="/" onClick={this.handleLogout}>
				LOGOUT
			</NavLink>
		} else {
			login = <NavLink to="/login">
				LOGIN
			</NavLink>
		}

		if(this.auth.loggedIn()) {
			path = "/dashboard"
			text = "DASHBOARD"
		} else {
			path = "/register"
			text = ""
		}

        return (
            <NavContainer>
				<NavItem>
					{logo}
				</NavItem>
				<NavLink to="/about">
					ABOUT
				</NavLink>
				<NavLink to="/contact">
					CONTACT
				</NavLink>
				{register}
				{login}
				<NavLink to={path}>
					{text}
				</NavLink>
				<SoundWrapper>
					<Sound />
				</SoundWrapper>
            </NavContainer>
        )
    }
}

export default Header
