import React, { use } from "react";
import { useState, useEffect } from "react";
import dharma from "./dharma-white.jpg";
import dharmaDark from "./dharma-black.jpg";


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
 }