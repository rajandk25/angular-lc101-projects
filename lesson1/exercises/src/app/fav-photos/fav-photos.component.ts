import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ2Uw3WAdvw989s07hf5tFl02LbYH-MrBFrw&usqp=CAU';
  image3 = 'https://404store.com/2018/09/01/random-small-images43.md.png';
  image4 = 'https://media4.giphy.com/media/LmNwrBhejkK9EFP504/200.gif'

  constructor() { }

  ngOnInit() {
  }

}