import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';


class FormDto {
  title!: string;
  body!: string;
}

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  
  formDto: FormDto = new FormDto();
  
  isItCollapsed:any;
  
  constructor(private http:HttpClient,private apiService:ApiService){}
  
  
  ngOnInit(): void {
    this.isItCollapsed = this.apiService.collapse;
  }
  
  handleFile(event:any){
    let files:any[] = [];
    files = event.target.files;
    console.log(files[0].slice(0,5242880));
  }
}
