function openMenu(){
    document.querySelector(".menu").classList.toggle("open");
}


//   const carousel = document.querySelector('#carouselExampleIndicators');

//   carousel.addEventListener('slid.bs.carousel', () => {
//     // document.querySelectorAll('.banners')
//     // Remove animation from all slides
//     document.querySelectorAll('.banners > div').forEach(el => {
//       el.classList.remove('animate-text');
//     });

//     // Add animation only to text wrapper in active slide
//     const activeText = carousel.querySelector('.carousel-item.active .banners > div');
//     if (activeText) {
//       activeText.classList.add('animate-text');
//     }
//   });

//   // Trigger for first slide on page load
//   document.addEventListener('DOMContentLoaded', () => {
//     const firstText = carousel.querySelector('.carousel-item.active .banners > div');
//     if (firstText) firstText.classList.add('animate-text');
//   });

  const carousel = document.querySelector('#carouselExampleIndicators');

  carousel.addEventListener('slid.bs.carousel', () => {
    // Remove text animation from all banners
    document.querySelectorAll('.banners > div').forEach(el => {
      el.classList.remove('animate-text');
    });

    // Add text animation only to the active one
    const activeText = carousel.querySelector('.carousel-item.active .banners > div');
    if (activeText) {
      activeText.classList.add('animate-text');
    }
  });

  // Trigger for the first slide on load
  document.addEventListener('DOMContentLoaded', () => {
    const firstText = carousel.querySelector('.carousel-item.active .banners > div');
    if (firstText) firstText.classList.add('animate-text');
  });


document.querySelectorAll(".callbtn").forEach(click=>{
  click.addEventListener("click",()=>{
    // window.location.href='tel:+918797376640';
      window.open('tel:+918797376640', '_blank');
  })
})

document.querySelectorAll(".whatsappbtn").forEach(click=>{
  click.addEventListener("click",()=>{
      window.open('https://wa.me/919110112300', '_blank');
  })
})