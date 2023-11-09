import { DataSource } from "typeorm";
// import * as mysqlDriver from "mysql2"

export const connectionSource = new DataSource({
    // driver: mysqlDriver,
    type : "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "sima",
    entities : ["dist/**/*.entity{.ts,.js}"],
    synchronize : false,
    migrations: [
        "dist/src/db/migrations/*.{ts,js}",
    ]
})
