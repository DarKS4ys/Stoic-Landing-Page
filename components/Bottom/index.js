import JoinButton from '@/components/JoinButton'

export default function Bottom(){
    return(
        <div className='mt-10 justify-center items-center flex flex-col mb-8'>
        <h2 className='font-semibold text-[var(--highlight)] text-2xl mb-2'>Let's begin 🚀</h2>
        <h1 className='text-5xl font-semibold text-center mb-4'>What are you waiting for?</h1>
        <div className="mt-3 flex md:flex-row flex-col mx-4 gap-7">
            <JoinButton />
        </div>
      </div>
    )
}