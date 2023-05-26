const body = document.querySelector("body")
const header = document.querySelector("header")
const title = document.querySelectorAll(".hoo")
const allSections = document.querySelectorAll("section")
const parNum = document.querySelector(".parnum")

let i = 1;
const stop = setInterval(() => {
  let texto = "Hello Everyone" 
  how.innerText =  texto.slice(0, i)
  i++;
  if(i > texto.length){
clearInterval(stop)
  }
  
}, 100);
darkmode.addEventListener("click", (eo) => {
    header.classList.toggle("darky")
    body.classList.toggle("darky")
})
chan.addEventListener("mousemove", (eo) => {
    color.style.opacity = 1;
})
chan.addEventListener("mouseleave", (eo) => {
    color.style.opacity = 0;
})


hbg.addEventListener("click", (eo) => {
    const random = Math.round(Math.random()*360)
    header.style.backgroundColor = `hsl(${random}, 100%, 50%)`
})



tbg.addEventListener("click", (eo) => {
    let allcol = ["#93032E", "#C69F89", "#034C3C"]
    const rand = Math.round(Math.random()*(allcol.length-1))
    title.forEach(item => {
        item.style.backgroundColor = allcol[rand]
    });
   
})
let it = 0;
 const newCol = ["#704C5E", "#C69F89", "#034C3C"]
tc.addEventListener("click", (eo) => {
    title.forEach(item => {
        item.style.color = newCol[it]
       
    });
    it++;
        console.log(it);
        if(it == newCol.length){
            it = 0;
        }
})

sbg.addEventListener("click", (eo) => {
    const rono =  Math.round(Math.random() * 255)
    allSections.forEach(item => {
        item.style.backgroundColor = `rgb(${rono} 50 90)`
    });
})

let im = 0;
const videos = [`<iframe width="560" height="315" src="https://www.youtube.com/embed/4sUh2nxnXv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,` <iframe width="560" height="315" src="https://www.youtube.com/embed/5oAp05uZ1N0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/knsorkvgKG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`]
ran.addEventListener("click", (eo) => {
   parvid.innerHTML = videos[im] 
   im++;
  if(im > videos.length-1){
    im = 0;
  }
})


const allQuotes = [`<blockquote>“I love deadlines. I love the whooshing noise they make as they go by.”</blockquote>`, `<blockquote>“If there's a book that you want to read, but it hasn't been written yet, then you must write it.”</blockquote>`, `<blockquote>“There is nothing to writing. All you do is sit down at a typewriter and bleed.”</blockquote>`]
rando.addEventListener("click", (eo) => {
 const myy = Math.round(Math.random()*(allQuotes.length-1))
 parquote.innerHTML = allQuotes[myy]   
})


click.addEventListener("click", (eo) => {
    heart.innerHTML = `<audio autoplay src="تصفيق الجمهور مونتاج.mp3"></audio>`
    const newHeart = document.createElement("div")
    heart.append(newHeart)
   const topy = setInterval(() => {
        const myHeart = document.createElement("div")
   myHeart.className = "hero"
   myHeart.innerHTML = `&#129505;`
   myHeart.style.left = `${Math.random()*100}%`
   newHeart.append(myHeart)
    }, 50);
    setTimeout(() => {
       clearInterval(topy) 
    }, 3000);
   setTimeout(() => {
    newHeart.remove()
   }, 4000);
})

const pluso = document.querySelectorAll(".plus")
pluso.forEach(item => {
    item.addEventListener("click", (eo) => {
    item.classList.toggle("sam")
    const myPara = eo.target.parentElement.parentElement.getElementsByClassName("text")[0]
    if(item.classList.contains("sam")){
        item.innerText = "-"
        myPara.style.opacity = 1;
        myPara.style.height = `${myPara.scrollHeight}px`
     
    }else{
        item.innerText = "+"
        myPara.style.opacity = 0;
    }
    })  
});

const upTime = () => {
        const now = new Date()
        let date = now.toDateString()
        let hour = now.getHours()
        let min = now.getMinutes()
        let sec = now.getSeconds()
        let mam = "am"
        if(hour < 10){
            hour = `0${hour}`
        }
        if(min < 10){
            min = `0${min}`
        }
        if(sec < 10){
            sec = `0${sec}`
        }if(hour == 0){
            hour = 12
        }if(hour > 12){
            hour = hour - 12;
            mam = "pm"
        }
        time.innerHTML = `<div class="date">${date}</div>
<div class="clo">${hour}:${min}:${sec} ${mam}</div>
`
 
}
setInterval(upTime, 1000);

//slider show 
let g = 0;
let slImg = [`<img src="img/pexels-photo-103123.jpeg">`,` <img src="img/pexels-photo-1269968.jpeg">`,`<img src="img/pexels-photo-2176593.jpeg">`,`<img src="img/pexels-photo-247851.webp">`,` <img src="img/pexels-photo-406014.jpeg">`,` <img src="img/pexels-photo-762041.jpeg">`]
slide.innerHTML+= `<div class="num">Slide #${g+1} of ${slImg.length}</div>`
slide.innerHTML+= slImg[g]
pre.setAttribute("disabled", "")
next.addEventListener("click",(eo) => {
    g++;
    slide.innerHTML+= slImg[g]
    slide.innerHTML+= `<div class="num">Slide #${g+1} of ${slImg.length}</div>`
    pre.removeAttribute("disabled")
    if(g+1 == slImg.length){
        next.setAttribute("disabled", "")  
    }
    parNum.getElementsByClassName("act")[0].classList.remove("act")
    parNum.getElementsByTagName("button")[g].classList.add("act")
})
pre.addEventListener("click",(eo) => {
    g--;
    slide.innerHTML+= slImg[g]
    slide.innerHTML+= `<div class="num">Slide #${g+1} of ${slImg.length}</div>`
    next.removeAttribute("disabled")
    if(g == 0){
        pre.setAttribute("disabled", "")  
    }
    parNum.getElementsByClassName("act")[0].classList.remove("act")
    parNum.getElementsByTagName("button")[g].classList.add("act")
})

const allNumber = document.querySelectorAll(".parnum button")
allNumber.forEach((item,index) => {
    item.addEventListener("click", (eo) => {
        item.parentElement.getElementsByClassName("act")[0].classList.remove("act")
        eo.target.classList.add("act")
        slide.innerHTML+= slImg[index]
    slide.innerHTML+= `<div class="num">Slide #${index+1} of ${slImg.length}</div>`
    g = index;
    if(index == 0){
        pre.setAttribute("disabled", "")
        next.removeAttribute("disabled")  
    }else if(index+1 == slImg.length){
        next.setAttribute("disabled", "") 
        pre.removeAttribute("disabled") 
    }else{
        pre.removeAttribute("disabled")
        next.removeAttribute("disabled")
    }
   
    })
});

//toggle Tabs
const feno = document.querySelector(".feno")
const parBut = document.querySelector(".alltab")
const allBut = document.querySelectorAll(".alltab button")
allBut.forEach((item,index) => {
    item.addEventListener("click", (eo) => {
        parBut.getElementsByClassName("activ")[0].classList.remove("activ")
        eo.target.classList.add("activ")
        feno.getElementsByClassName("act-art")[0].classList.remove("act-art")
        feno.getElementsByClassName("fun")[index].classList.add("act-art")
    })
});

const paro = document.querySelector(".par-form")
const closy = document.querySelector("#close")
create.addEventListener("click", (eo) => {
   paro.style.display = "block"
    setTimeout(() => {
        forme.style.transform = `scale(1)`  
    }, 500);
   
})
closy.addEventListener("click", (eo) => {
    setTimeout(() => {
        forme.style.transform = `scale(0)`
    }, 200);
      
   
    setTimeout(() => {
        paro.style.display = "none"
    }, 1000);
   
})

const upo = () => {
    if(user.classList.contains("success")&&email.classList.contains("success")&&psw.classList.contains("success")&&repeat.classList.contains("success")){
    rego.removeAttribute("disabled")
   }  
   else{
       rego.setAttribute("disabled", "")
   }  
}

user.addEventListener("keyup", (eo) => {
    user.classList.add("error")
    user.parentElement.getElementsByClassName("cono")[0].style.display = "block"
    if(user.value.length > 5){
        user.classList.remove("error")
        user.classList.add("success")
        user.parentElement.getElementsByClassName("cono")[0].style.display = "none"
        user.nextElementSibling.style.opacity = 1;
    }else{
        user.classList.remove("success")
        user.classList.add("error")
        user.parentElement.getElementsByClassName("cono")[0].style.display = "block"
        user.nextElementSibling.style.opacity = 0;
    }
    upo()
})

const regEmail=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
email.addEventListener("keyup", (eo) => {
    email.classList.add("error")
    email.parentElement.getElementsByClassName("cono")[0].style.display = "block"
    if(regEmail.test(email.value)){
        email.classList.remove("error")
        email.classList.add("success")
        email.parentElement.getElementsByClassName("cono")[0].style.display = "none"
        email.nextElementSibling.style.opacity = 1;
    }else{
        email.classList.remove("success")
        email.classList.add("error")
        email.parentElement.getElementsByClassName("cono")[0].style.display = "block"
        email.nextElementSibling.style.opacity = 0;
    }
    upo()
})

const regPassword=
/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
psw.addEventListener("keyup", (eo) => {
    psw.classList.add("error")
    psw.parentElement.getElementsByClassName("cono")[0].style.display = "block"
    if(regPassword.test(psw.value)){
        psw.classList.remove("error")
        psw.classList.add("success")
        psw.parentElement.getElementsByClassName("cono")[0].style.display = "none"
        psw.nextElementSibling.style.opacity = 1;
    }else{
        psw.classList.remove("success")
        psw.classList.add("error")
        psw.parentElement.getElementsByClassName("cono")[0].style.display = "block"
        psw.nextElementSibling.style.opacity = 0;
    }
    upo()
})

repeat.addEventListener("keyup", (eo) => {
    repeat.classList.add("error")
    repeat.parentElement.getElementsByClassName("cono")[0].style.display = "block"
    if(repeat.value === psw.value){
        repeat.classList.remove("error")
        repeat.classList.add("success")
        repeat.parentElement.getElementsByClassName("cono")[0].style.display = "none"
        repeat.nextElementSibling.style.opacity = 1;
    }else{
        repeat.classList.remove("success")
        repeat.classList.add("error")
        repeat.parentElement.getElementsByClassName("cono")[0].style.display = "block"
        repeat.nextElementSibling.style.opacity = 0;
    }
    upo()
})

const code = document.querySelector("code")

copy.addEventListener("click", (eo) => {
    navigator.clipboard.writeText(copy.nextElementSibling.innerText)
    copy.innerText = "copied"
    setTimeout(() => {
        copy.innerText = "copy"
    }, 500);
})

const upPrice = () => {
    const allItems = document.querySelectorAll(".item")
    let toto = 0;
    allItems.forEach(item => {
     const itemPrice = Number(item.getElementsByClassName("prece")[0].innerText.replace("$", ""))
     const itemQuan = Number(item.getElementsByClassName("inpo")[0].value)
     toto = toto +(itemPrice*itemQuan)
    
    });
    tote.innerText = `$${toto}`
}
const story = document.querySelector(".store")
const gallary = document.createElement("div")

    story.addEventListener("click", (eo) => {
        if(eo.target.classList.contains("buy")){
            eo.target.innerHTML = "&#10004;done"
            eo.target.setAttribute("disabled", "")
            const cong = document.createElement("div")
            cong.className = "fix"
            cong.innerText = "مبروووووووووووووووووووك"
            body.append(cong)
            setTimeout(() => {
                cong.style.transform = "translateX(-100vw)"
            }, 1000);
            setTimeout(() => {
                cong.remove()
            }, 1500);
            
            gallary.className = "sho"
            gallary.innerText = "عرض المشتريات"
            body.append(gallary)

          const cardo = eo.target.parentElement.parentElement.parentElement;
          const cardImg = cardo.getElementsByClassName("card-img-top")[0].src
          const cardName = cardo.getElementsByClassName("card-title")[0].innerText
          const cardPrice = cardo.getElementsByClassName("pric")[0].innerText
        
            items.innerHTML += `  <div dir="rtl" class="item">
            <div class="shirt">
              <img src=${cardImg} alt="">
              <p class="color">${cardName} </p>
            </div>
            <div class="quan">
              <input class="inpo" type="number" min="1" value="1">
              <p class="qua">الكمية</p>
            </div>
            <div class="prece">${cardPrice}</div>
            <button class="del">حذف</button>
          </div>`



         upPrice()



        }
       
    })
const black = document.querySelector(".black")

black.addEventListener("change", (eo) => {
    upPrice()
})
gallary.addEventListener("click", (eo) => {
    black.style.transform = "scale(100%)"
})

cloee.addEventListener("click", (eo) => {
    black.style.transform = "scale(0)"
})
const allCard = document.querySelectorAll(".card")
black.addEventListener("click", (eo) => {
    if(eo.target.classList.contains("del")){
       
        const delProduct = eo.target.parentElement.getElementsByClassName("color")[0].innerText
        allCard.forEach(item => {
            const cardName = item.getElementsByClassName("card-title")[0].innerText
           if(delProduct == cardName){
            const done = item.getElementsByClassName("buy")[0];
            done.innerText = "buy"
            done.removeAttribute("disabled")

           }
        });
        eo.target.parentElement.remove()
        upPrice()
    }
})


  
