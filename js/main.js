let kbd = document.getElementsByClassName("kbd");

for (let i = 0; i < kbd.length; i++){
    let keyLetter = kbd[i].innerHTML;
    kbd[i].addEventListener("click", function (){
        let audio = new Audio("sounds/" + keyLetter + ".mp3");
        audio.play();
        kbd[i].classList.add('slide-bottom');
        kbd[i].style.animation = 'none';
        kbd[i].offsetHeight; /* trigger reflow */
        kbd[i].style.animation = null;
    });
}
for (let i = 0; i < kbd.length; i++) {
    let keyLetter = kbd[i].innerHTML;
    document.addEventListener("keydown", function (event) {
        if (event.code === "Key" + keyLetter) {
            let keyLetter = kbd[i].innerHTML;
            let audio = new Audio("sounds/" + keyLetter + ".mp3");
            audio.play();
            kbd[i].classList.add('slide-bottom');
            kbd[i].style.animation = 'none';
            kbd[i].offsetHeight; /* trigger reflow */
            kbd[i].style.animation = null;
        }
    })
}
