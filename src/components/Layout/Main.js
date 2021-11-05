import '../../components/Layout/Main.css';
import Header from '../../components/Layout/Header';
import DashboardMenu from '../../components/Layout/DashboardMenu';

function Main() {
    return(
        <div className="container">
            <Header />
            <DashboardMenu />
        </div>
    );
}

export default Main;