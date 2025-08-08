import MainMenu from "@/components/MainMenu";
import Image from "next/image";

export const metadata = {
  title: "Aviso Legal - Ciclos Melilla",
};

export default function AvisoLegalPage() {
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
        <h1 className="text-3xl font-bold text-center mb-3">Aviso Legal</h1>
        <p className="text-center">Última actualización: 30 de Julio de 2025</p>

        {/* 1 */}
        <div className="mt-15 space-y-4" id="condiciones-uso">
          <h2 className="text-3xl font-bold">
            1. Condiciones generales de uso del Sitio Web www.ciclosmelilla.com:
          </h2>
          <p>
            PADILLO&SEVILLA C.B., con CIF E52035326 y domicilio fiscal en CARRETERA HUERTA DE CABO 1 LOCAL 2, como titular del dominio www.ciclosmelilla.es y de todos sus subdominios y directorios (en adelante, conjuntamente denominados como el SITIO WEB), informa que el acceso y uso del SITIO WEB, así como de los servicios o contenidos que a través del mismo puedan obtenerse, están sujetos a los términos y condiciones establecidos en este Aviso Legal, sin perjuicio de que el acceso a determinados servicios o contenidos pueda requerir la aceptación de condiciones generales adicionales.
          </p>
          <p>
            Por tanto, si no está de acuerdo con las condiciones aquí expuestas, le rogamos se abstenga de utilizar el SITIO WEB, ya que su uso implica la aceptación plena y sin reservas de los términos legales recogidos en este documento.
          </p>
          <p>
            PADILLO&SEVILLA C.B. se reserva el derecho a realizar modificaciones en el SITIO WEB sin previo aviso, con el fin de actualizar, corregir, modificar, añadir o eliminar contenidos o elementos del diseño. Los contenidos y servicios ofrecidos se actualizan periódicamente. No obstante, debido a que la actualización de la información no es inmediata, se recomienda comprobar siempre la vigencia y exactitud de la información, servicios y contenidos disponibles.
          </p>
          <p>
            Las condiciones y términos recogidos en este Aviso Legal pueden variar con el tiempo, por lo que se aconseja revisarlos cada vez que acceda nuevamente al SITIO WEB. PADILLO&SEVILLA C.B. no se hace responsable de los daños o perjuicios derivados del uso de las herramientas o informaciones publicadas en www.ciclosmelilla.es, especialmente en lo que respecta a la adopción de decisiones personales, comerciales o administrativas. Dichas decisiones deben ser contrastadas con profesionales o entidades competentes.
          </p>
          <p>
            En cualquier caso, la información y contenidos del SITIO WEB no podrán ser alegados en procedimientos contradictorios con terceros o con la Administración Pública. PADILLO&SEVILLA C.B. no asume responsabilidad alguna por las posibles discrepancias que puedan existir entre documentos oficiales emitidos por organismos competentes y la versión electrónica publicada en este SITIO WEB.
          </p>
        </div>

        {/* 2 */}
        <div className="mt-15 space-y-4" id="propiedad-intelectual">
          <h2 className="text-3xl font-bold">
            2. Derechos de propiedad intelectual y de propiedad industrial
          </h2>
          <p>
            Tanto el diseño del SITIO WEB y sus códigos fuente, como los logotipos, marcas y demás signos distintivos que aparecen en el mismo, pertenecen a PADILLO&SEVILLA C.B. o a entidades colaboradoras, y están protegidos por los correspondientes derechos de propiedad intelectual e industrial. Igualmente, están protegidas las imágenes y otros contenidos alojados en el servidor de www.ciclosmelilla.es por los derechos correspondientes.
          </p>
          <p>
            El SITIO WEB puede hacer uso de imágenes, iconos, ilustraciones y otros recursos visuales provenientes de bancos de imágenes de stock y plataformas de licencias. Estos recursos están sujetos a las condiciones de licencia de sus respectivos proveedores y únicamente se utilizan con permiso para los fines específicos del SITIO WEB.
          </p>
          <p>
            Su uso, reproducción, distribución, comunicación pública, transformación o cualquier otra actividad similar o análoga de dichos recursos gráficos queda totalmente prohibida salvo que medie autorización expresa y por escrito de PADILLO&SEVILLA C.B. o del titular de los derechos correspondiente.
          </p>
          <p>
            La licencia de uso de cualquier contenido del SITIO WEB otorgada al usuario se limita a la descarga para uso privado, siempre que los citados contenidos permanezcan íntegros y no sean modificados.
          </p>
          <p>
            Para consultar la información reutilizable disponible y las condiciones de reutilización, póngase en contacto con PADILLO&SEVILLA C.B. a través de los canales oficiales disponibles en el SITIO WEB.
          </p>
          <p>
            PADILLO&SEVILLA C.B. respeta los derechos de propiedad intelectual e industrial de terceros; por ello, si considera que algún contenido del SITIO WEB pudiera estar vulnerando sus derechos, le rogamos se ponga en contacto con nosotros a través de los medios de contacto habilitados para ello en www.ciclosmelilla.es.
          </p>
        </div>

        {/* 3 */}
        <div className="mt-15 space-y-4" id="links">
          <h2 className="text-3xl font-bold">3. Links o hiperenlaces</h2>
          <p>
            PADILLO&SEVILLA C.B. puede incluir en el SITIO WEB enlaces a otras páginas que consideramos pueden ser de su interés. No obstante, dichas páginas no pertenecen a PADILLO&SEVILLA C.B., ni realizamos una revisión o supervisión de sus contenidos, por lo que no nos responsabilizamos de los mismos, del funcionamiento de la página enlazada, ni de los posibles daños que puedan derivarse del acceso o uso de la misma.
          </p>
          <p>
            Los usuarios que deseen establecer un hiperenlace hacia el SITIO WEB de PADILLO&SEVILLA C.B. deberán tener en cuenta lo siguiente:
          </p>
          <ol className="list-disc list-inside space-y-4 ml-10">
            <li>
              El establecimiento del hiperenlace no implica, en ningún caso, la existencia de relaciones entre PADILLO&SEVILLA C.B. y el propietario de la página web o correo electrónico desde el que se realiza, ni la aceptación o aprobación de sus contenidos o servicios.
            </li>
            <li>
              PADILLO&SEVILLA C.B. no garantiza ni responde de la calidad, exactitud, fiabilidad, corrección o moralidad de los contenidos o servicios que pueda ofrecer la página enlazada.
            </li>
            <li>
              La página o comunicación electrónica que establezca el hiperenlace no podrá contener ninguna marca, denominación, logotipo, eslogan u otros signos distintivos pertenecientes a PADILLO&SEVILLA C.B., salvo aquellos que formen parte del propio hiperenlace.
            </li>
            <li>
              La página desde la que se establezca el hiperenlace no podrá contener informaciones ilícitas, contrarias a la moral, buenas costumbres o al orden público, ni contenidos que vulneren derechos de terceros.
            </li>
          </ol>
          <p>
            En cualquier momento, PADILLO&SEVILLA C.B. podrá requerir la supresión del enlace a su dominio sin necesidad de alegar causa alguna.
          </p>
        </div>

        {/* 4 */}
        <div className="mt-15 space-y-4" id="frames">
          <h2 className="text-3xl font-bold">4. Frames</h2>
          <p>
            PADILLO&SEVILLA C.B. prohíbe expresamente la realización de “framings” o el uso por parte de terceros de cualquier otro mecanismo que altere el diseño, la configuración original o los contenidos del SITIO WEB.
          </p>
        </div>

        {/* 5 */}
        <div className="mt-15 space-y-4" id="ley">
          <h2 className="text-3xl font-bold">5. Ley aplicable y jurisdicción</h2>
          <p>
            La ley aplicable en caso de disputa o conflicto de interpretación de los términos que conforman este Aviso Legal, así como cualquier cuestión relacionada con los servicios del presente SITIO WEB, será la legislación española vigente.
          </p>
          <p>
            Para la resolución de cualquier conflicto que pudiera surgir con ocasión del acceso al SITIO WEB o del uso de los servicios en él ofrecidos, PADILLO&SEVILLA C.B. y el Usuario acuerdan someterse a los Juzgados y Tribunales del domicilio del Usuario, siempre que este se encuentre situado en territorio español.
          </p>
        </div>
      </section>
    </div>
  );
}
