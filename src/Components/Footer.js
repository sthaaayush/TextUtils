import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    const footerStyle = {
        position: "relative",
        left: 0,
        top: "50vh",
        width: "100%",
        zIndex: 100,
    };
    return (
        <footer className="bg-dark text-white text-center py-3 mt-5" style={footerStyle}>
            <div className="container">
                <div className="mb-2">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
                <div>
                    <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://github.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
