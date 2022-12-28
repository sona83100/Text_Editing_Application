import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container ">
                <a className="navbar-brand" href="/" style={{ fontFamily: 'Josefin Sans' }}> <strong>{props.title}</strong> </a>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ fontFamily: 'Josefin Sans' }}>Enable dark Mode</label>
                </div>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Set title here',
}