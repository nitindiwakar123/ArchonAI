const Process = () => {
  return (
    <section className="bg-[#0c0c0c] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>
        <div className="flex flex-col md:flex-row gap-8 relative">
          {[
            { step: "01", label: "Login or Sign Up", detail: "Get started with your free account." },
            { step: "02", label: "Select Role", detail: "Choose between Frontend, Backend, AI, etc." },
            { step: "03", label: "Generate Questions and Answers", detail: "Generate questions based on your selected role." },
            { step: "04", label: "Receive Feedback", detail: "Receive a score and areas for improvement." }
          ].map((item, idx) => (
            <div key={idx} className="flex-1 relative z-10">
              <span className="text-5xl font-black text-gray-800/50 block mb-4">{item.step}</span>
              <h4 className="text-xl font-bold mb-2">{item.label}</h4>
              <p className="text-gray-500 text-sm">{item.detail}</p>
            </div>
          ))}
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-gray-800 -z-0"></div>
        </div>  
      </div>
    </section>
  );
};

export default Process;