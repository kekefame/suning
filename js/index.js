var designWidth=480;
var fontSize=100;
function resize(){
        var deviceWidth=document.documentElement.clientWidth;
        var ratio=deviceWidth/designWidth;
        var newfontSize=ratio<1?fontSize:fontSize*ratio;
        document.documentElement.style.fontSize=newfontSize+'px';
    }
resize();
window.onresize=resize;
/*轮播*/
$(function(){
    var mySwiper=new Swiper(".swiper-container",{
        direction:'horizontal',
        loop:true,
        pagination:'.swiper-pagination',
        paginationClickable:'true',
        autoplay:2000,
        speed:500
    })
});
$(function(){
    var mySwiper1=new Swiper(".swiper-container1",{
        direction:"vertical",
        autoplay:2000
    })
});
$(function(){
    var mySwiper1=new Swiper(".swiper-container2",{
        direction:"horizontal",
        autoplayStopOnlast:true,
        slidesPerGroup:1
    })
});
$(function(){
    var mySwiper1=new Swiper(".swiper-container8",{
        direction:"horizontal",
        autoplayStopOnlast:true,
        slidesPerView:1.825095057,
        pagination: '.swiper-pagination'
    })
});

