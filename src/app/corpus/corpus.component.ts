import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image';
import { CorpusService } from '../services/corpus.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-corpus',
  templateUrl: './corpus.component.html',
  styleUrls: ['./corpus.component.css']
})
export class CorpusComponent implements OnInit {

  images: Image[] = [];

  constructor( private corpusService : CorpusService ) { }

  getCorpusImages() : void {
    this.corpusService.getCorpusImages().then(images => this.images = images);
  }

  imageChangeListener($event) : void {
    this.loadImages($event.target);
  }

  cacheImage(image:Image) {
    this.corpusService.addImage(image);
  }

  loadImages(inputImages : any) : void {

    var files : File[] = inputImages.files; // FileList object
    console.log(files);

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      console.log('processing file', i);
      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();
      var self = this;

      // Closure to capture the file information.
      reader.onload = (function(theFile, self) {
        var self = self
        return function(e) {
          // Render thumbnail.
          console.log(self);
          console.log('processing image');
          let image = {title: theFile.name, path: e.target.result};
          self.cacheImage(image);
          /*addTo          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);*/
        };
      })(f, self);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  ngOnInit() {
    this.getCorpusImages();
  }

}
