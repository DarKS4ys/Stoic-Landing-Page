export default function Card({icon, heading, body}){
    return(
        <>
            <div className="flex text-center flex-col justify-center items-center bg-[var(--card)] drop-shadow-xl border border-[var(--outline)] gap-6 px-9 rounded-2xl md:w-[400px] h-[300px]">
                {icon}
                <h1 className="text-2xl font-medium">{heading}</h1>
                <p className="text-center text-[#505661]">{body}</p>
            </div>
        </>
    )
}