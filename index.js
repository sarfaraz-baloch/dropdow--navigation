
let featureBtn = document.getElementById('feature');
let iconWrapper = document.getElementById('icon-wrapper');
let btn2 = document.getElementById("btn2")
let iconwrapper2 = document.getElementById("icon-wrapper2")
let toogalbtn1 = document.getElementById("toogal-btn1")
let toogalbtn2  = document.getElementById("toogal-btn2")
let iconMenu1 = document.getElementById("icon-menu")
let Main = document.getElementById("Main")
let Menuconta = document.getElementById("menu-conta")
let closemenu  = document.getElementById("close-menu")
let Menu = document.getElementById("icon-menu")

  featureBtn.addEventListener("click", function(){
      iconWrapper.style.visibility = "visible"
      featureBtn.style.display = "none"
      toogalbtn1.style.display = "block"
      
    })
    
    btn2.addEventListener("click" , function(){
      iconwrapper2.style.visibility = "visible"
      btn2.style.display = "none"
      toogalbtn2.style.display = "block"
  })

  toogalbtn1.addEventListener("click" , function(){
    iconWrapper.style.visibility = "hidden"
      toogalbtn1.style.display = "none"
      featureBtn.style.display = "inline-block"
  })

  toogalbtn2.addEventListener("click" , function(){
    iconwrapper2.style.visibility = "hidden"
    toogalbtn2.style.display = "none"
    btn2.style.display  = "inline-block"
}) 

Menu.addEventListener("click", function(){
  closemenu.style.display = "block"
  Menuconta.style.display = "block"
  // Menu.style.display = "none"
})

closemenu.addEventListener("click" , function(){
  closemenu.style.display = "none"
  Menuconta.style.display = "none"
})