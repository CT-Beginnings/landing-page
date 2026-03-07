"use client";

import { motion } from "framer-motion";
import {
    ClipboardCheck,
    CreditCard,
    FileText,
    HeartHandshake,
    MessageSquare,
    Truck,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Nos Contactas",
    description:
      "Mándanos un WhatsApp o llena el formulario. Te respondemos en menos de 24 horas.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Diagnóstico Gratuito",
    description:
      "Evaluamos tus equipos, red y software — de forma presencial o por videollamada. Te entregamos un reporte completo.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Cotización a Medida",
    description:
      "Preparamos una propuesta personalizada con las mejores opciones al mejor precio.",
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Aprobación y Pago",
    description:
      "Aceptas la cotización, realizas el pago por transferencia y nosotros nos encargamos de todo.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Entrega e Implementación",
    description:
      "Entregamos en Hermosillo, configuramos equipos, instalamos software y dejamos todo funcionando.",
  },
  {
    icon: HeartHandshake,
    number: "06",
    title: "Soporte Continuo",
    description:
      "No te dejamos solo. Soporte técnico directo, garantía canalizada y asesoría permanente.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400 mb-3">
            Proceso
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Así de simple es trabajar con nosotros
          </h2>
          <p className="mt-4 text-lg text-nodo-400">
            De tu primer mensaje a tener todo funcionando. Sin burocracia, sin
            complicaciones.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/30 via-accent-500/10 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative lg:flex lg:items-center lg:pb-16 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`lg:w-1/2 ${
                      isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.04] hover:border-white/10 ${
                        isLeft ? "lg:ml-auto" : ""
                      } max-w-md`}
                    >
                      <div
                        className={`flex items-center gap-4 mb-3 ${
                          isLeft ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400">
                          <Icon size={20} />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-accent-400">
                            {step.number}
                          </span>
                          <h3 className="text-lg font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p
                        className={`text-sm text-nodo-400 leading-relaxed ${
                          isLeft ? "lg:text-right" : ""
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-4 w-4 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-accent-500 ring-4 ring-nodo-950 ring-offset-0" />
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
