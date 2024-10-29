import { Controller, Post, Body, Res, Logger } from '@nestjs/common';
import { BarcodeService } from './barcode.service';
import { Response } from 'express';

@Controller('barcode')
export class BarcodeController {
  private readonly logger = new Logger(BarcodeController.name);

  constructor(private readonly barcodeService: BarcodeService) {}

  @Post('qrcode')
  async generateQRCode(@Body('data') data: string, @Res() res: Response) {
    this.logger.log(`Requisição recebida para gerar QR Code com os dados: ${data}`);
    const qrCodeUrl = await this.barcodeService.generateQRCode(data);
    this.logger.log('Retornando URL do QR Code.');
    return res.send({ qrCodeUrl });
  }

  @Post('code128')
  async generateBarcode(@Body('data') data: string, @Res() res: Response) {
    this.logger.log(`Requisição recebida para gerar código de barras com os dados: ${data}`);
    const barcodeBuffer = await this.barcodeService.generateBarcode(data);
    res.type('png');
    this.logger.log('Retornando imagem do código de barras.');
    return res.send(barcodeBuffer);
  }
}
