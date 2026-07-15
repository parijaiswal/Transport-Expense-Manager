import { useState } from "react";
import { IoReceiptOutline } from "react-icons/io5";
function AddExpense() {
    const inputDesign = "border-1 ml-3 p-2 text-semibold mt-2 pt-0.5 rounded-[10px]";
    const fieldDesign = "text-semibold text-lg flex flex-col pb-2"
    const [category, setCategory] = useState("fuel");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [truckNo, setTruckNo] = useState("");
    const [place, setPlace] = useState("");
    const [garageName, setGarageName] = useState("");
    const [driverName, setDriverName] = useState("");
    const renderConditionalFields = () => {
        if (category === "challan") {
            return (
                <div>
                    <div className={fieldDesign}><label>Truck Number</label>
                    <input  placeholder="enter here truck number"  name="truckno" className={inputDesign} value={truckNo} onChange={(e) => setTruckNo(e.target.value)}/></div>
                    <div className={fieldDesign}><label>Place</label>
                    <input  placeholder="enter here place name"  name="place" className={inputDesign} value={place} onChange={(e) => setPlace(e.target.value)}/></div>
                </div>
            );
        } else if (category === "repair") {
            return (
                <div>
                    <div className={fieldDesign}><label>Truck Number</label>
                    <input placeholder="enter here truck number" name="truckno" className={inputDesign} value={truckNo} onChange={(e) => setTruckNo(e.target.value)}/></div>
                    <div className={fieldDesign}><label>Garage Name</label>
                    <input placeholder="enter here garage name" name="garageName" className={inputDesign}value={garageName} onChange={(e) => setGarageName(e.target.value)} /></div>
                </div>
            );
        } else if (category === "salary") {
            return (
                <div className={fieldDesign}>
                    <label>Driver Name</label>
                    <input placeholder="enter here driver name" name="driverName" className={inputDesign} value={driverName} onChange={(e) => setDriverName(e.target.value)}/>
                </div>
            );
        } else if (category === "tolltax") {
            return (
                <div>
                    <div className={fieldDesign}><label>Truck Number</label>
                    <input placeholder="enter here truck number" name="truckno" className={inputDesign}value={truckNo} onChange={(e) => setTruckNo(e.target.value)}/></div>
                    <div className={fieldDesign}><label>Toll Tax Place</label>
                    <input placeholder="enter here toll place" name="tollPlace" className={inputDesign} value={place} onChange={(e) => setPlace(e.target.value)}/></div>
                </div>
            );
        }
        else if (category === "fuel"){
                return(
                    <div className={fieldDesign}>
                    <label>Petrol Pump</label>
                    <input placeholder="enter here petrol pump name" name="pump" id="pump" className={inputDesign} value={date} onChange={(e)=> setPlace(e.target.value)}/>
                    </div>

                );
        }
        return null;
    };

    return (
        <div>
            <div className="rounded-xl border-2 border-gray-300 w-170 p-6 shadow-[0_0_15px_#1e8d3833] bg-white h-140">
                <div className="text-center font-semibold text-2xl ">Add Expense</div> 
                <form>
                    <div className={fieldDesign}>
                    <label>Category</label> 
                    <select id="category" name="category" className={inputDesign} value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="fuel">Fuel</option>
                        <option value="challan">Challan</option>
                        <option value="repair">Truck Repair</option>
                        <option value="salary">Driver Salary</option>
                        <option value="tolltax">Toll Tax</option>
                    </select>
                    </div>
                    <div className={fieldDesign}><label>Amount</label>
                    <input  placeholder="enter expense value"  name="amt" id="amt" className={inputDesign} value={amount} onChange={(e) => setAmount(e.target.value)} /></div>
                   
                    <div className={fieldDesign}><label>Date</label>
                    <input type="date" placeholder="enter here date"  name="date"  id="date"  className={inputDesign} value={date} onChange={(e) => setDate(e.target.value)}  /></div>

                    {renderConditionalFields()}

                    <button className="text-center w-full h-2.5 bg-[#42813f] whitespace-nowrap mt-1 text-white font-lg border-none rounded-[10px] px-8 pt-5 pb-5 text-[17px] cursor-pointer flex justify-center items-center gap-2 hover:bg-[#1f5c1bcc]"><IoReceiptOutline />Save Expense</button>
                </form>
            </div>
        </div>
    );
}

export default AddExpense;   