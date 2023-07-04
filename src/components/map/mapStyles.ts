export interface MapStyle {
  name: string;
  styleUrl: string;
}

export const STYLES: MapStyle[] = [
  {
    name: 'Default',
    styleUrl: '/mapStyles/default.json'
  },
  {
    name: 'Light',
    styleUrl: '/mapStyles/light.json'
  },
  {
    name: 'Dark',
    styleUrl: '/mapStyles/dark.json'
  },
  {
    name: 'Achromatomaly',
    styleUrl: '/mapStyles/achromatomaly.json'
  },
  {
    name: 'Achromatopsia',
    styleUrl: '/mapStyles/achromatopsia.json'
  },
  {
    name: 'Deuteranomaly',
    styleUrl: '/mapStyles/deuteranomaly.json'
  },
  {
    name: 'Deuteranopia',
    styleUrl: '/mapStyles/deuteranopia.json'
  },
  {
    name: 'Protanomaly',
    styleUrl: '/mapStyles/protanomaly.json'
  },
  {
    name: 'Protanopia',
    styleUrl: '/mapStyles/protanopia.json'
  },
  {
    name: 'Tritanomaly',
    styleUrl: '/mapStyles/tritanomaly.json'
  },
  {
    name: 'Tritanopia',
    styleUrl: '/mapStyles/tritanopia.json'
  }
];
