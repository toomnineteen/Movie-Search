import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="container-nav">
      <nav>
        <div className="nav-name">
          <Link to="/" className="nav-name">LS Movie</Link>
        </div>
        <div className="navbar">
          <Link to="/" className="nav-name">Movie</Link>
          <Link to="/about" className="nav-name">About</Link>
        </div>
      </nav>
    </div>
  )
}
export default Navbar