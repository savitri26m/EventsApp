import { Directive, OnInit, ElementRef, Input } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  private ele: HTMLElement ; 
  @Input() appModalTrigger: string;

  constructor(private elRef: ElementRef) {
    this.ele = elRef.nativeElement;
   }

  ngOnInit() {
   this.ele.addEventListener('click', e => {
      $(`#${this.appModalTrigger}`).modal({})  //making the id field dynamic
   })
  }

}
