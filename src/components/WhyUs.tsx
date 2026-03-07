"use client";

import { motion } from "framer-motion";
import {
    BadgeDollarSign,
    Building2,
    Check,
    FileCheck,
    GraduationCap,
    MapPin,
    Wrench,
    X,
} from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Ingenieros del Tec de Monterrey",
    description:
      "No somos vendedores de catálogo. Somos ingenieros en Tecnologías Computacionales con formación de primer nivel.",
  },
  {
    icon: Building2,
    title: "Experiencia en Oracle y Microsoft",
    description:
      "Conocemos infraestructura empresarial real: bases de datos, cloud, Microsoft 365, Azure, Windows Server.",
  },
  {
    icon: BadgeDollarSign,
    title: "Precios de Mayoreo",
    description:
      "Acceso directo a los principales mayoristas del país — más de 200 marcas al mejor precio del mercado, sin intermediarios.",
  },
  {
    icon: FileCheck,
    title: "Factura Fiscal al Momento",
    description:
      "CFDI 4.0 inmediato. Todo deducible. Productos originales con garantía de fábrica canalizada.",
  },
  {
    icon: Wrench,
    title: "Servicio Integral",
    description:
      "Diagnóstico, cotización, compra, configuración, instalación y soporte. No necesitas a nadie más.",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional, Enfoque Regional",
    description:
      "Envíos a los 32 estados de México. Servicio presencial con enfoque en Hermosillo, Guadalajara y Monterrey.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function WhyUs() {
  return (
    <section id="por-que-nodo" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left column — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400 mb-3">
              Por Qué Nodo
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              No vendemos cajas.{" "}
              <span className="text-nodo-400">Resolvemos problemas.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-nodo-400">
              La mayoría de distribuidores de tecnología son vendedores que saben
              de especificaciones. Nosotros somos ingenieros que entienden tu
              negocio y te asesoran con criterio técnico real.
            </p>

            {/* Comparison */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-red-500/10 bg-red-500/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">
                  Revendedor típico
                </p>
                <ul className="space-y-2 text-sm text-nodo-400">
                  <li className="flex items-center gap-2"><X size={14} className="text-red-400 flex-shrink-0" /> Solo vende productos</li>
                  <li className="flex items-center gap-2"><X size={14} className="text-red-400 flex-shrink-0" /> Sin diagnóstico</li>
                  <li className="flex items-center gap-2"><X size={14} className="text-red-400 flex-shrink-0" /> Precio de retail</li>
                  <li className="flex items-center gap-2"><X size={14} className="text-red-400 flex-shrink-0" /> Sin implementación</li>
                </ul>
              </div>
              <div className="rounded-xl border border-accent-500/20 bg-accent-500/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-400 mb-3">
                  Con Nodo
                </p>
                <ul className="space-y-2 text-sm text-nodo-300">
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent-400 flex-shrink-0" /> Consultoría integral</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent-400 flex-shrink-0" /> Diagnóstico gratuito</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent-400 flex-shrink-0" /> Precio de mayoreo</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent-400 flex-shrink-0" /> Todo implementado</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right column — feature list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={itemVariants}
                  className="flex gap-5 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:bg-white/[0.04] hover:border-white/10"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                      <Icon size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm text-nodo-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
