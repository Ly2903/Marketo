import {getProductsAddToCart, setItemLSProductsAddToCart, loadShoppingCartList, loadQuantityProductsCart } from "./function.js";
import { clickRateHeart, renderRateStar } from "./main.js";

const productPreview = localStorage.getItem("productPreview") ? JSON.parse(localStorage.getItem("productPreview")) :{}
let productTmp = {...productPreview, quantity: 0}


$(document).ready(function () {
    $("title").html(`${productPreview.titlePd} - Marketo`)
    $(".breadcrumb .titlePd").html(`${productPreview.titlePd}`)
    loadProductPreview(productPreview)
});

function loadProductPreview(productPreview = {}){
    $(".section-preview-product-content").html(`
    <div class="item-product row" data-id="${productPreview.id}">
        <div class="product-img col-xs-12 col-sm-6">
            <div class="d-flex flex-center">
                <div class="img-item">
                    <img src="${productPreview.image}" alt="Ảnh sản phẩm" width="500px" height="500px">
                </div>
                <div class="product-gallery-img">
                    <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                </div>
                <span class="product-on-sale"></span>
            </div>
        </div>
        <div class="product-desc col-xs-12 col-sm-6">
            <div class="product-name">
                <span>${productPreview.titlePd}</span>
            </div>
            <span class="product-category">Categories:
                ${productPreview.categories.map(val=>{
                    return `<a href="#" class="product-category-item">${val}</a>, `
                }).join("")}
            </span>
            <div class="rate-star">${renderRateStar(productPreview.rate)} <a href="#">(1 customer review)</a></div>
            <p class="product-detail-short-desc">
                DPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                placerat eleifend leo.              
            </p>
            <div class="product-price">
                <del class="price">${productPreview.price}</del>
                <span class="discount">${productPreview.discountPrice}</span>
            </div>
            <span class="product-stock-status">10 in stock</span>
            <div class="product-quantity-add d-flex">
                <div class="product-quantity">
                    <div class="quantity-content d-flex-inline">
                        <button class="decrease">-</button>
                        <input class="inp-quantity" type="number" value="1" min="1" step="1" onkeypress="return event.charCode >= 48">
                        <button class="increase">+</button>
                    </div>
                </div>
                <div class="product-add-to-cart">
                    <a href="#" class="add-to-cart">
                        <span>Add to cart</span>
                    </a>
                </div>
            </div>
            <a data-id="${productPreview.id}" href="./wishlist.html" class="rate-heart">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-heart"></i>
            </a>
        </div>
    </div>
    `)
    clickDecrease()
    clickIncrease()
    clickInpQuantity()
    clickAddToCart()
    clickRateHeart()
}

function clickDecrease(){
    $(".section-preview-product-content .decrease").click(function(e){
        e.preventDefault()
        let quantity = getQuantityProducts(e)
        if(quantity  > 1)
            $(this).siblings(".inp-quantity").val(quantity - 1)
        productTmp.quantity = quantity - 1
    })
}
function clickIncrease(){
    $(".section-preview-product-content .increase").click(function(e){
        e.preventDefault()
        let quantity = getQuantityProducts(e)
        $(this).siblings(".inp-quantity").val(quantity + 1)
        productTmp.quantity = quantity + 1
    })
}

function clickInpQuantity(){
    $(".inp-quantity").change(function (e) { 
        e.preventDefault();
        let quantity = +$(this).val()
        productTmp.quantity = quantity
    });
    $(".inp-quantity").keypress(function (e) { 
        if(e.which === 13)
        {
            let quantity = +$(this).val()
            let arrProductsAddToCart = getProductsAddToCart()
            if(quantity > 0){
                const idx = arrProductsAddToCart.findIndex(val=>val.id === productPreview.id);
            if( idx === -1){
                productTmp.quantity = quantity
                arrProductsAddToCart.push(productTmp)
            }else{
                arrProductsAddToCart[idx].quantity += quantity
            }
            setItemLSProductsAddToCart(arrProductsAddToCart)
            loadShoppingCartList(arrProductsAddToCart)
            loadQuantityProductsCart(arrProductsAddToCart)
            $(".overlay-shopping-cart").fadeIn()
            setTimeout(() => {
                $(".shopping-cart").show()
                $(".shopping-cart").css("animation", "showOverlayShopping 1s forwards")
            }, 500);
            }
        }
    });
}

function clickAddToCart(){
    $(".product-add-to-cart").click(function(e){
        e.stopPropagation()
        e.preventDefault()
        let arrProductsAddToCart = getProductsAddToCart()
        let quantity = +$(this).siblings(".product-quantity").children(".quantity-content").children(".inp-quantity").val();
        if(quantity > 0){
            const idx = arrProductsAddToCart.findIndex(val=>val.id === productPreview.id);
            if( idx === -1){
                productTmp.quantity = quantity
                arrProductsAddToCart.push(productTmp)
            }else{
                arrProductsAddToCart[idx].quantity += quantity
            }
            setItemLSProductsAddToCart(arrProductsAddToCart)
            loadShoppingCartList(arrProductsAddToCart)
            loadQuantityProductsCart(arrProductsAddToCart)
            $(".overlay-shopping-cart").fadeIn()
            setTimeout(() => {
                $(".shopping-cart").show()
                $(".shopping-cart").css("animation", "showOverlayShopping 1s forwards")
            }, 500);
        }
    })
}


function getQuantityProducts(ele){
    let quantity = +$(ele.target).siblings(".inp-quantity").val()
    return quantity;
}