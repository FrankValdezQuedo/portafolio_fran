const Footer = () => {
  return (
    <footer className=" text-gray-300 dark:text-gray-400 py-6 mt-aut">
      <div className="w-full mx-auto container lg:max-w-4xl md:max-w-2xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm  text-center sm:font-semibold">
          © {new Date().getFullYear()} Fran Valdez. Todos los derechos
          reservados.
        </p>

        {/* Enlaces rápidos */}
        <div className="flex gap-4 font-semibold text-sm">
          <a href="#inicio" className="hover:text-yellow-200 transition-colors">
            Inicio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
