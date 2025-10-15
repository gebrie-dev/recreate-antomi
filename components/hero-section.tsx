import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Banner */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-[#4ecdc4] to-[#44b3ab] rounded-lg overflow-hidden min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/woman.jpg" alt="Summer Collection" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-left p-12 max-w-md">
              <p className="text-[#f1c40f] font-bold text-sm mb-2 tracking-wide">NEW ARRIVALS</p>
              <h1 className="text-white text-5xl font-bold mb-2 leading-tight">
                Summer
                <br />
                Collection 2019
              </h1>
              <p className="text-white/90 text-sm mb-6">Discount -30% Off This Week</p>
              <Button className="bg-[#e74c3c] hover:bg-[#c0392b] text-white px-6">DISCOVER NOW</Button>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              <button className="w-2.5 h-2.5 rounded-full bg-white"></button>
              <button className="w-2.5 h-2.5 rounded-full bg-white/50"></button>
              <button className="w-2.5 h-2.5 rounded-full bg-white/50"></button>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Side Banners */}
          <div className="flex flex-col gap-6">
            {/* Microsoft Surface Banner */}
            <div className="relative bg-gradient-to-br from-[#3d5a99] to-[#2c4373] rounded-lg overflow-hidden min-h-[240px] flex items-center p-8">
              <div className="relative z-10 flex-1">
                <p className="text-white/80 text-sm font-semibold mb-1">BIG SALE</p>
                <h2 className="text-white text-2xl font-bold mb-1 leading-tight">
                  MICROSOFT
                  <br />
                  SURFACE PRO 4
                </h2>
                <p className="text-white/90 text-sm">Discount 30% Off</p>
              </div>
              <div className="absolute right-0 bottom-0 w-2/3 h-full">
                <img
                  src="/microsoft-surface-keyboard-colorful-blue-red.jpg"
                  alt="Microsoft Surface"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Xbox Controller Banner */}
            <div className="relative bg-gradient-to-br from-[#7cb342] to-[#689f38] rounded-lg overflow-hidden min-h-[240px] flex items-center p-8">
              <div className="relative z-10 flex-1">
                <h2 className="text-white text-2xl font-bold mb-1 leading-tight">
                  XBOX ONE
                  <br />
                  SALE CONTROLLER
                </h2>
                <p className="text-white/90 text-sm">Discount 30%</p>
              </div>
              <div className="absolute right-0 bottom-0 w-2/3 h-full">
                <img src="/xbox-one-white-controller-gaming.jpg" alt="Xbox Controller" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Banner Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Carbonated Drinks Banner */}
          <div className="relative bg-gradient-to-br from-[#ffd54f] to-[#ffb300] rounded-lg overflow-hidden min-h-[200px] flex items-center p-6">
            <div className="relative z-10 flex-1">
              <p className="text-gray-800 text-xs font-semibold mb-1">New Arrivals 2019</p>
              <h3 className="text-gray-900 text-xl font-bold mb-1 leading-tight">
                Big Sale
                <br />
                Carbonated
                <br />
                Drinks
              </h3>
              <button className="text-gray-900 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Order Now <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full">
              <img src="/fruit-bowl-with-limes-and-lemons.jpg" alt="Drinks" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Custom Wheels Banner */}
          <div className="relative bg-gradient-to-br from-[#e53935] to-[#c62828] rounded-lg overflow-hidden min-h-[200px] flex items-center p-6">
            <div className="relative z-10 flex-1">
              <p className="text-white/80 text-xs font-semibold mb-1">Big Sale -10% Off This Week</p>
              <h3 className="text-white text-xl font-bold mb-1 leading-tight">
                Custom Wheels
                <br />
                Systems
                <br />
                New Technology
              </h3>
              <button className="text-white text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Order Now <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Toy Story Banner */}
          <div className="relative bg-gradient-to-br from-[#5c6bc0] to-[#3949ab] rounded-lg overflow-hidden min-h-[200px] flex items-center p-6">
            <div className="relative z-10 flex-1">
              <p className="text-white/80 text-xs font-semibold mb-1">Top Popular 2019</p>
              <h3 className="text-white text-xl font-bold mb-1 leading-tight">
                Toy Story
                <br />
                Sale For
                <br />
                Children
              </h3>
              <button className="text-white text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Order Now <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full">
              <img src="/stuffed-toy-dog-plush.jpg" alt="Toy" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Organic Juice Banner */}
          <div className="relative bg-gradient-to-br from-[#ffb300] to-[#ff8f00] rounded-lg overflow-hidden min-h-[200px] flex items-center p-6">
            <div className="relative z-10 flex-1">
              <h3 className="text-gray-900 text-xl font-bold mb-1 leading-tight">
                ORGANIC
                <br />
                FRESH FRUIT
                <br />
                JUICE
              </h3>
              <p className="text-gray-800 text-sm">Discount 20%</p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full">
              <img src="/fresh-orange-slices-and-peach-fruit.jpg" alt="Juice" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
