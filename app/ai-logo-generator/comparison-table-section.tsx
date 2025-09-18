import { Check, X, Zap, Clock, DollarSign, Users } from "lucide-react";

export default function ComparisonTableSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold font-inter text-[#F2F2F2] mb-4 leading-[48px] tracking-[0%] text-center align-middle">
            <span className="text-[#BD14FF]">AI Logo Generator</span> vs
            Traditional Logo Design
          </h2>
          <p className="text-[18px] font-normal text-white/90 max-w-2xl mx-auto leading-[28px] text-center">
            See why thousands of businesses choose AI-powered logo generation
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800 bg-gray-900/30">
            <div className="text-[#A1A1AA] text-[18px] font-bold leading-[28px] tracking-[0%] align-middle">Feature</div>
            <div className="flex items-center justify-center">
              <div className="px-4 py-2 rounded-full flex items-center gap-2 text-[16px] font-bold leading-[24px] tracking-[0%] text-center align-middle text-white" style={{
                background: 'linear-gradient(90deg, #BD14FF 0%, #71099A 100%)'
              }}>
                <Zap className="w-4 h-4" />
                AI Generator
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="px-4 py-2 rounded-full flex items-center gap-2 text-[16px] font-bold leading-[24px] tracking-[0%] text-center align-middle text-[#A1A1AA]" style={{
                background: '#242428'
              }}>
                <Users className="w-4 h-4" />
                Traditional Design
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-800">
            {/* Speed Row */}
            <div className="grid grid-cols-3 gap-4 p-6 items-center">
              <div className="text-[#F2F2F2] font-semibold text-[16px] leading-[24px] tracking-[0%] align-middle">Speed</div>
              <div className="flex items-center justify-center">
                <div className="text-[#22C55E] flex items-center gap-2 font-semibold text-[16px] leading-[24px] tracking-[0%] text-center align-middle">
                  <Zap className="w-4 h-4" />
                  seconds
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-[#F2F2F2] flex items-center gap-2 font-semibold text-[16px] leading-[24px] tracking-[0%] text-center align-middle">
                  <Clock className="w-4 h-4 text-[#EF4444]" />
                  Days to weeks
                </div>
              </div>
            </div>

            {/* Cost Row */}
            <div className="grid grid-cols-3 gap-4 p-6 items-center">
              <div className="text-[#F2F2F2] font-semibold text-[16px] leading-[24px] tracking-[0%] align-middle">Cost</div>
              <div className="flex items-center justify-center">
                <div className="text-[#22C55E] flex items-center gap-2 font-semibold text-[16px] leading-[24px] tracking-[0%] text-center align-middle">
                  <Check className="w-4 h-4" />
                  Free to Low
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-[#F2F2F2] flex items-center gap-2 font-semibold text-[16px] leading-[24px] tracking-[0%] text-center align-middle">
                  <DollarSign className="w-4 h-4 text-[#EF4444]" />
                  $100-$1000+
                </div>
              </div>
            </div>

            {/* Cutomization Row */}
            <div className="grid grid-cols-3 gap-4 p-6 items-center">
              <div className="text-[#F2F2F2] font-semibold text-[16px] leading-[24px] tracking-[0%] align-middle">Cutomization</div>
              <div className="flex items-center justify-center">
                <div className="text-[#22C55E] flex items-center gap-2 font-semibold text-[16px] leading-[24px] tracking-[0%] text-center align-middle">
                  <Check className="w-4 h-4" />
                  High
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-[#F2F2F2] flex items-center gap-2 font-semibold text-[16px] leading-[24px] tracking-[0%] text-center align-middle">
                  <X className="w-4 h-4 text-[#EF4444]" />
                  High
                </div>
              </div>
            </div>

            {/* Design Ideas Row */}
            <div className="grid grid-cols-3 gap-4 p-6 items-center">
              <div className="text-[#F2F2F2] font-semibold text-[16px] leading-[24px] tracking-[0%] align-middle">Design Ideas</div>
              <div className="flex items-center justify-center">
                <div className="text-[#22C55E] flex items-center gap-2 font-semibold text-[16px] leading-[24px] tracking-[0%] text-center align-middle">
                  <Check className="w-4 h-4" />
                  Unlimited
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-[#F2F2F2] flex items-center gap-2 font-semibold text-[16px] leading-[24px] tracking-[0%] text-center align-middle">
                  <X className="w-4 h-4 flex-shrink-0 text-[#EF4444]"  />
                  <span className="text-sm md:text-base">
                    Limited by designer's style
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
