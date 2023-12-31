import { DataSource } from "typeorm";
// import * as mysqlDriver from "mysql2"

export const connectionSource = new DataSource({
    type : process.env.DATABASE_TYPE as "mysql",
    host : process.env.DATABASE_HOST,
    port : parseInt(process.env.DATABASE_PORT),
    username : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
    entities : ["dist/**/*.entity{.ts,.js}"],
    synchronize : true,
    migrations: [
        "dist/src/db/migrations/*.{ts,js}",
    ]
})
