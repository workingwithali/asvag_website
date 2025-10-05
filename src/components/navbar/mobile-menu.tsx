"use client"

import { useState } from "react"
import { User, Handbag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileMenuProps {
  lang: string
  setLang: (lang: string) => void
  menuItems: { name: string; href: string }[]
}

export default function MobileMenu({ lang, setLang, menuItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex md:hidden items-center gap-4">
      {/* Language Button */}
      <Button
        variant="outline"
        size="sm"
        className="rounded-full bg-white text-black hover:bg-gray-100"
        onClick={() => setLang(lang === "EN" ? "FR" : "EN")}
      >
        {lang}
      </Button>

      {/* Menu Toggle */}
      <Menu
        className="w-6 h-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-6 flex flex-col gap-4 md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center gap-6 pt-4">
            <Handbag className="cursor-pointer w-5 h-5" />
            <User className="cursor-pointer w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  )
}
