import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align: center;">
    <h1>Welcome to {{title}}</h1>
    <h1 class="stg">Mohith</h1>
    <h1 [class] = "classclo">Mohith</h1>
    <h1 class="sti" [class] = "classclo">Mohith</h1>
    <h1 [class.str] = "hasError">Mohith</h1>
    <h1 [ngClass] = "objclas">Mohith</h1>
  </div>
  `,
  styles: [`
  .stg{
    color: green;
  }
  .str{
    color: red;
  }
  .sti{
    font-style: italic;
  }
  `]
})
export class AppComponent implements OnInit{
  
  public title = 'class-binding';
  public classclo = "str";
  public hasError = true;

  public objclas = {
      "stg": this.hasError,
    "str": !this.hasError,
    "sti": this.hasError
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
