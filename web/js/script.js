function openMenu(){
    document.querySelector(".menu").classList.toggle("open");
}


document.querySelectorAll(".callbtn").forEach(click=>{
  click.style.cursor="pointer"; 
  click.addEventListener("click",()=>{
    // window.location.href='tel:+918797376640';
      window.open('tel:+918797376640', '_blank');
  })
})

document.querySelectorAll(".whatsappbtn").forEach(click=>{
  click.style.cursor="pointer"; 
  click.addEventListener("click",()=>{
      window.open('https://wa.me/919110112300', '_blank');
  })
})
