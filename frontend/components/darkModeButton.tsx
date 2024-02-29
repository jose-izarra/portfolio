"use client"

import { useTheme } from "next-themes";


export default function DarkModeButton() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;


    return (
        <button
            id='darkModeButton'
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='bg-gray-500 dark:bg-gray-50 hover:bg-gray-200 dark:hover:bg-gray-500 transition-all duration dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute'>
            Toggle Mode
        </button>
    )
}