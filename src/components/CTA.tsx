"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-accent-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Tu empresa merece tecnología{" "}
            <span className="bg-gradient-to-r from-accent-400 to-blue-300 bg-clip-text text-transparent">
              que funcione
            </span>
          </h2>
          <p className="mt-6 text-lg text-nodo-400 max-w-2xl mx-auto">
            Deja de perder tiempo con equipo lento o proveedores que no
            entienden. Agenda tu diagnóstico gratuito y descubre cómo podemos
            ayudarte.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="group flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
            >
              Empieza Ahora
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://wa.me/526421513931"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-nodo-200 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
