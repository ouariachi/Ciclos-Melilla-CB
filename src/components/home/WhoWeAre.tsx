import Marquee from "./Marquee";
import WhoWeAreClient from "./WhoWeAreClient";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="mb-30">
      <h1 className="text-3xl font-bold text-center mb-3">QUIÉNES SOMOS</h1>

      <div className="flex gap-10 flex-col justify-center">
        <Marquee />

        <div
          id="who-we-are-text"
          className="
            z-10 -mt-18 mx-4 md:mx-auto bg-background bg-opacity-70 
            border-2 border-white/30 rounded-xl shadow-lg p-6 max-w-4xl 
            prose-lg prose-invert font-medium
          "
        >
          <p>
            Somos una tienda especializada en ciclismo ubicada en Melilla, dirigida
            por personas apasionadas por las bicicletas y con años de experiencia en
            el sector. Nos dedicamos a la venta de bicicletas de alta gama,
            recambios, ropa técnica y ofrecemos un servicio completo de reparación.
          </p>
          <p>
            Trabajamos con ciclistas de todos los niveles, desde quienes se inician
            hasta deportistas exigentes, y ofrecemos un asesoramiento honesto y
            personalizado adaptado a cada necesidad.
          </p>
          <p>
            Como distribuidores oficiales de Specialized, contamos con una selección
            exclusiva de bicicletas y componentes de primer nivel. Nuestro
            compromiso es claro: calidad, atención profesional y soluciones reales
            para quienes viven el ciclismo con seriedad.
          </p>
        </div>
      </div>

      <div id="passion" className="max-w-[95dvw] w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-pretty text-center mb-3 mt-30">
          Decubre la pasión que nos mueve
        </h2>

        <p className="text-lg text-center text-balance mx-auto">
          No solo vendemos bicicletas, vivimos el ciclismo. Cada recomendación, cada
          ajuste, cada detalle cuenta. Te ofrecemos la experiencia de quienes pedalean
          con la misma pasión con la que trabajan.
        </p>
      </div>

      <WhoWeAreClient />
    </section>
  );
}
