"use client"

import { useState } from "react"
import { User, Handbag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MobileMenu from "./mobile-menu"

export default function Navbar() {
  const [lang, setLang] = useState("EN")

  const menuItems = [
    { name: "WOMAN", href: "/woman" },
    { name: "MAN", href: "/man" },
    { name: "ARCHIVES", href: "/archives" },
    { name: "VISION", href: "/vision" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-yellow-600 text-black z-50 px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        Asvag
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:underline cursor-pointer transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Handbag className="cursor-pointer w-5 h-5" />
          <User className="cursor-pointer w-5 h-5" />
        </div>

      </div>
        {/* Language Button */}
        <Button
          variant="outline"
          size="sm"
          className="hidden md:inline-flex rounded-full bg-white text-black hover:bg-gray-100"
          onClick={() => setLang(lang === "EN" ? "FR" : "EN")}
        >
          {lang}
        </Button>

      {/* Mobile Menu (separate component) */}
      <MobileMenu  menuItems={menuItems} />
    </nav>
  )
}
