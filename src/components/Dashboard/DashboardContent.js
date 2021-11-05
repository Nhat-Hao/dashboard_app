import "../Dashboard/DashboardContent.css";

function DashboardContent() {
  return (
    <div className="content__container">
      <div className="content-4">
        <h1>Cảnh báo ATM</h1>
        <div className="content-4__box">
          <div className="content-4__items">
            <div className="items__box">
              <div className="icon icon4-1"></div>
              <div className="text">
                <p>Nhiệt</p>
                <p>235 thiết bị</p>
              </div>
            </div>
          </div>
          <div className="content-4__items">
            <div className="items__box">
              <div className="icon icon4-2"></div>
              <div className="text">
                <p>Khói</p>
                <p>235 thiết bị</p>
              </div>
            </div>
          </div>
          <div className="content-4__items">
            <div className="items__box">
              <div className="icon icon4-3"></div>
              <div className="text">
                <p>Rung</p>
                <p>235 thiết bị</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-4__box2">
          <div className="content-4__items2">
            <div className="items__box2">
              <div className="icon icon4-4"></div>
              <div className="text">
                <p>Nhiệt</p>
                <p>235 thiết bị</p>
              </div>
            </div>
          </div>
          <div className="content-4__items2">
            <div className="items__box2">
              <div className="icon icon4-5"></div>
              <div className="text">
                <p>Rò điện</p>
                <p>235 thiết bị</p>
              </div>
            </div>
          </div>
          <div className="content-4__items2">
            <div className="items__box2">
              <div className="icon icon4-6"></div>
              <div className="text">
                <p>Cửa trên</p>
                <p>235 thiết bị</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-5">
        <h1>Cảnh báo phòng giao dịch</h1>
        <div className="content-5__box">
        <div className="content-5__items">
            <div className="items5__box">
              <div className="icon icon5-1"></div>
              <div className="text">
                <p>Báo động khẩn cấp</p>
                <p>235 thiết bị</p>
              </div>
            </div>
          </div>
          <div className="content-5__items">
            <div className="items5__box">
              <div className="icon icon5-2"></div>
              <div className="text">
                <p>Báo động khẩn cấp</p>
                <p>235 thiết bị</p>
              </div>
            </div>
          </div>
          <div className="content-5__items">
            <div className="items5__box">
              <div className="icon icon5-3"></div>
              <div className="text">
                <p>Báo động khẩn cấp</p>
                <p>235 thiết bị</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
