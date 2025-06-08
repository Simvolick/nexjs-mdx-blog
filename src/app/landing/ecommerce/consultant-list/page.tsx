import { Metadata } from 'next';
import ConsultantListClient from './ConsultantListClient';

export const metadata: Metadata = {
  title: "E-commerce Consulting Services - Comprehensive Guide | Klim Yadrintsev",
  description: "Complete guide to e-commerce consulting services including strategy, digital marketing, technology, UX/UI, operations, and analytics consultants for scaling your online business.",
  keywords: [
    "ecommerce consulting", "digital marketing consultant", "ecommerce strategy", 
    "UX/UI consultant", "operations consultant", "data analytics consultant",
    "ecommerce technology", "business scaling", "conversion optimization"
  ],
  openGraph: {
    title: "E-commerce Consulting Services - Comprehensive Guide",
    description: "Discover the right e-commerce consultants for your business needs. Complete guide covering strategy, marketing, technology, and operations consulting.",
    type: "article",
    url: "https://klimy.co/landing/ecommerce/consultant-list",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Consulting Services - Comprehensive Guide",
    description: "Discover the right e-commerce consultants for your business needs.",
  },
  alternates: {
    canonical: "/landing/ecommerce/consultant-list",
  },
};

export default function ConsultantList() {
    return <ConsultantListClient />;
}