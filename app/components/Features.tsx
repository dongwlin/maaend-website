"use client";

import { Card } from "./ui/Card";
import { motion } from "framer-motion";
import { Cpu, Globe, Layout, Scan, Terminal, Zap } from "lucide-react";

const features = [
  {
    title: "智能刷理智",
    desc: "Auto Sanity & Navigation",
    detail: "全自动识别关卡，效率最大化路径规划，自动吃药回体。",
    icon: <Zap className="text-[#FFE600]" size={32} />,
    col: "md:col-span-2",
  },
  {
    title: "智能基建",
    desc: "Infrastructure Ops",
    detail: "自动心情判定，无人机最优策略，全自动排班轮换。",
    icon: <Layout className="text-white" size={32} />,
    col: "md:col-span-1",
  },
  {
    title: "公招识别",
    desc: "OCR + Strategy",
    detail: "高精度 OCR 识别，自动计算最优标签组合，不错过任何六星。",
    icon: <Scan className="text-[#FFE600]" size={32} />,
    col: "md:col-span-1",
  },
  {
    title: "核心引擎",
    desc: "Neural Core",
    detail: "基于深度学习的图像识别引擎，跨平台支持，毫秒级响应。",
    icon: <Cpu className="text-white" size={32} />,
    col: "md:col-span-2",
  },
  {
    title: "CLI / API",
    desc: "Developer Ready",
    detail: "提供完整的 API 接口与命令行工具，轻松集成到你的工作流。",
    icon: <Terminal className="text-[#FFE600]" size={32} />,
    col: "md:col-span-1",
  },
  {
    title: "多端适配",
    desc: "Cross Platform",
    detail: "Windows, macOS, Linux, Android 全平台支持。",
    icon: <Globe className="text-white" size={32} />,
    col: "md:col-span-2",
  },
];

export default function Features() {
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
            CORE MODULES
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
