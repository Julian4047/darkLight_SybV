let id = [],
    title = [],
    author = [];

if (localStorage.getItem('id') != null) {
    id = JSON.parse(localStorage.getItem('id'));
    title = JSON.parse(localStorage.getItem('title'));
    author = JSON.parse(localStorage.getItem('author'));
};

document.getElementById("sendButton").addEventListener("click", send);


function send() {
    let vid = document.getElementById("txtid").value,
        vtitle = document.getElementById("txttitle").value,
        vauthor = document.getElementById("txtauthor").value;

    id.push(vid);
    title.push(vtitle);
    author.push(vauthor);

    localStorage.setItem('id', JSON.stringify(id));
    localStorage.setItem('title', JSON.stringify(title));
    localStorage.setItem('author', JSON.stringify(author));
};