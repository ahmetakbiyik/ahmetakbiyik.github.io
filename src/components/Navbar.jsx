import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const navItems = [
        { path: '/', label: 'About' },
        { path: '/research', label: 'Research' },
        { path: '/experience', label: 'Experience' },
        { path: '/contact', label: 'Contact' }
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="nav-brand" onClick={closeMobileMenu}>Ahmet Akbiyik</Link>
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
                <ul className={`nav-links ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    {navItems.map(item => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href={`${import.meta.env.BASE_URL}Ahmet_CV_wb.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link"
                            onClick={closeMobileMenu}
                            style={{
                                background: 'var(--color-accent)',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: 'var(--radius-sm)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            CV
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
