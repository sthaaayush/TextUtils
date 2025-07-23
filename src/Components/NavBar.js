import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import TextForm from './TextForm'

export default function NavBar({ headText = "HeadText Here", aboutText = "AboutText Here", changeStyle }) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark-subtle">
            <div className="container-fluid">
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
                <div><i class="bi bi-brightness-high-fill"></i></div>
                <div className="form-check form-switch" style={{ display: "flex", flexDirection: "row" }}>
                    <div><input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={changeStyle} /></div>
                </div>
                <div><i class="bi bi-moon-stars-fill"></i></div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    headText: PropTypes.string,
    aboutText: PropTypes.string
}