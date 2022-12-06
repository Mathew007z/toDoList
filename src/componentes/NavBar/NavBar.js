
import { Link } from "react-router-dom";
import './navbar.css'

const NavBar= ()=>{
    return(
        <div className="container">
            <h2> Harry's Book</h2>
            <nav className="nav">  
            <Link to="/"><p className="home">Home</p></Link>
            <Link to="/productos"><p className="productos">Productos</p></Link>
            <Link to="/carrito"></Link>
            </nav>
            
        </div>

    )
}
export default NavBar;