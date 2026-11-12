import { useForm } from "react-hook-form";

export function BelajarZodPage() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting, isDirty } 
  } = useForm({
    mode: "onChange",
    defaultValues: {
      bio: "Saya adalah seorang pengembang software."
    }
  });

  const onSubmitSimulasi = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("🚀 Data sukses dikirim ke database server:", data);
    alert("Data Profil Berhasil Diperbarui!");
  };

  return (
    <div className="p-8 max-w-md mx-auto font-sans text-slate-800">
      <h1 className="text-xl font-bold mb-2">⚙️ Manajemen Status useForm</h1>
      <p className="text-xs text-slate-400 mb-6">Amati perubahan tombol dan indikator status di bawah.</p>

      <form onSubmit={handleSubmit(onSubmitSimulasi)} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Username Baru</label>
          <input
            type="text"
            {...register("username", { required: "Username wajib diisi!" })}
            className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Biografi Singkat</label>
          <textarea
            {...register("bio")}
            className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none h-24"
          />
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting} // Menonaktifkan tombol otomatis saat sedang loading kirim data
          className={`w-full text-white font-bold py-2 rounded shadow transition-colors ${
            isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "⏳ Menyimpan Ke Server..." : "Simpan Perubahan"}
        </button>
        <div className="mt-6 p-3 bg-slate-50 border border-slate-100 rounded-lg text-xs space-y-1 text-slate-500">
          <p>• Status Form Diubah (isDirty): <span className="font-bold">{isDirty ? "🔴 Ya, Data Telah Berubah" : "🟢 Belum Ada Perubahan"}</span></p>
          <p>• Status Loading Kirim (isSubmitting): <span className="font-bold">{isSubmitting ? "⚠️ Sedang Mengirim..." : "✅ Selesai/Diam"}</span></p>
        </div>

      </form>
    </div>
  );
}
