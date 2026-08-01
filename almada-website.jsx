import React, { useState, useEffect, useRef } from "react";

/* ============================================================
   المدى المتقدم للاستشارات البيئية والهندسية
   Al-Mada Al-Mutaqaddim for Environmental & Engineering Consulting
   Amman, Jordan  ·  almada-almutaqaddim.com
   ============================================================ */

const T = {
  ar: {
    dir: "rtl",
    nav: ["الخدمات", "منهجية العمل", "القطاعات", "من نحن", "تواصل"],
    brand: "المدى المتقدم",
    brandSub: "للاستشارات البيئية والهندسية",
    eyebrow: "شركة ذات مسؤولية محدودة · عمّان، الأردن",
    h1a: "الاستشارات البيئية والهندسية،",
    h1b: "من التقييم إلى التصريح.",
    lede:
      "نُعِدّ الدراسات البيئية، ونصمم وندير المشاريع الهندسية للمصانع والمنشآت القائمة والجديدة — ونبقى مع المشروع حتى صدور الموافقات.",
    ctaMain: "اطلب استشارة",
    ctaAlt: "تصفّح الخدمات",
    strata: [
      {
        k: "المبنى والأنظمة",
        d: "تكييف وتبريد، إصحاح، أنظمة ميكانيكية، مكافحة الآفات",
      },
      {
        k: "سطح الموقع",
        d: "التصاميم الهندسية، الإشراف، إدارة المشاريع والمقاولات",
      },
      {
        k: "التربة والمياه الجوفية",
        d: "تقييم الأثر البيئي، إدارة النفايات، المياه العادمة",
      },
    ],
    svcLabel: "الخدمات",
    svcTitle: "خمس غايات مسجّلة رسمياً",
    svcNote:
      "غاياتنا مرخّصة في السجل التجاري الأردني، ونعمل ضمنها حصراً. كل خدمة أدناه موسومة بالنطاق الذي تعمل فيه.",
    zoneLabel: "النطاق",
    services: [
      {
        zone: 2,
        t: "الدراسات والاستشارات البيئية",
        d: "تقييم الأثر البيئي (EIA)، التدقيق البيئي، خطط الإدارة البيئية، برامج الرصد، وملفات الامتثال للجهات الرقابية.",
        tags: ["تقييم الأثر البيئي", "التدقيق البيئي", "خطط الإدارة", "الرصد الدوري"],
      },
      {
        zone: 1,
        t: "الاستشارات والتصاميم الهندسية",
        d: "التصميم التفصيلي، المخططات التنفيذية، جداول الكميات والمواصفات، ومراجعة تصاميم الغير.",
        tags: ["التصميم التفصيلي", "جداول الكميات", "المواصفات", "مراجعة التصاميم"],
      },
      {
        zone: 1,
        t: "إدارة المشاريع الهندسية",
        d: "إدارة العقود والجداول الزمنية، ضبط الكلفة والجودة، الإشراف الموقعي، وتقارير التقدّم للمالك.",
        tags: ["إدارة العقود", "الجدولة", "الإشراف", "ضبط الكلفة"],
      },
      {
        zone: 0,
        t: "الأنظمة الميكانيكية والإصحاح",
        d: "هندسة تكييف الهواء والتبريد، أنظمة الإصحاح والتهوية، ومكافحة الآفات للمنشآت الصناعية والصحية.",
        tags: ["تكييف وتبريد", "التهوية", "الإصحاح", "مكافحة الآفات"],
      },
      {
        zone: 0,
        t: "دراسات المصانع والمنشآت القائمة",
        d: "دراسات الجدوى الفنية، تقييم الأداء التشغيلي، إعادة التأهيل، ورفع كفاءة الطاقة للمنشآت العاملة.",
        tags: ["الجدوى الفنية", "تقييم الأداء", "إعادة التأهيل", "كفاءة الطاقة"],
      },
    ],
    procLabel: "منهجية العمل",
    procTitle: "خمس مراحل، بترتيب ثابت",
    process: [
      { t: "الزيارة الميدانية وتحديد النطاق", d: "معاينة الموقع، حصر المتطلبات النظامية، والاتفاق على حدود الدراسة." },
      { t: "القياس وجمع البيانات", d: "قياسات ميدانية موثّقة، عيّنات مخبرية، ومراجعة السجلات التشغيلية." },
      { t: "التحليل والتصميم", d: "تحليل النتائج مقابل المعايير المعتمدة، ووضع الحلول الهندسية والبدائل." },
      { t: "التقرير والتقديم", d: "إعداد التقرير الفني الكامل وتقديمه للجهات ذات العلاقة باسم المالك." },
      { t: "المتابعة حتى الموافقة", d: "الردّ على الملاحظات، تعديل ما يلزم، والمتابعة حتى صدور التصريح." },
    ],
    secLabel: "القطاعات",
    secTitle: "أين نعمل",
    sectors: [
      "المصانع والصناعات التحويلية",
      "المنشآت الصحية والمستشفيات",
      "الفنادق والضيافة",
      "المشاريع السكنية والتجارية",
      "محطات المعالجة والمياه",
      "الطاقة المتجددة",
      "المناطق التنموية والصناعية",
      "المستودعات وسلاسل التبريد",
    ],
    aboutLabel: "من نحن",
    aboutTitle: "شركة واحدة، على جانبَي الملف",
    aboutBody:
      "معظم المشاريع تُوزَّع بين مكتب بيئي ومكتب هندسي، فتضيع المسؤولية في المنتصف. المدى المتقدم شركة ذات مسؤولية محدودة مسجّلة في الأردن تجمع الغايتين في جهة واحدة: نُعدّ الدراسة البيئية، ونصمم الحل الهندسي الذي تتطلبه، وندير تنفيذه، ونتابع الملف حتى الموافقة النهائية. جهة واحدة مسؤولة، ومرجع واحد للمالك.",
    factsTitle: "بطاقة الشركة",
    facts: [
      ["الكيان القانوني", "شركة ذات مسؤولية محدودة"],
      ["جهة التسجيل", "دائرة مراقبة الشركات — الأردن"],
      ["المقر", "عمّان، الأردن"],
      ["الغايات المسجّلة", "خمس غايات بيئية وهندسية"],
    ],
    ctaLabel: "تواصل",
    ctaTitle: "أرسل تفاصيل مشروعك، ونعود إليك بنطاق عمل واضح.",
    contactPerson: "بشير احمد",
    contactRole: "الشريك المدير · جهة الاتصال",
    lPhone: "الهاتف",
    lEmail: "البريد الإلكتروني",
    lSite: "الموقع الإلكتروني",
    lCity: "المقر",
    city: "عمّان، الأردن",
    formNote: "أو راسلنا مباشرة",
    fName: "الاسم",
    fOrg: "الجهة",
    fMsg: "وصف مختصر للمشروع",
    fSend: "إرسال الطلب",
    fSent: "تم فتح بريدك الإلكتروني",
    rights: "جميع الحقوق محفوظة",
    langBtn: "EN",
  },
  en: {
    dir: "ltr",
    nav: ["Services", "Method", "Sectors", "About", "Contact"],
    brand: "Al-Mada Al-Mutaqaddim",
    brandSub: "Environmental & Engineering Consulting",
    eyebrow: "Limited Liability Company · Amman, Jordan",
    h1a: "Environmental and engineering consulting,",
    h1b: "from assessment to approval.",
    lede:
      "We prepare environmental studies, design and manage engineering works for new and operating facilities — and stay with the file until the permits are issued.",
    ctaMain: "Request a consultation",
    ctaAlt: "See the services",
    strata: [
      {
        k: "Building & systems",
        d: "HVAC and refrigeration, sanitation, mechanical systems, pest control",
      },
      {
        k: "Site surface",
        d: "Engineering design, site supervision, project and contract management",
      },
      {
        k: "Soil & groundwater",
        d: "Environmental impact assessment, waste management, wastewater",
      },
    ],
    svcLabel: "Services",
    svcTitle: "Five officially registered activities",
    svcNote:
      "Our activities are licensed in the Jordanian commercial register and we work strictly within them. Each service below is tagged with the zone it works in.",
    zoneLabel: "Zone",
    services: [
      {
        zone: 2,
        t: "Environmental studies & consulting",
        d: "Environmental impact assessment (EIA), environmental audits, management plans, monitoring programmes, and regulatory compliance files.",
        tags: ["EIA", "Environmental audit", "Management plans", "Monitoring"],
      },
      {
        zone: 1,
        t: "Engineering consulting & design",
        d: "Detailed design, construction drawings, bills of quantities and specifications, and third-party design review.",
        tags: ["Detailed design", "BoQ", "Specifications", "Design review"],
      },
      {
        zone: 1,
        t: "Engineering project management",
        d: "Contract and schedule management, cost and quality control, site supervision, and owner progress reporting.",
        tags: ["Contracts", "Scheduling", "Supervision", "Cost control"],
      },
      {
        zone: 0,
        t: "Mechanical & sanitation systems",
        d: "HVAC and refrigeration engineering, sanitation and ventilation systems, and pest control for industrial and healthcare facilities.",
        tags: ["HVAC", "Refrigeration", "Ventilation", "Pest control"],
      },
      {
        zone: 0,
        t: "Studies for operating facilities",
        d: "Technical feasibility, operational performance assessment, rehabilitation, and energy efficiency upgrades for running plants.",
        tags: ["Feasibility", "Performance", "Rehabilitation", "Energy efficiency"],
      },
    ],
    procLabel: "Method",
    procTitle: "Five stages, in a fixed order",
    process: [
      { t: "Site visit & scoping", d: "Walk the site, map the regulatory requirements, and agree the boundaries of the study." },
      { t: "Measurement & data", d: "Documented field measurements, laboratory sampling, and review of operating records." },
      { t: "Analysis & design", d: "Results tested against the applicable standards, then engineering solutions and alternatives." },
      { t: "Report & submission", d: "A complete technical report, filed with the relevant authorities on the owner's behalf." },
      { t: "Follow-through to approval", d: "Responding to comments, revising what's needed, and tracking the file until the permit is issued." },
    ],
    secLabel: "Sectors",
    secTitle: "Where we work",
    sectors: [
      "Factories & manufacturing",
      "Healthcare facilities & hospitals",
      "Hotels & hospitality",
      "Residential & commercial developments",
      "Treatment & water plants",
      "Renewable energy",
      "Development & industrial zones",
      "Warehousing & cold chain",
    ],
    aboutLabel: "About",
    aboutTitle: "One firm on both sides of the file",
    aboutBody:
      "Most projects are split between an environmental office and an engineering office, and responsibility gets lost in the gap. Al-Mada Al-Mutaqaddim is a Jordanian limited liability company licensed for both: we prepare the environmental study, design the engineering solution it calls for, manage the execution, and carry the file through to final approval. One accountable party, one point of contact for the owner.",
    factsTitle: "Company record",
    facts: [
      ["Legal form", "Limited Liability Company"],
      ["Registered with", "Companies Control Dept. — Jordan"],
      ["Head office", "Amman, Jordan"],
      ["Licensed activities", "Five environmental & engineering activities"],
    ],
    ctaLabel: "Contact",
    ctaTitle: "Send us the project details and we'll come back with a clear scope of work.",
    contactPerson: "Basheer Ahmad",
    contactRole: "Managing Partner · Point of contact",
    lPhone: "Phone",
    lEmail: "Email",
    lSite: "Website",
    lCity: "Office",
    city: "Amman, Jordan",
    formNote: "Or write to us directly",
    fName: "Name",
    fOrg: "Organisation",
    fMsg: "Brief description of the project",
    fSend: "Send request",
    fSent: "Your email client should now be open",
    rights: "All rights reserved",
    langBtn: "ع",
  },
};

const PHONE = "+962 79 002 7774";
const PHONE_RAW = "+962790027774";
const EMAIL = "info@almada-consult.com";
const SITE = "almada-almutaqaddim.com";

/* one colour per zone, ordered building → surface → subsurface */
const ZONE_COLOURS = ["var(--sprout)", "var(--leaf)", "var(--petrol)"];
/* the sector strip just cycles the palette; it carries no zone meaning */
const SECTOR_COLOURS = ["var(--ochre)", ...ZONE_COLOURS];

/* ---------- brand mark ----------
   public/mark.png is the hexagon on its own. The company name is set in live
   text beside it so it stays translatable, so the mark carries no wordmark. */
function Mark({ size = 40 }) {
  return <img className="am-mark" src="/mark.png" alt="" width={size} height={size} />;
}

/* ---------- scroll reveal ---------- */
function useReveal(key) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll("[data-rv]"));
    if (reduce) {
      els.forEach((e) => e.classList.add("rv-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("rv-in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [key]);
}

/* ---------- depth-of-scroll indicator, drawn as a survey rail ---------- */
function useScrollDepth(ref) {
  useEffect(() => {
    let raf = 0;
    const paint = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    paint();
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
}

/* ---------- ambient background for the hero ---------- */
function HeroField() {
  return (
    <div className="am-fx" aria-hidden="true">
      <span className="am-fx-grid" />
      <span className="am-fx-bloom am-fx-b1" />
      <span className="am-fx-bloom am-fx-b2" />
      <span className="am-fx-bloom am-fx-b3" />
      <svg className="am-fx-lines" viewBox="0 0 1400 700" preserveAspectRatio="none">
        {[0, 1, 2, 3, 4, 5, 6].map((n) => (
          <path
            key={n}
            d={`M-60 ${86 + n * 92} C 300 ${34 + n * 92}, 820 ${168 + n * 92}, 1460 ${64 + n * 92}`}
          />
        ))}
      </svg>
    </div>
  );
}

/* ---------- the four scopes we work across, from air down to groundwater ---------- */
function ZoneStrip({ t }) {
  return (
    <ul className="am-zones">
      {t.strata.map((s, i) => (
        <li key={i} className={"am-zone-i am-lg-" + i} style={{ animationDelay: 520 + i * 90 + "ms" }}>
          <span className="am-zone-k">
            <i aria-hidden="true" />
            {s.k}
          </span>
          <span className="am-zone-d">{s.d}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AlMadaSite() {
  const [lang, setLang] = useState("ar");
  const t = T[lang];
  const rtl = lang === "ar";
  const [form, setForm] = useState({ n: "", o: "", m: "" });
  const [sent, setSent] = useState(false);
  const railRef = useRef(null);
  useReveal(lang);
  useScrollDepth(railRef);

  const submit = () => {
    const subject = encodeURIComponent(
      (rtl ? "طلب استشارة — " : "Consultation request — ") + (form.o || form.n || "")
    );
    const body = encodeURIComponent(`${form.n}\n${form.o}\n\n${form.m}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const ids = ["services", "method", "sectors", "about", "contact"];

  return (
    <div dir={t.dir} lang={lang} className={"am-root " + (rtl ? "am-rtl" : "am-ltr")}>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;500;700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&family=Archivo:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

.am-root{
  /* the palette is a depth scale: sky above, groundwater below */
  --ochre:#C79A45; --sprout:#6FA84F; --leaf:#2E8A66; --petrol:#0F5A66; --abyss:#07272E;
  --paper:#F1F4EF; --panel:#FFFFFF; --ink:#0A1A1C; --mute:#55696A; --line:#DCE4DC;
  --display:'Archivo',system-ui,sans-serif;
  --body:'IBM Plex Sans Arabic','IBM Plex Sans',system-ui,sans-serif;
  --data:'IBM Plex Mono',ui-monospace,monospace;
  --gut:clamp(20px,4vw,28px);
  background:var(--paper); color:var(--ink); font-family:var(--body);
  -webkit-font-smoothing:antialiased; line-height:1.65;
}
.am-rtl{--display:'Noto Kufi Arabic','Archivo',system-ui,sans-serif;}
.am-root *,.am-root *::before,.am-root *::after{box-sizing:border-box;}
.am-root h1,.am-root h2,.am-root h3{font-family:var(--display); font-weight:700; line-height:1.2; margin:0; letter-spacing:-.015em;}
.am-rtl h1,.am-rtl h2,.am-rtl h3{letter-spacing:0; line-height:1.45; font-weight:700;}
.am-root p{margin:0;}
.am-root button{font-family:inherit; cursor:pointer;}
.am-root a{color:inherit; text-decoration:none;}
.am-wrap{max-width:1180px; margin:0 auto; padding:0 var(--gut);}

[data-rv]{opacity:0; transform:translateY(20px); transition:opacity .8s ease, transform .8s cubic-bezier(.2,.7,.3,1);}
[data-rv].rv-in{opacity:1; transform:none;}

/* ---- header ---- */
.am-hdr{position:sticky; top:0; z-index:50; background:rgba(241,244,239,.82);
  backdrop-filter:blur(14px) saturate(1.2); border-bottom:1px solid var(--line);}
.am-hdr-in{display:flex; align-items:center; gap:20px; height:76px;}
.am-mark{display:block; flex:none; object-fit:contain;
  transition:transform .32s cubic-bezier(.2,.7,.3,1);}
.am-logo{display:flex; align-items:center; gap:13px;}
.am-logo:hover .am-mark{transform:scale(1.07);}
.am-logo-txt{display:flex; flex-direction:column; line-height:1.25; gap:1px;}
.am-logo-txt b{font-family:var(--display); font-size:18.5px; font-weight:700; color:var(--petrol);}
.am-logo-txt span{font-size:11px; color:var(--leaf); letter-spacing:.02em;}
.am-nav{display:flex; gap:4px; margin-inline-start:auto; font-size:14px; color:var(--mute);}
.am-nav a{position:relative; padding:8px 12px; border-radius:3px; transition:color .2s, background .2s;}
.am-nav a::after{content:""; position:absolute; inset-inline:12px; bottom:3px; height:1.5px;
  background:var(--sprout); transform:scaleX(0); transform-origin:center; transition:transform .28s cubic-bezier(.2,.7,.3,1);}
.am-nav a:hover{color:var(--petrol);}
.am-nav a:hover::after{transform:scaleX(1);}
.am-lang{border:1px solid var(--line); background:var(--panel); color:var(--petrol);
  border-radius:999px; padding:7px 16px; font-family:var(--data); font-size:12px; font-weight:500; transition:.2s;}
.am-lang:hover{background:var(--petrol); color:#fff; border-color:var(--petrol);}
.am-rail{position:absolute; inset-inline-start:0; bottom:-1px; height:2px; width:100%;
  background:linear-gradient(90deg,var(--ochre),var(--sprout),var(--leaf),var(--petrol));
  transform:scaleX(0); transform-origin:left;}
.am-rtl .am-rail{transform-origin:right;
  background:linear-gradient(270deg,var(--ochre),var(--sprout),var(--leaf),var(--petrol));}
.am-mnav{display:none;}

/* ---- hero ---- */
.am-hero{position:relative; isolation:isolate; overflow:hidden;
  padding:clamp(30px,4.5vw,56px) 0 clamp(56px,8vw,96px);
  background:linear-gradient(180deg,#F8FAF6 0%,var(--paper) 52%);}
.am-hero-in{position:relative;}
.am-hero-in .am-eyebrow,.am-hero-in .am-h1,.am-hero-in .am-lede,.am-hero-in .am-btns{
  animation:amup .95s cubic-bezier(.2,.7,.3,1) backwards;}
.am-hero-in .am-eyebrow{animation-delay:.04s;}
.am-hero-in .am-h1{animation-delay:.12s;}
.am-hero-in .am-lede{animation-delay:.3s;}
.am-hero-in .am-btns{animation-delay:.4s;}
@keyframes amup{from{opacity:0; transform:translateY(22px);} to{opacity:1; transform:none;}}
.am-eyebrow{display:inline-flex; align-items:center; gap:9px; font-family:var(--data);
  font-size:11.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--petrol); font-weight:500;}
.am-eyebrow::before{content:""; width:22px; height:1.5px; background:var(--ochre); flex:none;}
.am-rtl .am-eyebrow{font-family:var(--body); letter-spacing:0; text-transform:none; font-size:13px; font-weight:500;}
.am-h1{font-size:clamp(33px,5.9vw,70px); margin-top:22px; max-width:18ch;}
.am-h1 em{font-style:normal; color:var(--petrol); display:block;}
.am-baseline{height:2px; width:min(420px,72%); margin-top:26px; transform-origin:left;
  background:linear-gradient(90deg,var(--ochre),var(--leaf) 55%,transparent);
  animation:amdraw 1.1s .35s cubic-bezier(.2,.7,.3,1) backwards;}
.am-rtl .am-baseline{transform-origin:right;
  background:linear-gradient(270deg,var(--ochre),var(--leaf) 55%,transparent);}
@keyframes amdraw{from{transform:scaleX(0);} to{transform:scaleX(1);}}
.am-lede{margin-top:26px; max-width:58ch; font-size:17.5px; color:var(--mute);}
.am-btns{display:flex; gap:12px; margin-top:34px; flex-wrap:wrap;}
.am-btn{position:relative; border:none; border-radius:3px; padding:15px 30px; font-size:15px; font-weight:600;
  background:var(--petrol); color:#fff; transition:.24s cubic-bezier(.2,.7,.3,1); display:inline-block;
  box-shadow:0 1px 0 rgba(7,39,46,.2);}
.am-btn:hover{background:var(--abyss); transform:translateY(-2px); box-shadow:0 12px 26px -14px rgba(7,39,46,.75);}
.am-btn-2{background:transparent; color:var(--petrol); border:1px solid var(--line); box-shadow:none;}
.am-btn-2:hover{background:var(--panel); border-color:var(--petrol); box-shadow:0 10px 22px -16px rgba(7,39,46,.6);}

/* ---- hero background: grid, drifting isopleths, slow colour blooms ---- */
.am-fx{position:absolute; inset:0; z-index:-1; overflow:hidden; pointer-events:none;}
.am-fx-grid{position:absolute; inset:0;
  background-image:linear-gradient(var(--line) 1px,transparent 1px),
                   linear-gradient(90deg,var(--line) 1px,transparent 1px);
  background-size:68px 68px; opacity:.55;
  -webkit-mask-image:radial-gradient(ellipse 88% 72% at 50% 34%,#000 18%,transparent 76%);
  mask-image:radial-gradient(ellipse 88% 72% at 50% 34%,#000 18%,transparent 76%);}
.am-fx-bloom{position:absolute; border-radius:50%; filter:blur(74px); will-change:transform;}
.am-fx-b1{width:min(680px,62vw); aspect-ratio:1.25;
  background:radial-gradient(circle,rgba(46,138,102,.34),transparent 68%);
  top:-16%; inset-inline-start:-8%; animation:amdrift1 27s ease-in-out infinite alternate;}
.am-fx-b2{width:min(600px,56vw); aspect-ratio:1.3;
  background:radial-gradient(circle,rgba(199,154,69,.3),transparent 68%);
  top:4%; inset-inline-end:-10%; animation:amdrift2 34s ease-in-out infinite alternate;}
.am-fx-b3{width:min(760px,72vw); aspect-ratio:1.6;
  background:radial-gradient(circle,rgba(15,90,102,.24),transparent 70%);
  bottom:-30%; inset-inline-start:22%; animation:amdrift3 41s ease-in-out infinite alternate;}
@keyframes amdrift1{to{transform:translate(7%,9%) scale(1.14);}}
@keyframes amdrift2{to{transform:translate(-9%,7%) scale(1.1);}}
@keyframes amdrift3{to{transform:translate(5%,-8%) scale(1.16);}}
.am-fx-lines{position:absolute; inset:-6% -8%; width:116%; height:112%;}
.am-fx-lines path{fill:none; stroke:var(--petrol); stroke-width:1; opacity:.14;
  animation:amsway 30s ease-in-out infinite alternate;}
.am-fx-lines path:nth-child(2n){animation-duration:38s; opacity:.1;}
.am-fx-lines path:nth-child(3n){animation-duration:46s; opacity:.17;}
@keyframes amsway{to{transform:translate3d(1.6%,12px,0);}}

/* ---- the four scopes, air down to groundwater ---- */
.am-lg-0{--lc:var(--sprout);} .am-lg-1{--lc:var(--leaf);} .am-lg-2{--lc:var(--petrol);}
.am-zones{list-style:none; margin:clamp(46px,7vw,76px) 0 0; padding:0;
  display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:1px;
  background:var(--line); border-block:1px solid var(--line);}
.am-zone-i{position:relative; background:var(--paper); display:flex; flex-direction:column; gap:9px;
  padding:22px 24px 22px 0; opacity:0; animation:amfade .9s ease forwards;}
.am-rtl .am-zone-i{padding:22px 0 22px 24px;}
.am-zone-k{display:flex; align-items:center; gap:10px; font-size:15px; font-weight:600;
  color:var(--abyss); line-height:1.4;}
.am-zone-k i{width:7px; height:7px; border-radius:50%; background:var(--lc); flex:none;}
.am-zone-d{font-size:12.5px; color:var(--mute); line-height:1.65;}
@keyframes amfade{to{opacity:1;}}

/* ---- generic section ---- */
.am-band{padding:clamp(64px,9vw,104px) 0; border-top:1px solid var(--line);}
.am-band-dark{background:var(--abyss); color:#E4EDE9; border-top:none;}
.am-band-dark .am-eyebrow{color:var(--sprout);}
.am-band-dark .am-eyebrow::before{background:var(--sprout);}
.am-band-dark h2{color:#fff;}
.am-h2{font-size:clamp(26px,3.6vw,42px); margin-top:16px; max-width:24ch;}
.am-note{margin-top:16px; max-width:62ch; font-size:14.5px; color:var(--mute);}

/* ---- services ---- */
.am-cards{margin-top:46px; display:grid; grid-template-columns:repeat(6,1fr); gap:16px;}
.am-card{grid-column:span 2; position:relative; background:var(--panel); border:1px solid var(--line);
  border-radius:4px; padding:28px clamp(20px,2.4vw,28px) 24px; overflow:hidden;
  transition:transform .3s cubic-bezier(.2,.7,.3,1), box-shadow .3s ease, border-color .3s ease;}
.am-card:nth-child(4),.am-card:nth-child(5){grid-column:span 3;}
.am-card::before{content:""; position:absolute; inset-block-start:0; inset-inline:0; height:3px;
  background:var(--zone); transition:height .3s cubic-bezier(.2,.7,.3,1);}
.am-card:hover{transform:translateY(-4px); border-color:#C8D5C9;
  box-shadow:0 26px 50px -34px rgba(7,39,46,.6);}
.am-card:hover::before{height:6px;}
.am-zone{display:inline-flex; align-items:center; gap:8px; font-size:11.5px; color:var(--mute);}
.am-zone i{width:7px; height:7px; border-radius:50%; background:var(--zone); flex:none; font-style:normal;}
.am-card-t{font-family:var(--display); font-size:clamp(18px,2vw,21px); font-weight:700;
  color:var(--abyss); margin-top:12px;}
.am-card-d{font-size:14.5px; color:var(--mute); margin-top:12px;}
.am-tags{display:flex; flex-wrap:wrap; gap:7px; margin-top:18px;}
.am-tag{font-size:11.5px; color:var(--petrol); border:1px solid var(--line);
  border-radius:999px; padding:4px 12px; background:var(--paper); transition:.2s;}
.am-card:hover .am-tag{border-color:#CBD8CB; background:#fff;}

/* ---- method ---- */
.am-track{margin-top:56px; position:relative; display:grid; grid-template-columns:repeat(5,1fr); gap:0;}
.am-track::before{content:""; position:absolute; inset-inline:0; top:0; height:1.5px;
  background:linear-gradient(90deg,var(--ochre),var(--sprout),var(--leaf),var(--petrol),rgba(15,90,102,.25));}
.am-rtl .am-track::before{background:linear-gradient(270deg,var(--ochre),var(--sprout),var(--leaf),var(--petrol),rgba(15,90,102,.25));}
.am-step{position:relative; padding:30px 22px 8px 0;}
.am-rtl .am-step{padding:30px 0 8px 22px;}
.am-step::before{content:""; position:absolute; top:-4.5px; inset-inline-start:0; width:11px; height:11px;
  border-radius:50%; background:var(--abyss); border:2px solid var(--sprout);
  transition:transform .3s cubic-bezier(.2,.7,.3,1), background .3s ease;}
.am-step:hover::before{transform:scale(1.45); background:var(--sprout);}
.am-step-n{font-family:var(--data); font-size:11.5px; font-weight:500; color:var(--sprout);
  letter-spacing:.14em; direction:ltr; display:inline-block;}
.am-step-t{font-family:var(--display); font-size:16.5px; font-weight:700; margin-top:10px; color:#fff;}
.am-step-d{font-size:13.5px; color:rgba(228,237,233,.66); margin-top:9px;}

/* ---- sectors ---- */
.am-sectors{margin-top:46px; display:grid; grid-template-columns:repeat(4,1fr); gap:12px;}
.am-sector{position:relative; background:var(--panel); border:1px solid var(--line); border-radius:4px;
  border-inline-start:3px solid var(--zone); padding:24px 22px; font-size:15px; color:var(--abyss);
  min-height:104px; display:flex; align-items:flex-end;
  transition:transform .28s cubic-bezier(.2,.7,.3,1), box-shadow .28s ease, border-color .28s ease;}
.am-sector:hover{transform:translateY(-3px); box-shadow:0 22px 40px -32px rgba(7,39,46,.65);}

/* ---- about ---- */
.am-about{display:grid; grid-template-columns:1.3fr .9fr; gap:clamp(32px,5vw,68px); margin-top:36px; align-items:start;}
.am-about p{font-size:16.5px; color:var(--mute);}
.am-facts{background:var(--panel); border:1px solid var(--line); border-radius:4px; padding:26px 26px 10px;}
.am-facts-h{display:flex; align-items:center; gap:12px; padding-bottom:18px; border-bottom:1px solid var(--line);}
.am-facts-h b{font-family:var(--display); font-size:15px; font-weight:700; color:var(--abyss);}
.am-fact{display:flex; justify-content:space-between; gap:16px; padding:15px 0;
  border-bottom:1px solid var(--line); font-size:13.5px;}
.am-fact:last-child{border-bottom:none;}
.am-fact b{font-weight:400; color:var(--mute);}
.am-fact span{color:var(--abyss); font-weight:600; text-align:end;}

/* ---- contact ---- */
.am-contact{display:grid; grid-template-columns:1fr 1fr; gap:clamp(32px,5vw,64px); margin-top:42px; align-items:start;}
.am-person{display:flex; align-items:center; gap:16px; border:1px solid rgba(228,237,233,.2);
  border-radius:4px; padding:22px 24px; margin-bottom:26px; background:rgba(255,255,255,.03);}
.am-person b{font-family:var(--display); font-size:19px; color:#fff; display:block;}
.am-person span{font-size:13px; color:var(--sprout);}
.am-clist{display:flex; flex-direction:column;}
.am-cl{display:flex; gap:16px; padding:15px 0; border-bottom:1px solid rgba(228,237,233,.14); font-size:14.5px;}
.am-cl b{font-weight:400; color:rgba(228,237,233,.5); min-width:112px;}
.am-cl a,.am-cl span{color:#fff; transition:color .2s;}
.am-cl a:hover{color:var(--sprout);}
.am-ltrnum{direction:ltr; display:inline-block; unicode-bidi:isolate; font-family:var(--data); font-size:13.5px;}
.am-form{display:flex; flex-direction:column; gap:12px;}
.am-form input,.am-form textarea{font-family:var(--body); font-size:15px; background:rgba(255,255,255,.04);
  border:1px solid rgba(228,237,233,.2); color:#fff; padding:15px 16px; border-radius:3px; outline:none;
  transition:border-color .2s, box-shadow .2s, background .2s;}
.am-form input::placeholder,.am-form textarea::placeholder{color:rgba(228,237,233,.42);}
.am-form input:focus,.am-form textarea:focus{border-color:var(--sprout); background:rgba(255,255,255,.07);
  box-shadow:0 0 0 3px rgba(111,168,79,.16);}
.am-form textarea{min-height:124px; resize:vertical;}
.am-send{background:var(--sprout); color:#062227; border:none; border-radius:3px;
  padding:15px 30px; font-weight:700; font-size:15px; align-self:flex-start; transition:.22s cubic-bezier(.2,.7,.3,1);}
.am-send:hover{background:#84BE63; transform:translateY(-2px);}
.am-sent{font-size:13px; color:var(--sprout);}

/* ---- footer ---- */
.am-foot{background:var(--abyss); border-top:1px solid rgba(228,237,233,.14);
  padding:28px 0; font-size:12.5px; color:rgba(228,237,233,.58);}
.am-foot-in{display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap; align-items:center;}

.am-root :focus-visible{outline:2px solid var(--sprout); outline-offset:3px;}

@media (max-width:980px){
  .am-cards{grid-template-columns:1fr 1fr;}
  .am-cards .am-card{grid-column:auto;}
  .am-sectors{grid-template-columns:1fr 1fr;}
}
@media (max-width:900px){
  .am-nav{display:none;}
  .am-lang{margin-inline-start:auto;}
  .am-mnav{display:flex; gap:8px; overflow-x:auto; padding:11px var(--gut); background:rgba(241,244,239,.94);
    backdrop-filter:blur(14px); border-bottom:1px solid var(--line); position:sticky; top:76px; z-index:49;
    scrollbar-width:none;}
  .am-mnav::-webkit-scrollbar{display:none;}
  .am-mnav a{white-space:nowrap; font-size:13px; border:1px solid var(--line); border-radius:999px;
    padding:6px 15px; background:var(--panel); color:var(--petrol);}
  .am-track{grid-template-columns:1fr; gap:0;}
  .am-track::before{inset-inline:auto; inset-inline-start:5px; top:0; width:1.5px; height:100%;
    background:linear-gradient(180deg,var(--ochre),var(--sprout),var(--leaf),var(--petrol));}
  .am-step{padding:8px 0 28px 0; padding-inline-start:28px;}
  .am-rtl .am-step{padding:8px 0 28px 0; padding-inline-start:28px;}
  .am-step::before{top:12px;}
  .am-about,.am-contact{grid-template-columns:1fr;}
}
@media (max-width:620px){
  .am-cards,.am-sectors{grid-template-columns:1fr;}
  .am-logo-txt span{display:none;}
  .am-h1{max-width:none;}
}
@media (prefers-reduced-motion:reduce){
  .am-root *,.am-root *::before,.am-root *::after{
    animation-duration:.001ms !important; animation-iteration-count:1 !important;
    transition-duration:.001ms !important;}
  .am-zone-i{opacity:1;}
}
      `}</style>

      {/* ============ HEADER ============ */}
      <header className="am-hdr">
        <div className="am-wrap am-hdr-in">
          <a href="#top" className="am-logo">
            <Mark size={46} />
            <span className="am-logo-txt">
              <b>{t.brand}</b>
              <span>{t.brandSub}</span>
            </span>
          </a>
          <nav className="am-nav">
            {t.nav.map((n, i) => (
              <a key={i} href={"#" + ids[i]}>
                {n}
              </a>
            ))}
          </nav>
          <button className="am-lang" onClick={() => setLang(rtl ? "en" : "ar")}>
            {t.langBtn}
          </button>
        </div>
        <span className="am-rail" ref={railRef} aria-hidden="true" />
      </header>

      <nav className="am-mnav" aria-label={t.nav.join(", ")}>
        {t.nav.map((n, i) => (
          <a key={i} href={"#" + ids[i]}>
            {n}
          </a>
        ))}
      </nav>

      {/* ============ HERO ============ */}
      <main id="top">
        <section className="am-hero">
          <HeroField />
          <div className="am-wrap am-hero-in">
            <span className="am-eyebrow">{t.eyebrow}</span>
            <h1 className="am-h1">
              {t.h1a}
              <em>{t.h1b}</em>
            </h1>
            <div className="am-baseline" />
            <p className="am-lede">{t.lede}</p>
            <div className="am-btns">
              <a className="am-btn" href="#contact">
                {t.ctaMain}
              </a>
              <a className="am-btn am-btn-2" href="#services">
                {t.ctaAlt}
              </a>
            </div>
            <ZoneStrip t={t} />
          </div>
        </section>

        {/* ============ SERVICES ============ */}
        <section id="services" className="am-band">
          <div className="am-wrap">
            <span className="am-eyebrow">{t.svcLabel}</span>
            <h2 className="am-h2">{t.svcTitle}</h2>
            <p className="am-note">{t.svcNote}</p>
            <div className="am-cards">
              {t.services.map((s, i) => {
                /* a service names the zone it works in; if the copy for that zone
                   is missing in this language, drop the tag rather than the page */
                const zone = t.strata[s.zone];
                return (
                <article
                  className="am-card"
                  key={s.t}
                  data-rv
                  style={{
                    transitionDelay: i * 70 + "ms",
                    "--zone": ZONE_COLOURS[s.zone] || "var(--line)",
                  }}
                >
                  {zone && (
                    <span className="am-zone">
                      <i />
                      {zone.k}
                    </span>
                  )}
                  <h3 className="am-card-t">{s.t}</h3>
                  <p className="am-card-d">{s.d}</p>
                  <div className="am-tags">
                    {s.tags.map((g) => (
                      <span className="am-tag" key={g}>
                        {g}
                      </span>
                    ))}
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ METHOD ============ */}
        <section id="method" className="am-band am-band-dark">
          <div className="am-wrap">
            <span className="am-eyebrow">{t.procLabel}</span>
            <h2 className="am-h2">{t.procTitle}</h2>
            <div className="am-track">
              {t.process.map((p, i) => (
                <div className="am-step" key={i} data-rv style={{ transitionDelay: i * 80 + "ms" }}>
                  <span className="am-step-n">{"0" + (i + 1)}</span>
                  <div className="am-step-t">{p.t}</div>
                  <div className="am-step-d">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SECTORS ============ */}
        <section id="sectors" className="am-band">
          <div className="am-wrap">
            <span className="am-eyebrow">{t.secLabel}</span>
            <h2 className="am-h2">{t.secTitle}</h2>
            <div className="am-sectors">
              {t.sectors.map((s, i) => (
                <div
                  className="am-sector"
                  key={i}
                  data-rv
                  style={{
                    transitionDelay: i * 45 + "ms",
                    "--zone": SECTOR_COLOURS[i % SECTOR_COLOURS.length],
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className="am-band">
          <div className="am-wrap">
            <span className="am-eyebrow">{t.aboutLabel}</span>
            <div className="am-about">
              <div data-rv>
                <h2 className="am-h2">{t.aboutTitle}</h2>
                <p style={{ marginTop: 22 }}>{t.aboutBody}</p>
              </div>
              <div className="am-facts" data-rv>
                <div className="am-facts-h">
                  <Mark size={34} />
                  <b>{t.factsTitle}</b>
                </div>
                {t.facts.map(([k, v], i) => (
                  <div className="am-fact" key={i}>
                    <b>{k}</b>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="am-band am-band-dark">
          <div className="am-wrap">
            <span className="am-eyebrow">{t.ctaLabel}</span>
            <h2 className="am-h2">{t.ctaTitle}</h2>
            <div className="am-contact">
              <div>
                <div className="am-person">
                  <Mark size={42} />
                  <span>
                    <b>{t.contactPerson}</b>
                    <span>{t.contactRole}</span>
                  </span>
                </div>
                <div className="am-clist">
                  <div className="am-cl">
                    <b>{t.lPhone}</b>
                    <a className="am-ltrnum" href={"tel:" + PHONE_RAW}>
                      {PHONE}
                    </a>
                  </div>
                  <div className="am-cl">
                    <b>{t.lEmail}</b>
                    <a className="am-ltrnum" href={"mailto:" + EMAIL}>
                      {EMAIL}
                    </a>
                  </div>
                  <div className="am-cl">
                    <b>{t.lSite}</b>
                    <a className="am-ltrnum" href={"https://" + SITE}>
                      {SITE}
                    </a>
                  </div>
                  <div className="am-cl">
                    <b>{t.lCity}</b>
                    <span>{t.city}</span>
                  </div>
                </div>
              </div>
              <div>
                <p style={{ fontSize: 13, color: "rgba(228,237,233,.6)", marginBottom: 14 }}>{t.formNote}</p>
                <div className="am-form">
                  <input
                    placeholder={t.fName}
                    value={form.n}
                    onChange={(e) => setForm({ ...form, n: e.target.value })}
                  />
                  <input
                    placeholder={t.fOrg}
                    value={form.o}
                    onChange={(e) => setForm({ ...form, o: e.target.value })}
                  />
                  <textarea
                    placeholder={t.fMsg}
                    value={form.m}
                    onChange={(e) => setForm({ ...form, m: e.target.value })}
                  />
                  <button className="am-send" onClick={submit}>
                    {t.fSend}
                  </button>
                  {sent && <span className="am-sent">{t.fSent}</span>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="am-foot">
        <div className="am-wrap am-foot-in">
          <span>
            © {new Date().getFullYear()} {t.brand} — {t.brandSub}. {t.rights}.
          </span>
          <span className="am-ltrnum">{SITE}</span>
        </div>
      </footer>
    </div>
  );
}
