import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  @Input() count: number;
  // @Input() voted: boolean;

  votedVal: string;
  @Input() set voted(val){
    this.iconColor = val ? 'green' : 'red';
    this.votedVal = val ? 'Voted': 'Vote';
    console.log(val);
  }

  iconColor: string;

  @Output() vote = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.vote.emit();
  }

}
