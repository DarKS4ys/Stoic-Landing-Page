export default function Card({icon, heading, body}){
    return(
        <>
            <div className="flex flex-col justify-center items-center bg-[#0c0c0d] drop-shadow-xl border border-[#222222] gap-6 px-9 rounded-2xl md:w-[400px] h-[300px]">
                {icon}
                <h1 className="text-2xl font-medium">{heading}</h1>
                <p className="text-center text-[#505661]">{body}</p>
            </div>
        </>
    )
}