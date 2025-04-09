import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { interval, map, Observable } from 'rxjs';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { FormComponent } from "../form/form.component";
import { WebWorkerService } from '../web-worker.service';

@Component({
  selector: 'app-table',
  imports: [AsyncPipe, DatePipe, JsonPipe, FormComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {


  constructor(private webWorkerService: WebWorkerService,public apiService:ApiService) {
    console.log("called");
    this.performTask();
  }

  async performTask() {
   this.webWorkerService.executeTask(10000000000);
  //  console.log('Result:', result);
  }
  
  tableData:any[]=[];

  currentTime$!: Observable<Date>;


  ngOnInit(): void {
     // Create an observable that emits the current time every second
    //  this.currentTime$ = interval(1000).pipe(map(() => new Date()));
    this.getData();  
  }

  onCollapse(){
    this.apiService.onCollapse();
  }

  getData() {
    // subscribe
    this.apiService.getPostService().subscribe((res: any) => {
      console.log(res, 'test');
      this.tableData = res;
    });
  }
}
