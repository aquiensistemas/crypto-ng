import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'crypto-ng';
  public cryptos;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.cryptos = this.api.getData().pipe(map((data) => { return data.data }));
  }

}
