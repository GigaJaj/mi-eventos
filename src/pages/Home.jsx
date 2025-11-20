import ServiceCard from "../components/ServiceCard";

import casamento from "../assets/images/casamento.jpg";
import formatura from "../assets/images/formatura.jpg";
import aniversario from "../assets/images/aniversario.jpg";
import cha from "../assets/images/cha-revelacao.jpg";
import palestra from "../assets/images/palestra.jpg";
import baile from "../assets/images/baile.jpg";
import batismo from "../assets/images/batismo.jpg";

export default function Home() {
  return (
    <main className="bg-creme min-h-screen p-6">
      <h1 className="text-preto font-serif text-4xl text-center mb-10">
        Transformando Momentos em Memórias
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard title="Casamentos" image={casamento} />
        <ServiceCard title="Formaturas" image={formatura} />
        <ServiceCard title="Aniversários" image={aniversario} />
        <ServiceCard title="Chá Revelação" image={cha} />
        <ServiceCard title="Palestras" image={palestra} />
        <ServiceCard title="Bailes e Eventos Noturnos" image={baile} />
        <ServiceCard title="Batismos" image={batismo} />
      </section>
    </main>
  );
}
