import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

import { ImagesService } from './images.service';
import { Image } from './models/image.entity';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './static',
        filename: (_, file, cb) => {
          const extension = file.originalname.split('.')[1];
          const filename = uuidv4() + '.' + extension;
          cb(null, filename);
        },
      }),
    }),
  )
  async upload(@UploadedFile() image: Express.Multer.File): Promise<Image> {
    return await this.imagesService.create(image.filename);
  }
}
