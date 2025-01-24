let datetxt = "25 - 01 - 2005";
const datatxtletter = 'Xin chào Uyên của tuổi 20 nhá!!!\nEm phải tự hào vì ở tuổi này mà em đã sở hữu người đàn ông tuyệt vời như anh ( •̀ ω •́ )✧. Nếu như tính tới bây giờ là em hơn anh 2 tuổi rồi @@. Tuổi lớn mà người có một đủm. Tchh, do anh ở khá xa nên anh chỉ tặng những thứ như này thuii. Mong em sẽ vui khi nhận nó heh ~~. Anh yêu em, tuổi mới chúc Uyên đạt được thứ mình muốn trong con đường tinh dầu của bản thân nhá. Còn anh thì sẽ sẵn là của em rồi nên không cần lo (❤️ ω ❤️). Anh yêu em nhiều lắm, cảm ơn vì vẫn đợi anh nhá. Moaaaaaa💕';
let titleLetter = "Gửi bé nhà";
let charArrDate = datetxt.split('');
let charArrDateLetter = datatxtletter.split('');
let charArrTitle = titleLetter.split('');
let currentIndex = 0;
let currentIndexLetter = 0;
let currentIndexTitle = 0;
let date__of__birth = document.querySelector(".date__of__birth span");
let text__letter = document.querySelector(".text__letter p");
const audio = document.getElementById("myAudio");
setTimeout(function(){
    timeDatetxt = setInterval(function(){
        if(currentIndex < charArrDate.length){
            date__of__birth.textContent += charArrDate[currentIndex];
            currentIndex ++;
        }
        else{
            let i = document.createElement("i");
            i.className = "fa-solid fa-star"
            document.querySelector(".date__of__birth").prepend(i)
            document.querySelector(".date__of__birth").appendChild(i.cloneNode(true))
            clearInterval(timeDatetxt)
        }
    },100)
},6200)

var intervalContent;
var intervalTitle;
$("#btn__letter").on("click", function(){
    audio.play();
    audio.volume=0.2;
    $(".box__letter").slideDown()
    setTimeout(function(){
        $(".letter__border").slideDown();
    },1000)
    setTimeout(function(){
        intervalTitle = setInterval(function(){
            if(currentIndexTitle < charArrTitle.length){
                document.querySelector(".title__letter").textContent += charArrTitle[currentIndexTitle];
                let i = document.createElement("i");
                i.className = "fa-solid fa-heart"
                document.querySelector(".title__letter").appendChild(i)
                currentIndexTitle++;
            }
            else{
                clearInterval(intervalTitle)
            }
        },100)
    },500)
    setTimeout(function(){
        document.querySelector("#heart__letter").classList.add("animationOp");
        document.querySelector(".love__img").classList.add("animationOp");
        document.querySelector("#mewmew").classList.add("animationOp");
    },1400)
    setTimeout(function(){
        document.querySelectorAll(".heart").forEach((item)=>{
            item.classList.add("animation")
        })
    },1750)
    setTimeout(function(){
        intervalContent = setInterval(function(){
            if(currentIndexLetter < charArrDateLetter.length){
                const character = charArrDateLetter[currentIndexLetter];
                if (character === '\n') {
                    text__letter.innerHTML += '<br>';
                } else {
                    text__letter.innerHTML += character;
                }
                currentIndexLetter++;
            }
            else{
                clearInterval(intervalContent)
            }
        },50)
    },3000)
})
$(".close").on("click", function(){
    clearInterval(intervalContent)
    document.querySelector(".title__letter").textContent = "";
    text__letter.textContent = "";
    currentIndexLetter = 0
    currentIndexTitle = 0
    document.querySelector("#heart__letter").classList.remove("animationOp");
    document.querySelector(".love__img").classList.remove("animationOp");
    document.querySelector("#mewmew").classList.remove("animationOp");
    document.querySelectorAll(".heart").forEach((item)=>{
            item.classList.remove("animation")
        })
    $(".box__letter").slideUp();
    $(".letter__border").slideUp();
})