export function timeSince(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const units = [
    { name: "año", seconds: 365 * 24 * 60 * 60 },
    { name: "mes", seconds: 30 * 24 * 60 * 60 },
    { name: "semana", seconds: 7 * 24 * 60 * 60 },
    { name: "día", seconds: 24 * 60 * 60 },
    { name: "hora", seconds: 60 * 60 },
    { name: "minuto", seconds: 60 },
    { name: "segundo", seconds: 1 }
  ];

  for (const unit of units) {
    const count = Math.floor(seconds / unit.seconds);
    if (count >= 1) {
      if (count === 1) {
        const article = unit.name === "hora" ? "una" : "un";
        return `Hace ${article} ${unit.name}`;
      } else {
        return `Hace ${count} ${unit.name}s`;
      }
    }
  }

  return "Justo ahora";
}