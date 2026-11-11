export default function LandingFooter() {
    return (
        <>
        <div className="w-full h-auto p-10 bg-abu/95 flex-col gap-52">
            <div>
                <h1 className="text-white font-bold  text-xl">TOKO CHANDRA</h1>
                <p className="text-justify w-full sm:w-96 text-slate-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, vitae! Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="mt-10 flex-col sm:flex sm:flex-row gap-16">
                <ul className="text-slate-300 gap-5 ">
                <h1 className="text-white font-semibold">Menu</h1>
                    <li><a href="">Beranda</a></li>
                    <li><a href="">Tentang Kami</a></li>
                    <li><a href="">Kontak Kami</a></li>
                </ul>
                <ul className="text-slate-300 gap-5 mt-5 sm:mt-0">
                <h1 className="text-white font-semibold">Social Media</h1>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">TikTok</a></li>
                    <li><a href="">Instagram</a></li>
                </ul>
                <ul className="text-slate-300 gap-5 mt-5 sm:mt-0">
                <h1 className="text-white font-semibold">Alamat Lengkap</h1>
                    <li className="max-w-82"><a href="">Jl. Raya Pakuniran, Dusun Krajan, Desa Glagah, RT/RW 001/009 Kecamatan Pakuniran, Kabupaten Probolinggo, Jawa Timur 67273</a></li>
                </ul>
            </div>
            <div className="w-full h-px bg-white my-10"></div>
            <div className="flex-col sm:flex sm:flex-row justify-between">
                <ul className="text-slate-300 flex gap-5">
                    <li>Cookies Policy</li>
                    <li>Legal Terms</li>
                    <li>Privacy Policy</li>
                </ul>
                <div className="text-slate-300 mt-5 sm:mt-0">@yusakcristianbudi</div>
            </div>
        </div>
        </>
    )
}