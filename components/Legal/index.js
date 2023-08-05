import Link from 'next/link'


export default function Legal(){
    return (
        <div className="mt-12 items-center flex w-full justify-center border-gray-500 border-t-[1px] text-center py-8">
          <div className="mx-auto flex flex-col">
            <h1 className="text-6xl mb-8 font-bold pointer-events-none">S T O I C</h1>
            <div className="flex">
              <div className="justify-center items-center text-center flex flex-col w-32 md:w-48 lg:w-60">
                <h1 className="text-2xl mb-2">Socials</h1>
                <div className="text-slate-400">
                  <Link href="https://discord.gg/stoiccord">
                    <p className="hover:text-white transition my-1">Discord</p>
                  </Link>
                  <Link href="https://www.youtube.com/@ssstoic">
                    <p className="hover:text-white transition my-1">Youtube</p>
                  </Link>
                </div>
              </div>
      
              <div className="justify-center items-center text-center flex flex-col w-32 md:w-48 lg:w-60">
                <h1 className="text-2xl mb-2">Navigation</h1>
                <div className="text-slate-400">
                  <Link href="#">
                    <p className="hover:text-white transition my-1">Features</p>
                  </Link>
                  <Link href="#">
                    <p className="hover:text-white transition my-1">Pricing</p>
                  </Link>
                  <Link href="#">
                    <p className="hover:text-white transition my-1">FAQs</p>
                  </Link>
                </div>
              </div>
      
              <div className="justify-center items-center text-center flex flex-col w-32 md:w-48 lg:w-60">
                <h1 className="text-2xl mb-2">Legal</h1>
                <div className="text-slate-400">
                  <Link href="">
                    <p className="hover:text-white transition my-1">Terms of Service</p>
                  </Link>
                  <Link href="">
                    <p className="hover:text-white transition my-1">Privacy Policy</p>
                  </Link>
                </div>
              </div>
            </div>
            <p className="font-thin mt-8">2023 © Stoic, All rights reserved.</p>
          </div>
        </div>
      );
}