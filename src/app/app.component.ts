import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebWorkerService } from './web-worker.service';
import { Subscription } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'test';
  private uploadSubscription!: Subscription;

  constructor(private webWorkerService: WebWorkerService,private apiService:ApiService) {
    console.log("called");
    // this.performTask();
  }
  ngOnInit() {
    this.getCssFile();
    this.uploadSubscription = this.webWorkerService.uploadCompletion$.subscribe(
      result => {
        console.log('Upload successful:', result);
      },
      error => {
        console.error('Upload failed:', error);
      }
    );
    this.loadObi();
  }

  loadObi(){
    const node = document.createElement('script');
    node.src = 'https://jsl.prod.obi.aol.com/obipmservice/obick.umd.js';
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  getCssFile(){
    this.apiService.getCss().subscribe(res=>{
      console.log(res);
    })
  }

  ngOnDestroy() {
    if (this.uploadSubscription) {
      this.uploadSubscription.unsubscribe();
    }
  }

  async performTask() {
   const result = await this.webWorkerService.executeTask(10000000000);
   console.log('Result:', result);
  }
}
