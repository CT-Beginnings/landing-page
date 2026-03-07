"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-accent-500/10 blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent-600/8 blur-[128px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Brand name prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-accent-500/20 bg-accent-500/5 px-5 py-2"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-500">
              <span className="text-xs font-bold text-white">N</span>
            </div>
            <span className="text-base font-semibold text-white tracking-wide">
              Nodo
            </span>
            <span className="text-sm text-nodo-400">— Equipamiento & Consultoría TI</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Laptops, redes y servidores{" "}
            <span className="bg-gradient-to-r from-accent-400 to-blue-300 bg-clip-text text-transparent">
              para tu empresa
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-nodo-400 sm:text-xl max-w-2xl mx-auto"
          >
            Te asesoramos en qué comprar, lo conseguimos a precio de mayoreo, lo
            configuramos y te lo entregamos funcionando. Envíos a todo México con
            enfoque en Hermosillo, Guadalajara y Monterrey.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contacto"
              className="group flex items-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
            >
              Agenda Tu Diagnóstico Gratis
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#servicios"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-nodo-200 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
            >
              Ver Servicios
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            {[
              "Egresados del Tec de Monterrey",
              "Formados en Oracle & Microsoft",
              "+200 marcas disponibles",
              "Envíos a todo México",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm text-nodo-500"
              >
                <div className="h-1 w-1 rounded-full bg-nodo-600" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#servicios" className="text-nodo-600 hover:text-nodo-400 transition-colors">
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
