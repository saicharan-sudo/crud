import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebWorkerService {
  
  private worker: Worker;
  private uploadCompletionSubject = new Subject<any>();
  
  uploadCompletion$ = this.uploadCompletionSubject.asObservable();
  
  constructor() {
    this.worker = new Worker(new URL('./worker', import.meta.url));
  }
  
  executeTask(data: any) {
    // return new Promise((resolve, reject) => {
    //posting from main to worker thread
    this.worker.postMessage(data);
    this.worker.onmessage = ({ data }) => {
      // waiting for response to be fetched
      // resolve(data);
      if (data) {
        this.uploadCompletionSubject.next(data);
      } else {
        this.uploadCompletionSubject.error(data.error);
      }
    };
    // });
  }
}
