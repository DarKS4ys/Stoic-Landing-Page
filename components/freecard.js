import { Check } from 'lucide-react';
import JoinButton from './joinbutton';

const FreeCard = () => {
  const services = [
    'Large free community',
    'Free resources',
    'Emergency Meetings',
    'Fitness competitions',
  ];

  return (
    <div>
      <div className="border border-[--outline] bg-[--card] text-white flex flex-col rounded-3xl p-8  px-16">
            {/* <div className="absolute justify-end items-end">
                <div className="flex rounded-full bg-[var(--highlight)] p-1">
                    <p className="font-semibold text-black text-sm">-40%</p>
                </div>
            </div> */}
        <div className="flex justify-center items-start mb-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-white">Basic</h1>
          </div>
        </div>

        {/* <h1 className="flex text-lg text-muted-foreground line-through justify-center items-center">
          €49.99<span className='text-sm'>/m</span>
        </h1> */}
        <div className="flex flex-row items-center justify-center mb-8">
          <h1 className="font-semibold text-5xl">
            Free
          </h1>
        </div>
        <div>
          <div className="flex flex-col justify-start text-stone-200 items-start mb-8">
            {services.map((service) => (
              <div className="flex items-start justify-start flex-col mb-4">
                <div className="flex flex-row justify-start items-center">
                  <Check className="mr-2 text-[var(--highlight)]" />
                  {service}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center w-full mb-2">
          <JoinButton />
        </div>
      </div>
    </div>
  );
};
export default FreeCard;
