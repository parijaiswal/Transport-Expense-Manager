import CradData from "../data/CardData";
function CardInfo(){
    const data = CradData();
    return(
        <>
        <div>
            <ul className="flex flex-row justify-center items-stretch gap-16 mt-8 ml-0">
                {data.map((item,index)=>(
                    <li key={index}  className="rounded-[18px] text-black p-4 w-62 shadow-[0_0_15px_lightgray] h-auto bg-white text-xl hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-[0_0_15px_#999] hover:cursor-pointer">
                         <div className="flex flex-row  gap-2.5 pb-2 text-lg font-semibold">
                            <div className={`rounded-full ${item.iconColorBg} w-8 h-8 p-1.75  ${item.shadowColor}  ${item.iconColor}`}>{item.icon}</div><h3>{item.title}</h3>
                            </div>
                        <p className="text-xl pl-10 pt-0 font-bold">{item.number}</p>
                        <p className="text-lg pl-10 pt-0 text-nowrap font-semibold">{item.subHeading}</p>
                       
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}
export default CardInfo;