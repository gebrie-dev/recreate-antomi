"use client"

import { ShoppingCart, Heart, GitCompare, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [showCategories, setShowCategories] = useState(false)

  const categories = [
    "Custom block",
    "Electronics", 
    "Men's Cloth",
    "Computer",
    "Bags & Shoe",
    "Kids",
    "Outdoor Fun & Sports",
    "Beauty",
    "Games"
  ]

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>30-Day Money Back Guarantee</p>
          <div className="flex items-center gap-6">
            <div>
              <span>Hotline: </span>
              <span className="font-semibold">(+800) 123 456 678</span>
            </div>
            <button className="flex items-center gap-1">
              Setting <ChevronDown className="h-3 w-3" />
            </button>
            <button className="flex items-center gap-1">
              USD $ <ChevronDown className="h-3 w-3" />
            </button>
            <button className="flex items-center gap-1">
              <span className="mr-1">🇺🇸</span> English <ChevronDown className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gray-700 py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <Image 
              src="/antomi.png" 
              alt="ANTOMI" 
              width={150} 
              height={50} 
              className="h-12 w-auto"
            />
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <select className="bg-white px-4 py-3 text-sm border-r rounded-l min-w-[140px]">
                <option>All categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Garden</option>
              </select>
              <Input
                type="text"
                placeholder="Search products..."
                className="flex-1 border-0 rounded-none py-3"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 rounded-l-none">
                Search
              </Button>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4">
            <button className="relative text-white">
              <GitCompare className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="relative text-white">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="relative text-white">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-800 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="relative">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white gap-2"
                onClick={() => setShowCategories(!showCategories)}
              >
                <Menu className="h-4 w-4" />
                ALL CATEGORIES
              </Button>

              {showCategories && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-b z-50">
                  {categories.map((category, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b last:border-b-0"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-red-500 font-semibold">HOME</a>
              <a href="#" className="text-white font-semibold">NEW PRODUCTS</a>
              <a href="#" className="text-white font-semibold">BEST SALES</a>
              <a href="#" className="text-white font-semibold">CONTACT US</a>
            </div>
          </div>
          
          <a href="#" className="text-yellow-400 font-bold">
            BIG SALE BLACK FRIDAY
          </a>
        </div>
      </nav>
    </header>
  )
}