import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../img/profile2.png';

const Home = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="profile-header">
                    <img
                        src={profileImage}
                        alt="Ahmet Akbiyik"
                        className="profile-img"
                    />
                    <h1>Ahmet Akbiyik</h1>
                    <h3 style={{ color: 'var(--color-text-secondary)', fontWeight: '500' }}>
                        Quantitative UX Researcher at Meta
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Ph.D. in Political Economy and Government, Harvard University
                    </p>
                </div>
                <div style={{ marginTop: '0.5cm' }}>
                    <div className="social-links" style={{ justifyContent: 'center' }}>
                        <a href="https://github.com/ahmetakbiyik" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/ahmet-akbiyik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="https://scholar.google.com/citations?user=FDbIYVgAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                            </svg>
                        </a>
                        <a href="https://x.com/ahmetakbiyik_en" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h2>About Me</h2>
                        <p>
                            I am a researcher and data scientist focused on harnessing data, technology, and rigorous research to develop impactful solutions for online interactions. As a Quantitative UX Researcher at Meta, I have led projects that informed product strategy, designed evidence-based interventions, and conducted experiments to guide investment decisions.
                        </p>
                        <p>
                            I hold a Ph.D. in Political Economy and Government from Harvard University. My research centers on migration, social cohesion, and the role of digital platforms in shaping intergroup relations. My work has been supported by The Weatherhead Center for International Affairs and The Institute for Quantitative Social Science (IQSS), and has received grants from J-PAL at MIT and The Stone Program at Harvard.
                        </p>
                        <p>
                            My Ph.D. research examined disinformation and intergroup relations across digital platforms such as Facebook, X, WhatsApp, and Telegram. I conducted survey studies and collaborated with colleagues on projects in diverse regions, including Sweden, Turkey, and Lebanon, focusing on how disinformation influences individual attitudes and intergroup dynamics.
                        </p>

                        <p>
                            <p>
                                Outside of research, I love photography. It allows me to capture moments of everyday life and the beauty of nature. Here are some of my favorite photos on my{" "}
                                <a
                                    href="https://www.instagram.com/ahmetakbiyik.jpeg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Instagram
                                </a>.
                            </p>
                        </p>
                    </div>

                    <div className="card">
                        <h2>Education</h2>
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Harvard University</h3>
                            <p style={{ marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                                Ph.D. in Political Economy and Government
                            </p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                Kennedy School of Government
                            </p>
                        </div>
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Boston University</h3>
                            <p style={{ marginBottom: '0', fontSize: '0.95rem' }}>
                                M.A. in Political Science
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Boğaziçi University</h3>
                            <p style={{ marginBottom: '0', fontSize: '0.95rem' }}>
                                B.A. in Political Science and Economics
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}>
                        <Link to="/research" className="btn">View My Research</Link>
                        <Link to="/contact" className="btn btn-outline" style={{ marginLeft: 'var(--spacing-md)' }}>
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
