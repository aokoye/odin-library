const myLibrary = [];

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
        let div = document.createElement("div");

        let delBtn = "<iconify-icon icon='mdi:trash-can-empty' width=32' height='32'></iconify-icon>";
        let readStatus = myLibrary[i].read;

        if (myLibrary[i].read === "no") {
            readStatus = "<iconify-icon icon='mdi:book-remove' width=32' height='32'></iconify-icon>"
        } else {
            readStatus = "<iconify-icon icon='mdi:book-check' width=32' height='32'></iconify-icon>"
        }
        
        div.classList.add('card')
        div.setAttribute('id', myLibrary[i].dataId)
        div.setAttribute('data-id', myLibrary[i].dataId)
        div.innerHTML = ('<p class="title">' + myLibrary[i].title + '</p>' + 
        '<p class="author"> Author: ' + myLibrary[i].author + '</p>' + 
        '<p class="pages">' + 'Pages: ' + myLibrary[i].pages + '</p>' +
        '<div class="buttons">' +  
        '<button class="readStat">' + readStatus + '</button>' +
        '<button class="deleteBtn">' + delBtn + '</button>') +
        '</div>';
        element.append(div)

        console.log(myLibrary[i].info() + ' ' + myLibrary[i].id)
    }  
}

addBookToLibrary('The Perfect Loaf', 'Maurizio Leo', 432, 'no');
addBookToLibrary('Encore', 'Seattle Symphony', 10, 'yes');


displayBooks()

//Delete button
let dd = document.getElementsByClassName('deleteBtn');

Array.prototype.forEach.call(dd, function(element) {
    element.addEventListener('click', function() {
        const findBook = myLibrary.find((findBook) => findBook.id === element.parentNode.getAttribute("data-id"));
        console.log(findBook)
        console.log(element.parentNode.parentNode.getAttribute("data-id"));
        targetId = element.parentNode.parentNode.getAttribute("data-id");
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

//Read button
let rd = document.getElementsByClassName('readStat');

Array.prototype.forEach.call(rd, function(element) {
    element.addEventListener('click', function() {
        const findBook = myLibrary.find((findBook) => findBook.id === element.parentNode.parentNode.getAttribute("data-id"));
        targetId = element.parentNode.parentNode.getAttribute("data-id");

        function updateBook(){
            myLibrary.map(book => {
                if (book.id === targetId) {
                    if (book.read === 'yes'){
                        book.read = 'no'
                        let div = document.getElementById(targetId);
                        element.innerHTML = "<iconify-icon icon='mdi:book-remove' width=32' height='32'></iconify-icon>";
                    } else {
                        book.read = 'yes'
                        element.innerHTML = "<iconify-icon icon='mdi:book-check' width=32' height='32'></iconify-icon>";
                    }
                }
            })    
        }
        updateBook()
        console.log(findBook)
    })
})




//Modal dialogue
const addDialog = document.getElementById('newBook');
const showButton = document.querySelector('dialog + button');
const closeButton = document.querySelector('dialog button');
const confirmBtn = document.getElementById('confirmBtn');

showButton.addEventListener('click', (event) => {
    event.preventDefault()
    addDialog.showModal();
});

closeButton.addEventListener('click', (event) => {
    event.preventDefault()
    addDialog.close();
});

//Add book to library (and many duplicated functions)
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

                let delBtn = "<iconify-icon icon='mdi:trash-can-empty' width=32' height='32'></iconify-icon>";
                let readStatus = myLibrary[i].read;

                if (myLibrary[i].read === "no") {
                    readStatus = "<iconify-icon icon='mdi:book-remove' width=32' height='32'></iconify-icon>"
                } else {
                    readStatus = "<iconify-icon icon='mdi:book-check' width=32' height='32'></iconify-icon>"
        }

                const element = document.querySelector('.books');
                let div = document.createElement("div");
                div.classList.add('card');
                div.setAttribute('id', myLibrary[i].dataId)
                div.setAttribute('data-id', myLibrary[i].dataId)
                div.innerHTML = ('<p class="title">' + myLibrary[i].title + '</p>' + 
                '<p class="author"> Author: ' + myLibrary[i].author + '</p>' + 
                '<p class="pages">' + 'Pages: ' + myLibrary[i].pages + '</p>' +
                '<div class="buttons">' +
                '<button class="readStat">' + readStatus + '</button>' +
                '<button class="deleteBtn">' + delBtn + '</button>' + 
                '</div>');
                element.append(div)

                console.log(myLibrary[i].info() + ' ' + myLibrary[i].id)
        }
        postNew()

        let dd = document.getElementsByClassName('deleteBtn');

        Array.prototype.forEach.call(dd, function(element) {
            element.addEventListener('click', function() {
                const findBook = myLibrary.find((findBook) => findBook.id === element.parentNode.getAttribute("data-id"));
                console.log(findBook)
                console.log(element.parentNode.parentNode.getAttribute("data-id"))
                targetId = element.parentNode.parentNode.getAttribute("data-id")
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
    
    let rd = document.getElementsByClassName('readStat');

    Array.prototype.forEach.call(rd, function(element) {
        element.addEventListener('click', function() {
            const findBook = myLibrary.find((findBook) => findBook.id === element.parentNode.parentNode.getAttribute("data-id"));
            targetId = element.parentNode.parentNode.getAttribute("data-id");

            function updateBook(){
                myLibrary.map(book => {
                    if (book.id === targetId) {
                        if (book.read === 'yes'){
                            book.read = 'no'
                            element.innerHTML = "<iconify-icon icon='mdi:book-remove' width=32' height='32'></iconify-icon>";
                        } else {
                            book.read = 'yes'
                            element.innerHTML = "<iconify-icon icon='mdi:book-check' width=32' height='32'></iconify-icon>";
                        }
                    }
                })    
            }
            updateBook()
            console.log(findBook)
        })
    })

})


