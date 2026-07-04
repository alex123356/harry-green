import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, Home, Trees, Sprout, PaintRoller, ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-garden.jpg";

const PHONE = "+44 7869 105848";
const PHONE_TEL = "+447869105848";
const PHONE_WA = "447869105848";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <WhyContact />
      <Contact />
      <Footer />
      <StickyCall />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight text-forest-deep">
          <Sprout className="h-5 w-5 text-forest" strokeWidth={2} />
          Harry Green
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-forest transition-colors">Services</a>
          <a href="#why" className="hover:text-forest transition-colors">Why Harry</a>
          <a href="#contact" className="hover:text-forest transition-colors">Contact</a>
        </nav>
        <a
          href={`tel:${PHONE_TEL}`}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-forest text-cream px-4 py-2 text-sm font-medium hover:bg-forest-deep transition-all hover:-translate-y-0.5"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/85 via-forest-deep/70 to-forest-deep/95" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/5 px-3 py-1 text-xs font-medium tracking-wide text-cream/90 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            No job too big or small
          </span>

          <h1 className="mt-6 font-serif text-5xl sm:text-7xl lg:text-8xl font-medium text-cream text-balance leading-[0.95]">
            Harry Green<br />
            <span className="italic text-cream/90">Gardening.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg sm:text-xl text-cream/80 leading-relaxed text-balance">
            Property, grounds and garden maintenance, plus exterior painting and repairs. Honest, hands-on work from a local tradesman you can call directly.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 text-base font-semibold text-cream shadow-lg shadow-ember/30 hover:bg-ember/90 hover:-translate-y-0.5 transition-all"
            >
              <Phone className="h-5 w-5" />
              Call Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`https://wa.me/${PHONE_WA}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-7 py-4 text-base font-medium text-cream hover:bg-cream/10 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-8 inline-block font-serif text-2xl sm:text-3xl text-cream hover:text-ember transition-colors"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Home,
    title: "Property Maintenance",
    body: "General upkeep and small repairs to keep homes and properties in good order, inside touch-ups and outside jobs alike.",
  },
  {
    icon: Trees,
    title: "Grounds Maintenance",
    body: "Keeping outdoor spaces tidy, safe and well-kept all year round, from clearing and cutting back to seasonal upkeep.",
  },
  {
    icon: Sprout,
    title: "Garden Maintenance",
    body: "Regular garden care including mowing, trimming, weeding and general tidying, so your garden always looks its best.",
  },
  {
    icon: PaintRoller,
    title: "Exterior Painting & Repairs",
    body: "Fresh paintwork and honest exterior repairs on fences, sheds, trim and more, to protect and refresh your property.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-ember">What Harry does</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-forest-deep text-balance">
            Four services. <span className="italic">One trusted pair of hands.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-forest/40 hover:shadow-xl hover:shadow-forest/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest group-hover:bg-forest group-hover:text-cream transition-colors">
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-forest-deep">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { n: "01", t: "Direct, personal contact", d: "Call or message Harry himself. No call centres, no middlemen, no runaround." },
  { n: "02", t: "Any job, any size", d: "From a single afternoon's tidy-up to ongoing maintenance, everything gets the same care." },
  { n: "03", t: "Local, hands-on tradesman", d: "A local pair of hands who turns up, does the work, and keeps things honest." },
];

function WhyContact() {
  return (
    <section id="why" className="py-24 sm:py-32 bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-widest text-ember">Why contact Harry</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-balance leading-[1.05]">
              Straightforward work, <span className="italic">from a real person.</span>
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed max-w-md">
              When you get in touch, you're speaking with Harry, not a company inbox. That means quicker answers, clearer pricing and a job done properly.
            </p>
          </div>

          <ul className="lg:col-span-7 space-y-2">
            {REASONS.map((r) => (
              <li
                key={r.n}
                className="group grid grid-cols-[auto_1fr] gap-6 border-t border-cream/15 py-8 first:border-t-0 first:pt-0"
              >
                <span className="font-serif text-2xl text-ember">{r.n}</span>
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium">{r.t}</h3>
                  <p className="mt-2 text-cream/70 leading-relaxed">{r.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const mailto = `mailto:?subject=Enquiry from ${encodeURIComponent(form.name || "website")}&body=${encodeURIComponent(form.message)}`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-ember">Get in touch</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-6xl lg:text-7xl font-medium text-forest-deep text-balance">
            Don't hesitate to <span className="italic">get in contact.</span>
          </h2>

          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-10 inline-block font-serif text-4xl sm:text-6xl font-semibold text-forest hover:text-ember transition-colors tracking-tight"
          >
            {PHONE}
          </a>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-4 text-base font-semibold text-cream shadow-lg shadow-ember/30 hover:bg-ember/90 hover:-translate-y-0.5 transition-all"
            >
              <Phone className="h-5 w-5" />
              Tap to Call
            </a>
            <a
              href={`https://wa.me/${PHONE_WA}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-base font-semibold text-cream hover:bg-forest-deep hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
          className="mt-16 mx-auto max-w-xl rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
        >
          <p className="text-sm text-muted-foreground mb-6">Prefer to write? Send a quick note.</p>
          <div className="space-y-4">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition"
            />
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What can Harry help with?"
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none focus:border-forest focus:ring-2 focus:ring-forest/20 transition resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-semibold text-cream hover:bg-forest-deep transition-all"
            >
              Send Message
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/80 pt-16 pb-28 sm:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 items-start">
          <div>
            <div className="flex items-center gap-2 font-serif text-2xl font-semibold text-cream">
              <Sprout className="h-6 w-6 text-ember" />
              Harry Green Gardening
            </div>
            <p className="mt-3 text-sm text-cream/60 max-w-sm">
              No job too big or small. Local property and garden maintenance you can trust.
            </p>
          </div>
          <div className="sm:text-right space-y-2">
            <a href={`tel:${PHONE_TEL}`} className="block font-serif text-2xl text-cream hover:text-ember transition-colors">
              {PHONE}
            </a>
            <p className="inline-flex items-center gap-2 text-sm text-cream/60 sm:justify-end">
              <MapPin className="h-4 w-4" /> Local, on-site service
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-cream/10 text-xs text-cream/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Harry Green Gardening. All rights reserved.</span>
          <span>Built with care.</span>
        </div>
      </div>
    </footer>
  );
}

function StickyCall() {
  return (
    <div className="sm:hidden fixed bottom-4 inset-x-4 z-50">
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex items-center justify-center gap-2 w-full rounded-full bg-ember px-6 py-4 font-semibold text-cream shadow-2xl shadow-ember/40 active:scale-95 transition-transform"
      >
        <Phone className="h-5 w-5" />
        Call Harry Now
      </a>
    </div>
  );
}
