
import arrProducts from './products.json' assert {type: 'json'};
import {loadTableCart, clickUndo} from "./cart.js";
let arrWishlist = getWishlist()
let arrProductsAddToCart = getProductsAddToCart()


//wishlist
export function getWishlist(){
    if(localStorage.getItem("wishlist"))
        return JSON.parse(localStorage.getItem("wishlist"));
    else
        return []
}
export function loadQuantityRateHeart(arrWishlist){
    if(arrWishlist)
      $(".quantity-favorite").text(arrWishlist.length)
    else
        $(".quantity-favorite").text(0)
}
export function setItemLSWishList(arrWishlist){
    localStorage.setItem("wishlist", JSON.stringify(arrWishlist))
}

//add to cart

//get data
export function getProductsAddToCart(){
    if(localStorage.getItem("productsAddToCart"))
        return JSON.parse(localStorage.getItem("productsAddToCart"));
    else
        return []
}


//set data
export function setItemLSProductsAddToCart(arrProductsAddToCart = []){
    localStorage.setItem("productsAddToCart", JSON.stringify(arrProductsAddToCart))
}


//load data
export function loadQuantityProductsCart(arrProductsAddToCart = []){
    if(arrProductsAddToCart)
      $(".quantity-products-cart").text(arrProductsAddToCart.reduce((acc, val)=>{return acc + val.quantity}, 0))
    else
        $(".quantity-products-cart").text(0)
}

export function loadShoppingCartList(arrProductsAddToCart = []) {
    if (arrProductsAddToCart.length === 0) {
        $(".shopping-cart-content .shopping-cart-list").html(`
            <p class="no-products">No products in the cart.</p>
        `)
    } else {
        let total = 0
        $(".shopping-cart-content .shopping-cart-list").html(`<ul class="row"></ul>`)
        $(".shopping-cart-content .shopping-cart-list .row").html(
            arrProductsAddToCart.map(val => {
            const price = val.discountPrice === "" ?val.price.slice(1) : val.discountPrice.slice(1) 
            total +=price * val.quantity
                return `
            <li class="shopping-cart-item-product col-xs-12 col-sm-12 col-lg-12">
                <div class="item-product-link d-flex a-center">
                    <a href="#" class="item-product-img-link">
                        <img src="${val.image}" alt="Ảnh sản phẩm" width=72px height=75px />
                    </a>
                    <div class="item-product-desc d-flex j-between flex-center">
                        <div>
                            <a href="#" class="item-product-title">${val.titlePd}</a>
                            <div class="item-product-quantity">
                                <span class="quantity">${val.quantity}</span>
                                <span> x </span>
                                <span class="price">${formatCurrency(+price)}</span>
                            </div>
                        </div>
                        <div class="item-product-remove">
                            <a data-id=${val.id} href="#" class="icon-remove-product-shopping"><i class="fa-solid fa-xmark"></i></a>
                        </div>
                    </div>
                </div>
            </li>
            `
            })
        )
        $(".shopping-cart-content .shopping-cart-list").append(
        `
        <div class="subtotal">
                        <p>Subtotal: <span>${formatCurrency(total)}</span></p>
                      </div>
                      <div class="btn-group d-flex">
                        <a href="/cart.html" class="btn-view-cart"><span>View cart</span></a>
                        <a href="#" class="btn-checkout"><span>Checkout</span></a>
                      </div>`)
    }
    removeProductFromShoppingCart()
}




//event click add to cart
export function clickAddToCart(){
    $(".add-to-cart").click(function (e) {
        if($(this).children("span").text() === "Add to cart"){
        e.preventDefault()
        let arrProductsAddToCart = getProductsAddToCart()
        const id = +$(this).data("id")
        const pd = arrProducts.filter(val => val.id === id)[0]
        const idx = arrProductsAddToCart.findIndex(val=>val.id === id)
        if(idx === -1){
            arrProductsAddToCart.push({...pd, quantity : 1})
        }else{
            arrProductsAddToCart[idx].quantity+=1
        }
        $(".label-success").html("<span>Product added to cart successfully</span>")
        $(".label-success").fadeIn(500)
        $(".add-success p").html("Product Added Successfully")
        $(".add-success").fadeIn(1000)
        if($(e.target).closest(".gadget").length > 0){
            $(this).children("span").html("View cart")
            $(this).css("backgroundColor", "#fed700");
        }

        loadQuantityProductsCart(arrProductsAddToCart)
        setItemLSProductsAddToCart(arrProductsAddToCart)
        loadShoppingCartList(arrProductsAddToCart)
        setTimeout(() => {
            $(".add-success").fadeOut(1000)
        }, 3000);
    }
        
      })
    
}


//event remove product from shopping cart
export function removeProductFromShoppingCart(){
    $(".icon-remove-product-shopping").click(function(e){
        e.preventDefault()
        let arrProductsAddToCart = getProductsAddToCart()
        const id= +$(this).data("id")
        const idx= arrProductsAddToCart.findIndex(val=>val.id===id)
        const productUndo = {...arrProductsAddToCart[idx]}
        const name = productUndo.titlePd
        $(".label-success-cart").removeClass("label-success-coupon")
        $(".label-success-cart").html(`<i class="fa-solid fa-circle-check"></i><span>“${name}” removed. <a href="#" class="undo-product" style="color: #007bff;">Undo?</a></span>`)
        $(".label-success-cart").show()
        
        arrProductsAddToCart.splice(idx,1)
        loadQuantityProductsCart(arrProductsAddToCart)
        setItemLSProductsAddToCart(arrProductsAddToCart)
        loadShoppingCartList(arrProductsAddToCart)
        loadTableCart(arrProductsAddToCart, "remove", productUndo)
        clickUndo()
    })
}

//format currency
export function formatCurrency(price = 0){
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
}



//add success back top
export function backTopSuccess(){
    $('html, body').animate({
        scrollTop: $(".breadcrumb").offset().top
    }, 1500);
}