import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Answer {
  text: string;
  correct: boolean;
}

export interface Question {
  id: number;
  category: string;
  text: string;
  answers: Answer[];
  selected: number | null;
}

export type ExamStep = 'intro' | 'info' | 'exam' | 'result';

const PASS_SCORE = 70; // % mínimo para aprobar
const EXAM_MINUTES = 20;

@Component({
  selector: 'app-police-exam',
  standalone: false,
  templateUrl: './police-exam.html',
  styleUrl: './police-exam.css',
})
export class PoliceExam implements OnInit, OnDestroy {
  step: ExamStep = 'intro';
  infoForm: FormGroup;
  currentQuestion = 0;
  timeLeft = EXAM_MINUTES * 60;
  timerInterval: any;
  examFinished = false;
  score = 0;
  correctCount = 0;
  showAnswers = false;

  questions: Question[] = [
    // ── CÓDIGOS NUMÉRICOS ──
    {
      id: 1,
      category: 'Código Numérico',
      text: '¿Qué código numérico identifica una PARADA DE TRÁFICO según el Manual de Procedimientos?',
      answers: [
        { text: '10-04', correct: false },
        { text: '10-06', correct: true },
        { text: '10-08', correct: false },
        { text: '10-01', correct: false },
      ],
      selected: null,
    },
    {
      id: 2,
      category: 'Código QRR',
      text: '¿Cuándo se activa oficialmente un QRR según el Manual de Procedimientos?',
      answers: [
        { text: 'Cuando hay un robo en progreso sin agentes disponibles', correct: false },
        { text: 'Cuando se declara alerta 2 en H-50', correct: false },
        { text: 'Cuando abaten a un agente, lo secuestran o retienen contra su voluntad', correct: true },
        { text: 'Cuando hay más de 3 civiles heridos en una zona', correct: false },
      ],
      selected: null,
    },
    {
      id: 3,
      category: 'Código QRR',
      text: '¿Cuál es la diferencia entre un QRR y un 444?',
      answers: [
        { text: 'El 444 implica mayor gravedad que el QRR', correct: false },
        { text: 'El QRR se activa cuando abaten a un agente; el 444 es un incidente menor sin agente abatido', correct: true },
        { text: 'Son exactamente lo mismo, solo cambia la terminología por unidad', correct: false },
        { text: 'El 444 requiere más agentes que el QRR', correct: false },
      ],
      selected: null,
    },
    {
      id: 4,
      category: 'Código Radial',
      text: '¿Qué es y quién puede designar un CÓDIGO 6-ADAM?',
      answers: [
        { text: 'Un código de persecución; lo puede activar cualquier agente', correct: false },
        { text: 'Un código de apoyo médico; lo activa el Inspector Jefe', correct: false },
        { text: 'Un código especial que SOLO puede designar H-50 cuando otra unidad lo solicita', correct: true },
        { text: 'Un código de extracción; lo activa el mando operativo en campo', correct: false },
      ],
      selected: null,
    },
    {
      id: 5,
      category: 'Código Radial',
      text: '¿Qué implica el CÓDIGO 100 durante una persecución vehicular?',
      answers: [
        { text: 'Abandonar la persecución de inmediato', correct: false },
        { text: 'Colocar el patrulla horizontalmente dejando margen de espacio para cortar el paso', correct: true },
        { text: 'Solicitar refuerzos aéreos al mando', correct: false },
        { text: 'Activar las sirenas y bloquear el acceso a la zona', correct: false },
      ],
      selected: null,
    },
    {
      id: 6,
      category: 'Código Radial',
      text: 'La MANIOBRA PIT y la CLAVE ROBERT durante una persecución, ¿quién puede activarlas?',
      answers: [
        { text: 'Cualquier agente con rango de Sargento o superior', correct: false },
        { text: 'El copiloto del vehículo perseguidor', correct: false },
        { text: 'Solo el mando asignado al operativo', correct: true },
        { text: 'El agente más antiguo en el TAC', correct: false },
      ],
      selected: null,
    },
    {
      id: 7,
      category: 'Código Radial',
      text: '¿Cuándo puede aplicarse la Maniobra PIT calculando el tiempo desde el inicio de la persecución?',
      answers: [
        { text: 'A los 5 minutos de persecución', correct: false },
        { text: 'Al pasar los 10 minutos de persecución, con autorización de H-50', correct: true },
        { text: 'En cualquier momento si el fugitivo excede los 150 km/h', correct: false },
        { text: 'A los 15 minutos, con autorización del Inspector Jefe', correct: false },
      ],
      selected: null,
    },
    // ── CÓDIGOS DE NEGOCIACIÓN ──
    {
      id: 8,
      category: 'Negociaciones',
      text: '¿Cuántos rehenes se necesitan para negociar una SALIDA LIMPIA y una HUIDA LIMPIA respectivamente?',
      answers: [
        { text: 'Salida limpia: 2 rehenes — Huida limpia: 2 rehenes', correct: false },
        { text: 'Salida limpia: 1 rehén — Huida limpia: 1 rehén', correct: true },
        { text: 'Salida limpia: 1 rehén — Huida limpia: 2 rehenes', correct: false },
        { text: 'Salida limpia: 2 rehenes — Huida limpia: 1 rehén', correct: false },
      ],
      selected: null,
    },
    {
      id: 9,
      category: 'Negociaciones',
      text: '¿Cuál de los siguientes motivos NO rompe automáticamente una negociación según el manual?',
      answers: [
        { text: 'El sospechoso usa óxido de nitroso para ganar velocidad', correct: false },
        { text: 'Un tercero se une a la persecución', correct: false },
        { text: 'El sospechoso para el vehículo y sale con las manos en alto', correct: true },
        { text: 'El sospechoso cambia de vehículo durante la huida', correct: false },
      ],
      selected: null,
    },
    {
      id: 10,
      category: 'Negociaciones — QRR',
      text: 'En un QRR por secuestro de un AGENTE, ¿entre qué cantidades pueden los captores solicitar rescate?',
      answers: [
        { text: 'Entre 2.500$ y 5.000$', correct: false },
        { text: 'Entre 10.000$ y 20.000$', correct: false },
        { text: 'Entre 40.000$ y 50.000$', correct: true },
        { text: 'Sin límite, lo decide el mando en campo', correct: false },
      ],
      selected: null,
    },
    // ── RADIO Y COMUNICACIONES ──
    {
      id: 11,
      category: 'Radio y Comunicaciones',
      text: '¿Para qué se usa la RADIO INTERNA según el Art. 1 del Manual de Procedimientos?',
      answers: [
        { text: 'Para emitir comunicados a toda la malla de agentes', correct: false },
        { text: 'Para comunicarse con el compañero asignado o unificar a compañeros en un TAC en operativos', correct: true },
        { text: 'Para coordinar con H-50 los avisos asignados', correct: false },
        { text: 'Para reportar detenciones al Inspector Jefe', correct: false },
      ],
      selected: null,
    },
    {
      id: 12,
      category: 'Radio y Comunicaciones',
      text: '¿Cuántos agentes pueden estar simultáneamente en H-50 según el manual?',
      answers: [
        { text: 'Mínimo 2, máximo 4', correct: false },
        { text: 'Mínimo 1, máximo 3', correct: false },
        { text: 'Mínimo 1, máximo 2', correct: true },
        { text: 'No hay límite establecido', correct: false },
      ],
      selected: null,
    },
    // ── PATRULLAJE Y ACCIÓN ──
    {
      id: 13,
      category: 'Patrullaje — Drogas',
      text: '¿Cuántas unidades de COCAÍNA puede llevar un sujeto para ser considerado CONSUMIDOR y no traficante?',
      answers: [
        { text: 'Hasta 5 unidades', correct: false },
        { text: 'Hasta 3 unidades', correct: false },
        { text: 'Hasta 2 unidades', correct: true },
        { text: 'Hasta 1 unidad', correct: false },
      ],
      selected: null,
    },
    {
      id: 14,
      category: 'Patrullaje — Drogas',
      text: '¿Cuántas unidades de OPIO marcan el límite entre consumo y tráfico según el Art. 8?',
      answers: [
        { text: 'Hasta 2 unidades = consumo; 3 o más = tráfico', correct: false },
        { text: 'Hasta 5 unidades = consumo; 6 o más = tráfico', correct: true },
        { text: 'Hasta 10 unidades = consumo; 11 o más = tráfico', correct: false },
        { text: 'Cualquier cantidad se considera tráfico', correct: false },
      ],
      selected: null,
    },
    // ── DERECHOS Y NORMATIVA ──
    {
      id: 15,
      category: 'Derechos y Normativa',
      text: 'Según el reglamento, ¿puede un agente intervenir en un delito cuando está FUERA DE SERVICIO portando su arma reglamentaria?',
      answers: [
        { text: 'Sí, siempre que se trate de un delito grave como un robo', correct: false },
        { text: 'Sí, pero solo si no hay agentes de servicio disponibles en la zona', correct: false },
        { text: 'No. Ningún rango puede portar el arma reglamentaria ni intervenir en ningún delito fuera de servicio', correct: true },
        { text: 'Sí, si el agente tiene rango de Inspector o superior', correct: false },
      ],
      selected: null,
    },
    {
      id: 16,
      category: 'Parada de Tráfico',
      text: 'Durante un 10-06, ¿qué debe hacer el conductor tras ser detenido según el protocolo oficial?',
      answers: [
        { text: 'Salir del vehículo con las manos en alto inmediatamente', correct: false },
        { text: 'Retirar las llaves del contacto y arrojarlas por la ventana al ser solicitado', correct: true },
        { text: 'Esperar a que el agente abra la puerta del vehículo', correct: false },
        { text: 'Apagar el motor y entregar la documentación sin esperar instrucciones', correct: false },
      ],
      selected: null,
    },
    {
      id: 17,
      category: 'Cacheos',
      text: '¿En cuál de los siguientes casos NO está permitido realizar un cacheo según el Art. 7?',
      answers: [
        { text: 'Cuando existe flagrante delito', correct: false },
        { text: 'Cuando hay indicios claros de delito', correct: false },
        { text: 'Cuando el agente tiene una sospecha personal sin indicios objetivos', correct: true },
        { text: 'A ocupantes de vehículos que abandonen una zona con delitos recientes', correct: false },
      ],
      selected: null,
    },
    {
      id: 18,
      category: 'QRR — Límites Operativos',
      text: '¿Cuántos agentes es el máximo permitido en un TAC durante un QRR y qué ocurre si un agente es abatido?',
      answers: [
        { text: 'Máximo 10 agentes; puede reincorporarse tras 5 minutos', correct: false },
        { text: 'Máximo 20 agentes; queda fuera pero puede volver si el mando lo autoriza', correct: false },
        { text: 'Máximo 15 agentes; queda terminantemente prohibido reincorporarse al operativo', correct: true },
        { text: 'Máximo 15 agentes; puede reincorporarse si hay menos de 8 activos', correct: false },
      ],
      selected: null,
    },
    {
      id: 19,
      category: 'Asignación de Avisos',
      text: '¿Quién atiende los avisos de DROGAS y ROBO DE VEHÍCULOS según el Art. 3?',
      answers: [
        { text: 'Solo pueden atenderlos los agentes designados por H-50', correct: false },
        { text: 'La unidad más cercana al aviso', correct: true },
        { text: 'Exclusivamente los agentes del Grupo Alpha', correct: false },
        { text: 'Hay que pedir permiso a H-50 siempre antes de acudir', correct: false },
      ],
      selected: null,
    },
    {
      id: 20,
      category: 'Derechos del Detenido',
      text: 'En caso de pelea o disturbio (Art. 10), si un implicado desea presentar una denuncia, ¿cuál es el procedimiento correcto?',
      answers: [
        { text: 'El agente levanta el acta en el lugar de los hechos y la envía a comisaría', correct: false },
        { text: 'El implicado deberá presentarse en comisaría para tramitar la denuncia', correct: true },
        { text: 'La denuncia puede presentarse de forma oral ante cualquier agente presente', correct: false },
        { text: 'Solo puede denunciar si hay testigos civiles que corroboren los hechos', correct: false },
      ],
      selected: null,
    },
  ];

  constructor(private fb: FormBuilder) {
    this.infoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(16)]],
      discord: ['', Validators.required],
      experience: ['', Validators.required],
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.stopTimer();
  }

  get progress(): number {
    return Math.round(((this.currentQuestion + 1) / this.questions.length) * 100);
  }

  get answeredCount(): number {
    return this.questions.filter(q => q.selected !== null).length;
  }

  get timeFormatted(): string {
    const m = Math.floor(this.timeLeft / 60).toString().padStart(2, '0');
    const s = (this.timeLeft % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  get timeWarning(): boolean {
    return this.timeLeft <= 120;
  }

  get approved(): boolean {
    return this.score >= PASS_SCORE;
  }

  get scoreClass(): string {
    if (this.score >= 90) return 'excellent';
    if (this.score >= 70) return 'pass';
    return 'fail';
  }

  isFieldInvalid(field: string): boolean {
    const c = this.infoForm.get(field);
    return !!(c && c.invalid && c.touched);
  }

  startIntro() {
    this.step = 'info';
  }

  submitInfo() {
    if (this.infoForm.invalid) {
      this.infoForm.markAllAsTouched();
      return;
    }
    this.step = 'exam';
    this.startTimer();
  }

  selectAnswer(questionIndex: number, answerIndex: number) {
    if (this.examFinished) return;
    this.questions[questionIndex].selected = answerIndex;
  }

  goTo(index: number) {
    this.currentQuestion = index;
  }

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    }
  }

  prevQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }

  submitExam() {
    this.stopTimer();
    this.examFinished = true;
    this.calculateScore();
    this.step = 'result';
  }

  private startTimer() {
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.submitExam();
      }
    }, 1000);
  }

  private stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private calculateScore() {
    this.correctCount = this.questions.filter(
      q => q.selected !== null && q.answers[q.selected].correct
    ).length;
    this.score = Math.round((this.correctCount / this.questions.length) * 100);
  }

  retryExam() {
    this.questions.forEach(q => (q.selected = null));
    this.currentQuestion = 0;
    this.timeLeft = EXAM_MINUTES * 60;
    this.examFinished = false;
    this.score = 0;
    this.correctCount = 0;
    this.showAnswers = false;
    this.step = 'intro';
  }
}
