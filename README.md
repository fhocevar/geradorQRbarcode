# geradorQRbarcode
gerador de codigos de barras e QR baseado no texto enviado
Aqui está um exemplo de **README** para o código que você forneceu. Este README é adequado para um projeto que utiliza o **NestJS** para gerar QR Codes e códigos de barras:

---

# Barcode Service - NestJS

Este serviço em **NestJS** permite a geração de **QR Codes** e **Códigos de Barras** (utilizando o formato Code 128). Utiliza as bibliotecas **QRCode** para gerar QR Codes e **bwip-js** para gerar códigos de barras.

## Descrição

O `BarcodeService` fornece dois métodos principais:

1. **generateQRCode(data: string)**: Gera um QR Code a partir de uma string fornecida.
2. **generateBarcode(data: string)**: Gera um código de barras no formato Code 128 a partir de uma string fornecida.

## Instalação

Para instalar e usar o serviço, siga os passos abaixo.

### 1. Clonar o repositório

Se ainda não tiver o repositório, clone-o usando o seguinte comando:

```bash
git clone <URL_DO_REPOSITORIO>
cd <DIRETORIO_DO_REPOSITORIO>
```

### 2. Instalar dependências

Use o **npm** ou **yarn** para instalar as dependências do projeto.

Com **npm**:

```bash
npm install
```

Com **yarn**:

```bash
yarn install
```

### 3. Instalar dependências adicionais

O serviço depende das bibliotecas **QRCode** e **bwip-js**, portanto, instale-as também:

```bash
npm install qrcode bwip-js
```

### 4. Configuração

Este serviço é implementado no **NestJS**, então certifique-se de ter o **NestJS** configurado corretamente no seu projeto.

## Uso

O `BarcodeService` pode ser injetado em outros serviços ou controladores para gerar QR Codes e códigos de barras conforme necessário.

### Exemplo de uso no controlador

```typescript
import { Controller, Get, Query } from '@nestjs/common';
import { BarcodeService } from './barcode.service';

@Controller('barcode')
export class BarcodeController {
  constructor(private readonly barcodeService: BarcodeService) {}

  @Get('qrcode')
  async generateQRCode(@Query('data') data: string) {
    return this.barcodeService.generateQRCode(data);
  }

  @Get('barcode')
  async generateBarcode(@Query('data') data: string) {
    const barcodeBuffer = await this.barcodeService.generateBarcode(data);
    return barcodeBuffer.toString('base64'); // Retorna a imagem do código de barras como base64
  }
}
```

Neste exemplo, um controlador foi criado com dois endpoints:

- **GET /barcode/qrcode**: Gera um QR Code.
- **GET /barcode/barcode**: Gera um código de barras no formato Code 128.

### Exemplo de resposta

- Para **QR Code**: O resultado será uma **URL em base64** do QR Code gerado.
- Para **Código de Barras**: O resultado será um **buffer** de imagem do código de barras, que pode ser convertido para **base64** ou servido diretamente como uma imagem.

## Log de Erros

O serviço utiliza a funcionalidade de **logger** do **NestJS** para registrar informações sobre o processo de geração de QR Codes e códigos de barras, além de registrar erros caso ocorram.

### Exemplo de log

```text
[BarcodeService] Gerando QR Code com os dados: <dados_informados>
[BarcodeService] QR Code gerado com sucesso.
[BarcodeService] Erro ao gerar QR Code: <mensagem_do_erro>
```

## Contribuindo

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça o **fork** deste repositório.
2. Crie uma nova **branch** para sua contribuição.
3. Faça as alterações necessárias e **commite** suas mudanças.
4. Envie um **pull request** com suas alterações.

## Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Esse é um modelo básico de **README**. Você pode personalizá-lo mais, conforme as necessidades do seu projeto. Ele inclui as instruções básicas de instalação, configuração e exemplo de uso do serviço.
