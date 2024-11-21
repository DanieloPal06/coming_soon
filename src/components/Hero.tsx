import { Table2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Table2 className="h-16 w-16 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              PredictPal
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Revolutionizing Table Tennis Analytics with AI
          </p>
          <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}