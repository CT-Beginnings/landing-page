"use client";

import { motion } from "framer-motion";
import { Linkedin, Phone } from "lucide-react";
import Image from "next/image";

const founders = [
  {
    name: "José María Soto Valenzuela",
    role: "Co-Fundador",
    education: "Ing. en Tecnologías Computacionales — Tec de Monterrey",
    experience: ["Oracle", "Microsoft"],
    bio: "Egresado del Tec de Monterrey con formación en infraestructura empresarial en Oracle y Microsoft. Se enfoca en entender las necesidades reales de cada empresa para recomendar la solución más adecuada.",
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-m-soto-vzla",
    phone: "6421513931",
    photo: "/JoseMaria.jpg",
    initials: "JM",
  },
  {
    name: "César Alan Silva Ramos",
    role: "Co-Fundador",
    education: "Ing. en Tecnologías Computacionales — Tec de Monterrey",
    experience: ["Oracle", "Avertium Cybersecurity"],
    bio: "Egresado del Tec de Monterrey con experiencia en empresas como Oracle y Avertium Cybersecurity. Especializado en implementación de soluciones tecnológicas y acompañamiento técnico continuo.",
    linkedin: "https://www.linkedin.com/in/cesaralansilva/",
    phone: "6624665609",
    photo: "/JoseMaria.jpg",
    initials: "CA",
  },
];

export default function Founders() {
  return (
    <section id="fundadores" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/[0.015] to-transparent" />

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
            Fundadores
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Quiénes somos
          </h2>
          <p className="mt-4 text-lg text-nodo-400">
            Dos ingenieros del Tec de Monterrey que decidieron aplicar lo
            aprendido en empresas como Oracle, Microsoft y Avertium para ayudar
            a empresas en México a equiparse mejor.
          </p>
        </motion.div>

        {/* Founder Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04] hover:border-white/10 gradient-border"
            >
              {/* Avatar */}
              <div className="mb-6 flex items-center gap-5">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl ring-2 ring-white/10">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-accent-400">{founder.role}</p>
                </div>
              </div>

              {/* Education */}
              <p className="text-sm text-nodo-300 mb-4">{founder.education}</p>

              {/* Bio */}
              <p className="text-sm text-nodo-400 leading-relaxed mb-5">
                {founder.bio}
              </p>

              {/* Experience badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {founder.experience.map((exp) => (
                  <span
                    key={exp}
                    className="inline-flex items-center rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400"
                  >
                    {exp}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-nodo-300">
                  Tec de Monterrey
                </span>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-nodo-400 transition-all hover:border-accent-500/30 hover:text-accent-400 hover:bg-accent-500/5"
                  aria-label={`LinkedIn de ${founder.name}`}
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={`https://wa.me/52${founder.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-nodo-400 transition-all hover:border-accent-500/30 hover:text-accent-400 hover:bg-accent-500/5"
                  aria-label={`WhatsApp de ${founder.name}`}
                >
                  <Phone size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
