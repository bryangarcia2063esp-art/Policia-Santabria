import { Component } from '@angular/core';

interface Unit {
  tag: string;
  name: string;
  fullName: string;
  icon: string;
  gradient: string;
  description: string;
  functions: string[];
  groups: string[];
}

@Component({
  selector: 'app-units',
  standalone: false,
  templateUrl: './units.html',
  styleUrl: './units.css',
})
export class Units {
  units: Unit[] = [
    {
      tag: 'U.P.R.',
      name: 'Unidad de Prevención y Reacción',
      fullName: 'División Seguridad Ciudadana · CNP',
      icon: 'fas fa-shield-halved',
      gradient: 'linear-gradient(135deg, #0a2540 0%, #1a56c4 100%)',
      description: 'La U.P.R. es la unidad de Prevención y Reacción. Su deber es prevenir posibles robos mediante el patrullaje intensivo y la realización de operativos conjuntos, además del mantenimiento del orden público y el apoyo a otras unidades para la seguridad de los civiles.',
      functions: [
        'Prevenir delitos mediante presencia visible y patrullaje intensivo',
        'Reaccionar ante emergencias o incidentes críticos',
        'Restablecer el orden público en alteraciones leves o graves',
        'Proteger instalaciones sensibles y dependencias policiales',
        'Acompañar y reforzar unidades en situaciones de riesgo elevado o QRR',
        'Apoyo en atracos cuando no haya compañeros disponibles'
      ],
      groups: ['Grupo Alpha', 'Grupo Charlie']
    },
    {
      tag: 'G.E.O.',
      name: 'Grupo Especial de Operaciones',
      fullName: 'Unidad de Intervención Policial · CNP',
      icon: 'fas fa-crosshairs',
      gradient: 'linear-gradient(135deg, #1a0505 0%, #8b0000 100%)',
      description: 'El G.E.O. constituye la unidad de intervención táctica y de élite del Cuerpo Nacional de Policía. Interviene en situaciones de alto riesgo y especial complejidad, actuando con formación táctica superior, precisión técnica, rapidez y disciplina.',
      functions: [
        'Liberación de rehenes y rescate en situaciones de alto riesgo',
        'Neutralización de grupos armados con negociación',
        'Registros en entornos hostiles y asaltos a lugares fortificados',
        'Protección de bienes, personas y misiones diplomáticas',
        'Intervención antiterrorista y operaciones especiales',
        'Apoyo táctico a otras unidades en operaciones complejas'
      ],
      groups: ['Pelotón Alpha', 'Pelotón Bravo']
    },
    {
      tag: 'H-50',
      name: 'Centro de Mando',
      fullName: 'Control Operativo Central · CNP',
      icon: 'fas fa-tower-broadcast',
      gradient: 'linear-gradient(135deg, #0a2010 0%, #1b5e20 100%)',
      description: 'H-50 es el centro de coordinación y mando del Departamento de Policía. Gestiona la asignación de avisos, coordina las unidades en el terreno y mantiene el control operativo de todas las intervenciones activas en el servidor.',
      functions: [
        'Asignación y coordinación de avisos a las unidades',
        'Control de accesos y comunicaciones por radio',
        'Gestión de códigos de emergencia (QRR, 444)',
        'Autorización de maniobras especiales (PIT, Clave Robert)',
        'Designación de código 6-adam a petición',
        'Supervisión del patrullaje activo'
      ],
      groups: ['Mínimo 1 agente', 'Máximo 2 agentes']
    }
  ];
}
