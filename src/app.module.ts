import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntryController } from './entry/entry.controller';
import { ImageController } from './image/image.controller';
import { CompanyController } from './company/company.controller';

@Module({
  imports: [],
  controllers: [AppController, EntryController, ImageController, CompanyController],
  providers: [AppService],
})
export class AppModule {}
