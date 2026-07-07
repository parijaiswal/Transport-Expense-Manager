import tripdata from "../data/TripData";
function Recenttrip(){
    return(
        <>
        <ul className="flex flex-col items-center bg-white rounded-2xl p-5 shadow-[0px_4px_8px_#1e8d3833] w-1/2 min-h-95">
         <div className="flex flex-row justify-between items-center w-full mb-4 p-1 font-bold pr-0">
            <span className="text-xl font-bold pl-0">Recent Trips</span>
            <span className="text-green-700 bg-linear-to-r from-green-100 to-green-200 rounded-full cursor-pointer p-2 hover:scale-105 transition-all ease-in-out duration-300">View all</span>
        </div>
            {tripdata.map((item,index)=>(
                <li key={index} className="pt-5 w-full">
                <div className="flex justify-between gap-3">
                    <div className="flex flex-col items-start font-semibold">{item.from} to {item.to}</div> 
                    <div className="font-bold">{item.bill_amt} </div>
                    
                </div>
                <div className="flex flex-row justify-between text-gray-700 text-sm  font-medium pt-2">
                    <div>Driver: {item.Driver}</div>
                    <div>Date: {item.date}</div>
                </div>
                   
                   <hr className="border-b border-gray-200 mt-2"/>
                </li>
            ))}
        </ul>
        </>
    );
}
export default Recenttrip;