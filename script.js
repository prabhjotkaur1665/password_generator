let b = document.querySelector("#but")
b.addEventListener("click", function(){
    
let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let splchar =["!","@","#","$","%","^","&","~"]
let pass = ""

for (let i = 0; i < 4; i++) {
    let value = Math.floor(Math.random() * abc.length)
     let sep = Math.floor(Math.random() * splchar.length)
        let num = Math.floor(Math.random() * 10)

    pass = pass + abc[value] + splchar[sep] + [num]   
}

let head= document.getElementsByClassName("fst")
head[0].innerText = pass

})