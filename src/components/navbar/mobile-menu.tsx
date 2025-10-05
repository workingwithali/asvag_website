"use client";

import { useState } from "react";
import Link from "next/link";
import { User, ShoppingBag, Menu, ChevronRight, X } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface MobileMenuProps {
  menuItems: {
    name: string;
    href?: string;
    subMenu?: { name: string; href: string }[];
  }[];
}

export default function MobileMenu({ menuItems }: MobileMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  return (
    <div className="md:hidden flex items-center gap-4">
      {/* Icons */}
      <ShoppingBag className="w-5 h-5 cursor-pointer" />
      <User className="w-5 h-5 cursor-pointer" />

      {/* Sheet Trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="p-0">
            <Menu className="w-6 h-6 text-black" />
          </Button>
        </SheetTrigger>

        {/* Sheet Content */}
        <SheetContent
          side="left"
          className="w-full sm:w-[400px] p-0 bg-white flex flex-col"
        >
          {/* Header */}
          <SheetHeader className="border-b flex items-center justify-between px-6 py-4">
            <div className="flex items-center justify-between w-full">
              {/* Logo */}
              <SheetTitle className="text-xl font-bold text-black">
                Asvag
              </SheetTitle>

              {/* Icons + Close */}
              <div className="flex items-center gap-4 text-black">
                <div className="bg-gray-50 p-4 rounded-full">
                <User className="w-5 h-5 cursor-pointer" />
                </div>
                <div className="bg-gray-50 p-4 rounded-full">
                <ShoppingBag className="w-5 h-5 cursor-pointer" />
                </div>

                {/* Close Button */}
                <SheetClose asChild>
                  <button className="bg-gray-50 p-4 rounded-full">
                    <X className="w-6 h-6 text-black" />
                  </button>
                </SheetClose>
              </div>
            </div>
          </SheetHeader>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b py-3">
                <button
                  onClick={() =>
                    item.subMenu ? toggleSubmenu(item.name) : undefined
                  }
                  className="w-full flex justify-between items-center text-left font-semibold text-black"
                >
                  {item.href ? (
                    <Link href={item.href} className="w-full">
                      {item.name}
                    </Link>
                  ) : (
                    <span>{item.name}</span>
                  )}
                  {item.subMenu && (
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        activeMenu === item.name ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Submenu */}
                {activeMenu === item.name && item.subMenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.subMenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block text-gray-600 text-sm hover:text-black"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Separator />

          {/* Footer */}
          <div className="p-6 text-center text-sm text-gray-700">
            <p>© 2025 Asvag. All rights reserved.</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
