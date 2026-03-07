import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import NodoLogo from "./NodoLogo";

const footerLinks = {
  servicios: [
    { label: "Diagnóstico Tecnológico", href: "#servicios" },
    { label: "Equipamiento", href: "#servicios" },
    { label: "Implementación", href: "#servicios" },
    { label: "Soporte Técnico", href: "#servicios" },
    { label: "Redes e Infraestructura", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#fundadores" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" }, // TODO: Add real URL
  { icon: Instagram, href: "#", label: "Instagram" }, // TODO: Add real URL
  { icon: Facebook, href: "#", label: "Facebook" }, // TODO: Add real URL
  { icon: Mail, href: "mailto:contacto@nodo.tech", label: "Correo" }, // TODO: Update email
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-nodo-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <NodoLogo size={44} />
              <span className="text-xl font-bold text-white tracking-tight">Nodo</span>
            </a>
            <p className="mt-3 text-sm italic text-nodo-400">
              "Conectamos empresas con la tecnología correcta."
            </p>
            <p className="mt-3 text-sm text-nodo-500 leading-relaxed max-w-xs">
              Equipamiento de cómputo, redes y software para empresas.
              Consultoría, implementación y soporte en todo México.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 text-nodo-500 transition-all hover:border-white/10 hover:text-white hover:bg-white/5"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:ml-auto">
            <div>
              <h3 className="text-sm font-semibold text-white">Servicios</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-nodo-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Empresa</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-nodo-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-white">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-nodo-500">
              <li>Hermosillo, Sonora, México</li>
              <li>
                <a
                  href="mailto:contacto@nodo.tech"
                  className="hover:text-white transition-colors"
                >
                  contacto@nodo.tech{/* TODO: Update */}
                </a>
              </li>
              <li>
                <a
                  href="tel:+526421513931"
                  className="hover:text-white transition-colors"
                >
                  +52 642 151 3931
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-nodo-600">
            © {new Date().getFullYear()} Nodo. Todos los derechos reservados.
          </p>
          <p className="text-xs text-nodo-600">
            México — Hermosillo · Guadalajara · Monterrey
          </p>
        </div>
      </div>
    </footer>
  );
}
