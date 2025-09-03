import path from 'path'
import dotenv from 'dotenv'
import server from './server.js'

//configure as according the NODE_ENV and the corresponding .env file

const env = process.env.NODE_ENV ?? 'dev';
if (!process.env.NODE_ENV) {
    console.log('NODE_ENV not set, defaulting to dev');
}

dotenv.config({
    path: path.resolve(process.cwd(), 'config', `.env.${env}`)
});

const app = server;

const port = process.env.PORT ?? 3000;

if (!process.env.PORT) {
    console.log('Port not set, defaulting to 3000');
};

const host = process.env.HOST ?? 'localhost';

if (!process.env.HOST) {
    console.log('host not set, default to localhost');
}

app.listen(port, () => {
    console.log(`Server is alive on ${host}:${port.toString()}`)
});
