
const body = document.querySelector("body")
const main_body = document.getElementById("main-content")
const main = document.getElementById("main-content-text")
const main_title = document.getElementById("main-content-title")
let usrevent = document.getElementById("userinput")
usrevent.addEventListener("click", addelement)
var cnt = 0
let statuspn = 0

body.addEventListener("keypress", processKeyEvent)


function processKeyEvent(key) {
    if (key.code == "KeyM") {
        adminpanel()
    }
}

const dev_panel = document.getElementById("devpanel")
dev_panel.onload = dev_panel.classList.add("hidden")








function addelement() {

    console.log("executed") //debug
    console.log(cnt)
    if (cnt == 12) {
        console.log("limit reached") //debug
        window.alert("Maximális számú sub-menü elérve!")
    }
    else {

        const elementselect = document.getElementById('expand-row')
        const usrtext = document.getElementById("textdata").value
        const usrtitle = document.getElementById("boxtitle").value
        const colitem = document.createElement("div")
        const fileInput = document.getElementById("bgUpload");
        main_title.innerHTML = usrtitle
        main.innerHTML = usrtext
        colitem.classList.add("col", "border", "fixed-col");
        colitem.innerHTML = usrtitle
        colitem.style.backgroundSize = "contain"
        colitem.style.backgroundRepeat = "no-repeat"
    

        if (fileInput && fileInput.files && fileInput.files[0]) {

            const reader = new FileReader();

            reader.onload = function (e) {
                colitem.style.backgroundImage = `url('${e.target.result}')`;
            };

            reader.readAsDataURL(fileInput.files[0]);

        } else {
            // fallback background if no image selected
            colitem.style.backgroundColor = "green";
        }
        let Main_data = {text: usrtext , image: colitem.style.backgroundImage}
        sessionStorage.setItem(cnt, JSON.stringify(Main_data))
        colitem.id = cnt++
        elementselect.append(colitem)
        

        colitem.addEventListener("mouseenter", () => {
            colitem.style.transform = "scale3D(1.2,1.3,1.3)"
        })
        colitem.addEventListener("mouseleave", () => {
            colitem.style.transform = "none"
        })
        colitem.addEventListener("click", function ()  {bringforward(colitem.id)})
        
    }
}


function bringforward(data) {
    main.classList.remove("animated-text")
    main_title.classList.remove("animated.title")
    let saved = JSON.parse(sessionStorage.getItem(data));
    main.innerHTML = saved.text
    
    
}


function adminpanel() {
    switch (dev_panel.classList.contains("hidden")) {
        case true:
            dev_panel.classList.remove("hidden")
            break
        case false:
            dev_panel.classList.add("hidden")
            break

    }
}


