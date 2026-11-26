"use client";

import { useInView } from "@/hooks/useInView";
import SectionTitle from "./SectionTitle";
import { asset } from "@/lib/asset";

const EXPERIENCES = [
  {
    period: "2025/03 — 現在",
    role: "電控工程師（CNC / HMI 開發）",
    company: "銓瑩電機有限公司（回任）",
    desc: "負責 Siemens SINUMERIK ONE 五軸同動拋光機的 PLC 與 C# 客製化 HMI 開發（TIA Portal + Create MyHMI / 3GL），單站已交付客戶試車，多站協調架構開發中，並完成交接手冊與場內模擬機。同期在工作之餘自主開發 BFX 放貸機器人（商業產品），近半年再投入 IIoT SCADA 與 RAG 知識庫平台，把 OPC UA、時序資料、LLM 與 AWS 雲端串成完整作品。",
    tags: [
      "SINUMERIK ONE",
      "TIA Portal",
      "C# HMI",
      "SINAMICS S120",
      "CU240E",
    ],
  },
  {
    period: "2023/03 — 2025/01",
    role: "電控工程師",
    company: "榮蓁科技股份有限公司",
    desc: "協助開發環保設備新機種的電控系統，包含汙泥乾燥機與切削液過濾機。以 Omron PLC 搭配 Weintek（威綸）HMI 實作自動化控制與運轉數據監控，提升設備穩定性與能源效率。",
    tags: ["Omron PLC", "Weintek HMI", "汙泥乾燥機", "過濾機"],
  },
  {
    period: "2020/12 — 2024（兼任）",
    role: "西門子業界講師",
    company: "勞動部勞動力發展署 中彰投分署",
    desc: "受政府機構認證，兼任西門子技術課程業界講師，開設伺服馬達控制應用班、西門子 PLC 基礎班及青年專班伺服馬達課程，培訓電控領域技術人才。2025–2026 年分署更新場地設備暫停開課，預計 2027 年復課。",
    tags: ["SINAMICS", "S120", "TIA Portal", "S7-1500", "伺服馬達"],
    records: {
      title: "有授課證明的班次",
      summary: "3 個班次・合計 140 小時（另有其他班次未申請證明）",
      items: [
        { period: "2024/06 – 07", name: "西門子伺服馬達控制應用班", hours: "46 小時" },
        { period: "2024/03 – 04", name: "西門子 S7-1500 PLC 基礎班", hours: "46 小時" },
        { period: "2023/05 – 06", name: "西門子伺服馬達控制應用班", hours: "48 小時" },
      ],
    },
    gallery: [
      { src: "/images/teaching/teach-2024-servo.webp", alt: "2024 西門子伺服馬達控制應用班 授課證明（已遮蔽簽名、官印與字號）" },
      { src: "/images/teaching/teach-2024-plc.webp", alt: "2024 西門子 S7-1500 PLC 基礎班 授課證明（已遮蔽簽名、官印與字號）" },
      { src: "/images/teaching/teach-2023-servo.webp", alt: "2023 西門子伺服馬達控制應用班 授課證明（已遮蔽簽名、官印與字號）" },
    ],
    galleryNote: "證明文件已遮蔽簽名、官印與字號，正本可於面試時提供。",
  },
  {
    period: "2018/09 — 2023/03",
    role: "PLC 電控工程師",
    company: "銓瑩電機有限公司",
    desc: "4 年 7 個月，跨產業自動化控制系統設計與實施。涵蓋金屬製管機追剪與鑽尾螺絲成型機（Siemens 1511T 電子凸輪）、立式搪磨機（三菱 iQ-R / Siemens 1515 PC2 雙平台實作）、玻璃雙邊機與掃邊機（三菱 iQ-R / ET200SP）、內外圓筒磨床與深孔加工機（Siemens 1511T / 三菱 FX5U）、壓空成型機溫控（FX3U + Modbus RTU），以及與冷凍空調科的學術合作（Omron NX1P2），橫跨 Siemens、Mitsubishi、Omron 三大平台。",
    tags: [
      "Siemens S7-1511T",
      "電子凸輪",
      "Mitsubishi iQ-R",
      "Mitsubishi FX5U",
      "Omron NX1P2",
      "Modbus RTU",
    ],
  },
];

const EDUCATION = [
  {
    period: "2016/06 畢業",
    school: "國立雲林科技大學",
    degree: "資訊管理系 碩士",
    thesis: "Android 手機行為之安全檢測平台建置：基於 CSA 及 OWASP 之行動安全規範",
    desc: "以 CSA 與 OWASP 行動安全規範為檢測標準，建置線上手機安全檢測平台：透過 USB 偵錯與 VPN 無線連線讀取手機狀態，反組譯 App 分析敏感權限與 API 呼叫，產出客觀的檢測報告並以 Email 寄送。",
    link: { href: "https://hdl.handle.net/11296/3sc858", label: "臺灣博碩士論文系統" },
  },
  {
    period: "2014/06 畢業",
    school: "弘光科技大學",
    degree: "資訊工程系 學士（四技）",
  },
];

const CERTS = [
  {
    date: "2026/10",
    name: "AWS Certified Solutions Architect – Associate",
    note: "SAA-C03，790 分・有效至 2029/10",
    verify: {
      href: "https://www.credly.com/badges/aa67eeec-bea7-46c5-8ae7-3bddf340e6de",
      label: "Credly 線上驗證",
    },
  },
  {
    date: "2020 – 2024",
    name: "勞動部勞動力發展署 西門子業界講師",
    note: "PLC、伺服馬達控制課程・有證明 140 小時",
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
                className="px-2.5 py-0.5 text-xs font-mono border border-white/[0.1] text-dim rounded"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {exp.records && (
          <div className="mt-5 max-w-xl rounded-lg border border-white/[0.08] bg-white/[0.02] p-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <p className="text-xs font-mono tracking-wider text-dim">{exp.records.title}</p>
              <p className="text-xs text-cyan/80">{exp.records.summary}</p>
            </div>
            <ul className="flex flex-col gap-2">
              {exp.records.items.map((r) => (
                <li
                  key={r.period + r.name}
                  className="grid grid-cols-[1fr_auto] sm:grid-cols-[auto_1fr_auto] items-baseline gap-x-3 gap-y-0.5 text-sm"
                >
                  <span className="col-span-2 sm:col-span-1 font-mono text-xs text-dim">{r.period}</span>
                  <span className="text-primary">{r.name}</span>
                  <span className="font-mono text-xs text-cyan/80">{r.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {exp.gallery && (
          <div className="mt-4 max-w-xl">
            <div className="grid grid-cols-3 gap-3">
              {exp.gallery.map((g) => (
                <a
                  key={g.src}
                  href={asset(g.src)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded border border-white/[0.1] bg-white/[0.03] hover:border-cyan/40 transition-colors"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(g.src)}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                </a>
              ))}
            </div>
            {exp.galleryNote && (
              <p className="mt-2 text-xs text-dim">{exp.galleryNote}</p>
            )}
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
            Education
          </p>
          <ul className="flex flex-col gap-3">
            {EDUCATION.map((e) => (
              <li
                key={e.school}
                className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-xs font-mono text-dim sm:w-24 shrink-0">{e.period}</span>
                  <span className="text-sm text-primary font-medium">{e.school}</span>
                  <span className="text-xs text-cyan/70 sm:ml-auto">{e.degree}</span>
                </div>
                {e.thesis && (
                  <div className="mt-3 sm:ml-28 text-sm">
                    <p className="text-primary/90 leading-relaxed">
                      <span className="text-xs font-mono text-dim mr-2">論文</span>
                      {e.thesis}
                    </p>
                    {e.desc && (
                      <p className="mt-1.5 text-xs text-muted leading-relaxed">{e.desc}</p>
                    )}
                    {e.link && (
                      <a
                        href={e.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs text-cyan hover:underline"
                      >
                        {e.link.label} ↗
                      </a>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <p className="text-xs font-mono tracking-[0.18em] uppercase text-dim mb-5">
            Certifications
          </p>
          <ul className="flex flex-col gap-3">
            {CERTS.map((c) => (
              <li
                key={c.name}
                className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-xs font-mono text-dim sm:w-24 shrink-0">{c.date}</span>
                  <span className="text-sm text-primary font-medium">{c.name}</span>
                  <span className="text-xs text-cyan/70 sm:ml-auto">{c.note}</span>
                </div>
                {c.verify && (
                  <div className="mt-2 sm:ml-28 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <a
                      href={c.verify.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan hover:underline"
                    >
                      {c.verify.label} ↗
                    </a>
                    {c.verify.code && (
                      <span className="font-mono text-dim break-all">
                        驗證碼 {c.verify.code}
                      </span>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
