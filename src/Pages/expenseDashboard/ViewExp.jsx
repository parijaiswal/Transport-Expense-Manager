import { FiSearch } from "react-icons/fi";
import ViewExpData from "../../data/ViewExpData";
import CardInfo from "../../components/CardInfo";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
function ViewExp(){

    return(
        <div>
            <div className="pt-2.5 pb-3.5 text-2xl font-semibold">
                <h2 className="font-bold text-[30px]">View Expense</h2>
                <hr className="border-b border-gray-300 mt-1"/>
                <CardInfo data={ViewExpData()}/>
            </div>
            <hr className="border-b border-gray-300 mt-1"/>
            <div className="pt-3 flex flex-row justify-between mt-3">
                    <div className="relative flex items-center">
                    <FiSearch className="absolute w-10 h-6"/><input className="pl-10 border border-2px rounded-[10px] py-3 px-7" type="search" placeholder="search here"/>
                    </div>
                <div><Link to="addexp">
                <button className="w-50 h-10 bg-[#42813f] whitespace-nowrap text-white font-medium border-none rounded-[10px] px-8 py-5 text-[17px] cursor-pointer flex items-center gap-2 hover:bg-[#1f5c1bcc] hover:shadow-[2px_2px_2px_2px_rgba(168,224,91,0.696)] transition-all ease-in hover:scale-105"><FaPlus/> Add Expenses</button>
                </Link></div>
            </div>
            <div className="border rounded-2xl border-gray-500 overflow-hidden mt-3">
                <table className="table-auto w-full h-75 border-collapse border-spacing-0 text-center">
                    <thead>
                        <tr className="border-b border-gray-300 h-15 bg-green-50 font-bold text-lg">
                            <th>Date</th>
                            <th>Truck No</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="h-78">
                        <tr className="border-b border-gray-300">
                            <td>15 Jul</td>
                            <td>GJ01AB1234</td>
                            <td>Fuel</td>
                            <td>HP Petrol Pump, Ahmedabad</td>
                            <td>₹5,000</td>
                            <td><div  className="flex flex-row justify-center  text-lg gap-2">
                                <button className="flex items-center justify-center border-2 w-8 border-gray-300 rounded-[5px] h-7 cursor-pointer"><FaEdit/></button><button className="flex items-center justify-center border-2 w-8 border-gray-300 rounded-[5px] h-7 cursor-pointer"><RiDeleteBin5Fill /></button></div></td>
                        </tr>

                        <tr className="border-b border-gray-300">
                            <td>15 Jul</td>
                            <td>GJ01AB3333</td>
                            <td>Toll Tax</td>
                            <td>S.G Road, Toll-Tax</td>
                            <td>₹850</td>
                            <td><div className="flex flex-row justify-center  text-lg gap-2"><button className="flex items-center justify-center border-2 w-8 border-gray-300 rounded-[5px] h-7 cursor-pointer"><FaEdit/></button><button className="flex items-center justify-center border-2 w-8 border-gray-300 rounded-[5px] h-7 cursor-pointer"><RiDeleteBin5Fill /></button></div></td>
                        </tr>

                        <tr className="border-b border-gray-300">
                            <td>14 Jul</td>
                            <td>GJ01EF9876</td>
                            <td>Repair</td>
                            <td>Tyre Replacement</td>
                            <td>₹2000</td>
                            <td><div  className="flex flex-row justify-center  text-lg gap-3"><button className="flex items-center justify-center border-2 w-8 border-gray-300 rounded-[5px] h-7 cursor-pointer"><FaEdit/></button><button className="flex items-center justify-center border-2 w-8 border-gray-300 rounded-[5px] h-7 cursor-pointer"><RiDeleteBin5Fill /></button></div></td>
                        </tr>

                        <tr className="border-b border-gray-300">
                            <td>14 Jul</td>
                            <td>GJ01EF9876</td>
                            <td>Fuel</td>
                            <td>Nayra Pertol Pump, Sola</td>
                            <td>₹2000</td>
                            <td><div  className="flex flex-row justify-center  text-lg gap-3"><button className="flex items-center justify-center border-2 w-8 border-gray-300 rounded-[5px] h-7 cursor-pointer"><FaEdit/></button><button className="flex items-center justify-center border-2 w-8 border-gray-300 rounded-[5px] h-7" cursor-pointer><RiDeleteBin5Fill /></button></div></td>
                        </tr>

                         <tr className="border-b border-gray-300">
                            <td>13 Jul</td>
                            <td>GJ01PI9908</td>
                            <td>Fuel</td>
                            <td>Kanha Pertol Pump</td>
                            <td>₹2000</td>
                            <td><div  className="flex flex-row justify-center  text-lg gap-2"><button className="flex items-center justify-center border-2 w-8 border-gray-300 rounded-[5px] h-7 cursor-pointer hover:shadow-[0px_5px_8px_#1e8d3833]"><FaEdit/></button><button className="flex items-center justify-center border-2 w-8 border-gray-300 rounded-[5px] h-7 cursor-pointer"><RiDeleteBin5Fill /></button></div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ViewExp;