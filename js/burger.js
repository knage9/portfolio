// $(document).ready(function(){
//     $(".header_burger").click(function(event){
//         $(".header_menu").toggleClass('active');
//         $(".header_burger").toggleClass('active');
//     });
// });
const iconmenu = document.querySelector(".header_burger")
if (iconmenu){
    const menubody = document.querySelector(".header_menu")
    iconmenu.addEventListener("click", function(e){
        document.body.classList.toggle("lock");
        iconmenu.classList.toggle("active");
        menubody.classList.toggle("active");
    });
}