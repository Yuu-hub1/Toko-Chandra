import tobaccos from '@/assets/tobaccos.webp'
import kites from '@/assets/kites.webp'

export default function LandingPage() {
     const produkTerbaru = [
    { nama: "Tembakau Rajangan Super", kategori: "Tembakau", harga: "Rp 45.000" },
    { nama: "Layangan Aduan Klasik", kategori: "Layangan", harga: "Rp 15.000" },
    { nama: "Tembakau Filter Premium", kategori: "Tembakau", harga: "Rp 30.000" },
    { nama: "Layangan Naga Besar", kategori: "Layangan", harga: "Rp 35.000" },
    { nama: "Tembakau Iris Kasar", kategori: "Tembakau", harga: "Rp 40.000" },
    { nama: "Benang Layangan Gelasan", kategori: "Layangan", harga: "Rp 20.000" },
  ];
 
  const alasanBelanja = [
    {
      judul: "Stok Selalu Update",
      deskripsi: "Ketersediaan barang bisa dicek langsung di website sebelum datang ke toko.",
    },
    {
      judul: "Harga Bersahabat",
      deskripsi: "Harga jujur sesuai pasaran, cocok untuk pelanggan harian maupun grosir.",
    },
    {
      judul: "Lokasi Dekat",
      deskripsi: "Toko berada di tengah lingkungan warga, mudah dijangkau kapan saja.",
    },
    {
      judul: "Ada Diskon Belanja",
      deskripsi: "Pelanggan setia dan pembelian dalam jumlah tertentu berpeluang dapat potongan harga.",
    },
  ];
    return (
        <div className="text-center my-10">
        <h2>TOKO LAYANGAN DAN TEMBAKAU</h2>
            <h1 className="text-4xl">SELAMAT DATANG DI TOKO CHANDRA</h1>
            <p className="w-3/4 mx-auto">Toko Chandra adalah toko yang menyediakan berbagai macam layangan dan tembakau berkualitas tinggi. Sekaligus menjadi toko terpercaya, dan terelengap di daerah Paiton</p>
            <div className="flex justify-center gap-3 mt-6">
                <a href="/login" className="border border-abu text-abu px-4 py-2 rounded-md">Lihat Produk</a>
                <a href="/login" className="bg-abu text-white px-4 py-2 rounded-md">Selengkapnya</a>
            </div>
            <div className="mt-52">
            <h1 className='text-center font-semibold text-4xl'>KATEGORI UNGGULAN</h1>
            <h2>Kami mejual berbagai macam layangan dan tembakau berkualitas tinggi.</h2>
            <div className="p-10 gap-10 gap-y-5 flex-col sm:flex sm:flex-row ">
                <div className="bg-abu hover:bg-abu/70 flex items-center hover:scale-110 transition-all duration-300 hover:shadow-2xl w-full rounded-2xl h-96 p-4 mt-5">
                    <div className="relative w-auto h-auto bg-slate-950 flex items-center justify-center overflow-hidden group cursor-pointer">
                        <img 
                        src={tobaccos} 
                        alt="Daun Tembakau" 
                        className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-40" 
                        loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                        <span className="text-white text-2xl font-bold tracking-wider uppercase drop-shadow-md">
                            Tembakau
                        </span>
                        </div>

                    </div>
                </div>
                <div className="bg-abu hover:bg-abu/70 flex items-center hover:scale-110 transition-all duration-300 hover:shadow-2xl w-full rounded-2xl h-96 p-4 mt-5">
                    <div className="relative w-auto h-auto bg-slate-950 flex items-center justify-center overflow-hidden group cursor-pointer">
                        <img 
                        src={kites} 
                        alt="Layangan" 
                        className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-40" 
                        loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                        <span className="text-white text-2xl font-bold tracking-wider uppercase drop-shadow-md">
                            Layangan
                        </span>
                        </div>

                    </div>
                </div>
            </div>
            </div>
                <div className="bg-white/5 p-5">
            {/* Produk Terbaru */}
            <section className=" mx-auto px-4 py-12">
              <h2 className="text-2xl font-semibold text-gray-900">Produk Terbaru</h2>
              <p className="text-gray-500 mt-1">Barang yang baru saja kami tambahkan</p>
      
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {produkTerbaru.map((produk, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md hover:scale-110 transition bg-[#F9F9F9] cursor-pointer"
                  >
                    <div className="w-full h-32 bg-gray-100 rounded-md mb-3 flex items-center justify-center text-gray-400 text-sm">
                      Foto Produk
                    </div>
                    <span className="text-xs uppercase tracking-wide text-gray-400">
                      {produk.kategori}
                    </span>
                    <h3 className="font-medium text-gray-900 mt-1">{produk.nama}</h3>
                    <p className="text-gray-700 mt-1">{produk.harga}</p>
                  </div>
                ))}
              </div>
            </section>
      
            {/* Kenapa Belanja di Sini */}
            <section className=" mx-auto px-4 py-12 border-t border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900">Kenapa Belanja di Sini</h2>
              <p className="text-gray-500 mt-1">Alasan pelanggan memilih toko kami</p>
      
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {alasanBelanja.map((alasan, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg bg-[#F9F9F9] hover:shadow-md hover:scale-110 transition">
                    <h3 className="font-medium text-gray-900">{alasan.judul}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{alasan.deskripsi}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
            <div className="w-full bg-abu h-125 mt-36">
            </div>
        </div>
    )
}