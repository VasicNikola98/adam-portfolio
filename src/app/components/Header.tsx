import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
        <nav className="flex justify-between items-center w-[90%] mx-auto">
            <div className="text-2xl font-bold font-poppins">ADAM</div>

            <ul className="flex items-center gap-8 text-gray-700 font-poppins">
                <li>
                    <a className="hover:text-gray-500" href="#">Home</a>
                </li>

                <li>
                    <a className="hover:text-gray-500" href="#">Services</a>
                </li>
                <li>
                    <a className="hover:text-gray-500" href="#">Carriers</a>
                </li>
                <li>
                    <a className="hover:text-gray-500" href="#">About Us</a>
                </li>
            </ul>
            <div>
            <button className="border border-black text-black bg-transparent px-5 py-2 rounded-md hover:bg-black hover:text-white transition font-poppins">
                Contact
            </button>

            </div>
        </nav>
    </header>
    );
};

export default Header;