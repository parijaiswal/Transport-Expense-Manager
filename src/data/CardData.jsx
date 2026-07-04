import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaTruck, FaUsers,FaUserTie } from "react-icons/fa";
function CardData(){
    const data = [
        {
            title: "Total Expenses",
            number:"₹50,000",
            icon: <FaIndianRupeeSign />,
            iconColorBg: "bg-green-300",
            iconColor:"text-green-900",
            shadowColor: "shadow-[0_0_15px_green]",
            subHeading: "Monthly Expenses",
        },
        {
            title: "Total Trips",
            number: 30,
            icon: <FaTruck />,
            iconColorBg: "bg-blue-300",
            iconColor: "text-blue-900",
            shadowColor: "shadow-[0_0_15px_blue]",
            subHeading: "Monthly Trips",
        },
        {
            title: "Drivers",
            number:10,
            icon: <FaUsers />,
            iconColorBg: "bg-purple-300",
            iconColor: "text-purple-900",
            shadowColor: "shadow-[0_0_15px_purple]",
            subHeading: "Active Drivers",
        },
        {
            title: "Clients",
            number: 20,
            icon: <FaUserTie />,
            iconColorBg: "bg-orange-300",
            iconColor: "text-orange-900",
            shadowColor: "shadow-[0_0_15px_orange]",
            subHeading: "This Month",
        }
    ]
    return data;

}
export default CardData;