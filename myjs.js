const text_box = document.querySelector('#text_box');

let my_timer = 2000;



function timeOut() {

    if (my_timer === 0) {
        text_box.textContent = "YOU RAN OUT OF TIME";
        text_box.style.border = "2px solid red";
        text_box.style.width = "700px";
        text_box.style.height = "70px";
        text_box.style.fontSize = "60px";
        text_box.style.fontWeight = "bold";
        text_box.style.marginTop = "10%";
        text_box.style.marginLeft = "18%";
        text_box.style.padding = "5%";
        text_box.style.color = "red";
    } else {
        my_timer -= 2000;
    }

};

text_box.addEventListener('input', function(){
    
    my_timer = 2000;

});

setInterval(timeOut,2000);