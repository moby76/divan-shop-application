import { NavLink } from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <NavLink to="/" className="navbar-brand" >АртДиван</NavLink>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to="/soft-furniture" className="nav-link">Мягкая Мебель</ NavLink> 
            </li>
            <li className="nav-item">
            <NavLink to="/articles" className="nav-link">Статьи</NavLink>
            </li>
        </ul>
    </nav>
)