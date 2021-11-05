import "../../components/Layout/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__dropdown">
          <span></span>
          <p>VNM</p>
      </div>
      <div className="header__user">
        <div className="user__avatar">
        </div>
        <p>Ngọc Tuyền</p>
      </div>
    </div>
  );
}

export default Header;
