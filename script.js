const myLibrary = [];
// const id = myLibrary[i].id

function Book(title, author, pages, read, id, dataId) {
    this.title = title;
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id
    this.dataId = id

    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    }
}

function addBookToLibrary(title, author, pages, read) {
    let id = self.crypto.randomUUID();
    let dataId = id;
    
    newBook = new Book(title, author, pages, read, id, dataId);

    myLibrary.push(newBook);

}

function displayBooks() {
    for(i = 0; i < myLibrary.length; i ++) {
        const element = document.querySelector('.books');
        // let pages = myLibrary[i].pages;
        let div = document.createElement("div");
        // let button = document.createElement(button);

        
        div.classList.add('card')
        div.setAttribute('id', myLibrary[i].dataId)
        div.setAttribute('data-id', myLibrary[i].dataId)
        div.innerHTML = ('<p>' + myLibrary[i].title + '</p>' + 
        '<p>' + myLibrary[i].author + '</p>' + 
        '<p>' + 'Pages: ' + myLibrary[i].pages + '</p>' +
        '<button class="deleteBtn">Delete Book</button>');
        element.append(div)
        // element.appendChild

        // document.querySelector('.deleteBook').setAttribute('data-id',myLibrary[i].dataId)
        console.log(myLibrary[i].info() + ' ' + myLibrary[i].id)
    }  
}

addBookToLibrary('The Perfect Loaf', 'Maurizio Leo', 432, 'no');
addBookToLibrary('Encore', 'Seattle Symphony', 10, 'yes');


displayBooks()

let dd = document.getElementsByClassName('deleteBtn');

Array.prototype.forEach.call(dd, function(element) {
    element.addEventListener('click', function() {
        const findBook = myLibrary.find((findBook) => findBook.id === element.parentNode.getAttribute("data-id"));
        console.log(findBook)
        console.log(element.parentNode.getAttribute("data-id"))
        targetId = element.parentNode.getAttribute("data-id")
        delBook = document.getElementById(targetId).remove();
        delBook.remove();
       
        const indices = []
        const array = myLibrary;
        const foundBook = findBook
        let idx = array.indexOf(foundBook)
        while (idx !== -1) {
            indices.push(idx);
            idx = array.indexOf(foundBook, idx + 1);
          }
          console.log(indices);
          myLibrary.splice(indices, 1);
          

    });
});


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
                div.setAttribute('id', myLibrary[i].dataId)
                div.setAttribute('data-id', myLibrary[i].dataId)
                div.innerHTML = ('<p>' + myLibrary[i].title + '</p>' + '<p>' + myLibrary[i].author + '</p>' + '<p>' + 'Pages: ' + myLibrary[i].pages + '</p>' + '<button class="deleteBtn">Delete Book</button>')
                element.append(div)

                console.log(myLibrary[i].info() + ' ' + myLibrary[i].id)
        }
        postNew()

        let dd = document.getElementsByClassName('deleteBtn');

        Array.prototype.forEach.call(dd, function(element) {
            element.addEventListener('click', function() {
                const findBook = myLibrary.find((findBook) => findBook.id === element.parentNode.getAttribute("data-id"));
                console.log(findBook)
                console.log(element.parentNode.getAttribute("data-id"))
                targetId = element.parentNode.getAttribute("data-id")
                delBook = document.getElementById(targetId).remove();
                delBook.remove();
               
                const indices = []
                const array = myLibrary;
                const foundBook = findBook
                let idx = array.indexOf(foundBook)
                while (idx !== -1) {
                    indices.push(idx);
                    idx = array.indexOf(foundBook, idx + 1);
                  }
                  console.log(indices);
                  myLibrary.splice(indices, 1);
                  
        
            });
        });

    
    }   
})


