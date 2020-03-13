import React from 'react';
import './header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">Star DB</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="btn btn-link" href="#">Peoples</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-link" href="#">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-link" href="#">Starships</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;