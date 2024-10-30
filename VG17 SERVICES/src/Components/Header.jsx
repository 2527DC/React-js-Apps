const  Header=()=>{

    return<>
    <header className="site-header">
       
        <div className="container">
            <nav className="Navbar">
                <a className="logo" href="index.html"><img src="./assets/images/logo.png" alt="img-logo"/></a>
                <ul>
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                        <a href="our-services.html">Our Services
                            <b><i className="ri-arrow-down-s-fill"></i></b>
                        </a>
                        <ul className="dropdown">
                            <li><a href="prospect-lists.html">Prospect Lists</a></li>
                            <li><a href="cleansing-data.html">Cleansing Data</a></li>
                            <li><a href="appending-data.html">Appending Data</a></li>
                            <li><a href="marketing-via-email.html">Marketing Via Email</a></li>
                            <li><a href="profiling-of-data.html">Profiling Of Data</a></li>
                            <li><a href="verification-of-data.html">Verification Of Data</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="b2b-email-list.html">B2B Email List
                            <b><i className="ri-arrow-down-s-fill"></i></b>
                        </a>
                        <ul className="dropdown">
                            <li><a href="c-level-list.html">C Level List</a></li>
                            <li><a href="healthcare-list.html">Healthcare List</a></li>
                            <li><a href="technology-list.html">Technology List</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="industries.html">Industries</a>
                    </li>
                    <li>
                        <a href="reseller.html">Reseller</a>
                    </li>
                    <li>
                        <a href="contact-us.html">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
        
        <div className="container">
            <nav className="mobile-nav">
                <div className="mobile-logo">
                    <a href="index.html"><img src="./assets/images/logo.png" alt=""/></a>
                </div>

                <div>
                    <nav id="myNav" className="overlay">
                        <a href="javascript:void(0)" className="closebtn">×</a>
                        <ul className="overlay-content">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                                <a href="our-services.html">Our Services
                                    <b><i className="ri-arrow-down-s-fill"></i></b>
                                </a>
                                <ul className="dropdown">
                                    <li><a href="prospect-lists.html">Prospect Lists</a></li>
                                    <li><a href="cleansing-data.html">Cleansing Data</a></li>
                                    <li><a href="appending-data.html">Appending Data</a></li>
                                    <li><a href="marketing-via-email.html">Marketing Via Email</a></li>
                                    <li><a href="profiling-of-data.html">Profiling Of Data</a></li>
                                    <li><a href="verification-of-data.html">Verification Of Data</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="b2b-email-list.html">B2B Email List
                                    <b><i className="ri-arrow-down-s-fill"></i></b>
                                </a>
                                <ul className="dropdown">
                                    <li><a href="c-level-list.html">C Level List</a></li>
                                    <li><a href="healthcare-list.html">Healthcare List</a></li>
                                    <li><a href="technology-list.html">Technology List</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="industries.html">Industries</a>
                            </li>
                            <li>
                                <a href="reseller.html">Reseller</a>
                            </li>
                            <li>
                                <a href="contact-us.html">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                    <span  >☰</span>
                </div>
            </nav>
        </div>
       
    </header>
    </>
}
export default Header;