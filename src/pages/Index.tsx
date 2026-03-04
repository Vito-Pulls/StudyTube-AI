import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, ListVideo, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-illustration.png";

const features = [
  {
    icon: Brain,
    title: "Búsqueda inteligente",
    description: "Escribe lo que quieres aprender de forma natural y el sistema encuentra los mejores vídeos.",
  },
  {
    icon: ListVideo,
    title: "Playlists estructuradas",
    description: "Los vídeos se organizan automáticamente: introducción, fundamentos, práctica y más.",
  },
  {
    icon: BookOpen,
    title: "Rutas de aprendizaje",
    description: "Cada playlist sigue un orden lógico para que aprendas de forma progresiva.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90">
                <Sparkles className="h-4 w-4" />
                Asistente de aprendizaje con IA
              </span>

              <h1
                className="mt-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Aprende cualquier tema con <span className="text-gradient">vídeos organizados</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/70">
                Escribe lo que quieres estudiar y StudyTube AI genera automáticamente una playlist estructurada con los
                mejores vídeos de YouTube.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/search">
                  <Button className="h-12 gap-2 gradient-primary text-primary-foreground shadow-glow hover:opacity-90 px-6 text-base">
                    Empezar ahora
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="h-12 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-6 text-base"
                >
                  Ver demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img src={heroImage} alt="StudyTube AI" className="w-full rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ¿Cómo funciona?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tres pasos sencillos para crear tu ruta de aprendizaje personalizada
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3
                  className="mt-5 text-xl font-semibold text-card-foreground"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl gradient-hero p-12 text-center sm:p-16">
            <h2
              className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ¿Listo para aprender?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              Comienza tu ruta de aprendizaje ahora. Solo escribe el tema y deja que la IA haga el resto.
            </p>
            <Link to="/search" className="mt-8 inline-block">
              <Button className="h-12 gap-2 gradient-primary text-primary-foreground shadow-glow hover:opacity-90 px-8 text-base">
                Empezar gratis
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <BookOpen className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              StudyTube AI
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            © 2026 StudyTube AI — TFG DAW Víctor Javier Suárez Acosta
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
