import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Checkout these pictures';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.vippng.com/png/detail/394-3947569_random-image-from-user-small-t-rex-pixel.png';
  image3 = 'https://404store.com/2018/09/01/random-small-images43.md.png';

  constructor() { }

  ngOnInit() {
  }

}