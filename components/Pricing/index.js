import CustomCard from '@/components/customcard';
import PremiumCard from '@/components/premiumcard';
import FreeCard from '@/components/freecard';

export default function Pricing(){
    return(
        <div className='mt-10 justify-center items-center flex flex-col'>
        <h2 className='font-semibold text-[var(--highlight)] text-2xl mb-2'>Pricing</h2>
        <h1 className='text-5xl font-semibold text-center mb-4'>Perfect plans for your needs.</h1>
        <p className='text-sm font-thin text-center'>We offer flexible pricing for all individuals</p>
        <div className="mt-10 flex md:flex-row flex-col mx-4 gap-7">
          <FreeCard />
          <CustomCard /> 
          <PremiumCard />
        </div>
      </div>
    )
}