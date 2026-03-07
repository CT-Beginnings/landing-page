"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import {
    ChevronDown,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿En qué se diferencia Nodo de una tienda de cómputo?",
    answer:
      "No somos una tienda. Somos consultores tecnológicos con formación en ingeniería. Primero entendemos qué necesita tu empresa, luego recomendamos la solución correcta, la conseguimos a precio de mayoreo y la implementamos. Una tienda solo te vende un producto — nosotros te resolvemos un problema.",
  },
  {
    question: "¿Cómo funciona el diagnóstico tecnológico gratuito?",
    answer:
      "Podemos evaluar tu infraestructura de forma presencial o por videollamada. Revisamos tus equipos actuales, red, software y procesos. Te entregamos un reporte con recomendaciones priorizadas y una cotización estimada para las mejoras. Sin compromiso.",
  },
  {
    question: "¿Por qué sus precios son más bajos que en tienda?",
    answer:
      "Trabajamos directamente con los principales mayoristas de tecnología en México. Compramos a precio de distribuidor — sin intermediarios — y te trasladamos ese ahorro. Tú pagas menos que en retail y nosotros ganamos un margen justo por el servicio.",
  },
  {
    question: "¿Qué pasa si algo falla o necesito garantía?",
    answer:
      "Todos los productos son originales con garantía de fábrica. Si algo falla, nosotros canalizamos la garantía por ti — no tienes que hacer nada. Además, ofrecemos soporte técnico directo por WhatsApp para resolver cualquier problema.",
  },
  {
    question: "¿Pueden facturar? ¿Es deducible?",
    answer:
      "Sí. Emitimos CFDI 4.0 al momento de la compra. Todo es 100% deducible de impuestos. Equipo de cómputo, software, servicios — todo facturado correctamente.",
  },
  {
    question: "¿Cuánto tardan en entregar?",
    answer:
      "Para productos en stock, típicamente 2-3 días hábiles en las principales ciudades. Para pedidos especiales o lotes grandes, depende de la disponibilidad — pero siempre te damos un timeline claro antes de que aceptes.",
  },
  {
    question: "¿En qué ciudades trabajan?",
    answer:
      "Hacemos envíos a los 32 estados de México. Nuestro servicio presencial (diagnóstico in situ, instalación, soporte) se concentra en Hermosillo, Guadalajara y Monterrey. En otras ciudades, el diagnóstico y soporte se hacen por videollamada.",
  },
  {
    question: "¿Qué experiencia tienen los fundadores?",
    answer:
      "Los dos fundadores son ingenieros en Tecnologías Computacionales egresados del Tec de Monterrey. Se formaron profesionalmente en Oracle y Microsoft, donde trabajaron con infraestructura tecnológica empresarial a gran escala. Esa experiencia es lo que aplican hoy para asesorar a cada cliente.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400 mb-3">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all hover:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-medium text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={clsx(
                    "flex-shrink-0 text-nodo-500 transition-transform duration-200",
                    openIndex === index && "rotate-180 text-accent-400"
                  )}
                />
              </button>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                )}
              >
                <p className="px-6 text-sm text-nodo-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
