import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaHome,FaUser,FaBriefcase,FaConciergeBell,FaEnvelope,FaExternalLinkAlt,FaBars} from 'react-icons/fa';

import logo from 'images/logo.png';

import './Sidebar.css';

const Sidebar=()=>{
	const [sidebarIsOpen,setSidebarIsOpen]=useState(false);

	const sidebarOpenHandler=()=>{
		setSidebarIsOpen(true);
	};
	const sidebarCloseHandler=()=>{
		setSidebarIsOpen(false);
	};
    const logoutHandler=()=>{
		console.log("logout");
    };

    return (
        <>
            <nav className={sidebarIsOpen?"sidebar sidebar-open":"sidebar"}>
                <div className="logo"><Link to="/" className="logo-image"><img src={logo} onClick={sidebarCloseHandler} alt="logo" /></Link></div>
                <div className="main-navbar">
                    <div className="sidebar-top">
                        <Link to="/" className="btn-link" onClick={sidebarCloseHandler}><FaHome className="link-icon" />首頁</Link>
                        <Link to="/about" className="btn-link" onClick={sidebarCloseHandler}><FaUser className="link-icon" />關於</Link>
                        <Link to="/service" className="btn-link" onClick={sidebarCloseHandler}><FaBriefcase className="link-icon" />服務</Link>
                        <Link to="/product" className="btn-link" onClick={sidebarCloseHandler}><FaConciergeBell className="link-icon" />產品</Link>
                        <Link to="/contact" className="btn-link" onClick={sidebarCloseHandler}><FaEnvelope className="link-icon" />聯絡</Link>
                        <Link to="/login" className="btn-link" onClick={sidebarCloseHandler}><FaUser className="link-icon" />登入</Link>
                    </div>
                    <div className="sidebar-bottom">
                        <div className="btn-link" onClick={logoutHandler}><FaExternalLinkAlt className="link-icon" />登出</div>
                    </div>
                </div>
            </nav>
            <div class="sidebar-overlay" onClick={sidebarCloseHandler}></div>
            <FaBars className="btn-toggle" onClick={sidebarOpenHandler} />
        </>
    );
}

export default Sidebar;