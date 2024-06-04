import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoserviecService } from '../todoserviec.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  n: number = 0;
  date: any;
  desc: any;

  constructor(private route: ActivatedRoute, private service: TodoserviecService) {}


  update(n:number){
    this.service.putdata(n,{"task":this.desc,"date":this.date,"done":false}).subscribe((res)=>console.log("sucess"),(err)=>console.log(err));
  }

  ngOnInit() {
  this.n = this.route.snapshot.params["id"];
  this.service.getsingledata(this.n).subscribe(
    (res) => {
     this.date=new Date(res.date).toISOString().split("T")[0];
     this.desc=res.task;
      console.log(this.desc);
      console.log(this.date);
    },
    (err) => console.log(err)
  );
}

}
