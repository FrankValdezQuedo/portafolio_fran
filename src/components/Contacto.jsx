import { useRef, useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

// Clases comunes
const INPUT_CLASS =
  "w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-500 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-all duration-300";

const Contacto = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    const formData = new FormData(form.current);

    emailjs
      .send(
        "service_xmgu6mp", // Service ID
        "template_8y49blz", // Template ID
        Object.fromEntries(formData),
        "PbBAcMaUUtzcdZeTB" // Public Key
      )
      .then(
        () => {
          setStatus("✅ Mensaje enviado con éxito.");
          form.current.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setStatus("❌ Error al enviar el mensaje.");
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <section
      id="contacto"
      className="w-full mx-auto container lg:max-w-4xl md:max-w-2xl scroll-m-20 pb-20 px-4"
      aria-labelledby="contact-heading"
    >
      {/* Encabezado */}
      <header className="mb-8 text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Send
            className="size-8 text-yellow-600 dark:text-yellow-200"
            aria-hidden="true"
          />
          <h2
            id="contact-heading"
            className="text-3xl font-bold text-black/90 dark:text-white"
          >
            Contáctame
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          Rellena el formulario y me pondré en contacto contigo lo antes
          posible.
        </p>
      </header>

      {/* Formulario */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-5"
      >
        {/* Campo título para {{title}} */}
        <input
          type="text"
          name="title"
          placeholder="Título del mensaje"
          aria-label=""
          required
          className={INPUT_CLASS}
        />

        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          aria-label="Tu nombre"
          required
          className={INPUT_CLASS}
        />

        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          aria-label="Tu correo electrónico"
          required
          className={INPUT_CLASS}
        />

        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje..."
          rows="5"
          aria-label="Escribe tu mensaje"
          required
          className={INPUT_CLASS}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-200 hover:bg-yellow-500 text-black font-bold py-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Enviar Mensaje
        </button>
      </form>

      {/* Estado del envío */}
      {status && (
        <p
          className="mt-6 text-center font-semibold text-gray-700 dark:text-gray-300"
          aria-live="polite"
        >
          {status}
        </p>
      )}
    </section>
  );
};

export default Contacto;
