export function MainContent() {
  const sections = [
    {
      title: "Our Mission",
      color: "text-blue-400",
      content: "PredictPal is revolutionizing table tennis analytics by combining cutting-edge neural network technology with deep sport expertise. We're building a comprehensive platform that delivers accurate match predictions and actionable insights, empowering enthusiasts and bettors to make informed decisions."
    },
    {
      title: "The Challenge",
      color: "text-emerald-400",
      content: "Traditional prediction models often fall short, lacking the accuracy and reliability needed for confident betting decisions. We're addressing this gap with advanced AI-powered analytics, providing a solution that table tennis enthusiasts can trust."
    },
    {
      title: "Our Solution",
      color: "text-yellow-400",
      content: "Through our upcoming web platform, users will access precise match predictions, in-depth analysis, and personalized betting strategies. We're committed to fostering responsible gambling practices while helping our users achieve better results through data-driven decisions."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Transforming Table Tennis Analytics</h2>
          
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className={`text-xl font-semibold mb-4 ${section.color}`}>{section.title}</h3>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="text-center pt-8">
              <p className="text-lg text-blue-400 font-semibold">
                Our platform is currently under development.
              </p>
              <p className="text-gray-400 mt-2">
                Stay tuned for the launch of our revolutionary table tennis analytics platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}