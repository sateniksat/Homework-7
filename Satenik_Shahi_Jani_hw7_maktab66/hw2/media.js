class Media{
    constructor(name,type,material,year,languege){
        this.name=name;
        this.type=type;
        this.material=material;
        this.year=year;
        this.languege=languege;
    }
}
class Film extends Media{
    constructor(name,type,material,year,languege,color,category){
        super(name,type,material,year,languege);
        this.color=color;
        this.category=category;
    }
}
class Book extends Media{
    constructor(name,type,material,year,languege,pages,anthor){
        super(name,type,material,year,languege);
        this.pages=pages;
        this.anthor=anthor;
    }
}
const filmTime=new Film("Hello","funny","data",1999,"Parsian","colorful","comedy");
const bookTime=new Book("Idiot","unexplainable","paper",1868,"Rusian",300,"Dostoevsky");
console.log(filmTime);
console.log(bookTime);