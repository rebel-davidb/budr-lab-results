export function Footer() {
  return (
    <footer className="bg-[#1a283c] text-white py-16 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Legal Disclaimer */}
        <div className="mb-8">
          <p className="text-sm text-[#A3A3A3] text-center leading-relaxed" style={{ fontFamily: '"arno-pro", sans-serif' }}>
            Do not use cannabis if you are under twenty-one years of age. Keep cannabis out of the reach of children.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center gap-4 text-sm text-[#A3A3A3]" style={{ fontFamily: '"arno-pro", sans-serif' }}>
          <p>
            Digital Marketing by <a href="https://rebelliongroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Rebellion Group</a>.
          </p>
          <div className="flex gap-6">
            <a href="https://budrcannabis.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="https://budrcannabis.com/end-user-license-agreement/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">End User License Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}