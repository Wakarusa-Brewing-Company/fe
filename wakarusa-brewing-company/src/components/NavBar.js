import {Link} from 'react-router-dom'

export default function NavBar(){
    return <nav id='nav-bar'>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='cart'>Cart</Link>
        <Link to='contact'>Contact Us</Link>
        <Link to='products'>Products</Link>
        <Link to='store'>Store</Link>
    </nav>
}