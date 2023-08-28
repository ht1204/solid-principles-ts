export class Book {
  constructor(private _author: string, private _title: string) {}

  get getAuthor(): string {
    return this._author;
  }

  get getTitle(): string {
    return this._title;
  }

  save(): void {
    console.log(`Book Saved: ${this._title}`);
  }
}



// export class Book {
//   constructor(private _author: string, private _title: string) { }

//   get getAuthor(): string {
//     return this._author;
//   }

//   get getTitle(): string {
//     return this._title;
//   }

// }

