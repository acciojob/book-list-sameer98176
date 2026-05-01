//your JS code here. If required.
document.getElementById("addBtn").addEventListener("click", addBook);

function addBook(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let isbn = document.getElementById("isbn").value;

    if(title === "" || author === "" || isbn === ""){
        alert("Please fill all fields");
        return;
    }

    let table = document.querySelector("#book-list tbody");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;

    table.appendChild(row);

    // delete function
    row.querySelector(".delete").addEventListener("click", function(){
        row.remove();
    });

    // clear inputs
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}
