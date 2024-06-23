//import array
import arrProducts from "./products.json" assert { type: "json" };
import { arrDropdownHome, arrAllCategories, arrWomenFashion } from "./array.js";
import {
  getWishlist,
  getProductsAddToCart,
  loadQuantityRateHeart,
  loadQuantityProductsCart,
  loadShoppingCartList,
  setItemLSWishList,
} from "./function.js";

const modalWomenFashion = $(".modal-women-fashion");
//get dropdown
const dropdownHome = $(".dropdown-home");
const dropdownPages = $(".dropdown-pages");
const dropdownProducts = $(".dropdown-products");
const dropdownShop = $(".dropdown-shop");
const dropdownBlog = $(".dropdown-blog");
const dropdownGallery = $(".dropdown-gallery");
const dropdownHomeRow = $(".dropdown-home .row");

//get categories
const allCategories = $(".all-categories");
const listCategories = $(".list-categories");
const categoriesMenuLink = $(".categories-menu-link");
const categoriesMenuList = $(".categories-menu-list");
const angleDownActive = $(".angle-down-active");

//load localStorage
export let arrWishlist = getWishlist();
export let arrProductsAddToCart = getProductsAddToCart();
export let arrProductsAddToCartTmp = getProductsAddToCart();

$(document).ready(function () {
  //set quantity rate heart
  loadQuantityRateHeart(arrWishlist);
  loadQuantityProductsCart(arrProductsAddToCart);
  loadShoppingCartList(arrProductsAddToCart);

  //back top
  $(".btn-back-top").on("click", function (e) {
    $("html, body").animate({ scrollTop: 0 }, 2000);
  });
});

//render Home
renderHome();

//renderListCate
renderAllCategories();
renderWomenFashion();

//render Dropdown Home
function renderHome() {
  let str = "";
  for (const i of arrDropdownHome) {
    str += `
    <div class="dropdown-home-item col-md-3 col-breakpoints-12" data-id=${i.id}>
        <a href="#" class="content-item">
            <img src="${i.image}" alt="Ảnh sản phẩm"/>
            <h4>${i.content}</h4>
        </a>
    </div>`;
  }
  dropdownHomeRow.html(str);
}

//render All Categories
function renderAllCategories() {
  let str = "";
  for (const i of arrAllCategories) {
    str += `<li>${i}</li>`;
  }
  listCategories.html(str);
}

//render women fashion
function renderWomenFashion() {
  let str = "";
  $.each(arrWomenFashion, function (key, value) {
    str += `
            <li class="col-lg-3 col-md-3">
              <div class="img-electronics d-flex j-center">
                  <img src="${value.image}" alt="Ảnh sản phẩm">
              </div>
              <h2>${value.title}</h2>
              <ul class="page-list">`;
    $.each(value.pageList, function (key1, value1) {
      str += `<li class="page-list__item">
                    <a href="#" class="page-list__item-link">${value1}</a>
                </li>`;
    });
    str += `</ul></li>`;
  });
  modalWomenFashion.html(str);
}

//check click outside
$(document).on("click", function (e) {
  //check click outside list categories
  if (
    $(e.target).closest(".list-categories") &&
    listCategories.is(":visible")
  ) {
    listCategories.hide();
    $(".categories-title").css("color", "#7b7b7b");
  }

  //check click outside menu-bar
  if (
    $(e.target).closest(".overlay-menu") &&
    $(".overlay-menu").is(":visible")
  ) {
    closeOutsideMenubar();
  }

  //check click outside result-search
  if (
    $(e.target).closest(".result-search") &&
    $(".result-search").is(":visible")
  ) {
    $(".result-search").hide();
  }

  //check click outside overlay shopping cart
  if (
    $(e.target).closest(".overlay-shopping-cart") &&
    $(".overlay-shopping-cart").is(":visible")
  ) {
    closeOutsideShoppingCart();
  }
});
function closeOutsideMenubar() {
  $(".main-menu-bar").css("animation", "hideOverlay 0.5s forwards");
  setTimeout(() => {
    $(".overlay-menu").css("animation", "hideOverlay 0.5s forwards");
  }, 500);
  setTimeout(() => {
    $(".main-menu-bar").css("animation", "");
    $(".main-menu-bar").css("display", "");
    $(".overlay-menu").css("animation", "");
    $(".overlay-menu").css("display", "");
    dropdownHome.css("display", "");
    dropdownPages.css("display", "");
    dropdownShop.css("display", "");
    dropdownBlog.css("display", "");
    dropdownGallery.css("display", "");
    dropdownProducts.css("display", "");
  }, 1000);
}

//allCategories click
allCategories.on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  if (!listCategories.is(":visible")) {
    listCategories.fadeToggle(100);
    $(".categories-title").css("color", "#0063d1");
  } else {
    listCategories.fadeToggle(100);
    $(".categories-title").css("color", "#7b7b7b");
  }
});
//show text click categories
listCategories.on("click", "li", function (e) {
  const val = $(e.target).closest("li").text();
  $(".all-categories .categories-title span").html(val);
});

//click menu categories -> active icon angle down
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
});

//click nav-bar-icon
$(".nav-bar-icon").on("click", function (e) {
  $(".overlay-menu").show();
  $(".overlay-menu").css("animation", "showOverlay 1s forwards");
  setTimeout(() => {
    $(".main-menu-bar").show();
    $(".main-menu-bar").css("animation", "showOverlay 0.5s forwards");
  }, 800);
});

$(".main-menu-bar").on("click", function (e) {
  e.stopPropagation();
});

$(".nav-bar-icon").on("click", function (e) {
  e.stopPropagation();
});

$(".close-menu-bar").on("click", function (e) {
  closeOutsideMenubar();
});

$(".nav-list-item a").click(function (e) {
  $(".nav-list-item a").removeClass("activeLi");
  $(this).addClass("activeLi");
});

//click dropdown home, page, ...
$(".icon-show-dropdown").on("click", function (e) {
  e.preventDefault();
  if ($(".overlay-menu").is(":visible")) {
    const content = $(e.target).data("content");
    if (content === "home") {
      if (dropdownHome.is(":visible")) {
        dropdownHome.hide();
      } else {
        dropdownHome.show();
      }
    } else if (content === "page") {
      if (dropdownPages.is(":visible")) {
        dropdownPages.hide();
      } else {
        dropdownPages.show();
      }
    } else if (content === "pages-products") {
      if (dropdownProducts.is(":visible")) {
        dropdownProducts.hide();
      } else {
        dropdownProducts.show();
      }
    } else if (content === "shop") {
      if (dropdownShop.is(":visible")) {
        dropdownShop.hide();
      } else {
        dropdownShop.show();
      }
    } else if (content === "blog") {
      if (dropdownBlog.is(":visible")) {
        dropdownBlog.hide();
      } else {
        dropdownBlog.show();
      }
    } else if (content === "gallery") {
      if (dropdownGallery.is(":visible")) {
        dropdownGallery.hide();
      } else {
        dropdownGallery.show();
      }
    }
  }
});

//render star
export function renderRateStar(rate = 0) {
  let str = "";
  for (let j = 1; j <= Math.floor(rate); j++) {
    str += `<i class="fa-solid fa-star"></i>`;
  }
  if (Math.round(rate) !== rate) {
    str += `<i class="fa-solid fa-star-half-stroke"></i>`;
  }
  for (let k = 1; k <= 5 - Math.ceil(rate); k++) {
    str += `<i class="fa-regular fa-star"></i>`;
  }
  return str;
}

//search products
$(".searchGroup-form").click(function (e) {
  e.stopPropagation();
});
$(".searchGroup-form").on("submit", function (e) {
  e.preventDefault();
  e.stopPropagation();
  const inpStr = $(".search-inp").val().toLowerCase();
  getResultSearch(inpStr);
});

function getResultSearch(inpStr) {
  const category = $(".search-category").text();
  let arrResult = [];
  if (category.toLowerCase() === "all categories") {
    arrResult = arrProducts.filter((val) =>
      val.titlePd.toLowerCase().includes(inpStr)
    );
  } else {
    arrResult = arrProducts.filter((val) => {
      return (
        val.categories.includes(category) &&
        val.titlePd.toLowerCase().includes(inpStr)
      );
    });
  }
  localStorage.setItem("arrResultSearch", JSON.stringify(arrResult));
  localStorage.setItem("keyword", inpStr);
  renderResultSearchProducts(arrResult, inpStr);
  $(".result-search").show();
}

//render search
function renderResultSearchProducts(arr = [], inpStr) {
  const regex = new RegExp(inpStr, "gi");

  if (arr.length === 0) {
    $(".result-search .row").html(
      `<div class="col-md-12 no-result">
          <p>Sorry, but nothing matched your search criteria. Please try again with some different keywords.</p>
      </div>
      `
    );
  } else {
    $(".result-search .row").html(
      arr.slice(0, 6).map((val) => {
        let name = val.titlePd.replace(regex, (match, g1, g2) => {
          return `<span style="color: red">${match}</span>`;
        });
        return `
        <li class="result-search-item-product col-md-6">
          <a data-id=${val.id} href="./product.html" class="preview-product item-product-link d-flex">
            <div class="item-product-img-link">
              <img src="${val.image}" alt="Ảnh sản phẩm" width=71px height=71px />
            </div>
            <div class="item-product-desc">
              <div class="item-product-title">${name}</div>
              <div>
                <del class="price">${val.price}</del>
                <span class="discount">${val.discountPrice}</span>
              </div>
            </div>
          </a>
        </li>
        `;
      })
    );

    if (arr.length >= 6) {
      $(".result-search .row").append(
        `<div class="col-md-12 search-view-more">
          <a href="./search.html">View more</a>
      </div>
      `
      );
    }
    clickPreviewProduct();
  }
}

//click rate heart
export function clickRateHeart() {
  $(".rate-heart").on("click", function (e) {
    const id = +$(this).data("id");
    const pd = arrProducts.filter((val) => val.id === id);
    if (arrWishlist.filter((val) => val.id === id).length === 0) {
      e.preventDefault();
      $(this).children(".loading").show();
      setTimeout(() => {
        $(".add-success p").html(
          "Product has been successfully added to wishlist"
        );
        $(".add-success").fadeIn(1000);
        $(this).children(".loading").hide();
      }, 1500);
      setTimeout(() => {
        $(".add-success").fadeOut(1000);
      }, 3000);
      arrWishlist.push(pd[0]);
      loadQuantityRateHeart(arrWishlist);
      setItemLSWishList(arrWishlist);
    }
  });
}

//click icon-cart
$(".icon-cart").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(".overlay-shopping-cart").fadeIn();
  setTimeout(() => {
    $(".shopping-cart").show();
    $(".shopping-cart").css("animation", "showOverlayShopping 1s forwards");
  }, 500);
});
$(".close-shopping-cart").click(function (e) {
  e.preventDefault();
  closeOutsideShoppingCart();
});
$(".shopping-cart").click(function (e) {
  e.stopPropagation();
});
function closeOutsideShoppingCart() {
  $(".shopping-cart").css("animation", "hideOverlayShopping 0.5s forwards");

  setTimeout(() => {
    $(".overlay-shopping-cart").fadeOut();
    $(".shopping-cart").hide();
  }, 500);
}

//click view on map
$(".overlay-view-on-map-content").click(function (e) {
  e.stopPropagation();
});
$(".btn-view-map").click(function (e) {
  e.preventDefault();
  $(".overlay-view-on-map").fadeIn(400);
  $(".overlay-view-on-map").css("display", "flex");
  setTimeout(() => {
    $(".frame-map").fadeIn(200);
  }, 500);
});
$(".overlay-view-on-map").click(function (e) {
  $(".frame-map").fadeOut(300);
  setTimeout(() => {
    $(this).fadeOut(300);
  }, 300);
});
$(".close-overlay-view-map").click(function (e) {
  $(".frame-map").fadeOut(300);
  setTimeout(() => {
    $(".overlay-view-on-map").fadeOut(300);
  }, 300);
});

//preview product
export function clickPreviewProduct() {
  $(".preview-product").click(function (e) {
    const id = +$(this).data("id");
    const pd = arrProducts.find((val) => val.id === id);
    localStorage.setItem("productPreview", JSON.stringify(pd));
  });
}

// Tro ly ao
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const synth = window.speechSynthesis;
recognition.lang = "EN-US";
//vi-VI
recognition.continuous = false;
$(".icon-mic").click((e) => {
  recognition.start();
});

recognition.onspeechend = () => {
  recognition.stop();
};

recognition.onerror = (err) => {
  speak("Try again");
};

recognition.onresult = (e) => {
  const text = e.results[0][0].transcript;
  $(".search-inp").val(text);
  getResultSearch(text);
};

const speak = (text) => {
  if (synth.speaking) {
    return;
  }

  const utter = new SpeechSynthesisUtterance(text);

  utter.onend = () => {
    console.log("SpeechSynthesisUtterance.onend");
  };
  utter.onerror = (err) => {
    console.error("SpeechSynthesisUtterance.onerror", err);
  };
  synth.speak(utter);
};
