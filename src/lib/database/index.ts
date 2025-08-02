// Database Library - Design Haus
// Database utilities and configurations

// export { default as dbConfig } from './config'
// export { default as dbClient } from './client'
// export { default as dbHelpers } from './helpers'
// export { default as dbQueries } from './queries'
// export { default as dbMigrations } from './migrations'
// export { default as dbTypes } from './types'

// Database connection and query types
export type DatabaseConfig = {
  host: string
  port: number
  database: string
  username: string
  password: string
  ssl?: boolean
}

export type QueryResult<T = any> = {
  data: T[]
  count: number
  error?: string
}

export type DatabaseOperations = {
  create: <T>(table: string, data: Partial<T>) => Promise<T>
  read: <T>(table: string, id: string) => Promise<T | null>
  update: <T>(table: string, id: string, data: Partial<T>) => Promise<T>
  delete: (table: string, id: string) => Promise<boolean>
  query: <T>(sql: string, params?: any[]) => Promise<QueryResult<T>>
}