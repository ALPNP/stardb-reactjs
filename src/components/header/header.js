import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({onServiceChange}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Star DB</Link>
            <button className="btn btn-info" type="button" onClick={onServiceChange}>
                <svg className="bi bi-arrow-left-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.146 7.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 11l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M2 11a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 11zm3.854-9.354a.5.5 0 010 .708L3.207 5l2.647 2.646a.5.5 0 11-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M2.5 5a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                </svg>
            </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="btn btn-link" to="/peoples/">Peoples</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-link" to="/planets/">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-link" to="/starships/">Starships</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-link" to="/secret">Secret</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;