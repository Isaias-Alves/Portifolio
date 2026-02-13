import React, { use } from "react";
import { useState, useEffect } from "react";
import dharma from "./assets/dharma-white.jpg";
import dharmaDark from "./assets/dharma-black.jpg";


const App = () => {

    const [theme, setTheme] = useState("dark");
    const [rotation, setRotation] = useState(0);
    const [image, setImage] = useState(dharma);

    useEffect(() => { 
        const handleScroll = () => {
            setRotation(window.scrollY / 5)
        }
        window.addEventListener("scroll", handleScroll);
        return window.removeEventListener("scroll", handleScroll);
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <div className="min-h-[300vh] bg-amber-50 text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors duration-200 relative">

            <button 
            onclick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-neutral-300 dark:bg-neutral-900 hover:scale-110 transition-transform"
            >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>


        </div>
    )

 }

export default App;