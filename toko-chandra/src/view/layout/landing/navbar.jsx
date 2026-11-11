import {useState} from "react";

export default function LandingNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className="w-full relative top-0 py-3 px-3 sm:px-10 bg-putih flex justify-between items-center">
            <h1 className="font-bold">TOKO CHANDRA</h1>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="block md:hidden text-abu focus:outline-none z-50"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
            </button>
            <div className={`${isOpen ? "flex flex-col" : "hidden"} md:flex md:flex-row gap-6 items-center
                absolute top-14 md:top-0 left-0 md:static bg-putih w-full md:w-auto py-4 md:py-0`}>
                <ul className="flex flex-col md:flex-row gap-3 md:gap-10 items-center">
                    <li>Beranda</li>
                    <li>Tentang Kami</li>
                    <li>Kontak Kami</li>
                </ul>
                <div className="flex flex-col md:flex-row gap-3">
                    <a href="/login" className="bg-abu text-white px-4 py-2 rounded-md">Masuk</a>
                    <a href="/register" className=" text-abu px-4 py-2 rounded-md border border-abu">Daftar</a>
                </div>
            </div>
        </nav>
        </>
    )
}