"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site-config";
import { services } from "@/lib/services";

const equipmentOptions = ["Notebook", "Desktop", "PC Gamer"];

export function ContactForm() {
  const [name, setName] = useState("");
  const [equipment, setEquipment] = useState(equipmentOptions[0]);
  const [service, setService] = useState(services[0].name);
  const [problem, setProblem] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedProblem = problem.trim();

    const messageParts = [
      `Olá, Capucho Informática! Meu nome é ${trimmedName}.`,
      `Tenho um(a) ${equipment} e gostaria de realizar o serviço de ${service}.`,
    ];

    if (trimmedProblem) {
      messageParts.push(`Problema relatado: ${trimmedProblem}.`);
    }

    messageParts.push("Gostaria de saber valores e disponibilidade.");

    const message = messageParts.join(" ");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-deep-blue/[0.06] bg-white p-7 sm:p-8"
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-deep-blue">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={80}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Como podemos te chamar?"
          className="mt-2 w-full rounded-xl border border-deep-blue/10 bg-tech-gray px-4 py-3 text-sm text-deep-blue outline-none transition-colors focus:border-electric-blue"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="equipment" className="text-sm font-medium text-deep-blue">
            Equipamento
          </label>
          <select
            id="equipment"
            name="equipment"
            required
            value={equipment}
            onChange={(event) => setEquipment(event.target.value)}
            className="mt-2 w-full rounded-xl border border-deep-blue/10 bg-tech-gray px-4 py-3 text-sm text-deep-blue outline-none transition-colors focus:border-electric-blue"
          >
            {equipmentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="service" className="text-sm font-medium text-deep-blue">
            Serviço desejado
          </label>
          <select
            id="service"
            name="service"
            required
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="mt-2 w-full rounded-xl border border-deep-blue/10 bg-tech-gray px-4 py-3 text-sm text-deep-blue outline-none transition-colors focus:border-electric-blue"
          >
            {services.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="problem" className="text-sm font-medium text-deep-blue">
          Descreva o problema (opcional)
        </label>
        <textarea
          id="problem"
          name="problem"
          rows={4}
          maxLength={500}
          value={problem}
          onChange={(event) => setProblem(event.target.value)}
          placeholder="Conte um pouco sobre o que está acontecendo com o equipamento"
          className="mt-2 w-full resize-none rounded-xl border border-deep-blue/10 bg-tech-gray px-4 py-3 text-sm text-deep-blue outline-none transition-colors focus:border-electric-blue"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-electric-blue px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0048d1]"
      >
        <Send size={16} />
        Enviar para o WhatsApp
      </button>
      <p className="text-center text-xs text-foreground/45">
        Nenhum dado é armazenado. Sua mensagem é enviada diretamente para o nosso WhatsApp.
      </p>
    </form>
  );
}
