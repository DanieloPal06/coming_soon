import { Brain, Target, Trophy } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "Neural Network Powered",
      description: "Cutting-edge AI technology delivering highly accurate match predictions and insights.",
      color: "text-blue-400"
    },
    {
      icon: Target,
      title: "Precision Analytics",
      description: "Data-driven strategies to optimize your betting decisions with confidence.",
      color: "text-emerald-400"
    },
    {
      icon: Trophy,
      title: "Expert Guidance",
      description: "Professional resources and training to elevate your betting expertise.",
      color: "text-yellow-400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <feature.icon className={`h-10 w-10 ${feature.color} mb-4`} />
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}