import '../../components/Menu/NavBar.css';

function NavBar() {
    return(
        <div className="navigation">
            <div className="logo"></div>
            <div className="nav__menu">
                <div className="menu__dashboard">
                    <p>Tổng quan</p>
                </div>
                <div className="menu__dashboard-title-1">
                    <p>Dashboard</p>
                </div>
                <div className="menu__dashboard-title-2">
                    <p>GSM Modern on Map</p>
                </div>
                <div className="menu__dashboard-title-3">
                    <p>Quản lý cảnh báo</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar;