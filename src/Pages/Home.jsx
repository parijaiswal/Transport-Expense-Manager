import CardInfo from "../components/CardInfo";
import RecentExpenses from "../components/RecentExpenses";
import Recenttrip from "../components/Recenttrip";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CardData from "../data/CardData";
function Home(){
    return(
        <div className="bg-[#fafafa] min-h-screen min-w-full mt-5 pr-4">
        <div className="flex flex-col items-center bg-[#cadec9] rounded-2xl p-4 g-40 h-100 from-neutral-800 to-neutral-900">
            <div className="flex flex-row">
            <div>
                <h1 className="pt-5 max-w-xl pr-3 text-[50px]">Welcome to your Expense Tracker</h1>
                <p className="text-[18px] text-[#434141] pt-5 max-w-md pb-7.5 font-semibold">Manage Your transport expense, drivers, clients and deliveries in one place</p>
                <Link to="addexp">
                <button className="w-50 bg-[#42813f] whitespace-nowrap text-white font-medium border-none rounded-[10px] px-8 py-5 text-[17px] cursor-pointer flex items-center gap-2 hover:bg-[#1f5c1bcc] hover:shadow-[5px_5px_5px_5px_rgba(168,224,91,0.696)] transition-all ease-in hover:scale-105"><FaPlus/> Add Expenses</button></Link>
            </div>
            
            <div className="flex flex-end">
                <img src="./src/assets/Hero-image-bg.png" alt="main image"  />
            </div>
            </div>
            </div>  
             <CardInfo data={CardData()}/> 
             <div className="flex flex-row justify-center items-center mt-8 gap-25 h-auto mr-4">
            <RecentExpenses />
             <Recenttrip/>
             </div>
             
        </div>
        
    )

}
export default Home;