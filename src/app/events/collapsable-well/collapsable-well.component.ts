import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsable-well',
  templateUrl: './collapsable-well.component.html',
  styleUrls: ['./collapsable-well.component.css']
})
export class CollapsableWellComponent implements OnInit {

  @Input() sessionTitle: string;
  visible: boolean = false;
 
  constructor() { }

  ngOnInit(): void {
  }

  toggleSession(){
    this.visible = !this.visible;
    console.log(this.visible);
  }

}
