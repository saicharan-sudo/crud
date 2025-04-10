import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'a';
ngOnInit(): void {
  this.loadObi();
}
  
  loadObi(){
    const node = document.createElement('script');
    node.src = 'https://jsl.prod.obi.aol.com/obipmservice/obick.umd.js';
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
