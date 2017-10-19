import { Injectable } from '@angular/core';
import { Image } from '../models/image';
import { IMAGES } from '../data/mock-images';

@Injectable()

export class CorpusService {

  images : Image[] = [];

  getCorpusImages() : Promise<Image[]> {
    return Promise.resolve(this.images);
  }

  getCorpusImage(id: String ) : Promise<Image> {
    return this.getCorpusImages().then(images => images.find(image => image.title === id));
  }

  addImage(image:Image) : void {
    this.images.push(image);
  }
}
