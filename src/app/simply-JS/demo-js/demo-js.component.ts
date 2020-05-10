import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo-js',
  templateUrl: './demo-js.component.html',
  styleUrls: ['./demo-js.component.css']
})
export class DemoJsComponent implements OnInit {

  words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'] ;
  result = this.words.filter(word => word.length > 6);


  numArray = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

   prime(num:number) {
    if(num <= 1) return false;

    else if(num === 2) return true;

    else {
      for(let i = 2; i < num; i++){
        if(num%2 === 0) return true;
        else return false
      }
    }
  } // calc prime number

  primeArray = this.numArray.filter(this.prime);

  array1 = [5, 12, 8, 130, 44];
  checkAdult(age: number) {
    return age >= 18;
  }

  found = this.array1.find(this.checkAdult);

  copyItems = [];

  inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  findCherry = this.inventory.find(e => e.name === 'cherries');

  joinArray = this.array1.join('-')
  
  ngOnInit(): void {
    this.array1.forEach(element => {
     this.copyItems.push(element);
      console.log(element);
      
    });
    console.log("copyItem", typeof this.copyItems, this.copyItems);
    console.log(this.joinArray);
  }
}