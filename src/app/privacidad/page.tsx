import MainMenu from "@/components/MainMenu";
import Image from "next/image";

export const metadata = {
  title: "Aviso Legal",
};

export default function AvisoLegal() {
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

      <section
        className="my-20 max-w-[95vw] w-[1200px] mx-auto text-balance text-lg space-y-4 font-sans"
      >
        <h1 className="text-3xl font-bold text-center mb-3">Política de privacidad</h1>
        <p className="text-center">Última actualización: 30 de Julio de 2025</p>

        <div className="mt-10">
          Esta Política de Privacidad de PADILLO & SEVILLA C.B. (&quot;nosotros&quot;, &quot;nos&quot; o
          &quot;nuestro&quot;) describe cómo y por qué podríamos acceder, recopilar,
          almacenar, usar y/o compartir (&quot;tratar&quot;) tu información personal cuando
          utilizas nuestros servicios (&quot;Servicios&quot;), incluyendo cuando:
          <ul>
            <li>
              Visitas nuestro sitio web en <a href="https://www.ciclosmelilla.com"
              >https://www.ciclosmelilla.com</a
              > o cualquier otro sitio web nuestro que enlace a esta Política de Privacidad.
            </li>
            <li>
              Interactúas con nosotros de otras maneras relacionadas, incluyendo
              ventas, marketing o eventos.
            </li>
          </ul>
        </div>

        <p>
          <strong>¿Preguntas o inquietudes?</strong> Leer esta Política de Privacidad
          te ayudará a entender tus derechos y opciones en materia de privacidad. Somos
          responsables de tomar decisiones sobre cómo se trata tu información personal.
          Si no estás de acuerdo con nuestras políticas y prácticas, por favor no utilices
          nuestros Servicios. Si aún tienes preguntas o inquietudes, contáctanos en:
          privacidad@ciclosmelilla.com.
        </p>

        <div className="space-y-4 mt-15">
          <h1 className="text-2xl font-bold">Resumen de Puntos Clave</h1>
          <p>
            Este resumen ofrece los puntos clave de nuestra Política de Privacidad,
            pero puedes obtener más detalles sobre cualquiera de estos temas
            haciendo clic en el enlace que sigue a cada punto o utilizando la tabla
            de contenido a continuación para encontrar la sección que buscas.
          </p>

          <div className="space-y-4">
            <p>
              <strong>¿Qué información personal procesamos?</strong>
              Podemos procesar información personal dependiendo de cómo interactúes con
              nosotros, las decisiones que tomes y los productos y funciones que utilices.
              <a href="#">Más información</a>
            </p>

            <p>
              <strong>¿Procesamos información personal sensible?</strong>
              No procesamos información personal sensible, como origen étnico, orientación
              sexual o creencias religiosas.
            </p>

            <p>
              <strong>¿Recopilamos información de terceros?</strong>
              No recopilamos ninguna información de terceros.
            </p>

            <p>
              <strong>¿Cómo procesamos tu información?</strong>
              Procesamos tu información para ofrecer y mejorar nuestros Servicios, comunicarnos
              contigo, garantizar seguridad y cumplir con la ley. Solo lo hacemos con
              base legal válida.
              <a href="#">Más información</a>
            </p>

            <p>
              <strong>¿Con quién compartimos información personal?</strong>
              Podemos compartir información en situaciones y con terceros específicos.
              <a href="#">Más información</a>
            </p>

            <p>
              <strong>¿Cómo protegemos tu información?</strong>
              Aplicamos medidas técnicas y organizativas para proteger tu información,
              aunque no podemos garantizar una seguridad absoluta.
              <a href="#">Más información</a>
            </p>

            <p>
              <strong>¿Cuáles son tus derechos?</strong>
              Dependiendo de tu ubicación, puedes tener derechos específicos sobre tu
              información personal.
              <a href="#">Más información</a>
            </p>

            <p>
              <strong>¿Cómo puedes ejercer tus derechos?</strong>
              Visita
              <a href="http://www.ciclosmelilla.com/data-request">
                http://www.ciclosmelilla.com/data-request
              </a>
              o contáctanos directamente.
            </p>

            <p>
              <strong>¿Quieres saber más?</strong>
              Consulta el
              <a href="#">Política de Privacidad completo</a>.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold">Tabla de Contenidos</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              <a href="#que-informacion-recopilamos" className="underline"
              >¿Qué información recopilamos?</a>
            </li>
            <li>
              <a href="#como-procesamos-tu-informacion" className="underline"
              >¿Cómo procesamos tu información?</a>
            </li>
            <li>
              <a href="#bases-legales" className="underline"
              >¿En qué bases legales nos apoyamos para procesar tu información
                personal?</a>
            </li>
            <li>
              <a href="#cuando-con-quien-compartimos" className="underline"
              >¿Cuándo y con quién compartimos tu información personal?</a>
            </li>
            <li>
              <a href="#cookies-tecnologias" className="underline"
              >¿Usamos cookies y otras tecnologías de rastreo?</a>
            </li>
            <li>
              <a href="#productos-ia" className="underline"
              >¿Ofrecemos productos basados en inteligencia artificial?</a>
            </li>
            <li>
              <a href="#conservacion-informacion" className="underline"
              >¿Por cuánto tiempo conservamos tu información?</a>
            </li>
            <li>
              <a href="#como-protegemos-tu-informacion" className="underline"
              >¿Cómo protegemos tu información?</a>
            </li>
            <li>
              <a href="#informacion-menores" className="underline"
              >¿Recopilamos información de menores?</a>
            </li>
            <li>
              <a href="#derechos-privacidad" className="underline"
              >¿Cuáles son tus derechos de privacidad?</a>
            </li>
            <li>
              <a href="#controles-no-rastrear" className="underline"
              >Controles para funciones de &quot;No rastrear&quot;</a>
            </li>
            <li>
              <a href="#actualizaciones-politica" className="underline"
              >¿Realizamos actualizaciones a esta Política de Privacidad?</a>
            </li>
            <li>
              <a href="#contacto-politica" className="underline"
              >¿Cómo puedes contactarnos respecto a esta Política de Privacidad?</a>
            </li>
            <li>
              <a href="#revisar-actualizar-eliminar" className="underline"
              >¿Cómo puedes revisar, actualizar o eliminar los datos que
                recopilamos de ti?</a>
            </li>
          </ol>
        </div>

        <div className="mt-15 space-y-4" id="que-informacion-recopilamos">
          <h2 className="text-3xl font-bold">1. ¿Qué información recopilamos?</h2>

          <h3 className="font-semibold">Información personal que nos proporcionas</h3>
          <p>
            <strong>En resumen:</strong> Recopilamos la información personal que nos
            proporcionas.
          </p>
          <p>
            Recopilamos la información personal que nos proporcionas voluntariamente
            cuando muestras interés en obtener información sobre nosotros o nuestros
            productos y Servicios, cuando participas en actividades en los
            Servicios, o cuando te pones en contacto con nosotros.
          </p>
          <p>
            <strong>Información personal proporcionada por ti.</strong> La información
            personal que recopilamos depende del contexto de tu interacción con nosotros
            y los Servicios, las decisiones que tomes, y los productos y funciones que
            uses. Puede incluir:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Nombres</li>
            <li>Números telefónicos</li>
            <li>Direcciones de correo electrónico</li>
            <li>Direcciones postales</li>
            <li>Cargos laborales</li>
            <li>Nombres de usuario</li>
            <li>Preferencias de contacto</li>
            <li>Datos de contacto o autenticación</li>
          </ul>
          <p>
            <strong>Información sensible.</strong> No procesamos información sensible.
          </p>
          <p>
            Toda la información personal que nos proporciones debe ser verdadera,
            completa y precisa, y debes notificarnos cualquier cambio.
          </p>

          <h3 className="font-semibold">Información recopilada automáticamente</h3>
          <p>
            <strong>En resumen:</strong> Recopilamos cierta información automáticamente
            cuando visitas nuestros Servicios, como tu dirección IP o características
            de tu navegador y dispositivo.
          </p>
          <p>
            Recopilamos automáticamente cierta información cuando visitas, usas o
            navegas por los Servicios. Esta información no revela tu identidad
            específica (como nombre o información de contacto) pero puede incluir
            datos del dispositivo y uso, como tu dirección IP, características del
            navegador y dispositivo, sistema operativo, preferencias de idioma, URL
            de referencia, nombre del dispositivo, país, ubicación, información
            sobre cómo y cuándo usas nuestros Servicios, y otros datos técnicos.
            Esta información se usa principalmente para mantener la seguridad y
            operación de los Servicios, así como para análisis internos y reportes.
          </p>
          <p>
            Como muchas empresas, también recopilamos información mediante cookies y
            tecnologías similares.
          </p>

          <h4 className="font-semibold">La información que recopilamos incluye:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Datos de registro y uso.</strong> Información relacionada con el
              servicio, diagnóstico, uso y rendimiento que nuestros servidores recopilan
              automáticamente cuando accedes o usas los Servicios, y que registramos
              en archivos de log. Puede incluir dirección IP, información del dispositivo,
              tipo y configuración del navegador, y actividad en los Servicios (fechas
              y horas, páginas visitadas, búsquedas, acciones, funciones usadas), eventos
              del dispositivo (actividad del sistema, reportes de errores, configuración
              del hardware).
            </li>
            <li>
              <strong>Datos del dispositivo.</strong> Información sobre tu computadora,
              teléfono, tablet u otro dispositivo que usas para acceder a los Servicios.
              Puede incluir dirección IP (o servidor proxy), identificadores de dispositivo
              y aplicación, ubicación, tipo de navegador, modelo de hardware, proveedor
              de servicio de internet o operador móvil, sistema operativo y configuración
              del sistema.
            </li>
            <li>
              <strong>Datos de ubicación.</strong> Información sobre la ubicación de
              tu dispositivo, que puede ser precisa o imprecisa, dependiendo del dispositivo
              y sus configuraciones. Por ejemplo, usamos GPS y otras tecnologías para
              recopilar datos de geolocalización basados en tu dirección IP. Puedes optar
              por no permitir la recopilación de esta información rechazando el acceso
              o desactivando la configuración de ubicación en tu dispositivo, aunque
              esto puede limitar el uso de ciertas funciones del Servicio.
            </li>
          </ul>

          <h3 className="font-semibold">API de Google</h3>
          <p>
            El uso que hacemos de la información recibida de las APIs de Google se
            ajusta a la <a href="https://developers.google.com/terms/api-services-user-data-policy">Política de Datos de Servicios de API de Google</a>, incluyendo
            los <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use">requisitos de uso limitado</a>.
          </p>
        </div>

        <div id="como-procesamos-tu-informacion" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">2. ¿Cómo procesamos tu información?</h2>
          <p><strong>En resumen:</strong> Procesamos tu información para proveer, mejorar y administrar nuestros Servicios, comunicarnos contigo, para seguridad y prevención de fraudes, y para cumplir con la ley. También podemos procesarla para otros fines con tu consentimiento.</p>
          <p>Procesamos tu información personal por varias razones, según cómo interactúes con nuestros Servicios, incluyendo:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Para salvar o proteger un interés vital de una persona, por ejemplo para prevenir daños.</li>
          </ul>
        </div>

        <div id="bases-legales" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">3. ¿En qué bases legales nos apoyamos para procesar tu información personal?</h2>
          <p><strong>En resumen:</strong> Solo procesamos tu información personal cuando creemos que es necesario y contamos con una base legal válida, como tu consentimiento, cumplimiento legal, contrato, protección de derechos o intereses legítimos.</p>
          <p>El Reglamento General de Protección de Datos (GDPR) y el GDPR del Reino Unido exigen explicar las bases legales para procesar tus datos personales. Podemos basarnos en:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Consentimiento:</strong> Procesamos tu información si nos das permiso para un propósito específico. Puedes retirar tu consentimiento en cualquier momento.</li>
            <li><strong>Obligaciones legales:</strong> Procesamos información para cumplir obligaciones legales, como cooperar con autoridades o defender derechos legales.</li>
            <li><strong>Intereses vitales:</strong> Procesamos información para proteger intereses vitales tuyos o de terceros, por ejemplo, en situaciones de riesgo para la seguridad.</li>
          </ul>
        </div>

        <div id="cuando-con-quien-compartimos" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">4. ¿Cuándo y con quién compartimos tu información personal?</h2>
          <p><strong>En resumen:</strong> Podemos compartir información en situaciones específicas descritas aquí y/o con terceros indicados.</p>
          <p>Podemos compartir tu información personal en casos como:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Transferencias comerciales:</strong> Compartimos o transferimos información en procesos de fusiones, ventas, financiamiento o adquisiciones de nuestro negocio.</li>
            <li><strong>Uso de APIs de Google Maps:</strong> Compartimos tu información con ciertas APIs de Google Maps (por ejemplo, Maps API, Places API). Google Maps usa GPS, Wi-Fi y torres celulares para estimar tu ubicación y mejorar la precisión.</li>
            <li><strong>Socios comerciales:</strong> Compartimos información con socios para ofrecerte productos, servicios o promociones.</li>
          </ul>
        </div>

        <div id="cookies-tecnologias" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">5. ¿Usamos cookies y otras tecnologías de rastreo?</h2>
          <p><strong>En resumen:</strong> Podemos usar cookies y otras tecnologías para recopilar y almacenar tu información.</p>
          <p>Utilizamos cookies y tecnologías similares (como web beacons y píxeles) para recopilar información cuando interactúas con nuestros Servicios. Estas tecnologías nos ayudan a mantener la seguridad, prevenir fallos, corregir errores, guardar tus preferencias y facilitar funciones básicas del sitio.</p>
          <p>También permitimos que terceros y proveedores usen estas tecnologías en nuestros Servicios para análisis y publicidad, como mostrar anuncios personalizados o recordatorios de carritos abandonados, según tus preferencias.</p>
          <p>Información específica sobre el uso de estas tecnologías y cómo rechazarlas está en nuestro Aviso de Cookies.</p>
          <h3 className="font-semibold">Google Analytics</h3>
          <p>
            Podemos compartir tu información con Google Analytics para analizar el uso de los Servicios. Para optar por no ser rastreado por Google Analytics, visita <a href="https://tools.google.com/dlpage/gaoptout" className="underline">https://tools.google.com/dlpage/gaoptout</a>. Para más información sobre las prácticas de privacidad de Google, visita la <a href="https://policies.google.com/privacy" className="underline">página de Privacidad y Términos de Google</a>.
          </p>
        </div>

        <div id="productos-ia" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">6. ¿Ofrecemos productos basados en inteligencia artificial?</h2>
          <p><strong>En resumen:</strong> Ofrecemos productos, funciones o herramientas impulsadas por inteligencia artificial, aprendizaje automático o tecnologías similares.</p>
          <p>Como parte de nuestros Servicios, ofrecemos productos, funciones o herramientas basadas en inteligencia artificial, aprendizaje automático o tecnologías similares (&quot;Productos IA&quot;). Estas herramientas están diseñadas para mejorar tu experiencia y ofrecer soluciones innovadoras. Los términos de esta Política de Privacidad rigen tu uso de los Productos IA dentro de nuestros Servicios.</p>
          <p><strong>Uso de tecnologías IA</strong></p>
          <p>Proveemos los Productos IA a través de proveedores de servicios externos (&quot;Proveedores IA&quot;), incluyendo ElevenLabs. Tal como se describe en esta Política, tus datos de entrada, salida e información personal serán compartidos y procesados por estos proveedores para habilitar el uso de los Productos IA conforme a las bases legales descritas previamente. No debes usar los Productos IA de forma que viole los términos o políticas de dichos proveedores.</p>
          <p><strong>Nuestros Productos IA</strong></p>
          <p>Están diseñados para funciones como bots de inteligencia artificial.</p>
          <p><strong>Cómo procesamos tus datos usando IA</strong></p>
          <p>La información personal procesada mediante nuestros Productos IA se maneja conforme a esta Política y acuerdos con terceros, garantizando alta seguridad y protección de tus datos.</p>
          <p><strong>Cómo optar por no participar</strong></p>
          <p>Creemos en tu derecho a decidir sobre el uso de tus datos. Para optar por no participar, puedes contactarnos mediante la información que proporcionamos.</p>
        </div>

        <div id="conservacion-informacion" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">7. ¿Por cuánto tiempo conservamos tu información?</h2>
          <p><strong>En resumen:</strong> Conservamos tu información solo mientras sea necesario para los fines descritos en esta Política, salvo que la ley exija o permita un plazo mayor.</p>
          <p>Solo conservaremos tu información personal mientras sea necesaria para los fines indicados, a menos que la ley requiera una conservación más prolongada (por ejemplo, obligaciones fiscales o contables).</p>
          <p>Cuando ya no tengamos una necesidad legítima de procesar tus datos, los eliminaremos o anonimizaremos. Si no es posible (por ejemplo, porque están en copias de seguridad), los almacenaremos de forma segura y aislada hasta que sea posible su eliminación.</p>
        </div>

        <div id="como-protegemos-tu-informacion" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">8. ¿Cómo protegemos tu información?</h2>
          <p><strong>En resumen:</strong> Buscamos proteger tu información personal mediante medidas organizativas y técnicas adecuadas.</p>
          <p>Hemos implementado medidas razonables y apropiadas para proteger la seguridad de la información personal que procesamos. Sin embargo, ninguna transmisión o almacenamiento electrónico puede garantizarse como 100% seguro, por lo que no podemos prometer que terceros no autorizados accedan o alteren tu información. El uso de nuestros Servicios es bajo tu propio riesgo y debes acceder a ellos desde entornos seguros.</p>
        </div>

        <div id="informacion-menores" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">9. ¿Recopilamos información de menores?</h2>
          <p><strong>En resumen:</strong> No recopilamos ni comercializamos conscientemente datos de menores de 18 años.</p>
          <p>No recopilamos ni solicitamos datos ni comercializamos a menores de 18 años. Al usar los Servicios, declaras ser mayor de edad o padre/tutor del menor y consentir su uso. Si descubrimos que hemos recopilado datos de menores, desactivaremos la cuenta y tomaremos medidas para eliminarlos. Si sabes de datos de menores que hayamos recopilado, contáctanos en <a href="mailto:privacidad@ciclosmelilla.com" className="underline">privacidad@ciclosmelilla.com</a>.</p>
        </div>

        <div id="derechos-privacidad" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">10. ¿Cuáles son tus derechos de privacidad?</h2>
          <p><strong>En resumen:</strong> En algunas regiones (como EEE, Reino Unido y Suiza) tienes derechos que te permiten mayor acceso y control sobre tus datos personales.</p>
          <p>En regiones como el EEE, Reino Unido y Suiza, cuentas con derechos bajo leyes de protección de datos, incluyendo:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Solicitar acceso y copia de tus datos personales.</li>
            <li>Solicitar rectificación o eliminación.</li>
            <li>Restringir el procesamiento.</li>
            <li>Portabilidad de datos (cuando aplique).</li>
            <li>No ser sujeto de decisiones automatizadas.</li>
            <li>Oponerte al procesamiento en ciertas circunstancias.</li>
          </ul>
          <p>Puedes ejercer estos derechos contactándonos con los datos que aparecen en &quot;¿Cómo puedes contactarnos respecto a esta Política de Privacidad?&quot;</p>
          <p>Si crees que procesamos tus datos ilegalmente y estás en el EEE o Reino Unido, puedes presentar una queja ante la autoridad de protección de datos correspondiente. En Suiza, puedes contactar al Comisionado Federal de Protección de Datos e Información.</p>
          <p><strong>Retiro del consentimiento:</strong> Si procesamos tus datos basados en tu consentimiento, puedes retirarlo en cualquier momento, sin afectar la legalidad del procesamiento previo.</p>
          <p><strong>Cancelación de comunicaciones promocionales:</strong> Puedes darte de baja de nuestras comunicaciones promocionales mediante el enlace de cancelación o contactándonos. Seguiremos enviándote comunicaciones necesarias para el servicio y administración de tu cuenta.</p>
          <p><strong>Cookies y tecnologías similares:</strong> La mayoría de navegadores aceptan cookies por defecto, pero puedes configurarlos para eliminarlas o rechazarlas, aunque esto puede afectar ciertas funciones.</p>
          <p>Si tienes preguntas sobre tus derechos, escríbenos a <a href="mailto:privacidad@ciclosmelilla.com" className="underline">privacidad@ciclosmelilla.com</a>.</p>
        </div>

        <div id="controles-no-rastrear" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">11. Controles para la función No Rastrear (Do-Not-Track)</h2>
          <p>La mayoría de los navegadores web y algunos sistemas operativos móviles y aplicaciones incluyen una función o configuración &quot;No Rastrear&quot; (DNT) que puedes activar para señalar tu preferencia de privacidad de no ser monitoreado ni rastreado en tu navegación en línea.</p>
          <p>Actualmente no existe un estándar tecnológico uniforme para reconocer o implementar señales DNT, por lo que no respondemos a señales DNT ni a ningún mecanismo que comunique automáticamente tu preferencia de no ser rastreado. Si en el futuro se adopta un estándar que debamos seguir, te informaremos mediante una versión actualizada de esta Política de Privacidad.</p>
        </div>

        <div id="actualizaciones-politica" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">12. ¿Actualizamos este aviso?</h2>
          <p><strong>En resumen:</strong> Sí, actualizaremos este aviso según sea necesario para cumplir con las leyes aplicables.</p>
          <p>Podemos actualizar esta Política de Privacidad periódicamente. La versión actualizada estará identificada con una nueva fecha de revisión en la parte superior. Si hacemos cambios materiales, te lo notificaremos mediante un aviso destacado o enviándote una notificación directa. Te recomendamos revisar esta Política frecuentemente para estar informado sobre cómo protegemos tu información.</p>
        </div>

        <div id="contacto-politica" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">13. ¿Cómo puedes contactarnos sobre este aviso?</h2>
          <p>Si tienes preguntas o comentarios sobre esta política, puedes enviarnos un correo a <a href="mailto:privacidad@ciclosmelilla.com" className="underline">privacidad@ciclosmelilla.com</a> o contactarnos por correo postal en:</p>
          <address className="not-italic">
            PADILLO & SEVILLA C.B.<br />
            Ctra. Huerta Cabo, 1, Local 2<br />
            Melilla, Melilla 52006<br />
            España
          </address>
        </div>

        <div id="revisar-actualizar-eliminar" className="space-y-4 mt-15">
          <h2 className="text-3xl font-bold">14. ¿Cómo puedes revisar, actualizar o eliminar los datos que recopilamos?</h2>
          <p>Según las leyes aplicables en tu país, puedes tener derecho a solicitar acceso a la información personal que recopilamos, detalles sobre cómo la procesamos, corregir errores o eliminar tus datos personales. También puedes retirar tu consentimiento para el procesamiento de tus datos.</p>
          <p>Estos derechos pueden estar limitados en algunas circunstancias por la ley.</p>
          <p>Para solicitar revisar, actualizar o eliminar tus datos, visita: <a href="http://www.ciclosmelilla.com/data-request" className="underline" target="_blank" rel="noopener noreferrer">http://www.ciclosmelilla.com/data-request</a>.</p>
        </div>
      </section>
    </div>
  )
};

