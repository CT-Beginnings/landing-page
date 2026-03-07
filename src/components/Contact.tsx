"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "526624665609";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa una cotización de equipo de cómputo / consultoría tecnológica."
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with form data
    const msg = `Hola, soy ${formData.name}${
      formData.company ? ` de ${formData.company}` : ""
    }. ${formData.message || "Me interesa una cotización."}${
      formData.email ? `\n\nCorreo: ${formData.email}` : ""
    }${formData.phone ? `\nTeléfono: ${formData.phone}` : ""}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-500/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400 mb-3">
            Contacto
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            ¿Listo para empezar?
          </h2>
          <p className="mt-4 text-lg text-nodo-400">
            Escríbenos y te respondemos en menos de 24 horas. El diagnóstico
            tecnológico inicial es completamente gratuito.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-nodo-300 mb-2"
                  >
                    Nombre *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-nodo-600 outline-none transition-all focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/25"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-nodo-300 mb-2"
                  >
                    Empresa
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-nodo-600 outline-none transition-all focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/25"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-nodo-300 mb-2"
                  >
                    Correo
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-nodo-600 outline-none transition-all focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/25"
                    placeholder="correo@empresa.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-nodo-300 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-nodo-600 outline-none transition-all focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/25"
                    placeholder="662 123 4567"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-nodo-300 mb-2"
                >
                  ¿Qué necesitas?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-nodo-600 outline-none transition-all focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/25 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto: ¿laptops, red, servidores, diagnóstico...?"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/30 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Enviar por WhatsApp
              </button>

              <p className="text-center text-xs text-nodo-600">
                Al enviar, se abrirá WhatsApp con tu mensaje pre-llenado.
              </p>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-green-500/20 bg-green-500/5 p-6 transition-all hover:bg-green-500/10 hover:border-green-500/30"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp Directo</p>
                <p className="text-sm text-nodo-400">
                  Respuesta en menos de 24h — usualmente en minutos
                </p>
              </div>
            </a>

            {/* Other contact methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <Phone size={20} className="text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Teléfono</p>
                  <p className="text-sm text-nodo-400">
                    +52 662 466 5609
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <Mail size={20} className="text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Correo</p>
                  <p className="text-sm text-nodo-400">
                    contacto@nodo.tech{/* TODO: Replace with real email */}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <MapPin size={20} className="text-accent-400 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Ubicación</p>
                  <p className="text-sm text-nodo-400">Hermosillo, Sonora, México</p>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="rounded-xl border border-accent-500/10 bg-accent-500/5 p-5">
              <p className="text-sm text-nodo-300 leading-relaxed">
                <span className="font-semibold text-accent-400">
                  Diagnóstico gratuito.
                </span>{" "}
                Evaluamos tu infraestructura por videollamada o de forma
                presencial y te entregamos un reporte con recomendaciones. Sin
                compromiso, sin costo.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
