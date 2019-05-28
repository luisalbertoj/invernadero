import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private _homeService: HomeService) { }

  ngOnInit() {
  }
}
