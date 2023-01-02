import { Parent } from './parent';

export class Child extends Parent {
  someArray = [1, 2, 5, 7, 3, 9, 4, 5];

  someArray2 = [1, 5, 7, 3, 9, 5, 7, 4, 5];

  obj = [
    { name: 'prem', sirname: 'ambodkar' },
    { name: 'prem', sirname: 'ambodkar' },
    { name: 'prem', sirname: 'ambodkar' },
    { name: 'prem', sirname: 'ambodkar' },
  ];

  someString: string = 'HELLOworld';

  constructor() {
    super();
    this.someCaseMethod();
    const abc = 'abc';
    const pqr = abc;
  }

  getData() {
    super.getData();
  }

  someMethod() {
    this.someArray = [...this.someArray, ...this.someArray2];
    console.log(this.someArray);
    this.someArray.sort((a, b) => {
      return a - b;
    });
    // for (let i = 0; i < this.someArray.length; i++) {
    //   let temp = this.someArray[i];
    //   console.log(this.someArray[i], temp, this.someArray[i + 1]);
    //   this.someArray[i] = this.someArray[i + 1];
    //   this.someArray[i + 1] = temp;
    // }
    console.log(this.someArray);
    Object.entries(this.obj);
    Object.values(this.obj);
    console.log();
  }

  someCaseMethod() {
    let data = Array.from(this.someString);
    let dataObject = [];
    data.forEach((ele: any) => {
      const obj: any = {};
      obj.char = ele;
      obj.count = this.isUpperCase(ele) ? 'Yes' : 'no';
      dataObject.push(obj);
    });

    console.log(
      this.someArray.map((a: number) => {
        return a + 2;
      })
    );
  }

  isUpperCase(char: any) {
    const abc = [];
    return abc.indexOf(char) === -1;
  }

  async someFun() {
    const abc = '12';
    await this.myMethodCall();
    console.log(abc);
  }

  myMethodCall() {}
}
