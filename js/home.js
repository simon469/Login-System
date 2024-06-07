var logOutBtn = document.getElementById("logOutBtn");
var welcomeUser = document.getElementById("userName");
var userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "Welcome " + userName;

logOutBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});

var items=[]

// 1- instance 
var httpReq= new XMLHttpRequest()

// 2- stablish Connection
httpReq.open("get","https://forkify-api.herokuapp.com/api/search?q=cinnamon")

// 3- Send Request
httpReq.send()

// 4- get response
httpReq.addEventListener("readystatechange" , function(){
    if(httpReq.readyState == 4){
        items = JSON.parse(httpReq.response).recipes;

        var gallery="";
        for(var i=0 ; i < items.length ; i++){
            gallery +=`<div class="col-md-3">
            <div class="text-center">
                <img src="${items[i].image_url}" class="w-100" alt="">
                <h5>${items[i].title}</h5>
                <p class="small">${items[i].publisher}</p>
            </div>
        </div> `
        }

        document.querySelector(".row").innerHTML= gallery;
    }
})
