export interface configInterface {
  http: httpInterface
  db: dbInterface
}

interface httpInterface {
  port: number
}
interface dbInterface {
  postgres: postgresInterface
  mongodb: mongoInterface
}

interface postgresInterface {
  url: string
  port: number
  database: string
}
interface mongoInterface {
  url: string
  port: number
  session: {
    dbname: string
    user: string
    password: string
    secret: string
  }
  database: {
    user: string
    password: string
    dbname: string
  }
}
