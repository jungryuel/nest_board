// export function ormConfig(): TypeOrmModuleOptions {
//   const commonConf = {
//     SYNCHRONIZE: true,
//     // ENTITIES: [__dirname + './**/*.entity.{ts, js}'],
//     ENTITIES: [Comment, Movie, Review, User],
//     // MIGRATIONS: [__dirname + '/migrations/**/*{ts,.js}'],
//     // MIGRATIONS_RUN: false,
//   };

//   return {
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: '1234',
//     database: 'nest',
//     logging: true,
//     connectString: 'localhost:1521/orcl',
//     synchronize: commonConf.SYNCHRONIZE,
//     entities: commonConf.ENTITIES,
//     // migrations: commonConf.MIGRATIONS,
//     // migrationsRun: commonConf.MIGRATIONS_RUN,
//   };
// }
