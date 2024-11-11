import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isModalOpen = false; // Controla el estado del modal
  selectedService: any; // Almacena la información del servicio seleccionado

  // Información de los servicios
  service1Info = {
    title: "🖥️ Desarrollo de Software Personalizado",
    description: "Creamos aplicaciones que se adaptan a tus necesidades específicas, asegurando que cada proyecto cumpla con tus expectativas y objetivos. 🚀",
    benefits: [
      "✅ Soluciones a medida.",
      "⚙️ Mejora en la eficiencia operativa.",
      "📈 Escalabilidad y flexibilidad.",
      "🛡️ Seguridad y protección de datos."
    ],
    additionalInfo: "Nuestro equipo de expertos trabaja de cerca contigo para entender tus requerimientos y brindar una solución óptima."
  };

  service2Info = {
    title: "🧑‍💼 Consultoría de Software",
    description: "Asesoramos a tu empresa en la elección de las mejores tecnologías, brindando soporte en cada etapa del desarrollo. 📊",
    benefits: [
      "🔍 Análisis de requisitos.",
      "📅 Estrategias de implementación.",
      "💡 Optimización de recursos.",
      "🤝 Formación y soporte continuo."
    ],
    additionalInfo: "Te ayudamos a tomar decisiones informadas que potenciarán el crecimiento de tu negocio."
  };

  service3Info = {
    title: "🛠️ Mantenimiento y Soporte",
    description: "Ofrecemos soporte continuo para asegurar que tus aplicaciones funcionen sin problemas y estén siempre actualizadas. 🛡️",
    benefits: [
      "🔄 Actualizaciones regulares.",
      "⚡ Resolución rápida de problemas.",
      "👨‍💻 Soporte técnico personalizado.",
      "📝 Informes periódicos de estado."
    ],
    additionalInfo: "Nuestra meta es garantizar que tu software siempre esté en su mejor forma."
  };

  service4Info = {
    title: "🔗 Integración de Sistemas",
    description: "Integramos diferentes sistemas y APIs para mejorar la eficiencia de tu negocio, facilitando la comunicación entre aplicaciones. 🔄",
    benefits: [
      "📊 Mejor gestión de datos.",
      "🏆 Aumento de la productividad.",
      "🚫 Reducción de errores.",
      "🌐 Conectividad entre plataformas."
    ],
    additionalInfo: "Transforma la forma en que tus aplicaciones se comunican entre sí."
  };

  service5Info = {
    title: "📱 Desarrollo de Aplicaciones Móviles",
    description: "Creamos aplicaciones móviles nativas e híbridas que llegan a tus usuarios en cualquier lugar, garantizando una excelente experiencia de usuario. 🌟",
    benefits: [
      "👥 Acceso a una audiencia más amplia.",
      "📲 Interacción mejorada con los usuarios.",
      "⏱️ Desarrollo ágil y eficiente.",
      "🧩 Personalización según la plataforma."
    ],
    additionalInfo: "Nuestras aplicaciones están diseñadas para cautivar a los usuarios y mejorar la retención."
  };

  constructor() {}

  // Función para abrir el modal
  openModal(serviceInfo: any) {
    this.selectedService = serviceInfo; // Guarda la información del servicio seleccionado
    this.isModalOpen = true; // Abre el modal
  }

  // Función para cerrar el modal
  closeModal() {
    this.isModalOpen = false; // Cierra el modal
  }
}
