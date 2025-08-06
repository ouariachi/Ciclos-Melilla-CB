---
const links = [
  { name: "Inicio", href: "/#" },
  { name: "Quiénes somos", href: "/#who-we-are" },
  { name: "Servicios", href: "/#services" },
  { name: "Opiniones", href: "/#reviews" },
  { name: "Preguntas frecuentes", href: "/#faq" },
  { name: "Contacto", href: "/#contact" },
];
---

<div>
	<div
		id="hamburger-button"
		class="relative flex flex-col justify-center items-center gap-2 z-60 w-[30px] aspect-[1.3] cursor-pointer transition-all duration-200 ease-in-out"
		role="button"
		aria-pressed="false"
	>
		<div
			class="bar-top absolute w-full h-[8px] bg-white top-0 left-0 origin-center transition-all duration-200 ease-in-out"
			style="width: 100%;"
		></div>
		<div
			class="bar-bottom absolute w-full h-[8px] bg-white bottom-0 left-0 origin-center transition-all duration-200 ease-in-out"
			style="width: 100%;"
		></div>
	</div>

  <aside id="main-menu" class="fixed top-0 left-0 z-50 w-full h-full pointer-events-none">
    <div
      id="menu-overlay"
      class="absolute top-0 left-0 z-50 w-full h-full cursor-pointer transition-all duration-300 opacity-0 bg-black/50 backdrop-blur-sm hidden md:block"
    >
      <div class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
        <img 
          src="https://res.cloudinary.com/doaywtxph/image/upload/v1753745297/CIclosMelillaCB/logo_full_transparent.webp"
        />
        <p class="text-lg font-medium">
          El lujo también se pedalea.
        </p>
      </div>
    </div>

    <div
      id="menu-panel"
      class="absolute top-0 right-0 z-60 w-full h-full bg-gradient-to-tr from-background to-zinc-900 transition-all duration-300 ease-in-out md:w-1/2 translate-x-full"
    >
      <div class="flex flex-col gap-8 items-center justify-center h-full p-12 text-center">
        {links.map((link, i) => (
          <a
            href={link.href}
            onclick="toggleMenu(false)" 
            class="
              relative text-4xl md:text-5xl font-bold transition-all duration-300 ease-in-out 
              after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-1.5 after:bg-foreground after:rounded-2xl after:w-0 
              after:transition-all after:duration-300 hover:after:w-full
            "
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </aside>
</div>

<script is:inline>
  const btn = document.getElementById("hamburger-button");
  const menu = document.getElementById("main-menu");
  const overlay = document.getElementById("menu-overlay");
  const panel = document.getElementById("menu-panel");
  
  let open = false;

  function toggleMenu(force) {
    open = typeof force === 'boolean' ? force : !open;
    btn.setAttribute('aria-pressed', open);
    menu.classList.toggle('pointer-events-none', !open);
    overlay.classList.toggle('opacity-0', !open);
    overlay.classList.toggle('pointer-events-none', !open);
    panel.classList.toggle('translate-x-full', !open);

    btn.classList.toggle('translate-x-[-7px]', open);
    const topBar = btn.querySelector('.bar-top');
    const bottomBar = btn.querySelector('.bar-bottom');
    topBar.classList.toggle('rotate-45', open);
    topBar.classList.toggle('translate-x-[7px]', open);
    topBar.classList.toggle('translate-y-[7.3px]', open);
    bottomBar.classList.toggle('-rotate-45', open);
    bottomBar.classList.toggle('translate-x-[7px]', open);
    bottomBar.classList.toggle('translate-y-[-7.3px]', open);
  }

  btn.addEventListener('click', () => toggleMenu());
  overlay.addEventListener('click', () => toggleMenu(false));
</script>
