const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

function getAvailableBooks(books){
    let emptyArray=[];
    for ( i= 0; i < books.length; i++) {
        let x = books[i].emptyArray;
        if(i <= books[i]){
            x.push(emptyArray)

        }
       
}
}
console.log(getAvailableBooks());

function getBooksByAuthor(author){
    for(i=0; i<author;i++){
        if(i ==='Charles Dickens'){
            console.log(i);
        }
    }
}
getBooksByAuthor();

function addNewBook(book){
    let addnew = books.add(book)
    console.log(addnew);

}
addNewBook('Olivertwist','Shakesphere',1995,true);

function checkoutBook(title){
    for(i=0;i<title;i++){
        if(i===isAvailable){
            return false
        }else{
            console.log(`The book ${title} is not available`);
        }
    }
}
checkoutBook();

function returnBook(title){
    for(i=0;i<title;i++){
        if(i===isAvailable){
            return true
        }else{
            console.log(`The book ${title} is available`);
        }
    }
}
returnBook();