import { Component } from '@angular/core';

interface Rank {
  level: number;
  name: string;
  icon: string;
  color: string;
  description: string;
  perks: string[];
}

@Component({
  selector: 'app-ranks',
  standalone: false,
  templateUrl: './ranks.html',
  styleUrl: './ranks.css',
})
export class Ranks {
  ranks: Rank[] = [
    {
      level: 1,
      name: 'Agente en Prácticas',
      icon: 'fas fa-user-shield',
      color: '#607d8b',
      description: 'Nuevo ingreso al cuerpo. Se encuentra en período de formación y evaluación, acompañando a equipos reales bajo supervisión constante de un superior.',
      perks: ['Acceso a formación básica', 'Patrullaje supervisado', 'Radio ordinaria']
    },
    {
      level: 2,
      name: 'Agente Operativo',
      icon: 'fas fa-shield-halved',
      color: '#1a56c4',
      description: 'Agente plenamente operativo del cuerpo. Ejecuta tareas de patrullaje, intervención y reacción inmediata bajo la supervisión de mandos superiores.',
      perks: ['Patrullaje autónomo', 'Intervención directa', 'Equipo reglamentario']
    },
    {
      level: 3,
      name: 'Inspector Jefe',
      icon: 'fas fa-star',
      color: '#c9a227',
      description: 'Mando intermedio encargado de coordinar en suplencia del Comisario Principal. Supervisa la operatividad diaria e informa de todo lo sucedido al Comisario.',
      perks: ['Mando de unidad', 'Supervisión operativa', 'Acceso a TAC prioritario', 'Vehículo asignado']
    },
    {
      level: 4,
      name: 'Comisario Principal',
      icon: 'fas fa-crown',
      color: '#ff8c00',
      description: 'Máxima autoridad operativa. Dirige la planificación, control y coordinación general de todas las unidades. Responsable de la operatividad del departamento.',
      perks: ['Dirección general', 'Planificación estratégica', 'Coordinación interunidades', 'Acceso total']
    },
    {
      level: 5,
      name: 'Jefe de División',
      icon: 'fas fa-chess-king',
      color: '#e91e63',
      description: 'Máximo rango ejecutivo. Realiza la comprobación de todos los mandatos del Comisario Principal para asegurar el correcto funcionamiento del departamento.',
      perks: ['Supervisión general', 'Control administrativo', 'Máxima autoridad', 'Todos los accesos']
    },
    {
      level: 6,
      name: 'Director General',
      icon: 'fas fa-landmark',
      color: '#9c27b0',
      description: 'Autoridad suprema de la Policía Nacional. Interviene en casos de interés nacional y establece las directrices generales del cuerpo.',
      perks: ['Autoridad suprema', 'Decisiones estratégicas', 'Interés nacional', 'Control absoluto']
    }
  ];
}
