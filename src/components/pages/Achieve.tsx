import { Users, Building2, Rocket, Gem, Lock, Diamond, Users2, Award, ChevronUp, Globe, BarChart3, Trophy, TrendingUp, Factory } from 'lucide-react'

export default function Achieve() {
  return (
    <div className="bg-white p-4 sm:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="8,000+" subtitle="Skilled Assets" />
        <StatCard icon={<Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="44,000" subtitle="Square Feet Head Office" />
        <StatCard icon={<Users2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="79+" subtitle="Dedicated & Energetic Team of Sales Rep" />
        <StatCard icon={<Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Fastest" subtitle="Buying Application" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard icon={<Gem className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="4 Mines" subtitle="Direct Rough Diamond Source" />
        <StatCard icon={<Lock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="10+" subtitle="Innovative Products" />
        <StatCard icon={<Diamond className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Wide Range" subtitle="Non Certified Diamonds" />
        <StatCard icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Customers" subtitle="as Family Members" />
        <StatCard icon={<Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="50,000+" subtitle="Certified Stones" />
      </div>

      <div className="bg-blue-700 text-white text-center py-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold">Our Pillars of Strength</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard icon={<Gem className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="9+" subtitle="Shapes" />
        <StatCard icon={<ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Fair & Fixed" subtitle="Price Policy" />
        <StatCard icon={<BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="24 x 7" subtitle="Sales Service" />
        <StatCard icon={<Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Distribution in 5 Countries" subtitle="" />
        <StatCard icon={<Diamond className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Blockchain" subtitle="Process" />
        <StatCard icon={<Gem className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="1 Step" subtitle="Solution for Polish Diamond to Branded Jewellery" />
        <StatCard icon={<Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="22 Awards" subtitle="in 18 Consecutive Years by GJEPC" />
        <StatCard icon={<TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Fastest" subtitle="Growing Company" />
        <StatCard icon={<Factory className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="State-of-the-art Mfg. Unit" subtitle="in 45 Acres" />
      </div>

    </div>
  )
}

function StatCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="border rounded-lg p-3 sm:p-4 flex flex-col items-center text-center h-full justify-center">
      {icon}
      <h3 className="text-base sm:text-lg font-bold text-blue-700 mt-2">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mt-1">{subtitle}</p>
    </div>
  )
}