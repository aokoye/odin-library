const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id

    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    }
}

function addBookToLibrary(title, author, pages, read) {
    let id = self.crypto.randomUUID();
    
    newBook = new Book(title, author, pages, read, id);

    myLibrary.push(newBook);
}

function displayBooks() {
    for(i = 0; i < myLibrary.length; i ++) {
        const element = document.querySelector('.books');
        let div = document.createElement("div");
        div.classList.add('card')
        div.innerHTML = ('<p>' + myLibrary[i].title + '</p>' + '<p>' + myLibrary[i].author + '</p>' + '<p>' + 'Pages: ' + myLibrary[i].pages)
        element.append(div)
        
        console.log(myLibrary[i].info() + ' ' + myLibrary[i].id)
    }
}

addBookToLibrary('The Perfect Loaf', 'Maurizio Leo', 432, 'no');
addBookToLibrary('Encore', 'Seattle Symphony', 10, 'yes');

displayBooks()


//Modal dialogue
const addDialog = document.getElementById('newBook');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');
const confirmBtn = document.getElementById('confirmBtn');
// const newTitle = document.getElementById('title');
// const newAuthor = document.getElementById('author');
// const newPages = document.getElementById('pages');

showButton.addEventListener('click', (event) => {
    event.preventDefault()
    addDialog.showModal();
});

closeButton.addEventListener('click', (event) => {
    event.preventDefault()
    addDialog.close();
});


confirmBtn.addEventListener('click', (event) => {
    event.preventDefault()
    addDialog.close();
    
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.querySelector('input[name="read"]:checked').value;

    if(newBook.returnValue != 'default') {
        addBookToLibrary(title, author, pages, read)

        function postNew() {
                i = myLibrary.length - 1

                const element = document.querySelector('.books');
                let div = document.createElement("div");
                div.classList.add('card');

                div.innerHTML = ('<p>' + myLibrary[i].title + '</p>' + '<p>' + myLibrary[i].author + '</p>' + '<p>' + 'Pages: ' + myLibrary[i].pages)
                element.append(div)

                console.log(myLibrary[i].info() + ' ' + myLibrary[i].id)
        }
        postNew()
        
    }   
})
