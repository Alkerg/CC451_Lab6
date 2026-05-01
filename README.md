# KnowledgeMap — Generador de Mapas de Conocimiento

Aplicación web que convierte cualquier tema en un mapa de nodos de conocimiento usando agentes IA especializados. Cada agente domina un área distinta y, al preguntarle sobre un tema, devuelve los conceptos clave organizados como nodos.

## Agentes disponibles

| Agente | Área | Descripción |
|--------|------|-------------|
| EULER | Matemáticas | Álgebra, cálculo, estadística, geometría, lógica |
| DARWIN | Ciencias | Biología, química, física, astronomía, ecología |
| SÓCRATES | Humanidades | Historia, filosofía, literatura, arte, sociología |
| TURING | Programación | Algoritmos, patrones de diseño, .NET, Python, SQL |

Los agentes están renderizados como nodos 3D interactivos en el espacio. Al hacer clic en uno se abre un panel de chat donde puedes escribirle directamente.

## Cómo ejecutarlo

No hay servidor ni proceso de build. Solo abre `knowledgemap_agents.html` en el navegador.

Antes de abrirlo, necesitas poner tu propia API key de Gemini en `index.js`:

```js
// línea 2 de index.js
const GEMINI_API_KEY = "tu-api-key-aqui";
```

Puedes obtener una key gratuita en [Google AI Studio](https://aistudio.google.com/app/apikey).

## Cómo usarlo

1. Abre el archivo HTML en el navegador
2. Verás los 5 agentes flotando como nodos en el espacio — mueve el mouse para rotar la vista
3. Haz clic en cualquier agente
4. Escríbele un tema (ej: *"fotosíntesis"*, *"programación orientada a objetos"*, *"Segunda Guerra Mundial"*)
5. El agente responde con una explicación breve y genera los nodos de conocimiento del tema

## Tecnologías

- [Three.js](https://threejs.org/) — visualización 3D de los agentes
- [Gemini API](https://ai.google.dev/) — modelo de lenguaje que alimenta a los agentes
- HTML + CSS + JavaScript vanilla — sin frameworks ni dependencias adicionales
