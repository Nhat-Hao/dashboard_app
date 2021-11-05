import '../Layout/DashboardMenu.css'
import DashboardHeader from '../Dashboard/DashboardHeader';
import DashboardItem from '../Dashboard/DashboardItem';
import NavBar from '../Menu/NavBar';
import DashboardContent from '../Dashboard/DashboardContent';
function DashboardMenu(){
    return(
        <div>
            <NavBar />
            <DashboardHeader />
            <DashboardItem />
            <DashboardContent />
        </div>
    )
}

export default DashboardMenu;