import { Component, OnInit } from '@angular/core';
import { TodoserviecService } from '../todoserviec.service';

@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.css']
})
export class CreatetodoComponent implements OnInit {

  desc: string;
  date: Date;

  constructor(private service: TodoserviecService) {
    this.desc = '';
    this.date = new Date();
  }

  ngOnInit(): void {}

  create() {
    this.service.create({ "task": this.desc, "date": this.date, "done": false })
      .subscribe(
        (res) => { console.log("success"); },
        (err) => { console.log(err); }
      );
  }
}
