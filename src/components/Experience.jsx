"use client";

import { useInView } from "@/hooks/useInView";
import SectionTitle from "./SectionTitle";

const EXPERIENCES = [
  {
    period: "2023/03 — 現在",
    role: "CIM / 工業 AI 工程師",
    company: "製造業（台中，金屬加工用機械製造）",
    desc: "負責五軸 CNC 拋光系統 PLC / HMI 開發（SINUMERIK ONE + TIA Portal + C# HMI），單站已交付客戶試車，多站協調架構開發中，並完成交接手冊與場內模擬機。工作之餘自主建置 IIoT SCADA 與 RAG 平台，把 OPC UA、時序資料、LLM 診斷與 AWS 雲端串成完整作品。",
    tags: [
      "SINUMERIK ONE",
      "TIA Portal",
      "C# HMI",
      "SINAMICS S120",
      "CU240E",
    ],
  },
  {
    period: "2020/12 — 現在",
    role: "西門子業界講師",
    company: "勞動部勞動力發展署 中彰投分署",
    desc: "受政府機構認證，擔任西門子技術課程業界講師，開設伺服馬達控制應用班、西門子 PLC 基礎班及青年專班課程，培訓電控領域技術人才。",
    tags: ["SINUMERIK", "SINAMICS", "S120", "TIA Portal", "伺服馬達"],
  },
  {
    period: "2018/09 — 2023/03",
    role: "PLC 電控工程師",
    company: "銓瑩電機有限公司",
    desc: "4 年 7 個月，跨產業自動化控制系統設計與實施。涵蓋五軸拋光機（Beckhoff CNC）、金屬製管機追剪（Siemens 1511T 電子凸輪）、玻璃雙邊機（三菱 iQ-R）、立式搪磨機、深孔加工機等多類機種，橫跨 Siemens、Mitsubishi、Omron、Beckhoff 四大平台。",
    tags: [
      "Siemens S7-1511T",
      "Mitsubishi iQ-R",
      "Beckhoff CNC",
      "Omron NX1P2",
      "Modbus RTU",
    ],
  },
];

const CERTS = [
  {
    date: "2026/10",
    name: "AWS Certified Solutions Architect – Associate",
    note: "SAA-C03，790 分",
  },
  {
    date: "2020/12 起",
    name: "勞動部勞動力發展署 西門子業界講師",
    note: "PLC、伺服馬達控制課程",
  },
];

function TimelineItem({ exp, isLast, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} flex gap-6`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center flex-shrink-0 w-4">
        <div className="w-3 h-3 rounded-full bg-cyan/80 border border-cyan/40 shadow-[0_0_8px_rgba(0,212,255,0.4)] flex-shrink-0 mt-1" />
        {!isLast && (
          <div className="timeline-line w-px flex-1 mt-2 min-h-[60px]" />
        )}
      </div>

      <div className="pb-10">
        <span className="text-xs font-mono text-dim">{exp.period}</span>
        <h3 className="font-display font-semibold text-primary text-lg mt-1 leading-snug">
          {exp.role}
        </h3>
        <p className="text-sm text-cyan/70 mb-3">{exp.company}</p>
        <p className="text-sm text-muted leading-relaxed max-w-xl">
          {exp.desc}
        </p>
        {exp.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {exp.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 text-[11px] font-mono border border-white/[0.1] text-dim rounded"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle label="Career" title="工作經歷" />
        <div>
          {EXPERIENCES.map((exp, i) => (
            <TimelineItem
              key={i}
              exp={exp}
              isLast={i === EXPERIENCES.length - 1}
              delay={i * 120}
            />
          ))}
        </div>

        <div className="mt-6 pt-10 border-t border-white/[0.07]">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-dim mb-5">
            Certifications
          </p>
          <ul className="flex flex-col gap-3">
            {CERTS.map((c) => (
              <li
                key={c.name}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3"
              >
                <span className="text-xs font-mono text-dim sm:w-24 shrink-0">{c.date}</span>
                <span className="text-sm text-primary font-medium">{c.name}</span>
                <span className="text-xs text-cyan/70 sm:ml-auto">{c.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
