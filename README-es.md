# Objective Flow Skills

Objective Flow es un sistema de habilidades estricto y neutral al dominio para guiar agentes a través de cualquier objetivo no trivial: definición, exploración, enfoque, planificación, ejecución, revisión, cierre y aprendizaje.

Está inspirado en [Superpowers](https://github.com/obra/superpowers), pero ampliado más allá del desarrollo de software. En lugar de asumir código, pruebas, ramas, commits o pull requests, Objective Flow usa conceptos neutrales al dominio: objetivos, restricciones, evidencia, puntos de control, revisión, traspaso y verificación de cierre.

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

## Instalación

Copia las carpetas dentro de `skills/` al directorio de habilidades que use tu cliente de agentes.

Ubicaciones comunes:

- Habilidades de proyecto en OpenCode: `.agents/skills/`
- Habilidades globales en OpenCode: `~/.config/opencode/skills/`
- Otros clientes compatibles con Agent Skills: copia cada carpeta para que contenga su propio `SKILL.md`

Ejemplo:

```bash
mkdir -p .agents/skills
cp -R skills/* .agents/skills/
```

## Compatibilidad

Objective Flow sigue la estructura común de Agent Skills:

```text
skill-name/
└── SKILL.md
```

El nombre de la carpeta y el campo `name:` de cada `SKILL.md` están alineados a propósito.

## Inspiración

Objective Flow está inspirado en el flujo disciplinado de Superpowers: enrutado explícito de habilidades, pensamiento por etapas, planificación antes de actuar, puntos de revisión y comprobaciones de cierre.

La diferencia está en el alcance. Superpowers está optimizado para flujos de desarrollo de software. Objective Flow conserva ese nivel de disciplina, pero lo hace útil para cualquier objetivo: planificación de trabajo, decisiones, aprendizaje, operaciones, organización personal, estrategia, resolución de problemas y toma de decisiones general.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
