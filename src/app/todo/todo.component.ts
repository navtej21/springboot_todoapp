import { Component, OnInit } from '@angular/core';
import { TodoserviecService } from '../todoserviec.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

 todos:any[]=[];

  constructor(private service: TodoserviecService,private route:Router) {}

  id:number=0;



  delete(n:number){
    this.service.delete(n).subscribe((res)=>console.log("success"),
  (err)=>console.log(err));
  
  }

  update(n:number){

   this.route.navigate(['update',n])

  }

  ngOnInit() {

    this.service.getdata().subscribe(
      (res) => {
       this.todos=res;
       console.log(this.todos);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
