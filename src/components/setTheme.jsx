import '../App.css';
import { useEffect, useState } from 'react';

function SetTheme() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedItem = localStorage.getItem('theme');

        if(savedItem === "true"){
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', darkMode);
    }, [darkMode]);

    return (
        <div className={darkMode ? "dark" : "light"}>

            <button
                onClick={() => setDarkMode(prev => !prev)}
            >
                Toggle Theme
            </button>

            <h1>Hello World</h1>

        </div>
    );
}

export default SetTheme;