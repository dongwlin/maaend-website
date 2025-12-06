"use client";

import { Card } from "./ui/Card";
import { motion } from "framer-motion";
import { Cpu, Globe, Layout, Scan, Terminal, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("features.items.autoSanity.title"),
      desc: t("features.items.autoSanity.desc"),
      detail: t("features.items.autoSanity.detail"),
      icon: <Zap className="text-[#FFE600]" size={32} />,
      col: "md:col-span-2",
    },
    {
      title: t("features.items.infrastructure.title"),
      desc: t("features.items.infrastructure.desc"),
      detail: t("features.items.infrastructure.detail"),
      icon: <Layout className="text-white" size={32} />,
      col: "md:col-span-1",
    },
    {
      title: t("features.items.recruitment.title"),
      desc: t("features.items.recruitment.desc"),
      detail: t("features.items.recruitment.detail"),
      icon: <Scan className="text-[#FFE600]" size={32} />,
      col: "md:col-span-1",
    },
    {
      title: t("features.items.coreEngine.title"),
      desc: t("features.items.coreEngine.desc"),
      detail: t("features.items.coreEngine.detail"),
      icon: <Cpu className="text-white" size={32} />,
      col: "md:col-span-2",
    },
    {
      title: t("features.items.cliApi.title"),
      desc: t("features.items.cliApi.desc"),
      detail: t("features.items.cliApi.detail"),
      icon: <Terminal className="text-[#FFE600]" size={32} />,
      col: "md:col-span-1",
    },
    {
      title: t("features.items.crossPlatform.title"),
      desc: t("features.items.crossPlatform.desc"),
      detail: t("features.items.crossPlatform.detail"),
      icon: <Globe className="text-white" size={32} />,
      col: "md:col-span-2",
    },
  ];
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading mb-4 text-4xl font-bold md:text-6xl">
            {t("features.title")}
          </h2>
          <div className="h-1 w-20 rounded-full bg-[#FFE600]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={f.col}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="group flex h-full min-h-[240px] flex-col justify-between">
                <div className="mb-6 w-fit rounded-lg border border-white/5 bg-white/5 p-3 backdrop-blur-md transition-colors group-hover:border-white/10">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-heading mb-1 text-2xl font-bold text-white transition-colors group-hover:text-[#FFE600]">
                    {f.title}
                  </h3>
                  <p className="mb-3 font-mono text-xs tracking-wider text-[#FFE600] uppercase">
                    {f.desc}
                  </p>
                  <p className="text-sm leading-relaxed text-white/60">
                    {f.detail}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
