import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar({ headText = "HeadText Here", aboutText = "AboutText Here", changeStyle, icon }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark-subtle">
                <div className="container-fluid">
                    <img src="https://img.icons8.com/?size=100&id=5I10YpmKS9iN&format=png&color=000000" alt="" height='25px' className='mx-2' />
                    <Link className="navbar-brand" to="/">{headText}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{aboutText}</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Dark and White Toggler */}
                    <div><i className={`bi bi-${icon}-fill fs-4 mx-3`} onClick={changeStyle} style={{ cursor: "pointer" }}></i></div>
                </div>
            </nav>
        </>
    )
}

NavBar.propTypes = {
    headText: PropTypes.string,
    aboutText: PropTypes.string
}