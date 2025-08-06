export default function Location() {
  return (
    <div>
      <div
        className="w-[600px] h-[400px] max-w-[95dvw] max-h-[95dvh] overflow-hidden mx-auto rounded-md border-2 border-white/40 border-accent"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151.34305710648187!2d-2.939656791965071!3d35.275285054002104!2m3!1f103.08!2f0!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0xd7705eb53acb6ff%3A0x93087d13ddc419ff!2sCiclos%20Melilla!5e1!3m2!1ses!2ses!4v1753829132484!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
