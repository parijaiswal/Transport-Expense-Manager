import SideBar from "../components/SideBar";
import Home from "./Home";
// import "./MainPage.css";
function MainPage(){
    return(
        <div className="flex flex-row w-full justify-content-space-between">
            <SideBar />
            <Home/>
        </div>
    );

}
export default MainPage;