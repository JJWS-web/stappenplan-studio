import { FileText, UserCheck, Megaphone, Shield, Settings, ClipboardCheck, LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  color: "primary" | "accent";
  details: string[];
}

export const services: Service[] = [
  {
    id: "caas",
    icon: FileText,
    title: "Contractmanagement",
    shortTitle: "CaaS",
    description: "Volledig contractbeheer.",
    color: "primary",
    details: [
      "Volledig overzicht van al uw contracten, verplichtingen en deadlines op één centrale plek",
      "Automatische herinneringen bij verloopdatums zodat u nooit meer een belangrijk moment mist",
      "Compliance en risicobeheer geïntegreerd voor optimale controle over uw contractportfolio",
    ],
  },
  {
    id: "paas",
    icon: UserCheck,
    title: "Personal Assistant",
    shortTitle: "PAaaS",
    description: "Uw assistent op afstand.",
    color: "accent",
    details: [
      "Professionele administratieve ondersteuning op afstand door ervaren assistenten",
      "Complete agenda- en mailbeheer zodat u zich kunt focussen op uw core business",
      "Flexibele inzet die meegroeit met uw behoeften zonder vaste personeelskosten",
    ],
  },
  {
    id: "maas",
    icon: Megaphone,
    title: "Marketing",
    shortTitle: "MaaS",
    description: "Marketing zonder afdeling.",
    color: "primary",
    details: [
      "Volledige marketingstrategie en uitvoering zonder eigen marketingafdeling nodig",
      "Social media beheer en professionele contentcreatie afgestemd op uw doelgroep",
      "Meetbare resultaten met heldere rapportages voor inzicht in uw marketing ROI",
    ],
  },
  {
    id: "draas",
    icon: Shield,
    title: "Disaster Recovery",
    shortTitle: "DRaaS",
    description: "Bedrijfscontinuïteit.",
    color: "accent",
    details: [
      "Gegarandeerde uptime en beschikbaarheid van uw kritieke bedrijfssystemen",
      "Automatische back-ups en uitgewerkte herstelplannen voor elke situatie",
      "24/7 monitoring en directe ondersteuning bij calamiteiten en verstoringen",
    ],
  },
  {
    id: "implementatie",
    icon: Settings,
    title: "Implementatie",
    shortTitle: "Migratie",
    description: "Soepele migraties.",
    color: "primary",
    details: [
      "Professioneel projectmanagement van analyse tot oplevering en nazorg",
      "Minimale verstoring van uw dagelijkse bedrijfsvoering tijdens het traject",
      "Uitgebreide training en ondersteuning zodat uw team direct aan de slag kan",
    ],
  },
  {
    id: "audit",
    icon: ClipboardCheck,
    title: "Audit Controle",
    shortTitle: "Audit",
    description: "Controle over audits.",
    color: "accent",
    details: [
      "Volledige voorbereiding en begeleiding tijdens het gehele auditproces",
      "Grondige documentatie en compliance check voor optimale voorbereiding",
      "Concreet actieplan voor verbeterpunten met heldere prioriteiten en deadlines",
    ],
  },
];
