import CardInfo from "../components/CardInfo";
import RecentExpenses from "../components/RecentExpenses";
import ExpenseTracker from "./ExpenseTracker";
import Recenttrip from "../components/Recenttrip";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
//import "./Home.css";
function Home(){
    return(
        <div className="bg-[#fafafa] min-h-screen min-w-full m-0 ">
        <div className="flex flex-col items-center bg-[#cadec9] rounded-2xl p-4 m-8 g-40 h-100 from-neutral-800 to-neutral-900">
            <div className="flex flex-row">
            <div>
                <h1 className="pt-5 max-w-xl pr-3 text-[50px]">Welcome to your Expense Tracker</h1>
                <p className="text-[18px] text-[#434141] pt-5 max-w-md pb-7.5 font-semibold">Manage Your transport expense, drivers, clients and deliveries in one place</p>
                <Link to="/addExpense">
                <button className="w-50 bg-[#42813f]  text-white font-medium border-none rounded-[10px] px-8 py-5 text-[17px] cursor-pointer flex items-center gap-2 hover:bg-[#1f5c1bcc] hover:shadow-[5px_5px_5px_5px_rgba(168,224,91,0.696)] transition-all ease-in hover:scale-105"><FaPlus/> Add Expense</button></Link>
            </div>
            
            <div className="flex flex-end">
                <img src="./src/assets/Hero-image-bg.png" alt="main image"  />
            </div>
            </div>
            </div>  
             <CardInfo/> 
             <div className="flex flex-row justify-center items-center gap-25 m-8 h-auto">
            <RecentExpenses />
             <Recenttrip/>
             </div>
             
        </div>
        
    )

}
export default Home;