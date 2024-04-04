import { Link, Outlet } from "react-router-dom";
import { useSearchToggle } from './../useEffect/searchToggle';
import { useSticky } from './../useEffect/useSticky';
import { useState } from "react";

const Header = () => {
    useSearchToggle();
    useSticky();
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <>
            <div id="undefined-sticky-wrapper" className="sticky-wrapper" style={{ height: 80 }}>
                <header className="header_area sticky-header">
                    <div className="main_menu">
                        <nav className="navbar navbar-expand-lg navbar-light main_box">
                            <div className="container">
                                {/* Brand and toggle get grouped for better mobile display */}
                                <Link to="/" className="navbar-brand logo_h">
                                    <img src="img/logo.png" alt="" />
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                {/* Collect the nav links, forms, and other content for toggling */}
                                <div
                                    className="collapse navbar-collapse offset"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="nav navbar-nav menu_nav ml-auto">
                                        <li className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}>
                                            <Link to="/" className="nav-link" onClick={() => setActiveLink('Home')}>
                                                Home
                                            </Link>
                                        </li>
                                        <li className={`nav-item submenu dropdown ${activeLink === 'Shop' ? 'active' : ''}`}>
                                            <Link
                                                to="/"
                                                className="nav-link dropdown-toggle"
                                                onClick={() => setActiveLink('Shop')}
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Shop
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link to="/category" className="nav-link" onClick={() => setActiveLink('Shop')}>
                                                        Shop Category
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/detail" className="nav-link" onClick={() => setActiveLink('Shop')}>
                                                        Product Details
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/checkout" className="nav-link" onClick={() => setActiveLink('Shop')}>
                                                        Product Checkout
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/cart" className="nav-link" onClick={() => setActiveLink('Shop')}>
                                                        Shopping Cart
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/" className="nav-link" onClick={() => setActiveLink('Shop')}>
                                                        Confirmation
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={`nav-item submenu dropdown ${activeLink === 'Blog' ? 'active' : ''}`}>
                                            <Link
                                                to="/"
                                                className="nav-link dropdown-toggle"
                                                onClick={() => setActiveLink('Blog')}
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Blog
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link to="/blog" className="nav-link" onClick={() => setActiveLink('Blog')}>
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/blog" className="nav-link" onClick={() => setActiveLink('Blog')}>
                                                        Blog Details
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={`nav-item submenu dropdown ${activeLink === 'Pages' ? 'active' : ''}`}>
                                            <Link
                                                to="/"
                                                className="nav-link dropdown-toggle"
                                                onClick={() => setActiveLink('Pages')}
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Pages
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link to="/login" className="nav-link" onClick={() => setActiveLink('Pages')}>
                                                        Login
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/tracking" className="nav-link" onClick={() => setActiveLink('Pages')}>
                                                        Tracking
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to="/" className="nav-link" onClick={() => setActiveLink('Pages')}>
                                                        Elements
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={`nav-item ${activeLink === 'Contact' ? 'active' : ''}`}>
                                            <Link to="/contact" className="nav-link" onClick={() => setActiveLink('Contact')}>
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="nav-item">
                                            <Link to="cart" className="cart">
                                                <span className="ti-bag" />
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <button className="search" style={{ padding: 10 }}>
                                                <span className="lnr lnr-magnifier" id="search" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="search_input" id="search_input_box">
                        <div className="container">
                            <form className="d-flex justify-content-between">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="search_input"
                                    placeholder="Search Here"
                                />
                                <button type="submit" className="btn" />
                                <span
                                    className="lnr lnr-cross"
                                    id="close_search"
                                    title="Close Search"
                                />
                            </form>
                        </div>
                    </div>
                </header>
            </div>

            <Outlet />
        </>
    );
}

export default Header;