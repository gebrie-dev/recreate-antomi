import { Truck, CreditCard, ShieldCheck, Headphones, UserCheck } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: "FREE DELIVERY",
      description: "For all orders over $120",
      color: "text-[#e74c3c]",
    },
    {
      icon: CreditCard,
      title: "SAFE PAYMENT",
      description: "100% secure payment",
      color: "text-[#e74c3c]",
    },
    {
      icon: ShieldCheck,
      title: "SHOP WITH CONFIDENCE",
      description: "If goods have problems",
      color: "text-[#e74c3c]",
    },
    {
      icon: Headphones,
      title: "24/7 HELP CENTER",
      description: "Dedicated 24/7 support",
      color: "text-[#e74c3c]",
    },
    {
      icon: UserCheck,
      title: "FRIENDLY SERVICES",
      description: "30 day satisfaction guarantee",
      color: "text-[#e74c3c]",
    },
  ]

  return (
    <section className="bg-white py-8 border-t border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`${feature.color} flex-shrink-0`}>
                <feature.icon className="h-12 w-12" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
