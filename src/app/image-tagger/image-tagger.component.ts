import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Image } from '../models/image';
import { CorpusService } from '../services/corpus.service';

@Component({
  selector: 'image-tagger',
  templateUrl: './image-tagger.component.html',
  styleUrls: ['./image-tagger.component.css']
})
export class ImageTaggerComponent implements OnInit {

  image : Image;

  constructor(
    private corpusService: CorpusService,
    private route : ActivatedRoute,
    private location : Location
  ) { }

  goBack() : void {
    this.location.back();
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.corpusService.getCorpusImage(params.get('iid')))
      .subscribe(image => this.image = image);
  }

}
