import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Pay Homage
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-gray-700 hover:text-black transition-colors">
              How It Works
            </Link>
            <Link href="/creator-fund" className="text-gray-700 hover:text-black transition-colors">
              Creator Fund
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-black transition-colors">
              FAQ
            </Link>
            <Link href="/login" className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
