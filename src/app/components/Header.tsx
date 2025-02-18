import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center py-6">
                    <Link href="/" className="text-base font-semibold text-gray-500 hover:text-gray-900 mx-8 font-lato">
                        Home
                    </Link>
                    <Link href="/services" className="text-base font-semibold text-gray-500 hover:text-gray-900 mx-8 font-lato">
                        Services
                    </Link>
                    <Link href="/about" className="text-base font-semibold text-gray-500 hover:text-gray-900 mx-8 font-lato">
                        About Us
                    </Link>
                    <Link href="/contact" className="text-base font-semibold text-gray-500 hover:text-gray-900 mx-8 ">
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
