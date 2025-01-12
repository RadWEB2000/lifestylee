import { CodegenConfig } from '@graphql-codegen/cli';

const config:CodegenConfig = {
schema: 'http://cms.lifeestylee.pl/afY78Ddw6w', // Twój endpoint GraphQL
  documents: './src/data/queries/*.graphql', // Ścieżka do zapytań
  generates: {
    './src/types/queries/': {
      plugins: ['typescript', 'typescript-operations','typescript-graphql-request'],
    },
  },
}

export default config;