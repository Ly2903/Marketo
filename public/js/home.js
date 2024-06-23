import arrProducts from './products.json' assert {type: 'json'};
import {arrWomenFashion, arrTopCategoriesTabsName,arrHotSaleTabsName, objWomenClothing,objMensClothing, objMobile , objComputer, objWatches, arrFeaturedTabsName } from './array.js';
import {renderRateStar, clickRateHeart, clickPreviewProduct} from "./main.js";
import {clickAddToCart} from "./function.js";

const womenClothing = $(".section-women-clothing .row")
const mensClothing = $(".section-mens-clothing .row")
const mobile = $(".section-mobile .row")
const computer = $(".section-computer .row")
const watches = $(".section-watches .row")
const gadget = $(".gadget .body-section")

$(document).ready(function(){
    //init slider
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
      smartSpeed: 500,
    });
  
    $(".owl-carousel#slider3").owlCarousel({
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

    renderProductsTabPane($(".categories-tab-pane .row"),$(".nav-tabs-categories"),"categories", arrTopCategoriesTabsName, renderTopCate)
    clickRateHeart();
    renderProductsTabPane($(".hot-sale-tab-pane .row"),$(".nav-tabs-hot-sale"), "hot-sale",  arrHotSaleTabsName, renderSalePd)
    renderProductsTabPane($(".featuredProducts-tab-pane .row #slider3"),$(".nav-tabs-featuredProducts"), "featuredProducts",  arrFeaturedTabsName, renderFeaturedSLider)
 
    //hide all tabs top categories
    $(".categories-tab-pane").hide()

    //show first tab pane categories
    $($(".nav-tabs-categories .nav-link")[0]).addClass("activeTabPane")
    $($(".categories-tab-pane")[0]).fadeIn();

    //event click tab pane categories
    $(".nav-tabs-categories .nav-link").on("click", function(e){
      e.preventDefault()
      $(".nav-tabs-categories .nav-link").removeClass("activeTabPane");
      $(this).addClass("activeTabPane")
      $(".categories-tab-pane").hide()
      $($(this).attr("href")).fadeIn()
    })

    //hide all tabs and show first tab hot sale
    $(".hot-sale-tab-pane").hide()
    $($(".nav-tabs-hot-sale .nav-link")[0]).addClass("activeTabPane")
    $($(".hot-sale-tab-pane")[0]).fadeIn();
  
    //event click hot sale
    $(".nav-tabs-hot-sale .nav-link").on("click", function(e){
      e.preventDefault()
      $(".nav-tabs-hot-sale .nav-link").removeClass("activeTabPane");
      $(this).addClass("activeTabPane")
      $(".hot-sale-tab-pane").hide()
      $($(this).attr("href")).fadeIn()
    })
    //hide all tabs and show first tab featured Products
    $(".featuredProducts-tab-pane").hide()
    $($(".nav-tabs-featuredProducts .nav-link")[0]).addClass("activeTabPane")
    $($(".featuredProducts-tab-pane")[0]).fadeIn();

    //event click tab pane featuredProducts
    $(".nav-tabs-featuredProducts .nav-link").on("click", function(e){
      e.preventDefault()
      $(".nav-tabs-featuredProducts .nav-link").removeClass("activeTabPane");
      $(this).addClass("activeTabPane")
      $(".featuredProducts-tab-pane").hide()
      $($(this).attr("href")).fadeIn()
    })

    renderCountdown()
    clickPreviewProduct()
});

//render product
renderSection(objWomenClothing,womenClothing, "Women Clothing",".section-women-clothing", "#15c1d7")
renderSection(objMensClothing,mensClothing, "Mens Clothing",".section-mens-clothing", "#8c6e63")
renderSection(objMobile,mobile, "Mobile",".section-mobile", "#0059a7")
renderSection(objComputer,computer, "Computer",".section-computer", "#5c6dbd")
renderSection(objWatches,watches, "Watches",".section-watches", "#009893")

//gadget
renderGadget(arrProducts.filter(val=>val.categories.includes("Gadget")), gadget)

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


        days = days <=0?"0":days<10?"0"+days:days;
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


//render list product
function renderListProductsSection(arr = [], ele){
    let str=""
    for(const i of arr){
      str+=`
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 product-item d-flex f-direction-col">
        <a data-id=${i.id} href="/product.html" class="preview-product product-img d-flex flex-center">
            <img src="${i.image}" alt="Ảnh sản phẩm">
        </a>
        <a data-id=${i.id} href="/product.html" class="preview-product product-name">${i.titlePd}</a>
        <div>
            <del class="price">${i.price}</del>
            <span class="discount">${i.discountPrice}</span>
        </div>
      </div>
      `
    }
    $(ele).html(str)
  }
  
  //render list cate
  function renderListCateSection(arr, ele){
    let str=""
    for(const i of arr){
      str+=`
      <li class="cate-list-item">
        <a href="#">${i}</a>
      </li>
      `
    }
    $(ele).html(str)
  }
  
  function renderSection(arr, ele, title, selector, bgColor){
    let str=`
    <div class="col-xs-12 col-sm-12 col-lg-12 col-xl-5 row section-column section-column-item-left">
      <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 product-cate" style="background: url(${arr.bgCateImg}) no-repeat
          top/cover; background-position-x: -20%;">
        <div class="wrap" style="--bg-color-cate: ${bgColor};">
          <div class="content">
            <h3 class="cate-header">${title}</h3>
            <ul class="cate-list"></ul>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 wrap-slider2">
        <div class="owl-carousel owl-theme" id="slider2">
          <div class="slider2-item slider2-item-1">
            <img src="${arr.slider[0]}" alt="Ảnh sản phẩm">
          </div>
          <div class="slider2-item slider2-item-2">
            <img src="${arr.slider[1]}" alt="Ảnh sản phẩm">
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
    const selectorSectionRow= selector +" .section-column-item-right .row"
    const selectorCate= selector+ " .section-column-item-left .product-cate .cate-list"
    const eleSectionRow = $(selectorSectionRow)
    const eleListCate = $(selectorCate)
  
    renderListCateSection(arr.arrCate, eleListCate)
    renderListProductsSection(arr.arrProduct, eleSectionRow)
  }

  
//render gadget
function renderGadget(arr, ele){
    let str=""
    for(const i of arr){
        str+=`
        <div class="gadget-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div class="gadget-item-product d-flex">
            <a data-id=${i.id} href="/product.html" class="preview-product item-product-img-link">
              <img src="${i.image}" alt="Ảnh sản phẩm" />
            </a>
            <div class="item-product-desc">
              <div class="rate d-flex j-between">
                <div class="rate-star">${renderRateStar(i.rate)}</div>
                <a data-id=${i.id} href="./wishlist.html" class="rate-heart">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-spinner loading"></i>
                </a>
              </div>
              <a data-id=${i.id} href="/product.html" class="preview-product item-product-title">${i.titlePd}</a>
              <div>
                <del class="price">${i.price}</del>
                <span class="discount">${i.discountPrice}</span>
              </div>
              <a href="./cart.html" data-id=${i.id} class="add-to-cart"><span>Add to cart</span></a>
            </div>
          </div>
        </div>`
      }
      $(ele).html(str)
      clickAddToCart()
      clickRateHeart()
  }
  
  //render tab pane
  function renderTopCate(arr, ele){
    let str=""
    for(const i of arr){
        str+=`
          <div class="tab-item-product col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="d-flex">
              <a data-id="${i.id}" href="./product.html" class="preview-product item-product-img-link">
                <img src="${i.image}" alt="Ảnh sản phẩm" width=125px height=125px/>
              </a>
              <div class="item-product-desc">
                <div class="rate d-flex j-between">
                  <div class="rate-star">${renderRateStar(i.rate)}</div>
                  <a data-id=${i.id} href="./wishlist.html" class="rate-heart">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-spinner loading"></i>
                  </a>
                </div>
                <a data-id="${i.id}" href="./product.html" class="preview-product item-product-title">${i.titlePd}</a>
                <del class="price">${i.price}</del>
                <span class="discount">${i.discountPrice}</span>
              </div>
            </div>
          </div>`
      }
    $(ele).html(str)
    
  }
  
  //render sale
  function renderSalePd(arr , ele ){
    let str=""
    for(const i of arr){
        str+=`
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="hot-sale-item-product">
                  <div class="item-product-img-link d-flex flex-center">
                    <a data-id=${i.id} href="/product.html" class="preview-product item-product-img-link">
                      <img src="${i.image}" alt="Ảnh sản phẩm"  width= 251px height=251px/>
                    </a>
                    <div class="badge-sale d-flex flex-center f-direction-col">
                      <span>${i.percentDiscount*100}%</span>
                      <small>Offer</small>
                    </div>
                  </div>
                  <a data-id=${i.id} href="/product.html" class="preview-product item-product-title">${i.titlePd}</a>
                  <del class="price">${i.price}</del>
                  <span class="discount">${i.discountPrice}</span>`
  
                  if(i.soldPd!==null){
                    str+=`
                      <div class="quantity-sale d-flex j-between">
                        <p class="already-sold">Already Sold: ${i.soldPd}</p>
                        <p class="available">Available: ${i.available}</p>
                      </div>
                      <div style="--my-var: ${i.soldPd/i.available >1 ? 100 : (i.soldPd/i.available)*100}%" class="progress-bar"></div>
                      <hr>`
                  }
                  str+=`
                  <div class="offer-end">
                    <span class="slogan">Hurry up!</span>
                    <small>Offers ends in:</small>
                    <div class="countdown-timer d-flex flex-center" data-id=${i.id} data-countdown="${i.timeSale}">
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
  
  function renderFeaturedSLider(array = [], ele){
    const arrTmp =[]
    for (let i = 0; i < array.length; i+=3) {
      arrTmp.push(array.slice(i, i+3))
    }
    arrTmp.reverse()
      
    for (let i = 0; i<arrTmp.length ;i++) {
      const htmlStr = arrTmp[i].map(val=>{
        return `
        <div class="slider3-item-product col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="d-flex">
            <a data-id=${val.id} href="/product.html" class="preview-product item-product-img-link">
              <img src="${val.image}" alt="Ảnh sản phẩm" width=71px height= 71px/>
            </a>
            <div class="item-product-desc">
              <a data-id=${val.id} href="/product.html" class="preview-product item-product-title">${val.titlePd}</a>
              <div>
                <del class="price">${val.price}</del>
                <span class="discount">${val.discountPrice}</span>
              </div>
            </div>
          </div>
        </div>
        `
      }).join("")
      const row=`<div class="slider3-item row">${htmlStr}</div>`
      $(ele).trigger("add.owl.carousel", [row, i]).trigger("refresh.owl.carousel");
    }
  }
  function renderProductsTabPane(eleTabPaneRow, eleNavTabs, nameMainTab, arrTabsName = [],  functionRenderPd){
    arrTabsName.map((val, idx)=>{
      $(eleNavTabs).append(`
      <li class="nav-item"><a href="#tab-${nameMainTab}-${idx+1}" class="nav-link">${val}</a></li>
      `)
      functionRenderPd(arrProducts.filter( val1 => val1.categories.includes(val)),$(eleTabPaneRow[idx]))
    })
  }
  
  
