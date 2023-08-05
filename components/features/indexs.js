import { FolderCog2, BrainCircuit, Clapperboard, FileVideo } from 'lucide-react';


export default function Features(){
    return(
        <div className='mt-10 justify-center items-center flex flex-col'>
        <h2 className='font-semibold text-[var(--highlight)] text-2xl mb-2'>Features</h2>
        <h1 className='text-5xl font-semibold text-center mb-4'>Have a look at our features.</h1>
        <p className='text-sm font-thin text-center'>Empower your content creation skills with our tools</p>
        <div className="flex flex-col columns-3"></div>
            <div className="mt-10 grid grid-cols-2 gap-3 mx-4">
                <div className="border border-[var(--gray)] flex flex-col justify-center text-center items-center bg-[--card] rounded-xl p-8 w-45 md:w-80">
                        {/* <FolderCog2 size={60} className='mb-2'/> */}
                        
                    <h1 className="font-semibold text-3xl">Preset Library</h1>
                    <p className="text-muted-foreground mt-2">The best presets on the universe at your disposal.</p>
                </div>
                
                <div className="border border-[var(--gray)] flex flex-col justify-center text-center items-center bg-[--card] rounded-xl p-8 w-45 md:w-80">
                        <Clapperboard size={60} className='mb-2'/>
                    <h1 className="font-semibold text-3xl">Editing</h1>
                    <p className="text-muted-foreground mt-2">Learn how to edit and structure your videos to get more views.</p>
                </div>

                <div className="border border-[var(--gray)] flex flex-col justify-center text-center items-center bg-[--card] rounded-xl p-8 w-45 md:w-80">
                        <FileVideo size={60} className='mb-2'/>
                    <h1 className="font-semibold text-3xl">Clips</h1>
                    <p className="text-muted-foreground mt-2">Access exclusive high quality lifestyle clips.</p>
                </div>

                <div className="border border-[var(--gray)] flex flex-col justify-center text-center items-center bg-[--card] rounded-xl p-8 w-45 md:w-80">
                        <BrainCircuit size={60} className='mb-2'/>
                    <h1 className="font-semibold text-3xl">AI Tools</h1>
                    <p className="text-muted-foreground mt-2">The best AI tools at your disposal.</p>
                </div>
            </div>
            
      </div>
    )
}