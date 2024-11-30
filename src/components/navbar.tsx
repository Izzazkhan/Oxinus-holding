import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/favorites">Favorites</Link></li>
                <li><Link href="/random">Random Meal</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
