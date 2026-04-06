const Features = () => {
  const features = [
    {
      title: "Context-Aware Questions",
      desc: "Our engine parses your CV and the JD to generate questions that target your specific tech stack and seniority.",
      icon: "🎯"
    },
    {
      title: "Behavioral Feedback Loop",
      desc: "Get instant critiques on your STAR method delivery, tone, and confidence levels using NLP analysis.",
      icon: "🗣️"
    },
    {
      title: "Architecture Deep-Dives",
      desc: "Practice system design with interactive whiteboarding prompts and industry-standard solution patterns.",
      icon: "🏗️"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 border-t border-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i} className="group p-8 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;