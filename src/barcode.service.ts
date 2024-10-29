import { Injectable, Logger } from '@nestjs/common';
import * as QRCode from 'qrcode';
import * as bwipjs from 'bwip-js';

@Injectable()
export class BarcodeService {
  private readonly logger = new Logger(BarcodeService.name);

  async generateQRCode(data: string): Promise<string> {
    this.logger.log(`Gerando QR Code com os dados: ${data}`);
    try {
      const qrCodeUrl = await QRCode.toDataURL(data);
      this.logger.log('QR Code gerado com sucesso.');
      return qrCodeUrl;
    } catch (err) {
      const errorMessage = (err instanceof Error) ? err.message : String(err);
      this.logger.error('Erro ao gerar QR Code: ' + errorMessage);
      throw new Error('Erro ao gerar QR Code: ' + errorMessage);
    }
  }

  async generateBarcode(data: string): Promise<Buffer> {
    this.logger.log(`Gerando código de barras com os dados: ${data}`);
    return new Promise((resolve, reject) => {
      bwipjs.toBuffer({
        bcid: 'code128',  // Tipo de código de barras
        text: data,       // Dados a serem codificados
        scale: 3,         // Escala do código de barras
        height: 10,       // Altura do código de barras
        includetext: true, // Incluir texto abaixo do código de barras
        textxalign: 'center', // Alinhamento do texto
      }, (err, buffer) => {
        if (err) {
          const errorMessage = (err instanceof Error) ? err.message : String(err);
          this.logger.error('Erro ao gerar código de barras: ' + errorMessage);
          reject(new Error('Erro ao gerar código de barras: ' + errorMessage));
        } else {
          this.logger.log('Código de barras gerado com sucesso.');
          resolve(buffer);
        }
      });
    });
  }
}
