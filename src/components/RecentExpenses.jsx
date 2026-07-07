import expData from "../data/ExpData";
function RecentExpenses(){
    return(
        <>
        <ul className="flex flex-col justify-between  bg-white rounded-2xl p-5 mt-0 shadow-[0px_4px_8px_#1e8d3833] w-1/2 min-h-95">
        <div className="flex flex-row justify-between items-center w-full mb-4 p-1 font-bold pr-0">
            <span className="text-xl font-bold pl-0">Recent Expenses</span>
            <span className="text-green-700 bg-linear-to-r from-green-100 to-green-200 rounded-full cursor-pointer p-2 hover:scale-105 transition-all ease-in-out duration-300">View all</span>
        </div>
            {expData.map((item,index)=>(
                <li key={index} className="pt-5 w-full">
                  <div className="flex justify-between gap-3">
                    <div className="flex flex-col items-start">  {/* right section */}
                       <div className=" flex flex-row gap-2 font-semibold"><span className={`${item.iconColor} ${item.iconShColor} ${item.iconBgcolor} rounded-full w-8 h-8 p-2`}>{item.icon}</span>{item.type}</div> 
                       <div className="text-gray-700 text-sm font-medium pt-1">{item.number} </div>
                    </div>
                    <div className="flex flex-col items-end">{/*left-section*/}
                        <div className="font-bold">{item.amount}</div>
                        <div className="text-gray-700 text-sm p-1 font-medium"> {item.date} </div>
                        </div> 
                        
                  </div>
                  <hr className="border-b border-gray-200 mt-1"/>
                </li>
            ))}
        </ul>
        </>
    );
}
export default RecentExpenses;