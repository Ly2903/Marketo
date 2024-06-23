import {getWishlist, getProductsAddToCart,loadQuantityRateHeart, loadQuantityProductsCart,clickAddToCart, backTopSuccess, setItemLSWishList} from "./function.js";
import { clickPreviewProduct } from "./main.js";
let arrWishlist = getWishlist()
let arrProductsAddToCart = getProductsAddToCart();

$(document).ready(function () {
    $(".label-success").hide()
    loadTitle()
    loadWishlistTable()
    loadUlWishlist()
    removeProductFromWishlist()
    clickAddToCart()
    clickPreviewProduct()
});


$(".save-title").click(function (e) {
    e.preventDefault()
    const title = $("#inp-title").val()
    localStorage.setItem("title-wishlist", title)
    loadTitle()
})

$(".remove-title").click(function (e) {
    e.preventDefault()
    const title = ""
    localStorage.setItem("title-wishlist", title)
    loadTitle()
})

function removeProductFromWishlist(){
    $(".icon-remove-product-wishlist").click(function (e) {
        e.preventDefault()
        const id = +$(e.target.closest(".wishlist-item-product")).data("id")
        const pd = arrWishlist.filter(val => val.id === id)
        const idx = arrWishlist.findIndex(val => val.id === id)
        arrWishlist.splice(idx, 1)
        $(".label-success").html(`<i class="fa-solid fa-circle-check"></i><span>Product successfully removed.</span>`)
        $(".label-success").fadeIn(500)
        backTopSuccess();
        loadWishlistTable()
        loadUlWishlist()
        removeProductFromWishlist()
        clickAddToCart()
        loadQuantityRateHeart(arrWishlist)
        setItemLSWishList(arrWishlist)
    })
}

function loadTitle() {
    if(localStorage.getItem("title-wishlist")){
        $(".title-wishlist").html(localStorage.getItem("title-wishlist"))
        $("#inp-title").val(localStorage.getItem("title-wishlist"))
    }else{
        $(".title-wishlist").html(`My Wishlist`)
        $("#inp-title").val(`My Wishlist`)
    }
}

function loadWishlistTable() {
    if(arrWishlist.length === 0){
        $(".table-body").html(`<tr><td colspan = "7">No products added to the wishlist</td></tr>`)
    }else{
    $(".table-body").html(
        arrWishlist.map(val => {
            return `
            <tr data-id=${val.id} class="wishlist-item-product">
                <td class="product-remove">
                    <a href="#" class="icon-remove-product-wishlist"><i class="fa-solid fa-xmark"></i></a>
                </td>
                <td class="product-thumbnail">
                    <a data-id=${val.id} href="./product.html" class="preview-product d-flex flex-center">
                        <img src="${val.image}" alt="Ảnh sản phẩm" width="220px" height="220px">
                    </a>
                </td>
                <td class="product-name">
                    <a data-id=${val.id} href="./product.html" class="preview-product">${val.titlePd}</a>
                </td>
                <td class="product-price">
                    <del class="price">${val.price}</del>
                    <span class="discount">${val.discountPrice}</span>
                </td>
                <td class="product-stock-status">
                    <span>In Stock</span>
                </td>
                <td class="product-add-to-cart">
                    <a href="#" class="add-to-cart" data-id=${val.id}>
                        <span>Add to cart</span>
                    </a>
                </td>
            </tr>
            `
        })
    )
    }
}
function loadUlWishlist(){
    if(arrWishlist.length === 0){
        $(".list-wishlist").html(`<li style = "font-size: 1.4rem;">No products added to the wishlist</li>`)

    }else{
    $(".list-wishlist").html(
        arrWishlist.map(val=>{
            return `
        <li data-id=${val.id} class="wishlist-item-product">
            <div class="row a-center">
                <div class="col-xs-10 col-sm-12 wishlist-item-product-1">
                    <div class="product-thumbnail">
                        <a data-id=${val.id} href="./product.html" class="preview-product d-flex flex-center">
                            <img src="${val.image}" alt="Ảnh sản phẩm" width="500px"
                                height="500px">
                        </a>
                    </div>
                    <div class="wishlist-item-product-desc">
                        <div class="product-remove">
                            <a href="#" class="icon-remove-product-wishlist"><i class="fa-solid fa-xmark"></i><span></span></a>
                        </div>
                        <div class="product-name">
                            <a data-id=${val.id} href="./product.html" class="preview-product">${val.titlePd}</a>
                        </div>
                        <table class="product-price">
                            <tr>
                                <td>Price:</td>
                                <td>
                                    <del class="price">${val.price}</del>
                                    <span class="discount">${val.discountPrice}</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <table class="col-xs-2 col-sm-12 wishlist-item-product-2 product-stock-status">
                        <tr>
                            <td class="product-stock-status-title">Stock:</td>
                            <td><span>In Stock</span></td>
                        </tr>
                </table>
            </div>
            <div class="product-add-to-cart">
                <a href="./cart.html" data-id=${val.id} class="add-to-cart"><span>Add to cart</span></a>
            </div>
        </li>
            `
        }))
    }
}