const books = [
    {id:1,title:"The Alchemist",price:1500.00},
        {id:2,title:"Atomic Habits",price:2500.00},
           {id:1,title:"The Sherlock Holmes",price:1800.00},
               {id:1,title:"Pirates",price:1600.00},


];

const bookListContainer = document.getElementById("book-list");
if (bookListContainer) {
  books.forEach(book => {
    bookListContainer.innerHTML += `
      <div class="book">
        <h3>${book.title}</h3>
        <p>Price: $${book.price.toFixed(2)}</p>
        <a href="book-details.html?id=${book.id}">View Details</a>
      </div>
    `;
  });
}


const loginbtn = document.getElementById("loginbtn");
if(loginbtn){
    loginbtn.addEventListener("click",function(){
        const username = prompt("Enter user name: ");
        if(username == null)
            return;
        const password = prompt("Enter the password: ");
        if(password == null)
            return;

        if(username == "user1" && password == "123"){
            alert(`login successfll! welcome, ${username}`);
            localStorage.setItem("isLoggedIn","true");
            window.location.href = "book-details.html";
            

        }else{
            alert("Invalid user name or password");
        }
    });
}


function protectPage(){
    if(localStorage.getItem("isLoggedIn") !== "true"){
        alert("you must be logged to access this page");
        window.location.href = "index.html";
        
    }
}
protectPage();


const form = document.getElementById("signup");

form.addEventListener("submit",function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const pass = document.getElementById("pass").value;

    if(name == " " || pass == " "){
        alert("All fields should be filled");
    }else if(name == "user1" && pass == "123"){
        alert("You are successfully loggedin");
        window.location.href = "book-details.html";

    }else{
        alert("Incorect user name or password");
        return false;
    }


    
});