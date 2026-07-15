<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Revisacar — Oficina Mecânica em Campinas | Especialista Honda</title>
<meta name="description" content="Oficina mecânica no Jardim Novo Campos Elíseos, Campinas. Revisão completa, mecânica geral, elétrica e ar-condicionado. Especialista em Honda, atendemos todas as marcas. Orçamento pelo WhatsApp.">
<meta name="keywords" content="oficina mecânica Campinas, revisão Honda Campinas, mecânica automotiva Campos Elíseos, ar-condicionado automotivo Campinas">
<meta property="og:title" content="Revisacar — Oficina Mecânica em Campinas">
<meta property="og:description" content="Mais de 10 anos cuidando do seu veículo. Especialista em Honda, atendemos todas as marcas. Agende pelo WhatsApp.">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta name="theme-color" content="#15181C">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=Barlow+Condensed:wght@500;600&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M16 2.5 27 8.75v14.5L16 29.5 5 23.25V8.75z' fill='%2315181C'/><path d='M10.5 16.2l3.8 3.8 7.2-8.4' stroke='%23D62828' stroke-width='2.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Revisacar",
  "description": "Oficina mecânica especializada em Honda, com atendimento a todas as marcas. Revisão completa, mecânica geral, elétrica automotiva e ar-condicionado.",
  "url": "https://revisacar.com.br",
  "telephone": "+5519993444618",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Domingos da Costa Maciel, 137",
    "addressLocality": "Campinas",
    "addressRegion": "SP",
    "postalCode": "13060-422",
    "addressCountry": "BR"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "12:00" }
  ],
  "areaServed": "Campinas e região, SP"
}
</script>

<style>
/* =====================================================================
   Revisacar — oficina mecânica, Campinas
   Registro: grafite de ferramenta, vermelho de carimbo, tipografia de placa
   ===================================================================== */

:root{
  --graphite-900:#15181C;
  --graphite-800:#1E232A;
  --graphite-700:#2C333C;
  --paper:#FFFFFF;
  --paper-alt:#F3F5F7;
  --ink:#1A1F26;
  --ink-soft:#5C6773;
  --ink-faint:#8A939E;
  --red:#D62828;
  --red-dark:#B01F1F;
  --steel:#7C8B99;
  --line:#E2E6EA;
  --line-soft:#EFF2F5;

  --display:"Archivo",system-ui,sans-serif;
  --body:"Barlow",system-ui,sans-serif;
  --cond:"Barlow Condensed",system-ui,sans-serif;

  --container:1180px;
  --header-h:72px;
  --ease:cubic-bezier(.22,.61,.36,1);
}

*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:calc(var(--header-h) + 12px);-webkit-text-size-adjust:100%}
body{
  font-family:var(--body);font-size:16.5px;line-height:1.6;
  color:var(--ink);background:var(--paper);
  -webkit-font-smoothing:antialiased;
}
img,svg,iframe{display:block;max-width:100%}
a{color:inherit}

.wrap{width:min(var(--container),100% - 48px);margin-inline:auto}
.wrap--narrow{max-width:800px}

h1,h2,h3{font-family:var(--display);font-weight:700;line-height:1.08;letter-spacing:-.02em;color:var(--graphite-900)}
h1{font-size:clamp(2.3rem,5vw,4rem)}
h2{font-size:clamp(1.7rem,3.2vw,2.5rem)}
h3{font-size:1.15rem;font-weight:600;letter-spacing:-.01em}

/* Rótulo condensado — placa de box de oficina */
.tag{
  font-family:var(--cond);font-size:.92rem;font-weight:600;
  letter-spacing:.18em;text-transform:uppercase;color:var(--red);
  display:flex;align-items:center;gap:12px;margin-bottom:16px;
}
.tag::before{content:"";width:22px;height:2px;background:var(--red);flex-shrink:0}
.tag--dark{color:#FF6B6B}
.tag--center{justify-content:center}

/* ---------- Botões ---------- */
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:10px;
  font-family:var(--display);font-weight:600;font-size:.95rem;
  padding:15px 28px;border:2px solid transparent;border-radius:6px;
  text-decoration:none;cursor:pointer;white-space:nowrap;
  transition:background .2s var(--ease),border-color .2s var(--ease),color .2s var(--ease),transform .2s var(--ease);
}
.btn svg{flex-shrink:0;transition:transform .2s var(--ease)}
.btn:hover{transform:translateY(-2px)}
.btn:hover svg{transform:translateX(3px)}
.btn--wa{background:#1FA855;color:#fff}

.btn--wa:hover{background:#188F47}
.btn--red{background:var(--red);color:#fff}
.btn--red:hover{background:var(--red-dark)}
.btn--dark{background:var(--graphite-900);color:#fff}
.btn--dark:hover{background:var(--graphite-700)}
.btn--outline{border-color:rgba(255,255,255,.28);color:#fff}
.btn--outline:hover{border-color:#fff;background:rgba(255,255,255,.08)}
.btn--line{border-color:var(--line);color:var(--graphite-900)}
.btn--line:hover{border-color:var(--graphite-900)}
.btn--sm{padding:10px 18px;font-size:.86rem;border-radius:5px}
.btn--full{width:100%}

/* ---------- Cabeçalho ---------- */
.header{
  position:fixed;top:0;left:0;right:0;height:var(--header-h);z-index:100;
  transition:background .3s var(--ease),box-shadow .3s var(--ease);
}
.header.is-stuck{
  background:rgba(255,255,255,.94);
  backdrop-filter:saturate(180%) blur(12px);
  -webkit-backdrop-filter:saturate(180%) blur(12px);
  box-shadow:0 1px 0 var(--line);
}
.header__in{height:100%;display:flex;align-items:center;gap:32px}

/* Logo */
.brand{display:inline-flex;align-items:center;gap:11px;text-decoration:none;flex-shrink:0}
.brand__mark{width:36px;height:36px;flex-shrink:0}
.brand__word{
  font-family:var(--display);font-size:1.32rem;font-weight:700;
  letter-spacing:-.025em;color:#fff;line-height:1;
  transition:color .3s var(--ease);
}
.brand__word b{font-weight:700;color:var(--red)}
.header.is-stuck .brand__word{color:var(--graphite-900)}
.brand__mark .hex{fill:#fff;transition:fill .3s var(--ease)}
.header.is-stuck .brand__mark .hex{fill:var(--graphite-900)}

.nav{display:flex;gap:30px;margin-left:auto}
.nav a{
  font-family:var(--display);font-size:.9rem;font-weight:500;
  color:rgba(255,255,255,.78);text-decoration:none;position:relative;padding:5px 0;
  transition:color .2s;
}
.nav a::after{content:"";position:absolute;left:0;bottom:0;width:0;height:2px;background:var(--red);transition:width .25s var(--ease)}
.nav a:hover{color:#fff}
.nav a:hover::after{width:100%}
.header.is-stuck .nav a{color:var(--ink-soft)}
.header.is-stuck .nav a:hover{color:var(--graphite-900)}

.header__cta{display:inline-flex;align-items:center;gap:8px;flex-shrink:0}
.header .btn--call{background:var(--red);color:#fff;border-color:var(--red)}
.header .btn--call:hover{background:var(--red-dark);border-color:var(--red-dark)}

.burger{display:none;flex-direction:column;gap:5px;background:none;border:0;padding:8px;cursor:pointer;margin-left:auto}
.burger span{width:22px;height:2px;background:#fff;transition:transform .3s var(--ease),opacity .2s,background .3s}
.header.is-stuck .burger span{background:var(--graphite-900)}
.burger.is-open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.burger.is-open span:nth-child(2){opacity:0}
.burger.is-open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

/* Pastilha de status — aberto / fechado */
.status{
  display:inline-flex;align-items:center;gap:7px;
  font-family:var(--cond);font-size:.85rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;
  padding:5px 11px;border-radius:99px;
  border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.8);
}
.status__dot{width:7px;height:7px;border-radius:50%;background:var(--steel);flex-shrink:0}
.status.is-open .status__dot{background:#35D07F;box-shadow:0 0 0 0 rgba(53,208,127,.6);animation:pulse 2.2s infinite}
.status.is-open{color:#8CF0BC;border-color:rgba(53,208,127,.35)}
@keyframes pulse{70%{box-shadow:0 0 0 7px rgba(53,208,127,0)}100%{box-shadow:0 0 0 0 rgba(53,208,127,0)}}

/* ---------- Abertura ---------- */
.hero{
  position:relative;overflow:hidden;
  background:var(--graphite-900);
  padding:calc(var(--header-h) + 72px) 0 96px;
  color:#fff;
}
.hero__tex{
  position:absolute;inset:0;pointer-events:none;
  background-image:repeating-linear-gradient(115deg,rgba(255,255,255,.028) 0 1px,transparent 1px 9px);
}
.hero__glow{
  position:absolute;top:-20%;right:-10%;width:70%;height:120%;pointer-events:none;
  background:radial-gradient(ellipse at center,rgba(214,40,40,.20),transparent 62%);
}
.hero__in{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:60px;align-items:center}
.hero h1{color:#fff}
.hero h1 span{color:var(--red)}
.hero__sub{font-size:1.15rem;color:rgba(255,255,255,.7);margin:22px 0 34px;max-width:46ch}
.hero__cta{display:flex;gap:12px;flex-wrap:wrap}
.hero__trust{
  display:flex;gap:0;margin-top:52px;padding-top:30px;
  border-top:1px solid rgba(255,255,255,.12);list-style:none;flex-wrap:wrap;
}
.hero__trust li{padding-right:30px;margin-right:30px;border-right:1px solid rgba(255,255,255,.12)}
.hero__trust li:last-child{border-right:0;margin-right:0;padding-right:0}
.hero__trust b{
  display:block;font-family:var(--display);font-size:1.7rem;font-weight:700;color:#fff;line-height:1;
}
.hero__trust span{
  font-family:var(--cond);font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;
  color:rgba(255,255,255,.45);display:block;margin-top:7px;
}

/* ---------- Assinatura: a ficha de revisão ---------- */
.sheet{
  position:relative;background:var(--paper);border-radius:8px;
  box-shadow:0 30px 70px rgba(0,0,0,.42);
  padding:30px 30px 26px;
}
.sheet::before{
  content:"";position:absolute;top:0;left:0;right:0;height:5px;
  background:var(--red);border-radius:8px 8px 0 0;
}
.sheet__head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;padding-bottom:18px;border-bottom:2px solid var(--graphite-900);margin-bottom:6px}
.sheet__ttl{font-family:var(--display);font-size:1.02rem;font-weight:700;color:var(--graphite-900);letter-spacing:-.01em}
.sheet__meta{font-family:var(--cond);font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint);margin-top:3px}
.sheet__os{
  font-family:var(--cond);font-size:.8rem;font-weight:600;letter-spacing:.1em;
  color:var(--ink-faint);text-align:right;white-space:nowrap;
}
.sheet__list{list-style:none}
.sheet__list li{
  display:flex;align-items:center;gap:12px;
  padding:11px 0;border-bottom:1px dashed var(--line);
  font-size:.95rem;color:var(--ink);
  opacity:0;transform:translateX(-8px);
  animation:rowIn .45s var(--ease) forwards;
}
.sheet__list li:nth-child(1){animation-delay:.5s}
.sheet__list li:nth-child(2){animation-delay:.75s}
.sheet__list li:nth-child(3){animation-delay:1s}
.sheet__list li:nth-child(4){animation-delay:1.25s}
.sheet__list li:nth-child(5){animation-delay:1.5s}
.sheet__list li:nth-child(6){animation-delay:1.75s}
@keyframes rowIn{to{opacity:1;transform:none}}
.sheet__list span{flex:1}
.sheet__ok{
  width:19px;height:19px;flex-shrink:0;
  border:2px solid var(--red);border-radius:4px;
  display:grid;place-items:center;
}
.sheet__ok svg{width:11px;height:11px}
.sheet__ok path{
  stroke-dasharray:16;stroke-dashoffset:16;
  animation:tick .3s var(--ease) forwards;
}
.sheet__list li:nth-child(1) .sheet__ok path{animation-delay:.7s}
.sheet__list li:nth-child(2) .sheet__ok path{animation-delay:.95s}
.sheet__list li:nth-child(3) .sheet__ok path{animation-delay:1.2s}
.sheet__list li:nth-child(4) .sheet__ok path{animation-delay:1.45s}
.sheet__list li:nth-child(5) .sheet__ok path{animation-delay:1.7s}
.sheet__list li:nth-child(6) .sheet__ok path{animation-delay:1.95s}
@keyframes tick{to{stroke-dashoffset:0}}
.sheet__foot{
  display:flex;justify-content:space-between;align-items:center;gap:12px;
  margin-top:18px;padding-top:16px;border-top:2px solid var(--graphite-900);
  font-family:var(--cond);font-size:.85rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-faint);
}

/* O carimbo — único gesto exagerado da página */
.stamp{
  position:absolute;right:-14px;bottom:34px;
  border:3px solid var(--red);color:var(--red);
  border-radius:6px;padding:9px 18px;
  font-family:var(--display);font-weight:700;font-size:1.28rem;letter-spacing:.06em;
  background:rgba(255,255,255,.9);
  transform:rotate(-11deg) scale(2.4);
  opacity:0;
  animation:stampIn .45s cubic-bezier(.3,1.5,.5,1) forwards 2.3s;
}
.stamp small{display:block;font-family:var(--cond);font-size:.68rem;font-weight:600;letter-spacing:.16em;opacity:.75;margin-top:1px}
@keyframes stampIn{to{opacity:1;transform:rotate(-11deg) scale(1)}}

/* ---------- Faixa de marcas ---------- */
.strip{background:var(--paper-alt);border-bottom:1px solid var(--line);padding:24px 0}
.strip__in{display:flex;align-items:center;gap:14px 36px;flex-wrap:wrap}
.strip__lead{
  font-family:var(--cond);font-size:.88rem;font-weight:600;letter-spacing:.14em;
  text-transform:uppercase;color:var(--ink-faint);white-space:nowrap;
}
.strip ul{list-style:none;display:flex;gap:12px 30px;flex-wrap:wrap}
.strip li{font-size:.95rem;font-weight:500;color:var(--ink);display:flex;align-items:center;gap:9px}
.strip li::before{content:"";width:5px;height:5px;background:var(--red);border-radius:50%;flex-shrink:0}

/* ---------- Seções ---------- */
.sec{padding:100px 0}
.sec--alt{background:var(--paper-alt);border-block:1px solid var(--line)}
.sec--dark{background:var(--graphite-900);color:#fff}
.sec--dark h2{color:#fff}
.sec__head{max-width:660px;margin-bottom:56px}
.sec__head--center{margin-inline:auto;text-align:center}
.sec__sub{color:var(--ink-soft);margin-top:16px;font-size:1.08rem}
.sec--dark .sec__sub{color:rgba(255,255,255,.62)}

/* ---------- Serviços ---------- */
.svcs{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.svc{
  background:var(--paper);border:1px solid var(--line);border-radius:10px;
  padding:32px 28px;position:relative;overflow:hidden;
  transition:border-color .25s var(--ease),transform .25s var(--ease),box-shadow .25s var(--ease);
}
.svc::after{
  content:"";position:absolute;left:0;top:0;bottom:0;width:3px;
  background:var(--red);transform:scaleY(0);transform-origin:top;
  transition:transform .3s var(--ease);
}
.svc:hover{transform:translateY(-4px);border-color:transparent;box-shadow:0 18px 40px rgba(21,24,28,.1)}
.svc:hover::after{transform:scaleY(1)}
.svc__ico{
  width:46px;height:46px;border-radius:8px;
  background:var(--graphite-900);color:#fff;
  display:grid;place-items:center;margin-bottom:20px;
}
.svc__ico svg{width:23px;height:23px}
.svc h3{margin-bottom:9px}
.svc p{font-size:.94rem;color:var(--ink-soft)}
.svc--star{background:var(--graphite-900);border-color:var(--graphite-900)}
.svc--star h3{color:#fff}
.svc--star p{color:rgba(255,255,255,.65)}
.svc--star .svc__ico{background:var(--red)}
.svc--star::after{background:#fff}
.svc__flag{
  position:absolute;top:0;right:0;
  font-family:var(--cond);font-size:.72rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;
  background:var(--red);color:#fff;padding:5px 11px;border-radius:0 9px 0 8px;
}

/* ---------- Agendamento (assinatura interativa) ---------- */
.book{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:center}
.book__panel{
  background:var(--graphite-800);border:1px solid var(--graphite-700);
  border-radius:12px;padding:34px 32px;
}
.field{margin-bottom:24px}
.field__lbl{
  display:block;font-family:var(--cond);font-size:.9rem;font-weight:600;
  letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:12px;
}
.chips{display:flex;flex-wrap:wrap;gap:9px}
.chip{
  font-family:var(--body);font-size:.9rem;font-weight:500;
  background:transparent;color:rgba(255,255,255,.75);
  border:1px solid rgba(255,255,255,.18);border-radius:99px;
  padding:9px 16px;cursor:pointer;
  transition:background .18s var(--ease),border-color .18s var(--ease),color .18s var(--ease);
}
.chip:hover{border-color:rgba(255,255,255,.45);color:#fff}
.chip.is-on{background:var(--red);border-color:var(--red);color:#fff}
.inp{
  width:100%;font-family:var(--body);font-size:.98rem;
  background:var(--graphite-900);color:#fff;
  border:1px solid rgba(255,255,255,.16);border-radius:6px;
  padding:13px 15px;
}
.inp::placeholder{color:rgba(255,255,255,.32)}
.inp:focus{outline:none;border-color:var(--red)}
.book__note{
  font-size:.84rem;color:rgba(255,255,255,.42);margin-top:14px;text-align:center;
}
.book__list{list-style:none;display:grid;gap:14px;margin-top:28px}
.book__list li{display:flex;gap:12px;align-items:flex-start;font-size:.98rem;color:rgba(255,255,255,.72)}
.book__list svg{width:19px;height:19px;flex-shrink:0;margin-top:3px;color:var(--red)}

/* ---------- Sobre ---------- */
.about{display:grid;grid-template-columns:1.05fr .95fr;gap:60px;align-items:center}
.about__list{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:14px 24px;margin-top:30px}
.about__list li{display:flex;gap:10px;align-items:flex-start;font-size:.94rem;color:var(--ink-soft)}
.about__list svg{width:17px;height:17px;flex-shrink:0;margin-top:4px;color:var(--red)}
.stats{display:grid;gap:16px}
.stat{
  background:var(--paper);border:1px solid var(--line);border-radius:10px;
  padding:26px 28px;display:flex;align-items:center;gap:20px;
}
.stat--red{background:var(--red);border-color:var(--red)}
.stat__ico{width:46px;height:46px;border-radius:8px;background:var(--paper-alt);color:var(--graphite-900);display:grid;place-items:center;flex-shrink:0}
.stat--red .stat__ico{background:rgba(255,255,255,.18);color:#fff}
.stat__ico svg{width:22px;height:22px}
.stat b{display:block;font-family:var(--display);font-size:2rem;font-weight:700;color:var(--graphite-900);line-height:1}
.stat span{font-family:var(--cond);font-size:.92rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint);display:block;margin-top:4px}
.stat--red b{color:#fff}
.stat--red span{color:rgba(255,255,255,.75)}

/* ---------- Contato ---------- */
.contact{display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:start}
.info{list-style:none;display:grid;gap:22px;margin:32px 0}
.info li{display:flex;gap:16px;align-items:flex-start}
.info__ico{
  width:42px;height:42px;border-radius:8px;flex-shrink:0;
  background:var(--paper-alt);border:1px solid var(--line);
  color:var(--red);display:grid;place-items:center;
}
.info__ico svg{width:19px;height:19px}
.info h4{font-family:var(--display);font-size:.98rem;font-weight:600;margin-bottom:3px;color:var(--graphite-900)}
.info p,.info a{font-size:.95rem;color:var(--ink-soft);text-decoration:none;display:block}
.info a:hover{color:var(--red)}
.map{
  border:1px solid var(--line);border-radius:12px;overflow:hidden;
  box-shadow:0 18px 44px rgba(21,24,28,.08);
}
.map iframe{width:100%;height:400px;border:0;filter:grayscale(.35) contrast(1.04)}
.map__bar{
  display:flex;justify-content:space-between;align-items:center;gap:14px;
  padding:16px 20px;background:var(--paper);border-top:1px solid var(--line);flex-wrap:wrap;
}
.map__bar strong{font-family:var(--display);font-size:.95rem;color:var(--graphite-900);display:block}
.map__bar small{font-size:.84rem;color:var(--ink-faint)}

/* ---------- Dúvidas ---------- */
.faq{border-top:1px solid var(--line)}
.faq details{border-bottom:1px solid var(--line)}
.faq summary{
  list-style:none;cursor:pointer;padding:22px 0;
  font-family:var(--display);font-size:1.02rem;font-weight:600;color:var(--graphite-900);
  display:flex;justify-content:space-between;align-items:center;gap:20px;
}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{
  content:"";flex-shrink:0;width:10px;height:10px;
  border-right:2px solid var(--red);border-bottom:2px solid var(--red);
  transform:rotate(45deg) translate(-2px,-2px);
  transition:transform .3s var(--ease);
}
.faq details[open] summary::after{transform:rotate(225deg) translate(-2px,-2px)}
.faq details p{padding:0 0 24px;font-size:.96rem;color:var(--ink-soft);max-width:72ch}

/* ---------- Chamada final ---------- */
.cta{position:relative;overflow:hidden;background:var(--red);color:#fff;padding:84px 0}
.cta__tex{position:absolute;inset:0;background-image:repeating-linear-gradient(115deg,rgba(0,0,0,.05) 0 1px,transparent 1px 10px);pointer-events:none}
.cta__in{position:relative;display:grid;grid-template-columns:1.3fr auto;gap:44px;align-items:center}
.cta h2{color:#fff}
.cta p{color:rgba(255,255,255,.85);margin-top:12px;max-width:50ch}
.cta__side{display:grid;gap:12px;justify-items:start}
.cta .btn--light{background:#fff;color:var(--red)}
.cta .btn--light:hover{background:var(--paper-alt)}
.cta__tel{font-family:var(--cond);font-size:1rem;letter-spacing:.08em;color:rgba(255,255,255,.8);text-decoration:none}
.cta__tel:hover{color:#fff}

/* ---------- Rodapé ---------- */
.foot{background:var(--graphite-900);color:#fff;padding:64px 0 0}
.foot__in{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:44px;padding-bottom:44px}
.foot p{font-size:.92rem;color:rgba(255,255,255,.55);margin-top:16px;max-width:36ch}
.foot h4{
  font-family:var(--cond);font-size:.9rem;font-weight:600;letter-spacing:.14em;
  text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:18px;
}
.foot__col{display:grid;gap:11px;align-content:start}
.foot__col a{font-size:.94rem;color:rgba(255,255,255,.68);text-decoration:none;width:fit-content;transition:color .2s}
.foot__col a:hover{color:var(--red)}
.foot__soc{display:flex;gap:10px;margin-top:22px}
.foot__soc a{
  width:40px;height:40px;border-radius:8px;
  background:var(--graphite-800);color:rgba(255,255,255,.7);
  display:grid;place-items:center;transition:background .2s,color .2s;
}
.foot__soc a:hover{background:var(--red);color:#fff}
.foot__soc svg{width:18px;height:18px}
.foot__legal{
  border-top:1px solid rgba(255,255,255,.1);padding:22px 0;
  display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;
}
.foot__legal p{margin:0;font-size:.84rem;color:rgba(255,255,255,.38);max-width:none}
.foot__legal a{color:rgba(255,255,255,.55);text-decoration:none}
.foot__legal a:hover{color:#fff}

/* ---------- WhatsApp fixo ---------- */
.wa{
  position:fixed;right:22px;bottom:22px;z-index:90;
  display:inline-flex;align-items:center;gap:10px;
  background:#1FA855;color:#fff;text-decoration:none;
  padding:14px 20px;border-radius:99px;
  font-family:var(--display);font-size:.92rem;font-weight:600;
  box-shadow:0 10px 30px rgba(31,168,85,.4);
  transition:transform .2s var(--ease),background .2s;
}
.wa:hover{background:#188F47;transform:translateY(-3px)}

/* ---------- Revelação ---------- */
.rv{opacity:0;transform:translateY(22px);transition:opacity .7s var(--ease),transform .7s var(--ease)}
.rv.on{opacity:1;transform:none}
.svcs .rv:nth-child(2){transition-delay:.07s}
.svcs .rv:nth-child(3){transition-delay:.14s}
.svcs .rv:nth-child(4){transition-delay:.21s}
.svcs .rv:nth-child(5){transition-delay:.28s}
.svcs .rv:nth-child(6){transition-delay:.35s}
.stats .rv:nth-child(2){transition-delay:.1s}
.stats .rv:nth-child(3){transition-delay:.2s}

/* ---------- Acessibilidade ---------- */
:focus-visible{outline:3px solid var(--red);outline-offset:3px;border-radius:4px}
.skip{position:absolute;left:-9999px;background:var(--graphite-900);color:#fff;padding:12px 20px;z-index:200}
.skip:focus{left:12px;top:12px}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}

@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
  .rv{opacity:1;transform:none}
  .sheet__list li{opacity:1;transform:none}
  .sheet__ok path{stroke-dashoffset:0}
  .stamp{opacity:1;transform:rotate(-11deg)}
}

/* ---------- Responsivo ---------- */
@media (max-width:1080px){
  .svcs{grid-template-columns:repeat(2,1fr)}
  .book,.about,.contact{grid-template-columns:1fr;gap:44px}
  .cta__in{grid-template-columns:1fr;gap:28px}
}
@media (max-width:860px){
  .hero__in{grid-template-columns:1fr;gap:56px}
  .foot__in{grid-template-columns:1fr 1fr}
}
@media (max-width:720px){
  .header__cta .btn{display:none}
  .burger{display:flex}
  .nav{
    position:fixed;top:var(--header-h);left:0;right:0;
    background:var(--graphite-900);border-bottom:1px solid var(--graphite-700);
    flex-direction:column;gap:0;padding:6px 24px 16px;margin:0;
    opacity:0;transform:translateY(-10px);pointer-events:none;
    transition:opacity .25s var(--ease),transform .25s var(--ease);
  }
  .nav.is-open{opacity:1;transform:none;pointer-events:auto}
  .nav a{padding:15px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.8)}
  .header.is-stuck .nav a{color:rgba(255,255,255,.8)}
  .nav a:last-child{border-bottom:0}
  .sec{padding:72px 0}
  .svcs{grid-template-columns:1fr}
  .about__list{grid-template-columns:1fr}
  .foot__in{grid-template-columns:1fr;gap:32px}
  .hero__trust li{padding-right:20px;margin-right:20px}
  .stamp{right:8px;bottom:24px;font-size:1.1rem}
  .wa span{display:none}
  .wa{padding:16px;border-radius:50%}
  .map iframe{height:300px}
}
</style>
</head>
<body>
<a href="#conteudo" class="skip">Ir para o conteúdo</a>

<!-- ================= CABEÇALHO ================= -->
<header class="header" id="header">
  <div class="wrap header__in">
    <a href="#" class="brand" aria-label="Revisacar — início">
      <!-- Logo: cabeça de parafuso sextavado com o visto de aprovação -->
      <svg class="brand__mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path class="hex" d="M20 2.5 34.5 10.9v16.8L20 36.1 5.5 27.7V10.9z"/>
        <path d="M20 6.6 31 13v12.7L20 32 9 25.7V13z" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="1"/>
        <path d="M13.4 20.3l4.6 4.6L27 14.4" stroke="#D62828" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="brand__word">Revisa<b>car</b></span>
    </a>
    <nav class="nav" id="nav" aria-label="Navegação principal">
      <a href="#servicos">Serviços</a>
      <a href="#agendar">Agendar</a>
      <a href="#sobre">Sobre</a>
      <a href="#contato">Contato</a>
    </nav>
    <div class="header__cta">
      <span class="status" id="status" aria-live="polite">
        <span class="status__dot"></span>
        <span id="statusTxt">Verificando</span>
      </span>
      <a href="tel:+5519993444618" class="btn btn--call btn--sm">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Ligar agora
      </a>
    </div>
    <button class="burger" id="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<main id="conteudo">

<!-- ================= ABERTURA ================= -->
<section class="hero">
  <div class="hero__tex" aria-hidden="true"></div>
  <div class="hero__glow" aria-hidden="true"></div>
  <div class="wrap hero__in">
    <div class="rv">
      <p class="tag tag--dark">Especialista Honda · Todas as marcas</p>
      <h1>Seu carro sai daqui com <span>laudo</span>, não com desculpa.</h1>
      <p class="hero__sub">Oficina no Jardim Novo Campos Elíseos. Revisão, mecânica geral, elétrica e ar-condicionado, com orçamento fechado antes de qualquer serviço começar.</p>
      <div class="hero__cta">
        <a href="https://wa.me/5519993444618?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20servi%C3%A7o." class="btn btn--wa" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.6.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3z"/></svg>
          Agendar pelo WhatsApp
        </a>
        <a href="#agendar" class="btn btn--outline">Montar meu orçamento</a>
      </div>
      <ul class="hero__trust">
        <li><b data-n="10" data-prefix="+">0</b><span>anos de oficina</span></li>
        <li><b data-n="5000" data-prefix="+">0</b><span>clientes atendidos</span></li>
        <li><b data-n="10000" data-prefix="+">0</b><span>serviços realizados</span></li>
      </ul>
    </div>

    <!-- A ficha de revisão: o artefato real da oficina -->
    <div class="rv">
      <div class="sheet" aria-hidden="true">
        <div class="sheet__head">
          <div>
            <p class="sheet__ttl">Ficha de revisão</p>
            <p class="sheet__meta">Revisacar · Campinas</p>
          </div>
          <p class="sheet__os">OS 4218<br>40.000 km</p>
        </div>
        <ul class="sheet__list">
          <li>
            <span class="sheet__ok"><svg viewBox="0 0 16 16" fill="none"><path d="M2 8.5l4 4L14 3" stroke="#D62828" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            <span>Óleo e filtros</span>
          </li>
          <li>
            <span class="sheet__ok"><svg viewBox="0 0 16 16" fill="none"><path d="M2 8.5l4 4L14 3" stroke="#D62828" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            <span>Freios e pastilhas</span>
          </li>
          <li>
            <span class="sheet__ok"><svg viewBox="0 0 16 16" fill="none"><path d="M2 8.5l4 4L14 3" stroke="#D62828" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            <span>Suspensão e direção</span>
          </li>
          <li>
            <span class="sheet__ok"><svg viewBox="0 0 16 16" fill="none"><path d="M2 8.5l4 4L14 3" stroke="#D62828" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            <span>Elétrica e bateria</span>
          </li>
          <li>
            <span class="sheet__ok"><svg viewBox="0 0 16 16" fill="none"><path d="M2 8.5l4 4L14 3" stroke="#D62828" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            <span>Ar-condicionado</span>
          </li>
          <li>
            <span class="sheet__ok"><svg viewBox="0 0 16 16" fill="none"><path d="M2 8.5l4 4L14 3" stroke="#D62828" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            <span>Scanner de injeção</span>
          </li>
        </ul>
        <div class="sheet__foot">
          <span>Garantia em todos os serviços</span>
          <span>Peças originais</span>
        </div>
        <div class="stamp">APROVADO<small>Revisacar</small></div>
      </div>
    </div>
  </div>
</section>

<!-- ================= FAIXA ================= -->
<section class="strip">
  <div class="wrap strip__in">
    <span class="strip__lead">Por que aqui</span>
    <ul>
      <li>Orçamento fechado antes do serviço</li>
      <li>Peças originais e de qualidade</li>
      <li>Garantia por escrito</li>
      <li>Diagnóstico com scanner</li>
      <li>Profissionais certificados</li>
    </ul>
  </div>
</section>

<!-- ================= SERVIÇOS ================= -->
<section class="sec" id="servicos">
  <div class="wrap">
    <div class="sec__head sec__head--center rv">
      <p class="tag tag--center">Serviços</p>
      <h2>Do barulho estranho ao carro pronto</h2>
      <p class="sec__sub">Serviços automotivos com garantia e preço justo. Especialistas em Honda, atendemos todas as marcas com o mesmo cuidado.</p>
    </div>

    <div class="svcs">
      <article class="svc rv">
        <div class="svc__ico"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 7 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9H1a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 2.6 7a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H7a1.7 1.7 0 0 0 1-1.5V1a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V7a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" stroke="currentColor" stroke-width="1.6" transform="translate(1.5 1.5) scale(0.88)"/></svg></div>
        <h3>Revisão completa</h3>
        <p>Troca de óleo, filtros, verificação de freios, suspensão e todos os itens essenciais. Você recebe a ficha do que foi checado.</p>
      </article>

      <article class="svc rv">
        <div class="svc__ico"><svg viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a4 4 0 0 0 5.3 5.3l-8.7 8.7a2.8 2.8 0 0 1-4-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14.7 6.3 18.4 2.6a4 4 0 0 1 3 3l-3.7 3.7" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></div>
        <h3>Mecânica geral</h3>
        <p>Reparo de motor, câmbio, suspensão, direção e transmissão. Diagnóstico antes, orçamento depois, serviço só com seu aval.</p>
      </article>

      <article class="svc rv">
        <div class="svc__ico"><svg viewBox="0 0 24 24" fill="none"><path d="M13 2 3.5 13.5h7L11 22l9.5-11.5h-7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></div>
        <h3>Elétrica automotiva</h3>
        <p>Diagnóstico e reparo de sistemas elétricos, partida, alternador e bateria. Aquele problema intermitente que ninguém acha.</p>
      </article>

      <article class="svc rv">
        <div class="svc__ico"><svg viewBox="0 0 24 24" fill="none"><path d="M3 8h10a3 3 0 1 0-3-3M3 12h14a3 3 0 1 1-3 3M3 16h9a2.5 2.5 0 1 1-2.5 2.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div>
        <h3>Ar-condicionado</h3>
        <p>Manutenção preventiva, recarga de gás, troca do filtro de cabine e higienização. Para o ar voltar a gelar de verdade.</p>
      </article>

      <article class="svc rv">
        <div class="svc__ico"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="10" width="20" height="9" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M5 10 7 4.5A2 2 0 0 1 8.9 3h6.2A2 2 0 0 1 17 4.5L19 10" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="6.5" cy="14.5" r="1.2" fill="currentColor"/><circle cx="17.5" cy="14.5" r="1.2" fill="currentColor"/></svg></div>
        <h3>Diagnóstico com scanner</h3>
        <p>Leitura eletrônica da central para achar a causa real da luz no painel, em vez de trocar peça por tentativa.</p>
      </article>

      <article class="svc svc--star rv">
        <span class="svc__flag">Especialidade</span>
        <div class="svc__ico"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2.5l2.9 5.9 6.6.9-4.8 4.6 1.2 6.5-5.9-3.1-5.9 3.1 1.2-6.5L2.5 9.3l6.6-.9z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></div>
        <h3>Especialista Honda</h3>
        <p>Mais de dez anos dedicados à linha Honda: conhecemos as manias de cada modelo, o torque certo e o que costuma dar problema em cada quilometragem.</p>
      </article>
    </div>
  </div>
</section>

<!-- ================= AGENDAMENTO ================= -->
<section class="sec sec--dark" id="agendar">
  <div class="wrap book">
    <div class="rv">
      <p class="tag tag--dark">Agendamento</p>
      <h2>Diga o que está acontecendo. A gente já responde com o próximo passo.</h2>
      <p class="sec__sub">Marque o que precisa, informe o carro e o botão monta a mensagem pronta no seu WhatsApp. Você só aperta enviar.</p>
      <ul class="book__list">
        <li>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Resposta com orçamento estimado no mesmo dia útil</span>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Sem compromisso: você aprova antes de qualquer serviço</span>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <span>Se for guincho ou pane, avise: damos prioridade</span>
        </li>
      </ul>
    </div>

    <div class="book__panel rv">
      <div class="field">
        <span class="field__lbl" id="lbl-svc">1. O que seu carro precisa?</span>
        <div class="chips" id="chipsSvc" role="group" aria-labelledby="lbl-svc">
          <button type="button" class="chip">Revisão completa</button>
          <button type="button" class="chip">Troca de óleo</button>
          <button type="button" class="chip">Freios</button>
          <button type="button" class="chip">Suspensão</button>
          <button type="button" class="chip">Ar não gela</button>
          <button type="button" class="chip">Luz da injeção acesa</button>
          <button type="button" class="chip">Barulho estranho</button>
          <button type="button" class="chip">Elétrica</button>
          <button type="button" class="chip">Não sei, quero diagnóstico</button>
        </div>
      </div>

      <div class="field">
        <label class="field__lbl" for="carro">2. Qual é o carro?</label>
        <input class="inp" id="carro" type="text" placeholder="Ex.: Honda Civic 2018, 80.000 km" autocomplete="off">
      </div>

      <div class="field">
        <span class="field__lbl" id="lbl-quando">3. Quando fica melhor?</span>
        <div class="chips" id="chipsQuando" role="group" aria-labelledby="lbl-quando">
          <button type="button" class="chip">Hoje</button>
          <button type="button" class="chip">Esta semana</button>
          <button type="button" class="chip">Sábado de manhã</button>
          <button type="button" class="chip">Sem pressa</button>
        </div>
      </div>

      <a href="https://wa.me/5519993444618" class="btn btn--wa btn--full" id="btnWa" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.6.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3z"/></svg>
        Enviar no WhatsApp
      </a>
      <p class="book__note">Abre o WhatsApp com a mensagem já escrita.</p>
    </div>
  </div>
</section>

<!-- ================= SOBRE ================= -->
<section class="sec" id="sobre">
  <div class="wrap about">
    <div class="rv">
      <p class="tag">Sobre nós</p>
      <h2>Mais de 10 anos cuidando do seu veículo</h2>
      <p class="sec__sub">A Revisacar nasceu da paixão por automóveis e do compromisso de fazer mecânica bem feita. Somos especialistas em veículos Honda, mas atendemos todas as marcas com a mesma exigência.</p>
      <ul class="about__list">
        <li><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Profissionais certificados e experientes</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Equipamentos de diagnóstico atuais</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Peças originais e de qualidade</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Garantia em todos os serviços</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Atendimento direto com o mecânico</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Orçamento transparente e fechado</span></li>
      </ul>
    </div>

    <div class="stats">
      <div class="stat rv">
        <div class="stat__ico"><svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div>
        <div>
          <b data-n="5000" data-prefix="+">0</b>
          <span>Clientes atendidos</span>
        </div>
      </div>
      <div class="stat stat--red rv">
        <div class="stat__ico"><svg viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a4 4 0 0 0 5.3 5.3l-8.7 8.7a2.8 2.8 0 0 1-4-4z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14.7 6.3 18.4 2.6a4 4 0 0 1 3 3l-3.7 3.7" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg></div>
        <div>
          <b data-n="10000" data-prefix="+">0</b>
          <span>Serviços realizados</span>
        </div>
      </div>
      <div class="stat rv">
        <div class="stat__ico"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg></div>
        <div>
          <b data-n="100" data-suffix="%">0</b>
          <span>Comprometimento</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!--
  =====================================================================
  DEPOIMENTOS — descomentar quando houver avaliações REAIS do Google.
  Copiar o texto e o primeiro nome de avaliações verdadeiras do perfil
  do Google Meu Negócio. Nunca inventar depoimento: além de ilegal
  (CDC, art. 37 — publicidade enganosa), é o tipo de coisa que destrói
  a confiança do cliente local, que conhece as pessoas da região.

  <section class="sec sec--alt">
    <div class="wrap">
      <div class="sec__head sec__head--center">
        <p class="tag tag--center">Depoimentos</p>
        <h2>O que dizem quem já trouxe o carro</h2>
      </div>
      ... cards com: texto da avaliação, nome, modelo do carro ...
    </div>
  </section>
  =====================================================================
-->

<!-- ================= CONTATO ================= -->
<section class="sec sec--alt" id="contato">
  <div class="wrap contact">
    <div class="rv">
      <p class="tag">Contato</p>
      <h2>Estamos aqui, com a porta aberta</h2>
      <p class="sec__sub">Traga o carro ou mande uma mensagem antes. Se preferir, ligue: quem atende é quem entende do serviço.</p>

      <ul class="info">
        <li>
          <span class="info__ico"><svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.9"/></svg></span>
          <div>
            <h4>Endereço</h4>
            <p>R. Domingos da Costa Maciel, 137<br>Jardim Novo Campos Elíseos, Campinas — SP<br>CEP 13060-422</p>
          </div>
        </li>
        <li>
          <span class="info__ico"><svg viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <div>
            <h4>Telefone e WhatsApp</h4>
            <a href="tel:+5519993444618">(19) 99344-4618</a>
            <a href="https://wa.me/5519993444618" target="_blank" rel="noopener">Chamar no WhatsApp</a>
          </div>
        </li>
        <li>
          <span class="info__ico"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.9"/><path d="M12 6.5V12l3.5 2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <div>
            <h4>Horário de funcionamento</h4>
            <p>Segunda a sexta: 8h às 18h<br>Sábado: 8h às 12h<br>Domingo: fechado</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="rv">
      <div class="map">
        <iframe
          title="Mapa com a localização da Revisacar na Rua Domingos da Costa Maciel, 137, Campinas"
          src="https://maps.google.com/maps?q=R.%20Domingos%20da%20Costa%20Maciel%2C%20137%2C%20Jardim%20Novo%20Campos%20Eliseos%2C%20Campinas%20-%20SP%2C%2013060-422&z=16&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="map__bar">
          <div>
            <strong>Revisacar</strong>
            <small>Jardim Novo Campos Elíseos · Campinas</small>
          </div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=R.+Domingos+da+Costa+Maciel,+137,+Jardim+Novo+Campos+Eliseos,+Campinas+-+SP,+13060-422" class="btn btn--dark btn--sm" target="_blank" rel="noopener">
            Como chegar
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= DÚVIDAS ================= -->
<section class="sec">
  <div class="wrap wrap--narrow">
    <div class="sec__head sec__head--center rv">
      <p class="tag tag--center">Dúvidas frequentes</p>
      <h2>Antes de você perguntar</h2>
    </div>
    <div class="faq rv">
      <details>
        <summary>Preciso agendar ou posso levar o carro direto?</summary>
        <p>Pode levar direto, mas agendar evita espera. Mandando uma mensagem antes, separamos o box e, na maioria dos casos, já adiantamos as peças que o serviço vai precisar.</p>
      </details>
      <details>
        <summary>Vocês só atendem Honda?</summary>
        <p>Não. Honda é a nossa especialidade, resultado de mais de dez anos concentrados nessa linha. Mas atendemos todas as marcas, com o mesmo padrão de diagnóstico e de garantia.</p>
      </details>
      <details>
        <summary>O orçamento pode aumentar depois que o carro está aqui?</summary>
        <p>O orçamento é fechado antes do serviço começar. Se durante o reparo aparecer algo que não estava previsto, paramos, avisamos e só seguimos com a sua autorização. Nunca cobramos nada que você não tenha aprovado.</p>
      </details>
      <details>
        <summary>As peças são originais?</summary>
        <p>Trabalhamos com peças originais e com similares de qualidade comprovada. Sempre informamos qual é qual e a diferença de preço, e a escolha é sua.</p>
      </details>
      <details>
        <summary>Qual é a garantia do serviço?</summary>
        <p>Todos os serviços têm garantia, registrada na ordem de serviço junto com o prazo. Se o problema voltar dentro do período, você traz o carro e resolvemos.</p>
      </details>
      <details>
        <summary>Quanto tempo leva uma revisão?</summary>
        <p>Uma revisão completa costuma levar o dia. Serviços mais simples, como troca de óleo e filtros, saem em algumas horas. O prazo é informado no momento do agendamento.</p>
      </details>
    </div>
  </div>
</section>

</main>

<!-- ================= CHAMADA FINAL ================= -->
<section class="cta">
  <div class="cta__tex" aria-hidden="true"></div>
  <div class="wrap cta__in rv">
    <div>
      <h2>Aquele barulho não vai sumir sozinho.</h2>
      <p>Mande uma mensagem contando o que está acontecendo. A gente responde com o próximo passo e uma estimativa, sem compromisso.</p>
    </div>
    <div class="cta__side">
      <a href="https://wa.me/5519993444618?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20servi%C3%A7o." class="btn btn--light" target="_blank" rel="noopener">
        Chamar no WhatsApp
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="tel:+5519993444618" class="cta__tel">Ou ligue: (19) 99344-4618</a>
    </div>
  </div>
</section>

<!-- ================= RODAPÉ ================= -->
<footer class="foot">
  <div class="wrap foot__in">
    <div>
      <a href="#" class="brand">
        <svg class="brand__mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <path d="M20 2.5 34.5 10.9v16.8L20 36.1 5.5 27.7V10.9z" fill="#fff"/>
          <path d="M20 6.6 31 13v12.7L20 32 9 25.7V13z" fill="none" stroke="rgba(21,24,28,.18)" stroke-width="1"/>
          <path d="M13.4 20.3l4.6 4.6L27 14.4" stroke="#D62828" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="brand__word" style="color:#fff">Revisa<b>car</b></span>
      </a>
      <p>Mecânica automotiva especializada em Honda, com mais de 10 anos de experiência. Qualidade, confiança e preço justo.</p>
      <div class="foot__soc">
        <a href="tel:+5519993444618" aria-label="Ligar">
          <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="https://wa.me/5519993444618" target="_blank" rel="noopener" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.6.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3z"/></svg>
        </a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=R.+Domingos+da+Costa+Maciel,+137,+Campinas+-+SP" target="_blank" rel="noopener" aria-label="Como chegar">
          <svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.9"/></svg>
        </a>
      </div>
    </div>

    <nav class="foot__col" aria-label="Navegação do rodapé">
      <h4>Navegação</h4>
      <a href="#">Início</a>
      <a href="#servicos">Serviços</a>
      <a href="#agendar">Agendar</a>
      <a href="#sobre">Sobre</a>
      <a href="#contato">Contato</a>
    </nav>

    <div class="foot__col">
      <h4>Serviços</h4>
      <a href="#servicos">Revisão completa</a>
      <a href="#servicos">Mecânica geral</a>
      <a href="#servicos">Elétrica automotiva</a>
      <a href="#servicos">Ar-condicionado</a>
      <a href="#servicos">Especialista Honda</a>
    </div>
  </div>

  <div class="wrap foot__legal">
    <p>© <span id="ano"></span> Revisacar. Todos os direitos reservados.</p>
    <p>Site por <a href="https://kalmansystems.com.br" target="_blank" rel="noopener">Kalman Systems</a></p>
  </div>
</footer>

<a href="https://wa.me/5519993444618?text=Ol%C3%A1%21" class="wa" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.6.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.6 1.1 2.8c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3z"/></svg>
  <span>WhatsApp</span>
</a>

<script>
(function(){
  "use strict";
  var WA = "5519993444618";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Cabeçalho ---- */
  var header = document.getElementById("header");
  function stick(){ header.classList.toggle("is-stuck", window.scrollY > 10); }
  window.addEventListener("scroll", stick, { passive:true });
  stick();

  /* ---- Menu no celular ---- */
  var burger = document.getElementById("burger"), nav = document.getElementById("nav");
  if (burger && nav){
    burger.addEventListener("click", function(){
      var open = nav.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        nav.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded","false");
      });
    });
  }

  /* ---- Aberto agora? Horário de Campinas, não do aparelho ---- */
  (function(){
    var pill = document.getElementById("status"), txt = document.getElementById("statusTxt");
    if (!pill || !txt) return;
    function agora(){
      var f = new Intl.DateTimeFormat("pt-BR", {
        timeZone:"America/Sao_Paulo", weekday:"short", hour:"2-digit", minute:"2-digit", hour12:false
      }).formatToParts(new Date());
      var o = {};
      f.forEach(function(p){ o[p.type] = p.value; });
      var dias = { "dom":0, "seg":1, "ter":2, "qua":3, "qui":4, "sex":5, "sáb":6, "sab":6 };
      var d = dias[(o.weekday||"").toLowerCase().replace(".","").slice(0,3)];
      return { dia:d, min: parseInt(o.hour,10)*60 + parseInt(o.minute,10) };
    }
    function checar(){
      var a = agora(), aberto = false;
      if (a.dia >= 1 && a.dia <= 5) aberto = a.min >= 480 && a.min < 1080;   /* 8h–18h */
      else if (a.dia === 6)        aberto = a.min >= 480 && a.min < 720;    /* 8h–12h */
      pill.classList.toggle("is-open", aberto);
      txt.textContent = aberto ? "Aberto agora" : "Fechado";
    }
    checar();
    setInterval(checar, 60000);
  })();

  /* ---- Chips: seleção múltipla nos serviços, única no prazo ---- */
  function ligarChips(id, unico){
    var box = document.getElementById(id);
    if (!box) return;
    box.querySelectorAll(".chip").forEach(function(c){
      c.setAttribute("aria-pressed","false");
      c.addEventListener("click", function(){
        if (unico){
          box.querySelectorAll(".chip").forEach(function(o){
            if (o !== c){ o.classList.remove("is-on"); o.setAttribute("aria-pressed","false"); }
          });
        }
        var on = c.classList.toggle("is-on");
        c.setAttribute("aria-pressed", String(on));
        montar();
      });
    });
  }

  /* ---- Monta a mensagem do WhatsApp ---- */
  var btn = document.getElementById("btnWa"), carro = document.getElementById("carro");
  function pegar(id){
    var box = document.getElementById(id);
    if (!box) return [];
    return Array.prototype.map.call(box.querySelectorAll(".chip.is-on"), function(c){
      return c.textContent.trim();
    });
  }
  function montar(){
    if (!btn) return;
    var svc = pegar("chipsSvc");
    var quando = pegar("chipsQuando");
    var veic = carro ? carro.value.trim() : "";

    var m = "Olá! Vim pelo site da Revisacar.";
    if (svc.length)   m += "\n\nPreciso de: " + svc.join(", ") + ".";
    if (veic)         m += "\nCarro: " + veic + ".";
    if (quando.length) m += "\nMelhor momento: " + quando[0] + ".";
    m += "\n\nPodem me passar um orçamento?";

    btn.href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(m);
  }
  ligarChips("chipsSvc", false);
  ligarChips("chipsQuando", true);
  if (carro) carro.addEventListener("input", montar);
  montar();

  /* ---- Revelação em rolagem ---- */
  var itens = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window && !reduce){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add("on"); io.unobserve(e.target); }
      });
    }, { threshold:0.12, rootMargin:"0px 0px -40px 0px" });
    itens.forEach(function(el){ io.observe(el); });
  } else {
    itens.forEach(function(el){ el.classList.add("on"); });
  }

  /* ---- Contadores ---- */
  var nums = document.querySelectorAll("[data-n]");
  function fmt(v){ return v >= 1000 ? v.toLocaleString("pt-BR") : String(v); }
  function correr(el){
    var alvo = parseInt(el.dataset.n,10);
    var pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    var t0 = performance.now();
    (function tick(now){
      var p = Math.min((now - t0)/1300, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + fmt(Math.round(alvo * e)) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(performance.now());
  }
  if (nums.length){
    if (reduce){
      nums.forEach(function(el){
        el.textContent = (el.dataset.prefix||"") + fmt(parseInt(el.dataset.n,10)) + (el.dataset.suffix||"");
      });
    } else if ("IntersectionObserver" in window){
      var cio = new IntersectionObserver(function(es){
        es.forEach(function(e){
          if (e.isIntersecting){ correr(e.target); cio.unobserve(e.target); }
        });
      }, { threshold:0.6 });
      nums.forEach(function(el){ cio.observe(el); });
    } else {
      nums.forEach(correr);
    }
  }

  /* ---- Ano ---- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
</script>
</body>
</html>
