"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultWhatsAppMessage } from "@/lib/site-config";

const navLinks = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#realizados", label: "Trabalhos" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/gamer", label: "Área Gamer" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-deep-blue/[0.06] bg-white/80 backdrop-blur-md">
      <div className="container-page flex h-[4.5rem] items-center justify-between py-3">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-capucho.png"
            alt="Capucho Informática"
            width={392}
            height={112}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-deep-blue/70 transition-colors hover:text-electric-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppUrl(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-electric-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0048d1]"
          >
            <MessageCircle size={16} />
            Falar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-deep-blue lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-deep-blue/[0.06] bg-white lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-deep-blue/80 hover:bg-tech-gray"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppUrl(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-electric-blue px-5 py-3 text-sm font-medium text-white"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
