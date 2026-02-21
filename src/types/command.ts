 import type { CommandExample } from "./commandExample"

 export interface Command {
    command: string
    description: string
    examples: CommandExample[]
  }