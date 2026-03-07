"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Server,
  Wifi,
  Printer,
  MonitorSmartphone,
  HardDrive,
} from "lucide-react";

const products = [
  {
    icon: Laptop,
    title: "Laptops y Desktops",
    description:
      "HP, Lenovo, Dell, Apple y más. Para oficina, diseño, ingeniería o uso personal. Configuradas y listas.",
    brands: ["HP", "Lenovo", "Dell", "Apple"],
  },
  {
    icon: Server,
    title: "Servidores",
    description:
      "Servidores básicos y de rack para PyMEs. Almacenamiento, respaldo y servicios de red.",
    brands: ["HP Enterprise", "Dell", "Lenovo"],
  },
  {
    icon: Wifi,
    title: "Redes y Conectividad",
    description:
      "Routers, switches, access points, cableado estructurado. Para oficinas de cualquier tamaño.",
    brands: ["Ubiquiti", "TP-Link", "Cisco"],
  },
  {
    icon: MonitorSmartphone,
    title: "Monitores y Periféricos",
    description:
      "Monitores profesionales, teclados, ratones, webcams, audífonos. Todo lo que el equipo necesita.",
    brands: ["LG", "Samsung", "Logitech"],
  },
  {
    icon: Printer,
    title: "Impresoras y Escáneres",
    description:
      "Impresoras láser, multifuncionales y escáneres. Para oficina y volumen alto de documentos.",
    brands: ["HP", "Brother", "Epson"],
  },
  {
    icon: HardDrive,
    title: "Almacenamiento y Componentes",
    description:
      "SSDs, memoria RAM, discos externos, NAS. Upgrades y componentes para equipos existentes.",
    brands: ["Kingston", "Samsung", "WD"],
  },
];

export default function Products() {
  return (
    <section className="relative py-24 lg:py-32">
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
            Catálogo
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            +200 marcas a precio de mayoreo
          </h2>
          <p className="mt-4 text-lg text-nodo-400">
            Trabajamos con los principales distribuidores del país para
            conseguirte el mejor precio. Si existe, te lo cotizamos.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-7 transition-all hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 transition-colors group-hover:bg-accent-500/15">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{product.title}</h3>
                    <p className="mt-2 text-sm text-nodo-400 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.brands.map((brand) => (
                        <span
                          key={brand}
                          className="text-xs text-nodo-500 bg-white/5 px-2 py-0.5 rounded-md"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
