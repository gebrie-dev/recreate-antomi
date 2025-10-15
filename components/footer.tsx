"use client"

import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Get The App */}
          <div>
            <h3 className="text-lg font-bold mb-4">GET THE APP</h3>
            <p className="text-gray-600 mb-6">
              ANTOMI App is now available on Google Play & App Store.
            </p>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50">
                <AppStoreIcon />
                <div>
                  <div className="text-xs text-gray-500">Download from</div>
                  <div className="text-sm font-semibold">APP STORE</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 border rounded hover:bg-gray-50">
                <PlayStoreIcon />
                <div>
                  <div className="text-xs text-gray-500">Download from</div>
                  <div className="text-sm font-semibold">GOOGLE PLAY</div>
                </div>
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">INFORMATION</h3>
            <ul className="space-y-2 text-gray-600">
              {['Delivery', 'About Us', 'Secure Payment', 'Contact Us', 'Stores'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-black">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-lg font-bold mb-4">MY ACCOUNT</h3>
            <ul className="space-y-2 text-gray-600">
              {['Orders', 'Addresses', 'Wishlists', 'Login', 'Personal Info'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-black">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT INFO</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Hotline 24/7:</p>
                <a href="tel:+8001234567789" className="text-lg font-bold text-red-600">
                  (+800) 123 456 789
                </a>
              </div>
              <div className="text-gray-600 text-sm">
                <p>The Barn, Henley in Arden B578</p>
                <p>England</p>
                <a href="mailto:demo@posthemes.com" className="text-black hover:text-red-600">
                  demo@posthemes.com
                </a>
              </div>
              <div className="flex gap-2">
                {[
                  { Icon: Facebook, bg: '#3b5998' },
                  { Icon: Twitter, bg: '#1da1f2' },
                  { Icon: Youtube, bg: '#ff0000' },
                  { Icon: Instagram, bg: '#e4405f' }
                ].map(({ Icon, bg }, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 text-white flex items-center justify-center rounded"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center text-sm text-gray-600">
            <p>&copy; 2024 ANTOMI. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 shadow-lg"
      >
        <UpArrowIcon />
      </button>
    </footer>
  )
}

// Simple icon components
function AppStoreIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayStoreIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  )
}

function UpArrowIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  )
}