
export default function Navbar() {
    return (
    //Navbar
    <div className="sticky top-0 z-50 bg-[#f5f9f6] py-3 px-8 mx-auto border border-gray-200 shadow-sm">
        {/*desktop view*/}
        <div className="flex items-center justify-between ">
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
    );
}