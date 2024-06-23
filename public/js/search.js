import {clickAddToCart} from "./function.js";
import {clickRateHeart, renderRateStar, clickPreviewProduct} from "./main.js";
let arrResultSearch = JSON.parse(localStorage.getItem("arrResultSearch"))
let keyword = localStorage.getItem("keyword")
$(document).ready(function () {
    if(arrResultSearch){
        $(".keyword").html(`"${keyword}"`)
        $("title").html(`Search Results for "${keyword}"`)
        $(".icon-grid").addClass("activeIcon")
        loadListResultSearchGrid()
        loadListResultSearchList()
        $(".section-search-result-body .row.grid").show()
        $(".section-search-result-body .row.list").hide()
    }
    clickPreviewProduct()
});
function loadListResultSearchGrid(){
    $(".section-search-result-body .row.grid").html(
        arrResultSearch.map(val=>{
            return `
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <div class="product-item">
                    <div class="product-item-content">
                        <a data-id=${val.id} href="./product.html" class="preview-product product-img d-flex flex-center">
                            <img src="${val.image}" alt="Ảnh sản phẩm" width="500px" height="500px">
                        </a>
                        <ul class="list-icon d-flex flex-center">
                            <li>
                                <a href="./cart.html" data-id=${val.id} class="add-to-cart">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <span style="display: none;">Add to cart</span>
                                </a>
                            </li>
                            <li>
                                <a data-id=${val.id} href="./product.html" class="preview-product">
                                    <i class="fa-regular fa-eye"></i>
                                </a>
                            </li>
                            <li>
                                <a data-id=${val.id} href="./wishlist.html" class="rate-heart">
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-solid fa-spinner loading"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa-solid fa-repeat"></i>
                                </a>
                            </li>
                        </ul>
                        <div class="product-item-name-price">
                            <a data-id=${val.id} href="./product.html" class="preview-product product-name">${val.titlePd}</a>
                            <div>
                                <del class="price">${val.price}</del>
                                <span class="discount">${val.discountPrice}</span>
                            </div>
                        </div>
                    </div>
                    <p class="product-desc">
                        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    </p>
                </div>
            </div>
            `
        })
    )
    clickAddToCart()
    clickRateHeart()
}

function loadListResultSearchList(){
    $(".section-search-result-body .row.list").html(
        arrResultSearch.map(val=>{
        return `<div class="col-xs-12 col-sm-6">
            <div class="list-item-product">
                <div class="d-flex a-center list-item-product-content">
                    <a data-id=${val.id} href="./product.html" class="preview-product item-product-img-link">
                        <img src="${val.image}" alt="Ảnh sản phẩm" width=125px height=125px />
                    </a>
                    <div class="item-product-desc">
                        <div class="rate d-flex j-between">
                            <div class="rate-star">${renderRateStar(val.rate)}</div>
                            <a data-id=${val.id} href="./wishlist.html" class="rate-heart">
                                <i class="fa-regular fa-heart"></i>
                                <i class="fa-solid fa-spinner loading"></i>
                            </a>
                        </div>
                        <a data-id=${val.id} href="./product.html" class="preview-product item-product-title">Swimming</a>
                        <del class="price">$540.00</del>
                        <span class="discount">$34.00</span>
                    </div>
                </div>
            </div>
        </div>
        `
    }))
    clickRateHeart()
}

$(".icon-list").click(function(e){//fed700
    e.preventDefault()
    $(".section-search-result-body .row.grid").hide()
    $(".section-search-result-body .row.list").show()
    $(".grid-list a").removeClass("activeIcon")
    $(this).addClass("activeIcon")
})


$(".icon-grid").click(function(e){
    e.preventDefault()
    $(".section-search-result-body .row.grid").show()
    $(".section-search-result-body .row.list").hide()
    $(".grid-list a").removeClass("activeIcon")
    $(this).addClass("activeIcon")
})