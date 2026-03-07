"use client";

import { motion, useInView } from "framer-motion";
import {
    Headphones,
    Monitor,
    Network,
    Search,
    Settings,
    ShieldCheck,
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Search,
    title: "Diagnóstico Tecnológico",
    description:
      "Evaluamos tu infraestructura actual: equipos, redes, software y seguridad. Te entregamos un reporte con recomendaciones priorizadas.",
    tag: "Gratuito",
  },
  {
    icon: Monitor,
    title: "Equipamiento a Mayoreo",
    description:
      "Acceso directo a los distribuidores más grandes de México. Laptops, desktops, servidores y periféricos a precio de distribuidor.",
    tag: "Mejor Precio",
  },
  {
    icon: Settings,
    title: "Implementación Profesional",
    description:
      "No solo vendemos equipo — lo instalamos, configuramos y dejamos funcionando. Migración de datos, software y redes incluido.",
    tag: "Llave en Mano",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    description:
      "Soporte técnico directo por WhatsApp. Resolución de problemas, actualizaciones y mantenimiento para que no pierdas tiempo.",
    tag: "Post-Venta",
  },
  {
    icon: Network,
    title: "Infraestructura de Redes",
    description:
      "Diseño e implementación de redes empresariales: routers, switches, access points, cableado estructurado y configuración.",
    tag: "Conectividad",
  },
  {
    icon: ShieldCheck,
    title: "Software y Licencias",
    description:
      "Microsoft 365, antivirus, herramientas de productividad. Licencias originales con factura fiscal, configuradas y listas para usar.",
    tag: "Licenciamiento",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400 mb-3">
            Servicios
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Todo lo que tu empresa necesita
          </h2>
          <p className="mt-4 text-lg text-nodo-400">
            Desde el diagnóstico inicial hasta el soporte continuo. Un solo
            partner tecnológico para todo.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.05] hover:border-white/10 gradient-border"
              >
                {/* Tag */}
                <span className="absolute top-6 right-6 text-xs font-medium text-accent-400 bg-accent-500/10 px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>

                {/* Icon */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-nodo-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
