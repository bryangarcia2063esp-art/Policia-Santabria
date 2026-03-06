import { Component } from '@angular/core';

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface GeneralRule {
  icon: string;
  title: string;
  text: string;
}

interface OperationalRule {
  article: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-regulations',
  standalone: false,
  templateUrl: './regulations.html',
  styleUrl: './regulations.css',
})
export class Regulations {
  activeTab = 'general';

  tabs: Tab[] = [
    { id: 'general', label: 'Principios Generales', icon: 'fas fa-scroll' },
    { id: 'discipline', label: 'Régimen Disciplinario', icon: 'fas fa-gavel' },
    { id: 'operations', label: 'Procedimientos Operativos', icon: 'fas fa-map-location-dot' }
  ];

  setTab(id: string) {
    this.activeTab = id;
  }

  generalRules: GeneralRule[] = [
    {
      icon: 'fas fa-scale-balanced',
      title: 'Legalidad',
      text: 'Todo acto deberá estar amparado por la ley y acorde al Reglamento General de la Policía Nacional. No se permitirá ninguna actuación al margen del marco legal.'
    },
    {
      icon: 'fas fa-eye',
      title: 'Prevención',
      text: 'Prevención de actos delictivos mediante patrullaje intensivo y la presencia activa de todos los efectivos. Intervención inmediata en alteraciones del orden público.'
    },
    {
      icon: 'fas fa-building-shield',
      title: 'Protección de Infraestructuras',
      text: 'Protección de infraestructuras sensibles, dependencias policiales, bienes públicos y zonas de alto valor estratégico para la seguridad ciudadana.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Reacción Inmediata',
      text: 'Reacción ante situaciones críticas o de amenaza inmediata. Toda unidad debe estar disponible y operativa para responder en el menor tiempo posible.'
    },
    {
      icon: 'fas fa-sitemap',
      title: 'Cadena de Mando',
      text: 'Respeto absoluto a la cadena de mando, los rangos y sus comunicados y órdenes. La desobediencia a un superior constituye falta grave.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Coordinación Interunidades',
      text: 'Coordinación entre unidades para proceder en operativos conjuntos siempre que sea solicitado. La colaboración es la base del éxito operativo.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Derechos Fundamentales',
      text: 'Toda actuación deberá salvaguardar la integridad física, la dignidad y los derechos de las personas, tanto ciudadanos como compañeros.'
    },
    {
      icon: 'fas fa-radio',
      title: 'Radio Limpia',
      text: 'Radio limpia en todo momento. Acatamiento absoluto de las órdenes de H-50. Comunicaciones claras, precisas y sin interferencias. Prohibidas discusiones internas durante el operativo.'
    }
  ];

  lightOffenses: string[] = [
    'Hablar de manera inadecuada o faltar el respeto leve hacia un ciudadano o compañero',
    'No participar activamente en formaciones, operativos o entrenamientos sin causa justificada',
    'Tener mala disciplina en el momento de realizar el servicio',
    'Dejar el vehículo encendido y desatendido',
    'Abandonar temporalmente el área de servicio sin comunicación',
    'No llevar el uniforme completo o con colores incorrectos'
  ];

  heavyOffenses: string[] = [
    'Desobedecer órdenes directas del mando superior o del alto consejo administrativo',
    'Realizar uso indebido de vehículos sin permiso de un superior',
    'Abandono injustificado del servicio o del puesto de intervención',
    'Utilizar material antidisturbios sin autorización o fuera del protocolo',
    'Hablar mal o de manera despectiva de un/a compañera de la división o del cuerpo',
    'Reincidir tres veces o más en faltas graves dentro de un mismo ciclo'
  ];

  operationalRules: OperationalRule[] = [
    {
      article: 'Art. 9',
      title: 'Activación de la Unidad',
      text: 'Tipo 1 (Preventiva): mínimo tres binomios operativos activos. Tipo 2 (Reacción): alerta 3 o 4 o violencia activa. Tipo 3 (Apoyo): solicitud directa de UIP, Policía Judicial o Seguridad Ciudadana.'
    },
    {
      article: 'Art. 10',
      title: 'Preferencia Táctica',
      text: 'Se da preferencia a los robos mayores: avisos de tiroteo, trifulcas o incidentes graves. Los robos menores tienen última prioridad en la asignación de recursos.'
    },
    {
      article: 'Art. 11',
      title: 'Uso de Vehículos Blindados',
      text: 'Autorizado únicamente con: presencia de armas largas, patrullajes preventivos entre 00:00 y 06:00h, avisos QRR o riesgo inminente para el personal, zonas conflictivas reiteradas.'
    },
    {
      article: 'Art. 14',
      title: 'Negociaciones',
      text: 'Condiciones según rehenes: Salida limpia / Huida limpia (1 rehén), Interceptor (1 rehén), Helicóptero (2 rehenes). Las negociaciones se rompen si se abre fuego, se cambia de vehículo o se supera el perímetro.'
    },
    {
      article: 'Art. 20',
      title: 'Protocolo QRR',
      text: 'Se activa al ser abatido un agente, en secuestro de agente, o con 3+ agentes abatidos en enfrentamiento contra la policía. Máximo 15 agentes en TAC. Prohibido reincorporarse al operativo tras ser abatido.'
    },
    {
      article: 'Art. 22',
      title: 'Agentes por Vehículo',
      text: 'Patrullaje preferentemente con mínimo 3 agentes por vehículo. En blindados: hasta 3 agentes por unidad. Los agentes deberán realizar convoy siempre que sea posible con coordinación adecuada.'
    }
  ];
}
