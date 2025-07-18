const profile = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl max-w-md w-full text-center border border-gray-800/50">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-gray-200/20"
          />
          <h1 className="text-3xl font-bold text-white mb-2">Bode</h1>
          <p className="text-gray-300 mb-4">Developer | Innovator</p>
          <div className="space-y-2">
            <p className="text-gray-400">Email: bode@example.com</p>
            <p className="text-gray-400">Location: Lagos, Nigeria</p>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-blue-400 transition">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    );
};

export default profile;