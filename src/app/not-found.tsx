import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale="fr" />
      <main className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <p className="text-xs tracking-widest text-black/30 uppercase mb-4">
          404
        </p>
        <h1 className="text-5xl lg:text-6xl font-light tracking-tight leading-tight">
          Page introuvable
        </h1>
        <p className="mt-4 text-sm font-light text-black/50 max-w-sm">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-10 text-sm underline underline-offset-4 hover:opacity-50 transition-opacity duration-200"
        >
          Retour
        </Link>
      </main>
      <Footer locale="fr" />
    </div>
  );
}
