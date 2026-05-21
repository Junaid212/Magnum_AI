"use client";

const logos = [
  "Google DeepMind", "OpenAI", "Microsoft Azure", "NVIDIA", "Anthropic",
  "Amazon AWS", "Hugging Face", "Mistral AI", "Meta AI", "Cohere",
  "Stability AI", "Databricks",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-7 flex-shrink-0 cursor-default group">
      <div className="w-6 h-6 rounded-md bg-white/06 border border-white/[0.06] flex items-center justify-center">
        <span className="text-[9px] font-black text-white/40 uppercase">{name.charAt(0)}</span>
      </div>
      <span className="font-syne font-semibold text-sm text-white/30 group-hover:text-white/60 transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  const doubled = [...logos, ...logos];
  return (
    <section className="relative py-10 overflow-hidden border-y border-white/[0.04]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-[#060a14]/40 to-[#02040a]" />
      <div className="relative">
        <p className="text-center text-[11px] font-semibold text-slate-600 uppercase tracking-[0.2em] mb-8">
          Powered by world-class AI technologies
        </p>
        <div className="marquee-wrap">
          <div className="flex items-center animate-marquee">
            {doubled.map((name, i) => (
              <LogoItem key={`${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
