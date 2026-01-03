# Changelog - PoGo Calendar

## [2.0.0] - 2026-01-02

### 🎉 Restructuración Completa del Sistema de Datos

#### ✨ Cambios Principales

**1. Nuevo Sistema de Tipos Completo**

- ✅ Agregado `EventCategory` con 11 tipos diferentes
- ✅ Agregado `EventSubcategory` con 20+ subcategorías
- ✅ Agregado `EventStatus`: CONFIRMED, TENTATIVE, TBD
- ✅ Agregado `TimezoneRule`: LOCAL, PST_WINDOW
- ✅ Nueva interfaz `EnrichedEvent` con todos los campos del YAML

**2. Dataset Completo (40+ eventos)**

- ✅ **6 Eventos Principales**: New Year's, Pinch Perfect, High Zaptitude, Precious Pals, Into the Depths, End of Month Event
- ✅ **2 Community Days**: Piplup Classic, Grookey
- ✅ **4 Raid Days**: Kyurem Fusion, Shadow Raid Day, Max Battle Weekend, Dynamax Weekend
- ✅ **Rotaciones**:
  - 4 Rotaciones de Tier 5★
  - 4 Rotaciones de Mega
  - 1 Rotación de Shadow con 5 fines de semana
- ✅ **Eventos Semanales**:
  - 4 Spotlight Hours
  - 4 Raid Hours
  - 4 Max Mondays
- ✅ **1 GO Pass**
- ✅ **4 Semanas de PVP/GBL**

**3. Soporte para Sub-eventos (children)**

- ✅ Shadow Cresselia con 5 eventos hijos (fines de semana)
- ✅ Sistema de relaciones parent-child
- ✅ Función `getAllEvents()` que aplana la jerarquía

**4. Funciones Helper**

```typescript
getAllEvents(); // Obtiene todos los eventos (incluye children)
getEventsByCategory(); // Filtra por categoría
getEventsByTag(); // Filtra por tag
getEventById(); // Busca por ID
getEventsForDate(); // Eventos de una fecha específica
getEventsByStatus(); // Filtra por estado
```

**5. Backward Compatibility**

```typescript
export const events = calendarDataset
export const spotlightHours = [...]
export const raidHours = [...]
export const maxMondays = [...]
export const raidRotations = [...]
```

#### 📝 Componentes Actualizados

**Calendar.astro**

- ✅ Usa `getAllEvents()` para incluir sub-eventos
- ✅ Actualizado `getEventColor()` con 11 categorías
- ✅ Mejoradas animaciones (pulse-slow, scale on hover)
- ✅ Click handler con evento personalizado 'calendar-day-selected'
- ✅ Leyenda ampliada con todas las categorías
- ✅ Data attributes mejorados (data-events con JSON)

**EventModal.astro**

- ✅ Muestra TODOS los campos del evento:
  - Status badge (Confirmado/Tentativo/Por definir)
  - Categoría y subcategoría
  - Timezone y timezone_rule
  - Notas importantes
  - Tags/etiquetas
  - Debuts
  - Bonificaciones con multiplicadores
  - Spawns con shiny indicator
  - Raids
  - Movimientos destacados
  - Investigaciones (field/timed/paid)
  - Sub-eventos expandibles
  - source_refs como links clicables
- ✅ Formato de fechas en español mejorado
- ✅ Colores dinámicos por categoría
- ✅ Listener para eventos de calendario

**EventCard.astro**

- ✅ Tipo actualizado a `EnrichedEvent`
- ✅ Muestra status badge
- ✅ Subcategoría visible
- ✅ Badge de sub-eventos cuando aplica
- ✅ Hover effects mejorados (scale y shadow)
- ✅ Colores por categoría (11 tipos)

**index.astro**

- ✅ Imports actualizados: `calendarDataset`, `getEventsByCategory`, `getAllEvents`
- ✅ Separación de eventos activos/próximos con parseISO
- ✅ Rotaciones filtradas por category
- ✅ Eventos semanales con click handler
- ✅ Descripciones de rotaciones mejoradas
- ✅ Script para abrir modal al hacer click en eventos semanales

#### 🎨 Mejoras de UI/UX

**Animaciones**

- ✅ Pulse lento en indicadores de eventos del calendario
- ✅ Bounce animation al hacer click en día
- ✅ Scale on hover en cards y botones
- ✅ Fade-in-up en hero section
- ✅ Modal appear con scale y translateY

**Interactividad**

- ✅ Calendario completamente interactivo
- ✅ Click en días abre modal con eventos del día
- ✅ Click en cards abre modal con detalles
- ✅ Click en eventos semanales abre modal
- ✅ ESC key para cerrar modal
- ✅ Click fuera del modal lo cierra

**Accesibilidad**

- ✅ aria-hidden en modal
- ✅ aria-label en botones
- ✅ role="dialog" en modal
- ✅ Navegación por teclado
- ✅ Data attributes semánticos

#### 🔧 Mejoras Técnicas

**TypeScript**

- ✅ Tipos estrictos en todo el código
- ✅ Enums para categorías y estados
- ✅ Interfaces completas y documentadas
- ✅ Type guards donde necesario

**Formato de Datos**

- ✅ Fechas en ISO 8601 string format
- ✅ parseISO para conversión Date
- ✅ Timezone information preservada
- ✅ Source refs como array de URLs

**Code Quality**

- ✅ Código limpio y mantenible
- ✅ Comentarios descriptivos
- ✅ Funciones helper reutilizables
- ✅ Separación de responsabilidades
- ✅ Sin duplicación de datos

#### 🐛 Bugs Corregidos

- ✅ Eliminados datos duplicados del antiguo sistema
- ✅ Formato de fechas consistente en toda la app
- ✅ Click handlers funcionando en todos los componentes
- ✅ Modal muestra información completa sin omisiones
- ✅ Calendario muestra TODOS los eventos (incluye children)

#### 📦 Sin Cambios en Dependencias

Las versiones se mantienen:

- Astro 5.16.6
- Tailwind CSS 4.1.18
- date-fns 4.1.0
- TypeScript (latest)

---

## [1.0.0] - 2026-01-01

### Lanzamiento Inicial

- ✨ Calendario interactivo de eventos
- 🎨 Dark mode con persistencia
- 📱 Diseño responsive
- 🎯 Event cards con información básica
- 💬 Modal de detalles
- 🔄 Eventos semanales (Spotlight, Raid Hour, Max Monday)
- ⚔️ Rotaciones de raids
- 🌐 Localización en español

---

**Notas de Migración 1.x → 2.0**

El sistema de datos ha cambiado completamente. Si tienes código personalizado que usa el antiguo formato:

```typescript
// Antiguo (1.x)
const event = events.find((e) => e.type === "community-day");

// Nuevo (2.0)
const event = getEventsByCategory("COMMUNITY_DAY");
```

Las exports de compatibilidad mantienen funcionando el código antiguo, pero se recomienda migrar al nuevo sistema.
