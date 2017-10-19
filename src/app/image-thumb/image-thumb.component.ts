import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../models/image';

@Component({
  selector: 'image-thumb',
  templateUrl: './image-thumb.component.html',
  styleUrls: ['./image-thumb.component.css']
})
export class ImageThumbComponent implements OnInit {

  @Input() image: Image;

  constructor() { }

  ngOnInit() {
  }

}
