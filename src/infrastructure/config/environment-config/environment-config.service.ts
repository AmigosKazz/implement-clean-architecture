import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/databaseConfig';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig{
    constructor(private configService : ConfigService){}

    getDatabaseHost(): string {
        return this.configService.get<string>('DATABASE_HOST');
    }

    getDatabasePort(): number {
        return this.configService.get<number>('DATABASE_PORT');
    }

    getDatabaseUser(): string {
        return this.configService.get<string>('DATABASE_USER');
    }

    getDatabaseName(): string {
        return this.configService.get<string>('DATABASE_NAME');
    }

    getDatabasePassword(): string {
        return this.configService.get<string>('DATABASE_PASSWORD');
    }

    getDatabaseSchema(): string {
        return this.configService.get<string>('DATABASE_SCHEMA');
    }
    
    getDatabaseSync(): boolean {
        return this.configService.get<boolean>('DATABASE_SYNCHRONIZE');
    }
    
}
