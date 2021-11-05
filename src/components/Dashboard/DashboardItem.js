import "../Dashboard/DashboardItem.css";

function DashboardItem() {
  return (
    <div class="small-container-2">
    <div class="content-2">
        <div class="content-2__box">
            <div class="content-2__items">
                <div class="content-2__icon icon-1">

                </div>
                <div class="content-2__title">
                    <p>Tổng số thiết bị</p>
                    <p>5000 thiết bị</p>
                </div>
            </div>
        </div>
        <div class="content-2__box">
            <div class="content-2__items">
                <div class="content-2__icon icon-2">

                </div>
                <div class="content-2__title">
                    <p>ATM</p>
                    <p>500 thiết bị</p>
                </div>
            </div>
        </div>
        <div class="content-2__box">
            <div class="content-2__items">
                <div class="content-2__icon icon-3">

                </div>
                <div class="content-2__title">
                    <p>Phòng giao dịch</p>
                    <p>1000 thiết bị</p>
                </div>
            </div>
        </div>

    </div>
    

    <div class="content-3">
        <h1>Trạng thái thiết bị</h1>
        <div class="content-3__items">
            <div class="content-3__box">
                <p>Kết nối nguồn AC</p>
                <div class="content-3__icon icon-3">
                </div>
            </div>
            <div class="content-3__box">
                <p>Đang kết nối</p>
                <div class="content-3__icon icon-2">
                </div>
            </div>
            <div class="content-3__box">
                <p>Bật cảnh báo</p>
                <div class="content-3__icon icon-1">
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default DashboardItem;
