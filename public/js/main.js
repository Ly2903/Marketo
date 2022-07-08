import { arrDropdownHome } from './array.js';
import { arrAllCategories } from './array.js';
import { arrMenuCategories } from './array.js';
import { arrWomenFashion } from './array.js';
import { arrTopCategories } from './array.js';
import { arrHotSale } from './array.js';
import { arrProjector } from './array.js';
import { arrGoogleGlass } from './array.js';
import { arrHeadphone } from './array.js';
import { arrLight } from './array.js';
import { arrLaptop } from './array.js';
import { arrSale16Percent } from './array.js';
import { arrSale25Percent } from './array.js';
import { arrSale33Percent } from './array.js';
import { objWomenClothing } from './array.js';
import { objMensClothing } from './array.js';
import { objMobile } from './array.js';
import { objComputer } from './array.js';
import { objWatches } from './array.js';
import { arrGadget } from './array.js';
import { arrSlider5ItemName } from './array.js';
import { arrFeaturedPd } from './array.js';
import { arrTrendingPd } from './array.js';
import { arrHotSalePd } from './array.js';

$(document).ready(function(){
    $(".owl-carousel#slider1").owlCarousel({
        items: 1,
        mouseDrag: false,
        animateOut: "fadeOut",
        loop: true,
        autoplay: true,
        autoplayTimeout: 15000,
    });
    $(".owl-carousel#slider2").owlCarousel({
        items: 1,
        mouseDrag: false,
        animateOut: "fadeOut",
    });
    $(".owl-carousel#slider3").owlCarousel({
        items: 1,
        mouseDrag: false,
        animateOut: "fadeOut",
    });
    $(".owl-carousel#slider4").owlCarousel({
      items: 1,
      smartSpeed: 500,
  });
  
  $(".owl-carousel#slider5").owlCarousel({
    items: 1,
    animateOut: "fadeOut",
    mouseDrag: false,
    touchDrag: false,
  });
  $(".owl-carousel#slider5-1").owlCarousel({
    dots: false,
    nav: true,
    smartSpeed: 500,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      576:{
        items: 1,
        nav: false
      },
      768:{
        items: 2,
        nav: false
      },
      992:{
        items: 3,
        nav: true
      },
      1200:{
        items: 3,
        nav: true
      }
    },
    navText: [`<i class="fa-solid fa-chevron-left"></i>`,`<i class="fa-solid fa-chevron-right"></i>`],
  });
    $.each($(".owl-carousel#slider2 .owl-dots button span"), function(key, value){
        value.innerText=`${arrTopCategories[key]}`
    })
    $.each($(".owl-carousel#slider3 .owl-dots button span"), function(key, value){
        value.innerText=`${arrHotSale[key]}`
    })
    $.each($(".owl-carousel#slider5 >.owl-dots >button >span"), function(key, value){
      value.innerText=`${arrSlider5ItemName[key]}`
    })
});


const home = $(".nav-list-item.home")
const pages = $(".nav-list-item.pages")
const pagesProducts = $(".pages-products")
const dropdownHome = $(".dropdown-home")
const dropdownPages = $(".dropdown-pages")
const dropdownProducts = $(".dropdown-products")
const dropdownShop = $(".dropdown-shop")
const dropdownBlog = $(".dropdown-blog")
const dropdownGallery = $(".dropdown-gallery")
const dropdownHomeRow = $(".dropdown-home .row")
const allCategories = $(".all-categories")
const listCategories = $(".list-categories")
const btnSearch = $(".btn-search")
const categoriesMenuLink = $(".categories-menu-link");
const categoriesMenuList = $(".categories-menu-list");
const angleDownActive = $(".angle-down-active");
const modalWomenFashion = $(".modal-women-fashion");
const projectorRow = $("#slider2 .slider2-item.projector .row")
const googleGlassRow = $("#slider2 .slider2-item.google-glass .row")
const headPhoneRow = $("#slider2 .slider2-item.headphone .row")
const lightRow = $("#slider2 .slider2-item.light .row")
const laptopRow = $("#slider2 .slider2-item.laptop .row")
const sale16Percent = $("#slider3 .slider3-item.sale-16Percent .row")
const sale25Percent = $("#slider3 .slider3-item.sale-25Percent .row")
const sale33Percent = $("#slider3 .slider3-item.sale-33Percent .row")
const womenClothing = $(".section-women-clothing .row")
const mensClothing = $(".section-mens-clothing .row")
const mobile = $(".section-mobile .row")
const computer = $(".section-computer .row")
const watches = $(".section-watches .row")
const gadget = $(".gadget .body-section")
const featuredSlider51Row = $(".featuredProducts .slider5-item-featuredProducts #slider5-1")
const trendingSlider51Row = $(".featuredProducts .slider5-item-trending #slider5-1")
const hotsaleSlider51Row = $(".featuredProducts .slider5-item-hotsale #slider5-1")



//render Home
renderHome()

//renderListCate
renderListCategories()
renderWomenFashion()

//render Top categories
renderTopCate(arrProjector, projectorRow)
renderTopCate(arrGoogleGlass, googleGlassRow)
renderTopCate(arrHeadphone, headPhoneRow)
renderTopCate(arrLight, lightRow)
renderTopCate(arrLaptop, laptopRow)

//render Hot sale
renderSalePd(arrSale16Percent, sale16Percent, "15%")
renderSalePd(arrSale25Percent, sale25Percent, "25%")
renderSalePd(arrSale33Percent, sale33Percent, "33%")

//render product
renderSection(objWomenClothing,womenClothing, "Women Clothing",".section-women-clothing", "#15c1d7")
renderSection(objMensClothing,mensClothing, "Mens Clothing",".section-mens-clothing", "#8c6e63")
renderSection(objMobile,mobile, "Mobile",".section-mobile", "#0059a7")
renderSection(objComputer,computer, "Computer",".section-computer", "#5c6dbd")
renderSection(objWatches,watches, "Watches",".section-watches", "#009893")

//gadget
renderGadget(arrGadget, gadget)

//featured Products
renderFeaturedPd(arrFeaturedPd, featuredSlider51Row)
renderFeaturedPd(arrTrendingPd, trendingSlider51Row)
renderFeaturedPd(arrHotSalePd, hotsaleSlider51Row)

//countdown
renderCountdown()

function renderHome() {
    let str = ""
    for (const i of arrDropdownHome) {
        str += `
    <div class="dropdown-home-item col-md-3 col-ml-12" data-id=${i.id}>
        <a href="#" class="content-item">
            <img src="${i.image}" alt=""/>
            <h4>${i.content}</h4>
        </a>
    </div>`
    }
    dropdownHomeRow.html(str)
}
function renderListCategories() {
    let str = ""
    for (const i of arrAllCategories) {
        str += `<li>${i}</li>`
    }
    listCategories.html(str);
}

function renderWomenFashion() {
    let str = ""
    $.each(arrWomenFashion, function (key, value) {
        str += `
        <li class="col-lg-3 col-md-3">
            <div class="img-electronics d-flex j-center">
                <img src="${value.image}" alt="">
            </div>
            <h2>${value.title}</h2>
            <ul class="page-list">`
        $.each(value.pageList, function (key1, value1) {
            str += `<li class="page-list__item">
                    <a href="#" class="page-list__item-link">${value1}</a>
                </li>`
        })
        str += `</ul></li>`
    })
    modalWomenFashion.html(str)
}

$(document).on("click", function (e) {
    if ($(e.target).closest(".list-categories") &&
        listCategories.is(":visible")) {
        listCategories.hide();
        $(".categories-title").css("color", "#7b7b7b");
    }
    if($(e.target).closest(".overlay-menu") && $(".overlay-menu").is(":visible")){
      $(".main-menu-bar").css("animation", "hideOverlay 0.5s forwards");
      setTimeout(() => {
        $(".overlay-menu").css("animation", "hideOverlay 0.5s forwards");
      }, 500);
      setTimeout(() => {
        $(".main-menu-bar").css("animation","")
        $(".main-menu-bar").css("display","")
        $(".overlay-menu").css("animation","")
        $(".overlay-menu").css("display","")
        dropdownHome.css("display","")
        dropdownPages.css("display","")
        dropdownShop.css("display","")
        dropdownBlog.css("display","")
        dropdownGallery.css("display","")
        dropdownProducts.css("display","")
      }, 1000);
    }
})

allCategories.on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!listCategories.is(":visible")) {
        listCategories.fadeToggle(100)
        $(".categories-title").css("color", "#0063d1");
    } else {
      listCategories.fadeToggle(100)
        $(".categories-title").css("color", "#7b7b7b");
    }
})
listCategories.on("click", "li", function (e) {
    const val = $(e.target).closest("li").text();
    $(".all-categories .categories-title span").html(val)
})

categoriesMenuLink.on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    let isActive = categoriesMenuList.is(":visible");
    categoriesMenuList.fadeToggle(300);
    if (!isActive) {
        angleDownActive.css("transform", "rotateX(-180deg)");
    } else {
        angleDownActive.css("transform", "rotateX(0)");
    }

})

$(".nav-bar-icon").on("click", function(e){
  $(".overlay-menu").show()
  $(".overlay-menu").css("animation", "showOverlay 1s forwards");
  setTimeout(() => {
    $(".main-menu-bar").show()
    $(".main-menu-bar").css("animation", "showOverlay 0.5s forwards");
  }, 800);
})

$(".main-menu-bar").on("click", function(e){
  e.stopPropagation()
})

$(".nav-bar-icon").on("click", function(e){
  e.stopPropagation()
})

$(".close-menu-bar").on("click", function(e){
  $(".main-menu-bar").css("animation", "hideOverlay 0.5s forwards");
      setTimeout(() => {
        $(".overlay-menu").css("animation", "hideOverlay 0.5s forwards");
      }, 500);
      setTimeout(() => {
        $(".main-menu-bar").css("animation","")
        $(".main-menu-bar").css("display","")
        $(".overlay-menu").css("animation","")
        $(".overlay-menu").css("display","")
        dropdownHome.css("display","")
        dropdownPages.css("display","")
        dropdownShop.css("display","")
        dropdownBlog.css("display","")
        dropdownGallery.css("display","")
        dropdownProducts.css("display","")
      }, 1000);
})
$(".icon-show-dropdown").on("click", function(e){
  e.preventDefault()
  if($(".overlay-menu").is(":visible")){
    console.log("click")
  const content = $(e.target).data("content");
  if(content==="home"){
    if(dropdownHome.is(":visible")){
    dropdownHome.hide()
    }else{
      dropdownHome.show()
    }
  }
  else if(content==="page"){
    if(dropdownPages.is(":visible")){
      dropdownPages.hide()
      }else{
        dropdownPages.show()
      }
  }
  else if(content==="pages-products"){
    if(dropdownProducts.is(":visible")){
      dropdownProducts.hide()
      }else{
        dropdownProducts.show()
      }
  }
  else if(content==="shop"){
    if(dropdownShop.is(":visible")){
      dropdownShop.hide()
      }else{
        dropdownShop.show()
      }
  }
  else if(content==="blog"){
    if(dropdownBlog.is(":visible")){
      dropdownBlog.hide()
      }else{
        dropdownBlog.show()
      }
  }
  else if(content==="gallery"){
    if(dropdownGallery.is(":visible")){
      dropdownGallery.hide()
      }else{
        dropdownGallery.show()
      }
  }
  // const height = $(".nav-list").css("height")
  // if(height.substring(0,height.length-2)>=500){
  //   $(".nav-list").css("height", "80vh");
  //   $(".nav-list").css("overflow-y", "auto");
  // }
  }
})
//add product in projector
function renderTopCate(arr, ele){
    let str=""
    for(const i of arr){
        str+=`
    <div class="slider2-item-product col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="d-flex">
          <a href="#" class="item-product-img-link">
            <img src="${i.image}" alt="" />
          </a>
          <div class="item-product-desc">
            <div class="rate d-flex j-between">
              <div class="rate-star">`
                for(let j=1;j<=i.rate;j++){
                    str+=`<i class="fa-solid fa-star"></i>`
                }
                if(Math.round(i.rate)!==i.rate){
                  str+=`<i class="fa-solid fa-star-half-stroke"></i>`
                }else{
                  str+=`<i class="fa-regular fa-star"></i>`
                }
                for(let k=1;k<=5 - Math.round(i.rate) - 1;k++){
                    str+=`<i class="fa-regular fa-star"></i>`
                }
                str+=`
              </div>
              <a href="#" class="rate-heart">
                <i class="fa-regular fa-heart"></i>
              </a>
            </div>
            <a href="#" class="item-product-title">${i.productName}</a>`
            let price=""
            let discount=""
            if(i.arrPrice.length === 2){
                price=i.arrPrice[0]
                discount=i.arrPrice[1]
            }else{
                discount=i.arrPrice[0]
            }
            str+=`<span class="price">${price}</span>
            <span class="discount">${discount}</span>
          </div>
        </div>
      </div>`
    }
    $(ele).html(str)
}

function renderSalePd(arr , ele , percent){
    let str=""
    for(const i of arr){
        str+=`
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
        <div class="slider3-item-product">
                  <div class="item-product-img-link d-flex flex-center">
                    <img
                      src="${i.image}"
                      alt="">
                    <div class="badge-sale d-flex flex-center f-direction-col">
                      <span>${percent}</span>
                      <small>Offer</small>
                    </div>
                  </div>
                  <a href="#" class="item-product-title">${i.productName}</a>`
                  let price=""
            let discount=""
            if(i.arrPrice.length === 2){
                price=i.arrPrice[0]
                discount=i.arrPrice[1]
            }else{
                discount=i.arrPrice[0]
            }
            str+=`<span class="price">${price}</span>
            <span class="discount">${discount}</span>`

            if(i.soldPd!=="null"){
                let sold = +i.soldPd.split("").splice(i.soldPd.lastIndexOf(" ")+1).join("")  
                let available = +i.available.split("").splice(i.available.lastIndexOf(" ")+1).join("")  
                str+=`<div class="quantity-sale d-flex j-between">
                    <p class="already-sold">${i.soldPd}</p>
                    <p class="available">${i.available}</p>
                  </div>
                  <div style="--my-var: ${sold/available >1 ? 100 : (sold/available)*100}%" class="progress-bar"></div>
                    <hr>`
                  }
                  str+=`<div class="offer-end">
                    <span class="slogan">Hurry up!</span>
                    <small>Offers ends in:</small>
                    <div class="countdown-timer d-flex flex-center" data-id=${i.id} data-countdown="${i.dataCountdown}">
                      <div class="days">
                        <div class="circle">
                          <span></span>
                        </div>
                        <p>DAYS</p>
                      </div>
                      <div class="hours">
                        <div class="circle">
                          <span></span>
                        </div>
                        <p>HOURS</p>
                      </div>
                      <div class="minutes">
                        <div class="circle">
                          <span></span>
                        </div>
                        <p>MINUTES</p>
                      </div>
                      <div class="seconds">
                        <div class="circle">
                          <span></span>
                        </div>
                        <p>SECONDS</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>`
    }
    $(ele).html(str)
}

function renderCountdown(){
const countDown = $(".hot-sale .countdown-timer");
let second = 1000
let minute = second * 60
let hour = minute * 60
let day = hour * 24 
setInterval(() => {
  $.each(countDown, function(key, val){
    let str = $(val).data("countdown");
    let id = $(val).data("id");

    let dateEnd = new Date(str).getTime();
    let distance = dateEnd - new Date().getTime();
    
    let days = Math.floor(distance/day);
    let hours = Math.floor((distance%day)/hour);
    let minutes = Math.floor((distance%hour)/minute);
    let seconds = Math.floor((distance%minute)/second);


    days = days <=0?"00":days<10?"0"+days:days;
    hours = hours<=0?"00":hours<10?"0"+hours:hours;
    minutes = minutes<=0?"00":minutes<10?"0"+minutes:minutes;
    seconds = seconds<=0?"00":seconds<10?"0"+seconds:seconds;



    $(`.countdown-timer[data-id=${id}]  .days .circle span`).html(days)
    $(`.countdown-timer[data-id=${id}]  .hours .circle span`).html(hours)
    $(`.countdown-timer[data-id=${id}]  .minutes .circle span`).html(minutes)
    $(`.countdown-timer[data-id=${id}]  .seconds .circle span`).html(seconds)
  });
    
}, 1000);
  

}

//render clothing women product
function renderSliderPd(arr, ele){
  let str=""
  for(const i of arr){
    str+=`
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 product-item d-flex f-direction-col">
      <a href="#" class="product-img d-flex flex-center">
      <img src="${i.image}" alt="">
    </a>
    <a href="#" class="product-name">${i.productName}</a>`
    let price=""
            let discount=""
            if(i.arrPrice.length === 2){
                price=i.arrPrice[0]
                discount=i.arrPrice[1]
            }else{
                discount=i.arrPrice[0]
            }
            str+=`<div><span class="price">${price}</span>
            <span class="discount">${discount}</span></div>
    </div>
    `
  }
  $(ele).html(str)
}

//render clothing cate
function renderWomenClothingCate(arr, ele){
  let str=""
  for(const i of arr){
    str+=`<li class="cate-list-item">
    <a href="#">${i}</a>
  </li>
    `
  }
  $(ele).html(str)
}
function renderSection(arr, ele, title, selector, bgColor){
  let str=`<div class="col-xs-12 col-sm-12 col-lg-12 col-xl-5 row section-column section-column-item-left">
  <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 product-cate" style="background: url(${arr.bgCateImg}) no-repeat
  top/cover; background-position-x: -20%;">
    <div class="wrap" style="--bg-color-cate: ${bgColor};">
      <div class="content">
        <h3 class="cate-header">${title}</h3>
        <ul class="cate-list">
        </ul>
      </div>
    </div>
  </div>
  <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 wrap-slider4">
    <div class="owl-carousel owl-theme" id="slider4">
      <div class="slider4-item slider4-item-1">
        <img src="${arr.slider[0]}" alt="">
      </div>
      <div class="slider4-item slider4-item-2">
        <img src="${arr.slider[1]}" alt="">
      </div>
    </div>
  </div>
</div>
<div class="col-xs-12 col-sm-12 col-lg-12 col-xl-7 section-column section-column-item-right d-flex">
  <div class="row"></div>
</div>`
//innerHtml
$(ele).html(str)

//dom
const selectorSlider= selector +" .section-column-item-right .row"
const selectorCate= selector+ " .section-column-item-left .product-cate .cate-list"
const eleSliderRow = $(selectorSlider)
const eleListCate = $(selectorCate)

renderWomenClothingCate(arr.arrCate, eleListCate)
renderSliderPd(arr.arrProduct, eleSliderRow)

}

//render gadget
function renderGadget(arr, ele){
  let str=""
  for(const i of arr){
      str+=`
  <div class="gadget-item-product col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div class="content-product d-flex">
        <a href="#" class="item-product-img-link">
          <img src="${i.image}" alt="" />
        </a>
        <div class="item-product-desc">
          <div class="rate d-flex j-between">
            <div class="rate-star">`
              for(let j=1;j<=i.rate;j++){
                  str+=`<i class="fa-solid fa-star"></i>`
              }
              if(Math.round(i.rate)!==i.rate){
                str+=`<i class="fa-solid fa-star-half-stroke"></i>`
              }else{
                str+=`<i class="fa-regular fa-star"></i>`
              }
              for(let k=1;k<=5 - Math.round(i.rate) - 1;k++){
                  str+=`<i class="fa-regular fa-star"></i>`
              }
              
              str+=`
            </div>
            <a href="#" class="rate-heart">
              <i class="fa-regular fa-heart"></i>
            </a>
          </div>
          <a href="#" class="item-product-title">${i.productName}</a>`
          let price=""
          let discount=""
          if(i.arrPrice.length === 2){
              price=i.arrPrice[0]
              discount=i.arrPrice[1]
          }else{
              discount=i.arrPrice[0]
          }
          str+=`<div><span class="price">${price}</span>
          <span class="discount">${discount}</span></div>
          <button class="btn-add-to-cart"><span>Add to cart</span></button>
        </div>
      </div>
    </div>`
  }
  $(ele).html(str)
}

//render featured Products
function renderFeaturedPd(arr, ele){
  let str=""
  let count=3;
  $.each(arr, function(key, val){
    if(count===3 && str===""){
      str+=`<div class="slider5-1-item slider5-1-item-1 row">`
    }else if(count===0){
      str+=`<div class="slider5-1-item slider5-1-item-1 row">`
      count=3;
    }
    
    str+=`<div class="slider5-item-product col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div class="d-flex">
                          <a href="#" class="item-product-img-link">
                            <img src="${val.image}" alt="Ảnh sản phẩm" />
                          </a>
                          <div class="item-product-desc">
                            <a href="#" class="item-product-title">${val.productName}</a>
                            `
                            let price=""
          let discount=""
          if(val.arrPrice.length === 2){
              price=val.arrPrice[0]
              discount=val.arrPrice[1]
          }else{
              discount=val.arrPrice[0]
          }
          str+=`<div><span class="price">${price}</span>
          <span class="discount">${discount}</span></div>
                          </div>
                        </div>
                      </div>
    `
    if(count===1){
      str+=`</div>`
    }
    count--;
  })
  $(ele).html(str)
}

//back top
const btnBackTop= $(".btn-back-top");

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     btnBackTop.addClass('show');
//   } else {
//     btnBackTop.removeClass('show');
//   }
// });

btnBackTop.on('click', function(e) {
  $('html, body').animate({scrollTop:0}, 2000);
});




