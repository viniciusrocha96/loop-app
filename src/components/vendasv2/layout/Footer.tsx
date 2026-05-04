import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2">
          {/* Fallback to text if logo is not available */}
          <div className="font-space-grotesk font-bold text-2xl text-[var(--color-accent-gold)] tracking-tighter">
            LOOP
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-muted)]">
          <Link href="#" className="hover:text-[var(--color-text-light)] transition-colors">
            Termos de Uso
          </Link>
          <Link href="#" className="hover:text-[var(--color-text-light)] transition-colors">
            Política de Privacidade
          </Link>
          <Link href="#" className="hover:text-[var(--color-text-light)] transition-colors">
            Suporte
          </Link>
        </div>

        <div className="text-sm text-[var(--color-text-muted)]">
          &copy; {currentYear} LOOP. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}
