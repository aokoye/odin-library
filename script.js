const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id

    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + ", "  + this.read
    }
}

function addBookToLibrary(title, author, pages, read) {
    let id = self.crypto.randomUUID();
    
    newBook = new Book(title, author, pages, read, id);

    myLibrary.push(newBook);
}

function displayBooks() {
    // let div = document.createElement('div');
    // let card =  div.classList.add('card');
    // // let text = card.innerHTML = myLibrary[];
    // let elementCard = document.querySelector('.container');
    // // element.appendChild(text)
    
    for(i = 0; i < myLibrary.length; i ++) {
        // const para = document.createElement("p");
        // para.classList.add('test')
        // const node = document.createTextNode(myLibrary[i].info());
        // para.appendChild(node);
        // const element = document.querySelector('.container');
        // element.appendChild(para);

        // const div = document.createElement('div');
        // div.classList.add('card');
        // let elementCard = document.querySelector('.container');
        // elementCard.appendChild(div);

        // const container = document.querySelector('.container');
        // container.innerHTML+='<div class="card"></div>';

        // const title = document.createElement("p")
        // title.classList.add('title')
        // const nodeTitle = document.createTextNode(myLibrary[i].title)
        // title.appendChild(nodeTitle)
        // // const element = document.querySelector('.container');
        // // element.appendChild(title);
        
        // const author = document.createElement("p")
        // author.classList.add('author')
        // const nodeAuthor = document.createTextNode(myLibrary[i].author)
        // author.appendChild(nodeAuthor)
        // // const element = document.querySelector('.container');
        // element.appendChild(author);

        const element = document.querySelector('.books');
        let div = document.createElement("div");
        div.classList.add('card')
        div.innerHTML = ('<p>' + myLibrary[i].title + '</p>' + '<p>' + myLibrary[i].author + '</p>' + '<p>' + 'Pages: ' + myLibrary[i].pages)
        element.append(div)
        
        console.log(myLibrary[i].info())
    }
}

addBookToLibrary('The Perfect Loaf', 'Maurizio Leo', 432, 'no');
addBookToLibrary('Encore', 'Seattle Symphony', 10, 'yes');

displayBooks()
// console.log(myLibrary[0].info())