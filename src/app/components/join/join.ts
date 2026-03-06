import { Component } from '@angular/core';

interface Step {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-join',
  standalone: false,
  templateUrl: './join.html',
  styleUrl: './join.css',
})
export class Join {
  requirements: string[] = [
    'Pertenecer o querer ingresar al servidor FiveM de Santabria',
    'Mantener conducta ejemplar y expediente limpio',
    'Mostrar compromiso y participación activa en el servidor',
    'Respetar la jerarquía y a los compañeros en todo momento',
    'Conocimientos básicos de roleplay policial',
    'Disponibilidad horaria para patrullaje regular',
    'Cuenta de Discord activa para comunicaciones'
  ];

  steps: Step[] = [
    {
      icon: 'fas fa-clipboard-check',
      title: 'Preselección',
      description: 'Evaluación de conducta e historial en el servidor. Se valorará el comportamiento y el respeto hacia otros jugadores y el roleplay.'
    },
    {
      icon: 'fas fa-comments',
      title: 'Entrevista Personal',
      description: 'Valoración de actitud, disciplina y motivaciones. El equipo de RRHH evaluará tu perfil mediante una entrevista en Discord.'
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'Prueba Táctica',
      description: 'Simulaciones de intervención y trabajo en equipo. Se evaluarán tus habilidades de conducción, comunicación y toma de decisiones en RP.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Formación Básica',
      description: 'Curso introductorio de tácticas, protocolos y procedimientos operativos del Departamento de Policía de Santabria.'
    },
    {
      icon: 'fas fa-id-badge',
      title: 'Período de Prácticas',
      description: 'Acompañarás a equipos reales bajo supervisión. Se evaluará tu desempeño táctico y respeto jerárquico antes de la incorporación definitiva.'
    }
  ];
}
