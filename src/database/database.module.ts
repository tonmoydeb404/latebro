import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        user: configService.get<string>('MONGO_USER'),
        pass: configService.get<string>('MONGO_PASS'),
        dbName: configService.get<string>('MONGO_DBNAME'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule implements OnModuleInit {
  private readonly logger = new Logger(DatabaseModule.name);

  async onModuleInit() {
    this.logger.log('Attempting to connect to Database...');

    try {
      const mongoose = await import('mongoose');
      mongoose.connection.once('open', () => {
        this.logger.log('Database connection established successfully.');
      });
      mongoose.connection.on('error', (err) => {
        this.logger.error('Database connection error: ' + err);
      });
    } catch (err) {
      this.logger.error('Error while setting up Database connection: ' + err);
    }
  }
}
