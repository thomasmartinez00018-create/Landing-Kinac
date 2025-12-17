import { 
  Activity, 
  Bone, 
  UserCheck, 
  Zap, 
  HeartPulse, 
  Accessibility, 
  Stethoscope,
  Users,
  Move
} from 'lucide-react';
import { FAQItem, NavLink, PainPoint, Service, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Clases', href: '#clases' },
  { label: 'Nosotros', href: '#metodologia' },
  { label: 'Ubicación', href: '#ubicacion' },
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'injury',
    title: 'Lesiones Deportivas',
    description: 'Esguinces, desgarros o dolores crónicos que te impiden entrenar al 100%. Volvé a tu deporte seguro.',
    icon: Zap
  },
  {
    id: 'stiffness',
    title: 'Dolor de Espalda y Postura',
    description: '¿Sentís el cuerpo "trabado" o con molestias lumbares/cervicales? Recuperá la libertad de movimiento.',
    icon: UserCheck
  },
  {
    id: 'senior',
    title: 'Mantenimiento y Salud',
    description: 'Espacios seguros para ganar fuerza, equilibrio y confianza, en un ambiente social y motivador.',
    icon: Bone
  }
];

export const SERVICES: Service[] = [
  // Clinical Services - Reordered to prioritize Sports/Kine over Acupuncture
  {
    id: 'deportiva',
    title: 'Rehabilitación Deportiva',
    description: 'Retorno al deporte seguro. Evaluaciones biomecánicas para corredores, bailarines y deportistas de alto rendimiento.',
    icon: Activity,
    category: 'clinical'
  },
  {
    id: 'kine-individual',
    title: 'Kinesiología 1 a 1',
    description: 'Sesiones de 1 hora con Licenciados UBA. Terapia manual, ejercicio terapéutico y aparatología de vanguardia.',
    icon: Stethoscope,
    category: 'clinical'
  },
  {
    id: 'acupuntura',
    title: 'Acupuntura y Dolor',
    description: 'Complemento terapéutico para manejo del dolor agudo y procesos inflamatorios.',
    icon: HeartPulse,
    category: 'clinical'
  },
  
  // Group Classes
  {
    id: 'flex',
    title: 'Taller FLEX',
    description: 'Para deportistas y personas activas. Exigencia física para ganar flexibilidad, control y rango de movimiento.',
    icon: Move,
    category: 'group'
  },
  {
    id: 'gimnasia',
    title: 'Gimnasia Integradora',
    description: 'Circuitos de fuerza y coordinación para adultos. Mejora tu condición general en grupo.',
    icon: Users,
    category: 'group',
    promo: '¡PROMO ENERO! 2 clases semanales + 1 de regalo 🎁'
  },
  {
    id: 'taller-corporal',
    title: 'Taller Corporal',
    description: 'Reeducación funcional. Recuperá confianza en tu cuerpo tras períodos de dolor o sedentarismo.',
    icon: Accessibility,
    category: 'group'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carolina P.',
    role: 'Alumna Taller FLEX',
    content: 'Empecé el taller para mejorar mi elongación para danza. El cambio en mi control corporal y estabilidad fue increíble. El grupo es súper motivador.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Roberto L.',
    role: 'Paciente Kinesiología',
    content: 'La atención de una hora completa hace la diferencia. Me operé de meniscos y en Kinac me acompañaron hasta que volví a jugar al tenis.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Marta G.',
    role: 'Gimnasia Integradora',
    content: 'Encontré un lugar donde hacer ejercicio a mi ritmo y sentirme cuidada. Los profes son excelentes y el ambiente es muy cálido.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: '¿Cuánto duran las sesiones individuales?',
    answer: 'Las sesiones de kinesiología duran aproximadamente 1 hora. Esto nos permite combinar terapia manual, ejercicios y aparatología sin apuros.'
  },
  {
    id: 'f2',
    question: '¿Necesito experiencia para las clases grupales?',
    answer: 'No. Tenemos niveles diferenciados: Taller Corporal y Gimnasia Integradora son de intensidad moderada, mientras que FLEX es más exigente.'
  },
  {
    id: 'f3',
    question: '¿Quiénes son los profesionales?',
    answer: 'Nuestro equipo está formado por Licenciados en Kinesiología (UBA) con posgrados en Fisiatría, Deporte y Terapia Manual.'
  },
  {
    id: 'f4',
    question: '¿Cómo agendo un turno?',
    answer: 'Podés escribirnos por WhatsApp. Hacemos una evaluación inicial para derivarte al tratamiento individual o clase grupal que mejor se adapte a vos.'
  }
];

export const CONTACT_INFO = {
  phone: '+54 9 11 5622-8072',
  whatsapp: '+5491156228072', // Sanitized for API
  address: 'Dr. Norberto Quirno Costa 1255, Recoleta, CABA',
  email: 'informacion@kinac.com.ar',
  mapsLink: 'https://maps.app.goo.gl/recoleta-kinac'
};