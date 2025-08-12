class Book{
    constructor(title,author){
        this.title=title;
        this.author=author;
    }

    describre() {

        console.log(`Book ${this.title} written by ${this.author}} `);

    }
}



const book=new Book("Atomic habits","James Clear");

console.log(book.describre());