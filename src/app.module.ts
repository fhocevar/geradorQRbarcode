import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarcodeModule } from './barcode.module';
import { BarcodeController } from './barcode.controller';
import { BarcodeService } from './barcode.service';

@Module({
  imports: [BarcodeModule],
  controllers: [AppController, BarcodeController],
  providers: [AppService, BarcodeService],
})
export class AppModule {}
