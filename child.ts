import { Parent } from './parent';

export class Child extends Parent {
  someArray = [1, 5, 7, 3, 9, 4, 5];

  someArray2 = [1, 5, 7, 3, 9, 5, 7, 4, 5];

  constructor() {
    super();
    this.someMethod();
  }

  getData() {
    super.getData();
  }

  someMethod() {
    this.someArray = [...this.someArray2];
    console.log(this.someArray);

    for (let i = 0; i <= this.someArray.length; i++) {
      let temp = this.someArray[i];
      console.log(this.someArray[i], temp, this.someArray[i + 1]);
      // this.someArray[i] = this.someArray[i + 1];
      //   this.someArray[i + 1] = temp;
    }
    console.log(this.someArray);
  }
}
