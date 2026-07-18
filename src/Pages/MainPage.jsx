import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
function MainPage(){
    return(
        <div className="flex flex-row w-full bg-[#fafafa] min-h-screen min-w-full">
            <div className="fixed left-0 top-0 h-screen w-1/5"><SideBar /></div>
            <div className="flex-1 flex min-h-screen justify-center items-center ml-[20%]"><Outlet /></div>
        </div>
    );
}
export default MainPage;