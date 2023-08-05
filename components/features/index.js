import Card from "./Card"
import { VscLibrary } from 'react-icons/vsc'

export default function Features(){
    return(
        <div className="flex flex-col justify-center items-center my-44">
            <h1 className="text-5xl text-center font-medium w-[900px] text-transparent bg-clip-text bg-gradient-to-b from-[#F7F7F8] to-[#C2C3C8] p-1 mb-5">Just what you need</h1>
            <div className="flex justify-center items-center gap-6">
                <Card icon={<VscLibrary size={25}/>} heading={"AI Development"} body={"We will conduct a detailed analysis of your present processes to find areas where automation can improve profitability."}/>
                <Card icon={<VscLibrary size={25}/>} heading={"AI Development"} body={"We will conduct a detailed analysis of your present processes to find areas where automation can improve profitability."}/>
                <Card icon={<VscLibrary size={25}/>} heading={"AI Development"} body={"We will conduct a detailed analysis of your present processes to find areas where automation can improve profitability."}/>
            </div>
        </div>
    )
}