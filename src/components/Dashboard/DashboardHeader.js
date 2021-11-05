import "../../components/Dashboard/DashboardHeader.css";

function DashboardHeader() {
  return (
    <div>
      <div className="title">
        <p>Dashboard</p>
        <p>Thứ 2, ngày 05/06/2021</p>
      </div>

      <div className="time">
          <div className="time__tabs">
            <p>Ngày</p>
            <p>Tuần</p>
            <p>Tháng</p>
            <p>Năm</p>
          </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
