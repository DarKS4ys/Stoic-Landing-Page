import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const AffiliateBox = () => {

return (
    <Link href="https://app.stoiccord.com" className='bg-red-500'>
        <div className="flex justify-center items-center pointer-events: auto;">
            <div className="rounded-full bg-zinc-900 hover:border-2 p-2 justify-center items-center text-white flex transition-all ease-linear">
                <div className="flex text-black rounded-full bg-white/90 p-2 px-4">
                    Free!
                </div>
                <p className="mx-2">Try out our affiliate program</p>
                <ChevronRight className='wiggle'/>
            </div>
        </div>
    </Link>
 );
}

export default AffiliateBox;