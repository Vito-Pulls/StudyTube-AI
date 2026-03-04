import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            ¿Qué quieres aprender?
          </h1>
          <p className="mt-3 text-muted-foreground">
            Escribe un tema y generaremos una playlist de YouTube optimizada para tu aprendizaje.
          </p>
        </div>

        <div className="mt-10 flex gap-3">
          <Input
            placeholder="Ej: Aprender React desde cero..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 text-base"
          />
          <Button className="h-12 gap-2 gradient-primary text-primary-foreground hover:opacity-90 px-6">
            <SearchIcon className="h-4 w-4" />
            Buscar
          </Button>
        </div>

        <div className="mt-20 text-center text-muted-foreground">
          <p className="text-sm">Las playlists generadas aparecerán aquí.</p>
        </div>
      </main>
    </div>
  );
};

export default Search;
