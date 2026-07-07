import SideBar from "../components/SideBar";
import Home from "./Home";
// import "./MainPage.css";
function MainPage(){
    return(
        <div className="flex flex-row w-full justify-content-space-between bg-[#fafafa] min-h-screen min-w-full m-0">
            <div className="fixed left-0 top-0 h-screen w-1/5"><SideBar /></div>
            <div className="ml-[17%]"><Home/></div>
        </div>
    );

}
export default MainPage;