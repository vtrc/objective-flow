# Objective Flow Skills

Objective Flow es un sistema de habilidades estricto y neutral al dominio para guiar agentes a través de cualquier objetivo no trivial: definición, exploración, enfoque, planificación, ejecución, revisión, cierre y aprendizaje.

Está inspirado en [Superpowers](https://github.com/obra/superpowers), pero generalizado más allá del desarrollo de software. En lugar de asumir código, pruebas, ramas, commits o pull requests, Objective Flow usa conceptos neutrales al dominio: objetivos, restricciones, evidencia, puntos de control, revisión, traspaso y verificación de cierre.

## Qué ofrece

- Una habilidad de inicio/router: `using-objective-flow`
- Un router de ciclo de vida: `objective-flow`
- Diez habilidades enfocadas para definición, opciones, planificación, ejecución, revisión, cierre, aprendizaje, diagnóstico y decisiones
- Puntos de control estrictos para que los agentes no se salten aclaraciones, planificación, revisión ni verificación de cierre
- Formato portátil de Agent Skills: cada habilidad es una carpeta que contiene un `SKILL.md`

## Habilidades

| Habilidad | Propósito |
| --- | --- |
| `using-objective-flow` | Establece la disciplina y enruta el objetivo hacia la habilidad correcta. |
| `objective-flow` | Coordina el ciclo de vida desde la definición hasta el aprendizaje. |
| `frame-objective` | Aclara objetivos vagos, solapados o mal delimitados. |
| `explore-options` | Compara enfoques viables antes de elegir una dirección. |
| `shape-approach` | Convierte una dirección aprobada en un enfoque listo para ejecutar. |
| `plan-work` | Convierte el enfoque definido en un plan ejecutable. |
| `execute-plan` | Ejecuta una acción validada a la vez con evidencia y adaptación. |
| `review-quality` | Revisa planes, decisiones, entregables y traspasos antes del cierre. |
| `confirm-completion` | Verifica que el objetivo original se haya cumplido de verdad. |
| `capture-learning` | Convierte los resultados en aprendizajes reutilizables. |
| `diagnose-cause` | Rastrea fallos o problemas recurrentes hasta causas respaldadas por evidencia. |
| `choose-option` | Toma decisiones defendibles bajo trade-offs e incertidumbre. |

## Ciclo de vida

```text
frame -> explore -> shape -> plan -> execute -> review -> complete -> learn
```

El flujo puede comprimirse para trabajos simples y reversibles, pero las revisiones y la verificación de cierre no deberían desaparecer. Comprimir significa hacer una fase de forma breve, no fingir que esa fase no existe.

## Agentes en paralelo

Objective Flow puede usar varios agentes en paralelo cuando el trabajo se divide en ramas independientes.

Usa agentes en paralelo cuando:

- las opciones son independientes,
- las tareas no se bloquean entre sí,
- y el coste de coordinación es menor que el tiempo que se ahorra.

No uses agentes en paralelo cuando:

- un paso depende del resultado de otro,
- la decisión todavía no está clara,
- o el trabajo es tan pequeño que el paralelismo solo añade ruido.

Así el flujo se mantiene disciplinado: el paralelismo es una decisión deliberada, no el valor por defecto.

## Instalación

Utiliza la ruta de instalación correspondiente a tu cliente de agentes:

- **Codex**: instala el plugin del repositorio; `.codex-plugin/plugin.json` apunta a `skills/`.
- **Claude**: instala el plugin del repositorio desde `.claude-plugin/`; `CLAUDE.md` proporciona la guía del proyecto.
- **OpenCode**: añade el plugin basado en Git a `opencode.json`:

  ```json
  {
    "plugin": [
      "objective-flow@git+https://github.com/vtrc/objective-flow.git"
    ]
  }
  ```

- **Otros clientes compatibles con Agent Skills**: copia cada carpeta dentro de `skills/` para que contenga su propio `SKILL.md`.

Consulta [`docs/INSTALLATION.md`](docs/INSTALLATION.md) para ver los pasos completos de instalación y verificación.

## Soporte por harness

Este repositorio incluye:

- `.codex-plugin/plugin.json` para arranque tipo plugin en Codex,
- `.claude-plugin/` para metadatos de plugin en Claude,
- `.opencode/` para metadatos de instalación en OpenCode,
- `CLAUDE.md` para la guía del proyecto en Claude Code,
- `OPENCODE.md` para la guía del proyecto en OpenCode,
- `AGENTS.md` para instrucciones a nivel de proyecto,
- y el directorio compartido `skills/` para clientes que cargan Agent Skills directamente.

Los detalles compartidos de arranque y routing están en:

- `docs/HARNESS-BOOTSTRAP.md`
- `docs/ROUTING-DISCIPLINE.md`
- `docs/PLAN-ARTIFACTS.md`
- `docs/EXAMPLE-PLAN.md`
- `docs/SMOKE-FLOWS.md`

## Compatibilidad

Objective Flow sigue la estructura común de Agent Skills:

```text
skill-name/
└── SKILL.md
```

El nombre de la carpeta y el campo `name:` de cada `SKILL.md` están alineados a propósito.

## Inspiración

Objective Flow conserva ese nivel de disciplina, pero lo hace útil para cualquier objetivo: planificación de trabajo, decisiones, aprendizaje, operaciones, organización personal, estrategia, resolución de problemas y toma de decisiones general.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
