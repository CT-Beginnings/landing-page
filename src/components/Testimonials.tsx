"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nos ayudaron a equipar nuestra oficina nueva con todo lo que necesitábamos. El diagnóstico gratuito nos abrió los ojos a problemas que ni sabíamos que teníamos.",
    author: "Próximo cliente",
    company: "Tu empresa podría estar aquí",
    rating: 5,
  },
  {
    quote:
      "Lo que más valoro es que realmente entienden de tecnología. No te venden por vender — te explican qué necesitas y por qué. Y encima a mejor precio.",
    author: "Próximo cliente",
    company: "Tu empresa podría estar aquí",
    rating: 5,
  },
  {
    quote:
      "Desde que trabajamos con Nodo, dejamos de perder tiempo con proveedores que no entienden. Nos resuelven todo: equipos, red, licencias y soporte.",
    author: "Próximo cliente",
    company: "Tu empresa podría estar aquí",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400 mb-3">
            Testimonios
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Empresas que confían en Nodo
          </h2>
          <p className="mt-4 text-lg text-nodo-400">
            Estamos comenzando y construyendo nuestra cartera de clientes.
            ¿Quieres ser de los primeros?
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-7 border-dashed"
            >
              <Quote
                size={24}
                className="text-accent-500/20 mb-4"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-accent-400 text-accent-400"
                  />
                ))}
              </div>

              <p className="text-sm text-nodo-400 leading-relaxed italic mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center text-xs text-nodo-500 font-medium">
                  ?
                </div>
                <div>
                  <p className="text-sm font-medium text-nodo-300">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-nodo-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to be first */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm text-accent-400 hover:text-accent-300 transition-colors font-medium"
          >
            Sé de los primeros clientes y obtén atención preferencial →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
