import { DataSource } from "typeorm";
// import * as mysqlDriver from "mysql2"

export const connectionSource = new DataSource({
    // driver: mysqlDriver,
    type : "postgres",
    host: "ec2-3-230-24-12.compute-1.amazonaws.com",
    port: 5432,
    username: "szzrdmckqyjosi",
    password: "b0e5c42f587f3c418ff37da77bc72086d2a66cabf02d1246f92cc1aa8381194d",
    database: "d10ftl92k1m0at",
    entities : ["dist/**/*.entity{.ts,.js}"],
    synchronize : true,
    migrations: [
        "dist/src/db/migrations/*.{ts,js}",
    ]
})
