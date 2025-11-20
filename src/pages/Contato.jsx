import { Mail, MapPin, Instagram } from "lucide-react";

export default function Contato() {
  return (
    <section id="contact" className="bg-[#F4EEDC] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
          Entre em Contato
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Formulário */}
          <div className="bg-white shadow-md rounded-xl p-8 border border-black/10">
            <form className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Seu nome"
                className="w-full p-3 rounded-md border border-black/20 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Seu email"
                className="w-full p-3 rounded-md border border-black/20 focus:outline-none"
              />

              <textarea
                placeholder="Sua mensagem"
                className="w-full p-3 rounded-md border border-black/20 h-32 resize-none focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md hover:bg-black/80 transition"
              >
                Enviar Mensagem
              </button>

            </form>
          </div>

          {/* Informações */}
          <div className="flex flex-col justify-center bg-white shadow-md rounded-xl p-8 border border-black/10">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="text-black w-6 h-6" />
              <p className="text-black text-left">
                contato.meieventos@gmail.com
              </p>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-black w-6 h-6" />
              <p className="text-black text-left">
                Sorocaba — São Paulo, Brasil
              </p>
            </div>

            {/* Botão Instagram */}
            <a
              href="https://www.instagram.com/m.e.i_eventos?utm_source=qr&igsh=YXczazRoYXR0cjU3"
              target="_blank"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-black text-white py-3 rounded-md hover:bg-black/80 transition"
            >
              <Instagram className="w-6 h-6" />
              Instagram
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
