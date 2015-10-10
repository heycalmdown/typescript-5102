import MyLib from 'mylib';

class MyApp extends MyLib {
  public getId():string {
    return this.id;
  }
}

let app = new MyApp();
console.log(app.getId());
