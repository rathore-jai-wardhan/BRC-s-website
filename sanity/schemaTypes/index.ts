import { type SchemaTypeDefinition } from 'sanity'
import { run } from './run'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [run],
}