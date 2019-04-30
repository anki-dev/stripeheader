import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  headerData: any;
  items: any;

  constructor(private http: HttpClient) { }

  title = 'stripeheader';
  foo(v, data) {
    document.querySelector('.boxSlide').setAttribute('style', 'display:block;left:' + v + '');
    this.items = data;
  }
  moo() {
    document.querySelector('.boxSlide').setAttribute('style', 'display:none;left:0')
  }
  ngOnInit() {
    let headerURL = 'https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4';
    this.http.get(headerURL).subscribe(result => {
      this.headerData = result;
    })
  }
}
