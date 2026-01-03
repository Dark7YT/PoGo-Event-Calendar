// ============================================================================
// POKEMON GO - CALENDARIO ENERO 2026
// ============================================================================
// Colores oficiales (del markdown)
// #00C853 - Community Day (verde)
// #7C4DFF - Eventos multi-día (púrpura)
// #FF1744 - Raid Day (rojo)
// #FF5252 - Raid Hour (rojo claro)
// #FF9100 - Spotlight Hour (naranja)
// #00B0FF - Max Battles/Max Monday (azul cielo)
// #616161 - Team GO Rocket/Shadow (gris)
// #1DE9B6 - GO Pass (turquesa)
// #2962FF - GO Battle League (azul)
// #AA00FF - Research (púrpura oscuro)
// ============================================================================

export type EventCategory = 
  | 'COMMUNITY_DAY'
  | 'EVENT'
  | 'RAID_DAY'
  | 'RAID_HOUR'
  | 'SPOTLIGHT'
  | 'MAX_MONDAY'
  | 'SHADOW_ROTATION'
  | 'GO_PASS'
  | 'PVP'
  | 'RAID_ROTATION'
  | 'MEGA_ROTATION'
  | 'RESEARCH'
  | 'OTHER';

export type EventStatus = 'CONFIRMED' | 'TENTATIVE' | 'TBD';

export interface Event {
  id: string;
  title: string;
  category: EventCategory;
  start: string; // ISO 8601
  end: string;   // ISO 8601
  status: EventStatus;
  description?: string;
  bonuses?: string[];
  spawns?: string[];
  raids?: string[];
  debuts?: string[];
  featuredMoves?: string[];
  researchTasks?: string[];
  links?: Array<{ title: string; url: string }>;
  children?: string[]; // IDs de sub-eventos
  notes?: string;
}

// Alias para mantener compatibilidad
export type EnrichedEvent = Event;

// ============================================================================
// EVENTOS DE ENERO 2026
// ============================================================================

export const calendarDataset: Event[] = [
  // NEW YEAR'S 2026
  {
    id: 'new-years-2026',
    title: "New Year's 2026",
    category: 'EVENT',
    start: '2025-12-31T10:00:00',
    end: '2026-01-04T20:00:00',
    status: 'CONFIRMED',
    description: 'Celebración de Año Nuevo con Pikachu con sombrero especial y bonos en incursiones.',
    bonuses: [
      '2× XP en incursiones',
      '2× Polvo Estelar en incursiones',
      'Mayor probabilidad de Pikachu con sombrero Shiny',
      'Límite de Lucky garantizados: 35 → 45'
    ],
    spawns: ['Pikachu con sombrero', 'Delibird', 'Wurmple', 'Starly'],
    raids: ['1★: Pikachu con sombrero, Delibird', '3★: Raichu con sombrero, Delibird'],
    links: [{ title: 'Anuncio oficial', url: 'https://pokemongolive.com' }]
  },

  // GO PASS: JANUARY
  {
    id: 'go-pass-january',
    title: 'GO Pass: January',
    category: 'GO_PASS',
    start: '2026-01-06T10:00:00',
    end: '2026-02-03T10:00:00',
    status: 'CONFIRMED',
    description: 'Sistema de progresión mensual con GO Points y recompensas diarias.',
    bonuses: [
      'Progresión diaria de GO Points',
      'Fin de semana sin límite: 31 ene - 1 feb',
      'Recompensas expiran: 5 feb 10:00'
    ]
  },

  // COMMUNITY DAY CLASSIC: PIPLUP
  {
    id: 'cd-classic-piplup',
    title: 'Community Day Classic: Piplup',
    category: 'COMMUNITY_DAY',
    start: '2026-01-04T14:00:00',
    end: '2026-01-04T17:00:00',
    status: 'CONFIRMED',
    description: 'Community Day clásico con Piplup.',
    bonuses: ['2× Polvo Estelar', '2× Caramelos', 'Evolución extendida hasta 21:00'],
    spawns: ['Piplup'],
    featuredMoves: ['Hydro Cannon (Empoleon)'],
    children: ['cd-classic-piplup-evolve']
  },
  {
    id: 'cd-classic-piplup-evolve',
    title: 'CD Classic: Piplup - Ventana de evolución',
    category: 'COMMUNITY_DAY',
    start: '2026-01-04T14:00:00',
    end: '2026-01-04T21:00:00',
    status: 'CONFIRMED',
    description: 'Ventana extendida para Hydro Cannon.',
    featuredMoves: ['Hydro Cannon']
  },

  // PINCH PERFECT
  {
    id: 'pinch-perfect',
    title: 'Pinch Perfect',
    category: 'EVENT',
    start: '2026-01-06T10:00:00',
    end: '2026-01-11T20:00:00',
    status: 'CONFIRMED',
    description: '¡Debut de Klawf! Pokémon tipo Agua y Roca.',
    debuts: ['Klawf'],
    spawns: ['Klawf', 'Krabby', 'Kingler', 'Corphish', 'Crawdaunt', 'Dwebble', 'Crustle']
  },

  // KYUREM FUSION RAID DAY
  {
    id: 'kyurem-fusion-raid-day',
    title: 'Kyurem Fusion Raid Day',
    category: 'RAID_DAY',
    start: '2026-01-10T14:00:00',
    end: '2026-01-10T17:00:00',
    status: 'CONFIRMED',
    description: 'Día de incursiones especial con Kyurem.',
    raids: ['5★: Kyurem', '5★: Kyurem Blanco', '5★: Kyurem Negro'],
    bonuses: ['5 pases gratis', 'Bonos de XP y Polvo Estelar']
  },

  // COMMUNITY DAY: GROOKEY
  {
    id: 'cd-grookey',
    title: 'Community Day: Grookey',
    category: 'COMMUNITY_DAY',
    start: '2026-01-18T14:00:00',
    end: '2026-01-18T17:00:00',
    status: 'CONFIRMED',
    description: 'Community Day con Grookey.',
    bonuses: ['3× Polvo Estelar', '2× Caramelos', '2× Caramelos XL'],
    spawns: ['Grookey'],
    featuredMoves: ['Frenzy Plant (Rillaboom)', 'Drum Beating (Rillaboom)'],
    children: ['cd-grookey-evolve']
  },
  {
    id: 'cd-grookey-evolve',
    title: 'CD: Grookey - Ventana de evolución',
    category: 'COMMUNITY_DAY',
    start: '2026-01-18T14:00:00',
    end: '2026-01-18T22:00:00',
    status: 'CONFIRMED',
    description: 'Ventana extendida para movimientos especiales.',
    featuredMoves: ['Frenzy Plant', 'Drum Beating']
  },

  // PRECIOUS PALS
  {
    id: 'precious-pals',
    title: 'Precious Pals',
    category: 'EVENT',
    start: '2026-01-20T10:00:00',
    end: '2026-01-25T20:00:00',
    status: 'TBD',
    description: 'Evento Precious Pals (detalles por anunciar).',
    children: ['taken-over']
  },
  {
    id: 'taken-over',
    title: 'Taken Over',
    category: 'EVENT',
    start: '2026-01-23T10:00:00',
    end: '2026-01-25T20:00:00',
    status: 'TBD',
    description: 'Takeover de Team GO Rocket.'
  },

  // SHADOW RAID DAY
  {
    id: 'shadow-raid-day',
    title: 'Shadow Raid Day',
    category: 'RAID_DAY',
    start: '2026-01-24T14:00:00',
    end: '2026-01-24T17:00:00',
    status: 'TBD',
    description: 'Día de incursiones Shadow (detalles por anunciar).'
  },

  // INTO THE DEPTHS
  {
    id: 'into-the-depths',
    title: 'Into the Depths',
    category: 'EVENT',
    start: '2026-01-27T10:00:00',
    end: '2026-02-01T20:00:00',
    status: 'TBD',
    description: 'Evento Into the Depths (detalles por anunciar).'
  },

  // DYNAMAX WEEKEND
  {
    id: 'dynamax-weekend',
    title: 'Dynamax Weekend',
    category: 'EVENT',
    start: '2026-01-31T10:00:00',
    end: '2026-02-01T20:00:00',
    status: 'TBD',
    description: 'Fin de semana especial Dynamax (detalles por anunciar).'
  },

  // SPOTLIGHT HOURS (Martes 18:00-19:00)
  {
    id: 'spotlight-barboach',
    title: 'Spotlight Hour: Barboach',
    category: 'SPOTLIGHT',
    start: '2026-01-06T18:00:00',
    end: '2026-01-06T19:00:00',
    status: 'CONFIRMED',
    spawns: ['Barboach'],
    bonuses: ['2× XP por captura'],
    description: 'Hora destacada con Barboach.'
  },
  {
    id: 'spotlight-mareep',
    title: 'Spotlight Hour: Mareep',
    category: 'SPOTLIGHT',
    start: '2026-01-13T18:00:00',
    end: '2026-01-13T19:00:00',
    status: 'CONFIRMED',
    spawns: ['Mareep'],
    bonuses: ['2× XP por evolución'],
    description: 'Hora destacada con Mareep.'
  },
  {
    id: 'spotlight-hatenna',
    title: 'Spotlight Hour: Hatenna',
    category: 'SPOTLIGHT',
    start: '2026-01-20T18:00:00',
    end: '2026-01-20T19:00:00',
    status: 'CONFIRMED',
    spawns: ['Hatenna'],
    bonuses: ['2× Caramelos por transferencia'],
    description: 'Hora destacada con Hatenna.'
  },
  {
    id: 'spotlight-foongus',
    title: 'Spotlight Hour: Foongus',
    category: 'SPOTLIGHT',
    start: '2026-01-27T18:00:00',
    end: '2026-01-27T19:00:00',
    status: 'CONFIRMED',
    spawns: ['Foongus'],
    bonuses: ['2× Polvo Estelar por captura'],
    description: 'Hora destacada con Foongus.'
  },

  // RAID HOURS (Miércoles 18:00-19:00)
  {
    id: 'raid-hour-genesect-1',
    title: 'Raid Hour: Genesect',
    category: 'RAID_HOUR',
    start: '2026-01-07T18:00:00',
    end: '2026-01-07T19:00:00',
    status: 'CONFIRMED',
    raids: ['5★: Genesect (Burn)', '5★: Genesect (Chill)'],
    description: 'Hora de incursiones Genesect.'
  },
  {
    id: 'raid-hour-genesect-2',
    title: 'Raid Hour: Genesect',
    category: 'RAID_HOUR',
    start: '2026-01-14T18:00:00',
    end: '2026-01-14T19:00:00',
    status: 'CONFIRMED',
    raids: ['5★: Genesect (Burn)', '5★: Genesect (Chill)'],
    description: 'Hora de incursiones Genesect.'
  },
  {
    id: 'raid-hour-thundurus',
    title: 'Raid Hour: Thundurus',
    category: 'RAID_HOUR',
    start: '2026-01-21T18:00:00',
    end: '2026-01-21T19:00:00',
    status: 'CONFIRMED',
    raids: ['5★: Thundurus (Incarnate)'],
    description: 'Hora de incursiones Thundurus.'
  },
  {
    id: 'raid-hour-tornadus',
    title: 'Raid Hour: Tornadus',
    category: 'RAID_HOUR',
    start: '2026-01-28T18:00:00',
    end: '2026-01-28T19:00:00',
    status: 'CONFIRMED',
    raids: ['5★: Tornadus (Incarnate)'],
    description: 'Hora de incursiones Tornadus.'
  },

  // MAX MONDAY (Lunes 18:00-19:00)
  {
    id: 'max-monday-drampa',
    title: 'Max Monday: Drampa',
    category: 'MAX_MONDAY',
    start: '2026-01-05T18:00:00',
    end: '2026-01-05T19:00:00',
    status: 'CONFIRMED',
    spawns: ['Dynamax Drampa'],
    description: 'Power Spot takeover Drampa.'
  },
  {
    id: 'max-monday-caterpie',
    title: 'Max Monday: Caterpie',
    category: 'MAX_MONDAY',
    start: '2026-01-12T18:00:00',
    end: '2026-01-12T19:00:00',
    status: 'CONFIRMED',
    spawns: ['Dynamax Caterpie'],
    description: 'Power Spot takeover Caterpie.'
  },
  {
    id: 'max-monday-beldum',
    title: 'Max Monday: Beldum',
    category: 'MAX_MONDAY',
    start: '2026-01-19T18:00:00',
    end: '2026-01-19T19:00:00',
    status: 'CONFIRMED',
    spawns: ['Dynamax Beldum'],
    description: 'Power Spot takeover Beldum.'
  },
  {
    id: 'max-monday-roggenrola',
    title: 'Max Monday: Roggenrola',
    category: 'MAX_MONDAY',
    start: '2026-01-26T18:00:00',
    end: '2026-01-26T19:00:00',
    status: 'CONFIRMED',
    spawns: ['Dynamax Roggenrola'],
    description: 'Power Spot takeover Roggenrola.'
  },

  // ROTACIONES 5★ (Cambian 10:00 hora local)
  {
    id: '5star-blacephalon',
    title: '5★: Blacephalon',
    category: 'RAID_ROTATION',
    start: '2026-01-01T10:00:00',
    end: '2026-01-05T10:00:00',
    status: 'CONFIRMED',
    raids: ['5★: Blacephalon'],
    description: 'Rotación 5 estrellas.'
  },
  {
    id: '5star-genesect',
    title: '5★: Genesect',
    category: 'RAID_ROTATION',
    start: '2026-01-05T10:00:00',
    end: '2026-01-16T10:00:00',
    status: 'CONFIRMED',
    raids: ['5★: Genesect (Burn)', '5★: Genesect (Chill)'],
    description: 'Rotación 5 estrellas.'
  },
  {
    id: '5star-thundurus',
    title: '5★: Thundurus',
    category: 'RAID_ROTATION',
    start: '2026-01-16T10:00:00',
    end: '2026-01-25T10:00:00',
    status: 'CONFIRMED',
    raids: ['5★: Thundurus (Incarnate)'],
    description: 'Rotación 5 estrellas.'
  },
  {
    id: '5star-tornadus',
    title: '5★: Tornadus',
    category: 'RAID_ROTATION',
    start: '2026-01-25T10:00:00',
    end: '2026-02-01T10:00:00',
    status: 'CONFIRMED',
    raids: ['5★: Tornadus (Incarnate)'],
    description: 'Rotación 5 estrellas.'
  },

  // ROTACIONES MEGA (Cambian 10:00 hora local)
  {
    id: 'mega-blaziken',
    title: 'Mega: Blaziken',
    category: 'MEGA_ROTATION',
    start: '2026-01-05T10:00:00',
    end: '2026-01-16T10:00:00',
    status: 'CONFIRMED',
    raids: ['Mega: Mega Blaziken'],
    description: 'Rotación Mega.'
  },
  {
    id: 'mega-sceptile',
    title: 'Mega: Sceptile',
    category: 'MEGA_ROTATION',
    start: '2026-01-16T10:00:00',
    end: '2026-01-25T10:00:00',
    status: 'CONFIRMED',
    raids: ['Mega: Mega Sceptile'],
    description: 'Rotación Mega.'
  },
  {
    id: 'mega-ampharos',
    title: 'Mega: Ampharos',
    category: 'MEGA_ROTATION',
    start: '2026-01-25T10:00:00',
    end: '2026-02-01T10:00:00',
    status: 'CONFIRMED',
    raids: ['Mega: Mega Ampharos'],
    description: 'Rotación Mega.'
  },

  // SHADOW WEEKENDS
  {
    id: 'shadow-cresselia',
    title: 'Shadow: Cresselia (Fines de semana)',
    category: 'SHADOW_ROTATION',
    start: '2026-01-02T00:00:00',
    end: '2026-02-01T23:59:00',
    status: 'CONFIRMED',
    raids: ['5★ Shadow: Shadow Cresselia'],
    description: 'Shadow Cresselia en fines de semana.',
    notes: 'Solo viernes, sábado y domingo'
  },

  // MAX BATTLES DIARIOS
  {
    id: 'max-omanyte',
    title: 'Max Battles: Omanyte',
    category: 'MAX_MONDAY',
    start: '2026-01-01T00:00:00',
    end: '2026-01-05T23:59:00',
    status: 'CONFIRMED',
    spawns: ['Dynamax Omanyte'],
    description: 'Dynamax Omanyte en Power Spots.'
  },
  {
    id: 'max-drampa-week',
    title: 'Max Battles: Drampa',
    category: 'MAX_MONDAY',
    start: '2026-01-05T00:00:00',
    end: '2026-01-12T23:59:00',
    status: 'CONFIRMED',
    spawns: ['Dynamax Drampa'],
    description: 'Dynamax Drampa en Power Spots.'
  },
  {
    id: 'max-caterpie-week',
    title: 'Max Battles: Caterpie',
    category: 'MAX_MONDAY',
    start: '2026-01-12T00:00:00',
    end: '2026-01-19T23:59:00',
    status: 'CONFIRMED',
    spawns: ['Dynamax Caterpie'],
    description: 'Dynamax Caterpie en Power Spots.'
  },
  {
    id: 'max-beldum-week',
    title: 'Max Battles: Beldum',
    category: 'MAX_MONDAY',
    start: '2026-01-19T00:00:00',
    end: '2026-01-26T23:59:00',
    status: 'CONFIRMED',
    spawns: ['Dynamax Beldum'],
    description: 'Dynamax Beldum en Power Spots.'
  },
  {
    id: 'max-roggenrola-week',
    title: 'Max Battles: Roggenrola',
    category: 'MAX_MONDAY',
    start: '2026-01-26T00:00:00',
    end: '2026-02-02T23:59:00',
    status: 'CONFIRMED',
    spawns: ['Dynamax Roggenrola'],
    description: 'Dynamax Roggenrola en Power Spots.'
  }
];

// ============================================================================
// FUNCIONES AUXILIARES
// ============================================================================

export function getAllEvents(): Event[] {
  return calendarDataset;
}

export function getEventsForDate(date: Date): Event[] {
  const dateStr = date.toISOString().split('T')[0];
  return calendarDataset.filter(event => {
    const eventStart = event.start.split('T')[0];
    const eventEnd = event.end.split('T')[0];
    return dateStr >= eventStart && dateStr <= eventEnd;
  });
}

export function getEventsByCategory(category: EventCategory): Event[] {
  return calendarDataset.filter(event => event.category === category);
}

export function getActiveEvents(referenceDate: Date = new Date()): Event[] {
  return calendarDataset.filter(event => {
    const start = new Date(event.start);
    const end = new Date(event.end);
    return referenceDate >= start && referenceDate <= end;
  });
}

export function getUpcomingEvents(referenceDate: Date = new Date()): Event[] {
  return calendarDataset
    .filter(event => new Date(event.start) > referenceDate)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
}
