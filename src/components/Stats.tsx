"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "200+", label: "Marcas disponibles" },
  { value: "24h", label: "Tiempo de respuesta" },
  { value: "100%", label: "Factura fiscal (CFDI)" },
  { value: "32", label: "Estados con cobertura" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 lg:p-12 glow-blue"
        >
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold bg-gradient-to-r from-accent-400 to-blue-300 bg-clip-text text-transparent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-nodo-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
