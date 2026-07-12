import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const pluginDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(pluginDirectory, "../..")
const skillsDirectory = path.join(repositoryRoot, "skills")
const bootstrapSkill = path.join(skillsDirectory, "using-objective-flow", "SKILL.md")

function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n/, "")
}

function readBootstrap() {
  if (!fs.existsSync(bootstrapSkill)) return null
  return stripFrontmatter(fs.readFileSync(bootstrapSkill, "utf8"))
}

export const ObjectiveFlowPlugin = async () => {
  return {
    config: async (config) => {
      config.skills = config.skills || {}
      config.skills.paths = config.skills.paths || []
      if (!config.skills.paths.includes(skillsDirectory)) {
        config.skills.paths.push(skillsDirectory)
      }
    },

    "experimental.chat.messages.transform": async (_input, output) => {
      const bootstrap = readBootstrap()
      if (!bootstrap || !output.messages?.length) return

      const firstUser = output.messages.find((message) => message.info?.role === "user")
      if (!firstUser?.parts?.length) return
      if (firstUser.parts.some((part) => part.type === "text" && part.text.includes("Objective Flow bootstrap"))) return

      const firstPart = firstUser.parts[0]
      firstUser.parts.unshift({
        ...firstPart,
        type: "text",
        text: `Objective Flow bootstrap\n\n${bootstrap}`,
      })
    },
  }
}
