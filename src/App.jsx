import { useState, useEffect } from 'react';
import { ChevronRight, Star, Zap, Shield, Users, Menu, X, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Lightning Fast",
      description: "Built for speed with cutting-edge technology"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security you can trust"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NeoTech
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block hover:text-purple-400 transition-colors">Features</a>
              <a href="#pricing" className="block hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#about" className="block hover:text-purple-400 transition-colors">About</a>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              The Future is
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Now
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your workflow with cutting-edge technology that adapts to your needs.
              Experience the power of innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-400 hover:bg-purple-400 hover:text-black transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose NeoTech?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the perfect blend of innovation, security, and performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-12 border border-purple-400/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of innovators who are already transforming their workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Get Started Free</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-400 hover:bg-white hover:text-black transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NeoTech
              </span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 NeoTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;