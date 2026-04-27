// This file contains all the basic configuration logic for the app server to work
import "dotenv/config";

type ServerConfig = {
    PORT: number
}

type databaseConfig = {
    DATABASE_URL: string
}

function loadEnv() {
    console.log(`Environment variables loaded`);
}

loadEnv();

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001
};

console.log(process.env.DATABASE_URL);
export const databaseConfig: databaseConfig = {
    
    DATABASE_URL: String(process.env.DATABASE_URL) || ""
}