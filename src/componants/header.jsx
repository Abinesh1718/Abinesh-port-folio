import React from 'react';
import './header.css';
import useScroll from '../hooks/scrol';
import { NAV_LINKS } from '../lib/data';

const Header = () => {
    const scrolled = useScroll(40); // This hook will return true if scrolled more than 40px

    return (
        <header className={scrolled ? 'scrol' : 'header'}>
            <div className="logo">
                <h1>Abinesh</h1>
            </div>
            <nav className="nav">
                <ul>
                    {NAV_LINKS.map((data, i) => (
                        <li key={i}><a href={data.href}>{data.name}</a></li>
                    ))}
                    <button className='cv'>Download CV</button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
