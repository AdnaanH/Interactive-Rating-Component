document.querySelector("#one").onclick = function(){
    const one = document.querySelector("#user-rating");
    one.innerText = "You selected 1 out of 5";
}
document.querySelector("#two").onclick = function(){
    const two = document.querySelector("#user-rating");
    two.innerText = "You selected 2 out of 5";
}
document.querySelector("#three").onclick = function(){
    const three = document.querySelector("#user-rating");
    three.innerText = "You selected 3 out of 5";

}
document.querySelector("#four").onclick = function(){
    const four = document.querySelector("#user-rating");
    four.innerText = "You selected 4 out of 5";

}
document.querySelector("#five").onclick = function(){
    const five = document.querySelector("#user-rating");
    five.innerText = "You selected 5 out of 5";
}


const submission = document.querySelector('.submit');
const popup = document.querySelector('.popup')

submission.addEventListener('click', ()=>{
    popup.classList.add('active');
});

