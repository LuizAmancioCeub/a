import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() =>{
      this.load = "global-loader-fade-out"
    },1500)
  }
  load:string = "";

}
