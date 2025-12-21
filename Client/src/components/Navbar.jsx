
export default function Navbar() {
    return (
    //Navbar
    <header className="sticky top-0 z-50 bg-[#f5f9f6] w-full border-b border-gray-200 shadow-md"> 
    <div className="py-3 px-8 mx-auto max-w-7xl px-6 lg:px-8 rounded-t-md">
        {/*desktop view*/}
        <div className="flex h-14 items-center justify-between ">
            <div>
                <p className="text-emerald-600 font-bold leading-light">JAWAAB </p>
                <p className="text-xs text-gray-600 leading-light">Empowerment Initiative</p>
            </div>
            <div className="flex gap-4">
                <a href="" className="font-inter">About</a>
                 <a href="">About</a>
                <a href="">About</a>
                 <a href="">About</a>
                  <a href="">About</a>
            </div>

        </div>
    </div>
    {/*mobile view*/}
  
    </header>
    );
}