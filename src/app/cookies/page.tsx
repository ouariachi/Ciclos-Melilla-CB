"use client";

import MainMenu from '@/components/MainMenu';
import Image from 'next/image';

export default function PoliticaCookies() {
  return (
    <div>
      <div className="fixed top-4 right-5 z-20 transition-all">
        <MainMenu />
      </div>

      <div className="absolute -top-20 left-1/2 z-10 opacity-80 -translate-x-1/2">
        <Image
          className="h-[45px] w-auto select-none"
          src="https://res.cloudinary.com/doaywtxph/image/upload/v1753745297/CIclosMelillaCB/logo_full_transparent.webp"
          width={600}
          height={159}
          alt="Logo Ciclos Melilla"
          draggable={false}
        />
      </div>

      <section className="my-20 max-w-[95vw] w-[1200px] mx-auto text-balance text-lg space-y-4 font-sans">
        <h1 className="text-3xl font-bold text-center mb-3">Política de Cookies</h1>

        <p>
          El acceso a este Sitio Web puede implicar la utilización de cookies. Las
          cookies son pequeñas cantidades de información que se almacenan en el
          navegador utilizado por cada Usuario —en los distintos dispositivos que
          pueda utilizar para navegar— para que el servidor recuerde cierta
          información que posteriormente y únicamente el servidor que la implementó
          leerá. Las cookies facilitan la navegación, la hacen más amigable, y no
          dañan el dispositivo de navegación.
        </p>

        <p>
          Las cookies son procedimientos automáticos de recogida de información
          relativa a las preferencias determinadas por el Usuario durante su visita
          al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su
          experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar
          a identificar y resolver errores.
        </p>

        <p>
          La información recabada a través de las cookies puede incluir la fecha y
          hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha
          estado en el Sitio Web y los sitios visitados justo antes y después del
          mismo. Sin embargo, ninguna cookie permite que esta misma pueda
          contactarse con el número de teléfono del Usuario o con cualquier otro
          medio de contacto personal. Ninguna cookie puede extraer información del
          disco duro del Usuario o robar información personal. La única manera de
          que la información privada del Usuario forme parte del archivo Cookie es
          que el usuario dé personalmente esa información al servidor.
        </p>

        <p>
          Las cookies que permiten identificar a una persona se consideran datos
          personales. Por tanto, a las mismas les será de aplicación la Política de
          Privacidad anteriormente descrita. En este sentido, para la utilización de
          las mismas será necesario el consentimiento del Usuario. Este
          consentimiento será comunicado, en base a una elección auténtica, ofrecido
          mediante una decisión afirmativa y positiva, antes del tratamiento
          inicial, removible y documentado.
        </p>

        <div className="mt-15 space-y-4" id="que-informacion-recopilamos">
          <h2 className="text-3xl font-bold">1. Cookies propias</h2>

          <p>
            Son aquellas cookies que son enviadas al ordenador o dispositivo del
            Usuario y gestionadas exclusivamente por Ciclos Melilla para el mejor
            funcionamiento del Sitio Web. La información que se recaba se emplea
            para mejorar la calidad del Sitio Web y su Contenido y su experiencia
            como Usuario. Estas cookies permiten reconocer al Usuario como visitante
            recurrente del Sitio Web y adaptar el contenido para ofrecerle
            contenidos que se ajusten a sus preferencias.
          </p>
        </div>

        <div className="mt-15 space-y-4" id="cookies-terceros">
          <h2 className="text-3xl font-bold">2. Cookies de terceros</h2>

          <p>
            Son cookies utilizadas y gestionadas por entidades externas que
            proporcionan a Ciclos Melilla servicios solicitados por este mismo para
            mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio
            Web. Los principales objetivos para los que se utilizan cookies de
            terceros son la obtención de estadísticas de accesos y analizar la
            información de la navegación, es decir, cómo interactúa el Usuario con
            el Sitio Web.
          </p>

          <p>
            La información que se obtiene se refiere, por ejemplo, al número de
            páginas visitadas, el idioma, el lugar a la que la dirección IP desde el
            que accede el Usuario, el número de Usuarios que acceden, la frecuencia
            y reincidencia de las visitas, el tiempo de visita, el navegador que
            usan, el operador o tipo de dispositivo desde el que se realiza la
            visita. Esta información se utiliza para mejorar el Sitio Web, y
            detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o
            servicio de óptima calidad. En todo caso, la información se recopila de
            forma anónima y se elaboran informes de tendencias del Sitio Web sin
            identificar a usuarios individuales.
          </p>

          <p>
            Puede obtener más información sobre las cookies, la información sobre la
            privacidad, o consultar la descripción del tipo de cookies que se
            utiliza, sus principales características, periodo de expiración, etc. en
            el siguiente(s) enlace(s):
          </p>

          <ul
            className="list-disc list-inside space-y-4"
            style={{ marginLeft: '40px' }}
          >
            <li>
              Google Analytics:{' '}
              <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/technologies/cookies
              </a>
            </li>
            <li>
              Google Maps:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
            </li>
            <li>
              ElevenLabs:{' '}
              <a href="https://www.elevenlabs.io/es/privacy-policy" target="_blank" rel="noopener noreferrer">
                https://www.elevenlabs.io/es/privacy-policy
              </a>
            </li>
          </ul>

          <p>
            La(s) entidad(es) encargada(s) del suministro de cookies podrá(n) ceder
            esta información a terceros, siempre y cuando lo exija la ley o sea un
            tercero el que procese esta información para dichas entidades.
          </p>
        </div>

        <div className="mt-15 space-y-4" id="uso-cookies">
          <h2 className="text-3xl font-bold">3. Deshabilitar cookies</h2>

          <p>
            El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o
            parcialmente— instaladas en su dispositivo mediante la configuración de
            su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox,
            Safari, Explorer). En este sentido, los procedimientos para rechazar y
            eliminar las cookies pueden diferir de un navegador de Internet a otro.
            En consecuencia, el Usuario debe acudir a las instrucciones facilitadas
            por el propio navegador de Internet que esté utilizando. En el supuesto
            de que rechace el uso de cookies —total o parcialmente— podrá seguir
            usando el Sitio Web, si bien podrá tener limitada la utilización de
            algunas de las prestaciones del mismo.
          </p>

          <p>
            Este documento de Política de Cookies ha sido creado mediante el
            generador de plantilla de política de cookies web gratis online el día
            30/07/2025.
          </p>
        </div>
      </section>

      <style jsx>{`
        a {
          color: #6f93f7;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
