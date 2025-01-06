import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import { TypeOrmModuleOptions,TypeOrmModule } from '@nestjs/typeorm';

export const getTypeOrmModuleOptions = (config : EnvironmentConfigService) : TypeOrmModuleOptions => {
    return {
        type: 'postgres',
        host: config.getDatabaseHost(),
        port: config.getDatabasePort(),
        username: config.getDatabaseUser(),
        password: config.getDatabasePassword(),
        database: config.getDatabaseName(),
        schema: config.getDatabaseSchema(),
        synchronize: false,
        entities: [__dirname + '/../../domain/**/*.entity{.ts,.js}'],
        ssl : {
            rejectUnauthorized: false
        },
    } as TypeOrmModuleOptions
}

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [EnvironmentConfigService],
            inject: [EnvironmentConfigService],
            useFactory: getTypeOrmModuleOptions
        })
    ],
})
export class TypeormModule {}
