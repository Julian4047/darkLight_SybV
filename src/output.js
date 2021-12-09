output();

function output() {

    let tbody = document.querySelector('tbody');

    tbody.innerHTML = '';


    let id = JSON.parse(localStorage.getItem("id")),
        title = JSON.parse(localStorage.getItem('title')),
        author = JSON.parse(localStorage.getItem('author'));

    let Q = id.length;

    for (let i = 0; i < Q; i++) {

        let row = document.createElement('tr');

        let cellid = document.createElement('td'),
            celltitle = document.createElement('td'),
            cellauthor = document.createElement('td');

        let txtid = document.createTextNode(id[i]),
            txttitle = document.createTextNode(title[i]),
            txtauthor = document.createTextNode(author[i]);

        cellid.appendChild(txtid);
        celltitle.appendChild(txttitle);
        cellauthor.appendChild(txtauthor);

        row.appendChild(cellid);
        row.appendChild(celltitle);
        row.appendChild(cellauthor);

        tbody.appendChild(row);
    };
};