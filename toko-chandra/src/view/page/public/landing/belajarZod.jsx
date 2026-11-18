import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const pendaftaranSchema = z.object({
  namaLengkap: z
    .string()
    .min(1, { message: "Nama lengkap wajib diisi" })
    .min(3, { message: "Nama lengkap minimal 3 karakter" }),
  email: z
    .string()
    .min(1, { message: "Email wajib diisi" })
    .email({ message: "Format email tidak valid" }),
});

export function BelajarZodPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, setError, formState: { errors, isSubmitting }} = useForm({
    
    resolver: zodResolver(pendaftaranSchema), // Penting*

    defaultValues: {
      namaLengkap: "Budi Santoso",
      email: "",
    },
    
    mode: "onBlur",
  });

  // Simulasi pengiriman data async ke server/API | Loading, Success, Error State Materi 11
  const onSubmit = async (data) => {
    setIsSuccess(false);

    try {
      //  jeda jaringan 1.5 detik
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulasi error dari server jika email tertentu digunakan
      if (data.email === "terdaftar@gmail.com") {
        throw new Error("Email ini sudah terdaftar di sistem.");
      }

      console.log("Data terkirim ke API:", data);
      
      setIsSuccess(true);

      // Mengosongkan form setelah berhasil terkirim
      reset({ namaLengkap: "", email: "" });

    } catch (error) {
      setError("root", {
        message: error.message || "Terjadi kesalahan pada server.",
      });
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto font-sans text-slate-800">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 p-4 border-2 rounded-lg flex flex-col gap-4"
      >
        <h2 className="text-lg font-bold">Form Pendaftaran</h2>

        {isSuccess && (
          <div className="p-3 bg-emerald-100 border border-emerald-400 text-emerald-800 text-sm rounded">
            Pendaftaran berhasil! Data Anda telah tersimpan.
          </div>
        )}
        {errors.root && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-800 text-sm rounded">
            {errors.root.message}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Nama Lengkap:</label>
          <input aria-invalid={errors.namaLengkap ? "true" : "false"}

            className={`border rounded block w-full p-2 ${
              errors.namaLengkap ? "border-red-500 bg-red-50" : "border-slate-300"
            }`}
            
            {...register("namaLengkap")}
          />

          {errors.namaLengkap && (
            <p className="text-red-500 text-sm mt-1">
              {errors.namaLengkap.message}
            </p>
          )}
        </div>

        {/* Input Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input type="email" aria-invalid={errors.email ? "true" : "false"}
            
            className={`border rounded block w-full p-2 ${
              errors.email ? "border-red-500 bg-red-50" : "border-slate-300"
            }`}
            
            {...register("email")}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex gap-2 mt-2">
          <button type="submit" className="flex-1 bg-sky-600 hover:bg-sky-700 disabled:bg-slate-400 text-white p-2 rounded font-medium transition"
          disabled={isSubmitting}
          >
            {isSubmitting ? "Mengirim..." : "Daftar"}
          </button>

          <button type="button" className="px-4 py-2 border border-slate-300 rounded hover:bg-slate-100 text-sm"
            onClick={() => {
              reset();
              setIsSuccess(false);
            }}
          >
            Reset
          </button>
        </div>
      </form>

      {/* BELAJAR ZOD */}
      <form action="" className="my-10 p-3 border-2 flex flex-col gap-3">
        <b>Belajar ZOD</b>
        <label htmlFor="name">Name</label>
        <input className="border rounded" type="name" />
        <label htmlFor="email">Email</label>
        <input className="border rounded" type="email" />
        <label htmlFor="password">Password</label>
        <input className="border rounded" type="password" />

        <input type="submit" value="Submit" className="w-full bg-sky-600 text-white mt-5" />
      </form>
    </div>
  );
}
