import { DataSource } from 'typeorm';
import functions from './seeders';

const AppDataSource = new DataSource({
    type: 'mssql',
    host: 'localhost',    
    username: 'sa',
    password: 'Soad21@Lp',
    database: 'products',
    extra: {
        trustServerCertificate: true
    },
    migrations: ['src/database/migrations/*{.ts,.js}'],
    entities: ['src/app/entities/*{.ts,.js}']   
});

AppDataSource.initialize()
    .then(() => { 
        console.log('Conexão com o banco de dados inicializada com sucesso!!');
        functions.map(async (value) => await value());
    })
    .catch(err => console.log('Ocorreu um erro ao estabelecer a coneção', err));

export default AppDataSource;