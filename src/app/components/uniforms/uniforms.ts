import { Component } from '@angular/core';

export interface ClothingItem {
  slot: string;
  code: number;
  color: number;
}

export interface UniformRank {
  rank: string;
  badge: string;
  color: string;
  image: string | null;
  items: ClothingItem[];
}

@Component({
  selector: 'app-uniforms',
  standalone: false,
  templateUrl: './uniforms.html',
  styleUrl: './uniforms.css',
})
export class Uniforms {
  activeGender: 'male' | 'female' = 'male';

  uniforms: UniformRank[] = [
    {
      rank: 'Policía en Prácticas',
      badge: 'fas fa-user-clock',
      color: '#607d8b',
      image: null,
      items: [
        { slot: 'Undershirt', code: 58,  color: 0 },
        { slot: 'Tops',       code: 538, color: 0 },
        { slot: 'Pants',      code: 180, color: 0 },
        { slot: 'Shoes',      code: 110, color: 0 },
        { slot: 'Hat',        code: 214, color: 1 },
        { slot: 'Eyeglasses', code: 2,   color: 0 },
        { slot: 'Vest',       code: 86,  color: 0 },
      ],
    },
    {
      rank: 'Policía',
      badge: 'fas fa-shield-halved',
      color: '#1976d2',
      image: null,
      items: [
        { slot: 'Undershirt', code: 122, color: 0 },
        { slot: 'Tops',       code: 535, color: 0 },
        { slot: 'Pants',      code: 130, color: 0 },
        { slot: 'Shoes',      code: 110, color: 0 },
        { slot: 'Hat',        code: 214, color: 2 },
        { slot: 'Eyeglasses', code: 4,   color: 2 },
        { slot: 'Gloves',     code: 17,  color: 0 },
        { slot: 'Vest',       code: 66,  color: 0 },
      ],
    },
    {
      rank: 'Oficial de Primera',
      badge: 'fas fa-star',
      color: '#1565c0',
      image: null,
      items: [
        { slot: 'Undershirt', code: 122, color: 0 },
        { slot: 'Tops',       code: 531, color: 1 },
        { slot: 'Pants',      code: 130, color: 0 },
        { slot: 'Shoes',      code: 110, color: 0 },
        { slot: 'Hat',        code: 214, color: 2 },
        { slot: 'Eyeglasses', code: 7,   color: 0 },
        { slot: 'Gloves',     code: 17,  color: 0 },
        { slot: 'Vest',       code: 70,  color: 0 },
      ],
    },
    {
      rank: 'Sub-Inspector',
      badge: 'fas fa-chevron-up',
      color: '#0d47a1',
      image: null,
      items: [
        { slot: 'Undershirt', code: 122, color: 0 },
        { slot: 'Tops',       code: 539, color: 0 },
        { slot: 'Pants',      code: 130, color: 0 },
        { slot: 'Shoes',      code: 110, color: 0 },
        { slot: 'Hat',        code: 214, color: 2 },
        { slot: 'Eyeglasses', code: 7,   color: 0 },
        { slot: 'Gloves',     code: 17,  color: 0 },
        { slot: 'Vest',       code: 84,  color: 0 },
      ],
    },
    {
      rank: 'Inspector',
      badge: 'fas fa-user-tie',
      color: '#b8860b',
      image: null,
      items: [
        { slot: 'Undershirt', code: 122, color: 0 },
        { slot: 'Tops',       code: 534, color: 2 },
        { slot: 'Pants',      code: 130, color: 0 },
        { slot: 'Shoes',      code: 110, color: 0 },
        { slot: 'Hat',        code: 214, color: 2 },
        { slot: 'Eyeglasses', code: 7,   color: 0 },
        { slot: 'Gloves',     code: 186, color: 0 },
        { slot: 'Vest',       code: 84,  color: 0 },
        { slot: 'Mask',       code: 121, color: 0 },
      ],
    },
    {
      rank: 'Inspector Jefe',
      badge: 'fas fa-crown',
      color: '#c9a227',
      image: null,
      items: [
        { slot: 'Undershirt', code: 122, color: 0 },
        { slot: 'Tops',       code: 529, color: 2 },
        { slot: 'Pants',      code: 194, color: 0 },
        { slot: 'Shoes',      code: 11,  color: 0 },
        { slot: 'Hat',        code: 222, color: 0 },
        { slot: 'Eyeglasses', code: 37,  color: 0 },
        { slot: 'Mask',       code: 121, color: 0 },
      ],
    },
    {
      rank: 'Sub-Comisario',
      badge: 'fas fa-medal',
      color: '#e65100',
      image: null,
      items: [
        { slot: 'Undershirt', code: 130, color: 0 },
        { slot: 'Tops',       code: 529, color: 3 },
        { slot: 'Pants',      code: 194, color: 0 },
        { slot: 'Shoes',      code: 11,  color: 0 },
        { slot: 'Hat',        code: 214, color: 2 },
        { slot: 'Eyeglasses', code: 37,  color: 0 },
        { slot: 'Mask',       code: 121, color: 0 },
        { slot: 'Vest',       code: 68,  color: 7 },
      ],
    },
    {
      rank: 'Comisario',
      badge: 'fas fa-shield-cat',
      color: '#d32f2f',
      image: null,
      items: [
        { slot: 'Undershirt', code: 130, color: 0 },
        { slot: 'Tops',       code: 529, color: 4 },
        { slot: 'Pants',      code: 194, color: 0 },
        { slot: 'Shoes',      code: 11,  color: 0 },
        { slot: 'Hat',        code: 214, color: 2 },
        { slot: 'Eyeglasses', code: 37,  color: 0 },
        { slot: 'Mask',       code: 121, color: 0 },
        { slot: 'Vest',       code: 68,  color: 7 },
      ],
    },
    {
      rank: 'Director General',
      badge: 'fas fa-star-of-david',
      color: '#7b1fa2',
      image: null,
      items: [
        { slot: 'Undershirt', code: 130, color: 0 },
        { slot: 'Tops',       code: 539, color: 6 },
        { slot: 'Pants',      code: 194, color: 0 },
        { slot: 'Shoes',      code: 11,  color: 0 },
        { slot: 'Hat',        code: 214, color: 2 },
        { slot: 'Eyeglasses', code: 37,  color: 0 },
        { slot: 'Mask',       code: 121, color: 0 },
        { slot: 'Vest',       code: 68,  color: 8 },
      ],
    },
  ];

  getSlotIcon(slot: string): string {
    const icons: Record<string, string> = {
      'Undershirt':  'fas fa-shirt',
      'Tops':        'fas fa-tshirt',
      'Pants':       'fas fa-person',
      'Shoes':       'fas fa-shoe-prints',
      'Hat':         'fas fa-hat-cowboy',
      'Eyeglasses':  'fas fa-glasses',
      'Gloves':      'fas fa-hand',
      'Vest':        'fas fa-vest',
      'Mask':        'fas fa-face-grin',
      'Accessory':   'fas fa-gem',
    };
    return icons[slot] ?? 'fas fa-tag';
  }
}
