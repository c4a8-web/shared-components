import TeamCardsComponent from "../components/team-cards.vue";

export default {
    title: 'Components/TeamCards',
    component: TeamCardsComponent,
    argTypes: {
    },
};

export const TeamCards = {
    args: {
        teamCards: {
            items: [
                {
                    name: "Patrick Treptau",
                    job: "Lead Cloud Architect",
                    description: "Patrick Treptau arbeitet als Lead Cloud Architect und Trainer mit mehr als 15 Jahren Erfahrung im Microsoft Enterprise Umfeld mit Schwerpunkt Microsoft Azure. Sein Fokus liegt auf Cloud Strategie, Cloud Adoption Framework, On-Prem zu Azure und Azure-zu-Azure Migrationen.",
                    img: "https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png",
                    skills: "Windows Server, Datacenter, Microsoft 365",
                    linkedin: "https://www.linkedin.com/in/ptreptau/"
                },
                {
                    name: "Matti Puolitaival",
                    job: "Senior Consultant",
                    description: "Matti Puolitaival ist Berater und Trainer für Microsoft IT Infrastrukturen und Microsoft Cloud Technologien. Sein Schwerpunkt liegt im Bereich Azure Cloud. Er unterstützt Enterprise-Kunden bei der Planung, dem Design und dem Deployment von Microsoft Azure.",
                    img: "https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-matti-puolitaival.png",
                    skills: "Entra ID,Microsoft 365, Datacenter, Azure",
                    linkedin: "https://www.linkedin.com/in/mattipuolitaival/"
                }
            ],
        },
    },
};

export const TeamCardsArea = {
    args: {
        teamCards: {
            items: [
                {
                    variant: "area",
                    area: "Managed SOC",
                    color: "var(--color-gk-violet)",
                    name: "Patrick Treptau",
                    job: "Lead Cloud Architect",
                    description: "Patrick Treptau arbeitet als Lead Cloud Architect und Trainer mit mehr als 15 Jahren Erfahrung im Microsoft Enterprise Umfeld mit Schwerpunkt Microsoft Azure.",
                    img: "https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-patrick-treptau.png",
                    cta: { text: "Jetzt anfragen", href: "#" }
                },
                {
                    variant: "area",
                    area: "Azure Foundation",
                    color: "var(--color-denim)",
                    name: "Matti Puolitaival",
                    job: "Senior Consultant",
                    description: "Matti Puolitaival ist Berater und Trainer für Microsoft IT Infrastrukturen und Microsoft Cloud Technologien.",
                    img: "https://res.cloudinary.com/c4a8/image/upload/q_auto:best/people/people-matti-puolitaival.png",
                    cta: { text: "Jetzt anfragen", href: "#" }
                }
            ],
        },
    },
};
