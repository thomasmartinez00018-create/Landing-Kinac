import { 
  Activity, 
  Bone, 
  UserCheck, 
  Zap, 
  Stethoscope,
  Users,
  Move,
  Dumbbell,
  Heart
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
    description: 'Espacios seguros para ganar fuerza, equilibrio y confianza, en un ambiente de cuidado y motivador.',
    icon: Bone
  }
];

export const SERVICES: Service[] = [
  // Clinical Services
  {
    id: 'deportiva',
    title: 'Rehabilitación Traumatológica y Deportiva',
    description: 'Retorno al movimiento seguro. Evaluaciones biomecánicas para personas activas, corredores y bailarines.',
    icon: Activity,
    category: 'clinical'
  },
  {
    id: 'kine-integral',
    title: 'Kinesiología Integral',
    description: 'Sesiones profesionales con Licenciados UBA. Terapia manual, ejercicio terapéutico y fisioterapia analgésica.',
    icon: Stethoscope,
    category: 'clinical'
  },
  {
    id: 'ejercicios-terapeuticos',
    title: 'Ejercicios Terapéuticos',
    description: 'Programas personalizados para recuperar movilidad y fuerza funcional tras una lesión o cirugía.',
    icon: Dumbbell,
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
    id: 'taller-corporal',
    title: 'Taller Corporal',
    description: 'Exploración y despliegue de las posibilidades de movimiento integrando coordinación, equilibrio, fuerza, flexibilidad y escucha postural.',
    icon: Users,
    category: 'group',
    promo: '¡PROMO ENERO! 2 clases semanales + 1 de regalo 🎁'
  },
  {
    id: 'rehab-mayores',
    title: 'Rehabilitación para Adultos Mayores',
    description: 'Programas especializados para mantener la autonomía, el equilibrio y la fuerza en un entorno seguro.',
    icon: Heart,
    category: 'group'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Manu Risso',
    role: 'Local Guide',
    content: 'Es un excelente lugar con atención personalizada y un equipo de trabajo muy profesional desde la recepción hasta las kinesiólogas. Mucha cordialidad y amabilidad. Xime una genia!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Manuela Rossi',
    role: 'Local Guide',
    content: 'Soy bailarina y hace muchos años me atiendo con Silvina. Es una genia, más allá de la parte física, su cuidado emocional y su conexión con los pacientes es lo que me hace volver cada vez.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Diana Man',
    role: 'Paciente',
    content: 'El equipo es muy profesional, tiene mucho conocimiento y te cuidan mucho. Empecé por dolores de espalda y terminé haciendo verticales. ¡Altamente recomendable!',
    rating: 5
  },
  {
    id: 't4',
    name: 'Valeria Ezcurdia',
    role: 'Local Guide',
    content: 'Un lugar muy cálido y atendido por profesionales que están siempre capacitándose. Soy colega de la Lic Silvina Inamine y dimos juntas en KINAC algunos talleres. Sigan así !!!',
    rating: 5
  },
  {
    id: 't5',
    name: 'Maria Ester Vázquez Paz',
    role: 'Paciente',
    content: 'Estoy muy agradecida a Silvina y todo el equipo. Es un lugar de excelencia que soluciona los problemas físicos con mucha profesionalidad y calidez. Súper recomiendo el lugar.',
    rating: 5
  },
  {
    id: 't6',
    name: 'LA CHIQUI x SIEMPRE',
    role: 'Paciente',
    content: 'Es EXTRAORDINARIO!!... La dueña es además de un ser suuuper amoroso... mágica... te toca y salís nueva!! No son improvisados... SABEN de verdad!!',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: '¿Cuánto duran las sesiones?',
    answer: 'Las sesiones de kinesiología duran aproximadamente 1 hora. Esto nos permite combinar terapia manual y fisioterapia analgésica sin apuros.'
  },
  {
    id: 'f2',
    question: '¿Necesito experiencia para las clases grupales?',
    answer: 'No. Tenemos niveles diferenciados: Rehabilitación para Adultos Mayores y Taller Corporal son de intensidad moderada, mientras que FLEX es más exigente.'
  },
  {
    id: 'f3',
    question: '¿Quiénes son los profesionales?',
    answer: 'Nuestro equipo está formado por Licenciados en Kinesiología (UBA) con amplia experiencia en rehabilitación y ejercicio terapéutico.'
  },
  {
    id: 'f4',
    question: '¿Cómo agendo un turno?',
    answer: 'Podés escribirnos por WhatsApp. Realizamos una evaluación inicial para definir el tratamiento o clase grupal que mejor se adapte a tus necesidades.'
  }
];

export const CONTACT_INFO = {
  phone: '+54 9 11 5622-8072',
  whatsapp: '+5491156228072',
  address: 'Dr. Norberto Quirno Costa 1255, Recoleta, CABA',
  email: 'informacion@kinac.com.ar',
  mapsLink: 'https://www.google.com.ar/maps/place/KINAC+%7C+Centro+de+Kinesiolog%C3%ADa+y+Acupuntura/@-34.5951911,-58.4078438,17z/data=!4m8!3m7!1s0x95bccbf92e037037:0x3a7adaf9f6bbba3!8m2!3d-34.5951911!4d-58.4052635!9m1!1b1!16s%2Fg%2F11kg8lkvwl?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
};