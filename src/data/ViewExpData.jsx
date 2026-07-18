import { FaIndianRupeeSign } from "react-icons/fa6";
import { LuReceiptIndianRupee } from "react-icons/lu";
import { GiAutoRepair } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
function ViewExpData(){
    const data = [
        {
            title: "Total Expenses",
            number:"₹50,000",
            icon: <FaIndianRupeeSign />,
            iconColorBg: "bg-green-300",
            iconColor:"text-green-900",
            shadowColor: "shadow-[0_0_15px_green]",
            // subHeading: "Monthly Expenses",
        },
        {
            title: "Fuel",
            number: "₹20,000",
            icon: <BsFillFuelPumpDieselFill />,
            iconColorBg: "bg-blue-300",
            iconColor: "text-blue-900",
            shadowColor: "shadow-[0_0_15px_blue]",
            // subHeading: "Monthly Fuel Expense",
        },
        {
            title: "Salary",
            number: "₹15,000",
            icon: <LuReceiptIndianRupee />,
            iconColorBg: "bg-purple-300",
            iconColor: "text-purple-900",
            shadowColor: "shadow-[0_0_15px_purple]",
            // subHeading: "Monthly Salary Expense",
        },
        {
            title: "Repair",
            number: "₹15,000",
            icon: <GiAutoRepair />,
            iconColorBg: "bg-orange-300",
            iconColor: "text-orange-900",
            shadowColor: "shadow-[0_0_15px_orange]",
            // subHeading: "Monthly Repair Expense",
        }
    ]
    return data;

}
export default ViewExpData;