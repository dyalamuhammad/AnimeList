"use client"
import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                <FileSearch size={32} className="text-color-accent"/>
            <h1 className="text-color-accent font-bold text-2xl">NotFound</h1>
            <Link href="/" className="text-color-primary text-l underline hover:text-color-accent transition-all">
                Kembali
            </Link>
            </div>
        </div>
    )
}

export default NotFound