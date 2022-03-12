import { gql } from "apollo-server-micro"
import * as types from "./types"
import { makeSchema } from "nexus"
import { join } from "path"

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(process.cwd(), "graphql", "shema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "graphql", "context.ts"),
  },
})
