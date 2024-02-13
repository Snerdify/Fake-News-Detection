const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <h1 className="font-medium">Fake News Detection</h1>

        <button
          type="button"
          onClick={() => window.open("/", "_blank")}
          className="
          inline-block py-2 text-sm text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl
          "
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text font-semibold mt-20">
        Swiftly Unmask Fake News with <br className="max-md:hidden" />
        <span className="gradient-text text-transparent animate-gradient">
          Artificial Intelligence
        </span>
      </h1>
      <h2 className="desc">
        Harness the power of swift AI detection, unveiling truth by unmasking
        fake news on our dedicated platform
      </h2>
    </header>
  );
};

export default Hero;
