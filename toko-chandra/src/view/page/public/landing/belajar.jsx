import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function BelajarPage() {
    const [isDarkMode, setIsDarkMode ] = useState(false);
    const [detik, setIsDetik ] = useState(10);
    const [inputTeks, setInputTeks] = useState("");
    const [kataKunciFinal, setKataKunciFinal] = useState("");

    useEffect( () => {
        const timer = setTimeout(() => {
            setKataKunciFinal(inputTeks);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [inputTeks])

    const handleInput = (event) => {
        setInputTeks(event.target.value);
    };

    useEffect( () => {
        if (detik === 0) return;

        const idTimer = setInterval(() => {
            setIsDetik((prevDetik) => prevDetik - 1);
        }, 1000);

        return () => {
            clearInterval(idTimer);
        }
    }, [detik])

    const handleChange = () => {
        setIsDarkMode(!isDarkMode)
        console.log(isDarkMode)
    };

    useEffect(() => {
        if (isDarkMode === true) {
            document.documentElement.classList.add("dark")
            console.log("🌙 Mode Gelap Aktif")
        }
        return () => {
            document.documentElement.classList.remove("dark")
            console.log("☀️ Mode Gelap Dimatikan")
        }
    }, [isDarkMode])

    
    return (
        <>
        <Link to="/" className="bg-abu">Beranda</Link>
        <button className={`rounded px-2 py-1 ${isDarkMode === false ? `bg-white text-black` : `bg-black text-white` } `} onClick={handleChange}>
            Ubah
        </button>
        <div className="flex justify-center w-full font-bold">
            {detik}
        </div>
        <input type="text" className="border rounded" value={inputTeks} onChange={handleInput} />
        <p className="font-bold">{kataKunciFinal}</p>
        </>
    );
}
