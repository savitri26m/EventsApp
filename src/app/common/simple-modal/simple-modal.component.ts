import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {

  @Input() title: string;
  @Input() elementId: string;

  @ViewChild('modalContainer') containerEl: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    $(this.containerEl.nativeElement).modal('hide');
  }

}
