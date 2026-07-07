import { FaTruck } from "react-icons/fa";
import { FiHome,FiPlusCircle,FiUsers,FiUserPlus,FiLogOut,FiCreditCard } from "react-icons/fi";
import '../index.css';
function SideBar(){
    const navbardesgin = "text-gray-700  text-xl m-4 p-3 rounded-[8px] cursor-pointer hover:bg-[#cadec9] transition-all duration-300 ease-in-out hover:shadow-[0px_4px_8px_#1e8d3833] flex items-center gap-2 hover:text-[#1e8d38] hover:font-semibold hover:scale-105";
        return(
        <>
        <div className="w-64 h-screen  border-2 border-[#f5f5f5] bg-[#f7f5f5] text-xl rounded-[10px] mb-2 pl-6 flex flex-col">
            <div className="text-green-500 text-2xl font-medium pr-2 pt-0.7">
                <h3 className="flex items-center gap-2 mb-5 pt-2.5 whitespace-nowrap"><FaTruck style={{ color: "green", fontSize: "40px", paddingTop: "10px" }} /> Dolly Roadlines</h3>
            </div>
            <div className="font-medium">
                <ul>
                    <li className={navbardesgin}><FiHome /> DashBoard</li>
                    <li className={navbardesgin}><FiPlusCircle /> Add Expenses</li>
                    <li className={navbardesgin}><FiUsers /> Drivers</li>
                    <li className={navbardesgin}><FiUserPlus /> Clients</li>
                    <li className={navbardesgin}><FiCreditCard /> Payments</li>
                </ul>
            </div>
            <div className="mt-auto font-medium">
                <ul>
                    <li className={navbardesgin}><FiLogOut /> Logout</li>
                </ul>
            </div>
        </div>
        </>
    );

}
export default SideBar;