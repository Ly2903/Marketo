import { formatCurrency, getProductsAddToCart, setItemLSProductsAddToCart,backTopSuccess, loadShoppingCartList, loadQuantityProductsCart} from "./function.js";
import { clickPreviewProduct } from "./main.js";
import {arrCoupon} from "./array.js";
let arrProductsAddToCart = getProductsAddToCart();
let productUndo = {}

$(document).ready(function () {
    loadTableCart(arrProductsAddToCart)
    clickPreviewProduct()
});
function clickDecrease(){
    $(".cart-item-product .decrease").click(function(e){
        e.preventDefault()
        let obj = getQuantityProducts(e)
        if(obj.quantity  > 1)
            $(this).siblings(".inp-quantity").val(obj.quantity - 1)
        arrProductsAddToCart[obj.idx].quantity = obj.quantity - 1
        loadBtnUpdateAllow()
    })
}
function clickIncrease(){
    $(".cart-item-product .increase").click(function(e){
        e.preventDefault()
        let obj = getQuantityProducts(e)
        $(this).siblings(".inp-quantity").val(obj.quantity + 1)
        arrProductsAddToCart[obj.idx].quantity = obj.quantity + 1
        loadBtnUpdateAllow()
    })
}

function clickInpQuantity(){
    $(".inp-quantity").change(function (e) { 
        e.preventDefault();
        let obj = getQuantityProducts(e)
        let quantity = +$(this).val()
        arrProductsAddToCart[obj.idx].quantity = quantity
        loadBtnUpdateAllow()
    });
    $(".inp-quantity").keypress(function (e) { 
        if(e.which === 13)
        {
            let obj = getQuantityProducts(e)
            let quantity = +$(this).val()
            if(quantity === 0){
                arrProductsAddToCart.splice(obj.idx,1)
            }else{
                arrProductsAddToCart[obj.idx].quantity = quantity
            }
            loadTableCart(arrProductsAddToCart)
            setItemLSProductsAddToCart(arrProductsAddToCart)
            loadShoppingCartList(arrProductsAddToCart)
            loadQuantityProductsCart(arrProductsAddToCart)
            $(".label-success").removeClass("label-success-coupon")
            $(".label-success").html(`<i class="fa-solid fa-circle-check"></i><span>Cart updated.</span>`)
            $(".label-success").show()
            backTopSuccess();
        }else{
            loadBtnUpdateAllow()
        }
    });
}

function clickUpdateCart(){
    $(".btn-update-cart").click(function(e){
        for(let i = 0;i<arrProductsAddToCart.length; i++){
            if(arrProductsAddToCart[i].quantity === 0){
                arrProductsAddToCart.splice(i,1)
                i--
            }
        }
        loadTableCart(arrProductsAddToCart)
        setItemLSProductsAddToCart(arrProductsAddToCart)
        loadShoppingCartList(arrProductsAddToCart)
        loadQuantityProductsCart(arrProductsAddToCart)
        $(".label-success").removeClass("label-success-coupon")
        $(".label-success").html(`<i class="fa-solid fa-circle-check"></i><span>Cart updated.</span>`)
        $(".label-success").show()
        backTopSuccess();
        loadBtnUpdateDisable()
    })
}

function getQuantityProducts(ele){
    const id = +$(ele.target.closest(".cart-item-product")).data("id")
    const idx = arrProductsAddToCart.findIndex(val=>val.id === id)
    let quantity = +$(ele.target).siblings(".inp-quantity").val()
    return {quantity: quantity, idx: idx};
}
function loadBtnUpdateDisable(){
    $(".btn-update-cart").css("opacity","0.5")
    $(".btn-update-cart").css("cursor","not-allowed")
    $(".btn-update-cart").attr("disabled","disabled")//disableBtnUpdate
    $(".btn-update-cart").addClass("disableBtnUpdate")

}

function loadBtnUpdateAllow(){
    $(".btn-update-cart").css("opacity","1")
    $(".btn-update-cart").css("cursor","pointer")
    $(".btn-update-cart").removeAttr("disabled")
    $(".btn-update-cart").removeClass("disableBtnUpdate")

}

export function loadTableCart(arr = getProductsAddToCart(), typeLoad = "", pdUndo = {}){
    let total = 0
    if(typeLoad==="remove"){
        arrProductsAddToCart = arr
        productUndo = pdUndo
    }
    if(arr.length===0){
        $(".cart-empty").show()
        $(".table-cart-body").html("")
        $(".table-cart-products").hide()
        $(".cart-totals").hide()
    }else{
    $(".cart-empty").hide()
    $(".table-cart-products").show()
    $(".cart-totals").show()
    $(".table-cart-body").html(`
        <tr data-id="" class="table-cart-footer">
            <td colspan="6">
                <div class="row j-between">
                    <form class="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-6 d-flex-inline row">
                        <div class="col-xs-6 col-sm-6 col-lg-4 col-xl-4 pr-8">
                            <input type="text" placeholder="Coupon code" class="inp-coupon-code">
                        </div>
                        <div class="col-xs-6 col-sm-6 col-lg-4 col-xl-4 d-flex">
                            <button class="btn btn-apply-coupon">Apply coupon</button>
                        </div>
                    </form>
                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-2 d-flex j-end" >
                        <button class="btn btn-update-cart">Update cart</button>
                    </div>
                </div>
            </td>
        </tr>
    `)
    
    $(".table-cart-body").prepend(
        arr.map(val=>{
            let price = val.discountPrice === "" ?val.price.slice(1) : val.discountPrice.slice(1) 
            total +=price * val.quantity
            return `
            <tr class="cart-item-product" data-id=${val.id}>
                <td class="product-remove">
                    <a href="#" class="icon-remove-product" data-id=${val.id}><i class="fa-solid fa-xmark"></i></a>
                </td>
                <td class="product-thumbnail">
                    <a data-id=${val.id} href="./product.html" class="preview-product d-flex flex-center">
                        <img src="${val.image}" alt="Ảnh sản phẩm" width="100px" height="100px">
                    </a>
                </td>
                <td class="product-name">
                    <a data-id=${val.id} href="./product.html" class="preview-product">${val.titlePd}</a>
                </td>
                <td class="product-price">
                    <span class="discount">${formatCurrency(+price)}</span>
                </td>
                <td class="product-quantity">
                    <div class="quantity-content d-flex-inline">
                        <button class="decrease">-</button>
                        <input class="inp-quantity" type="number" value="${val.quantity}" min="1" step="1" onkeypress="return event.charCode >= 48">
                        <button class="increase">+</button>
                    </div>
                </td>
                <td class="product-subtotal">
                    <span>${formatCurrency(price*val.quantity)}</span>
                </td>
            </tr>
            `
        })
    )
    $(".table-cart-totals .subtotal").html(`${formatCurrency(total)}`)
    $(".table-cart-totals .total").html(`${formatCurrency(total)}`)
    clickDecrease()
    clickIncrease()
    clickInpQuantity()
    clickUpdateCart()
    removeProductFromTableCart()
    loadBtnUpdateDisable()
    clickCoupon()
    }
}
function clickCoupon(){
    $(".btn-apply-coupon").click(function(e){
        e.preventDefault()
        const inpCoupon = $(".inp-coupon-code").val()
        if(inpCoupon===""){
            $(".label-success").addClass("label-success-coupon")
            $(".label-success").html(`<i class="fa-solid fa-circle-exclamation"></i><span>Please enter a coupon code.</span>`)
            $(".label-success").show()
            backTopSuccess();
        }else{
            $(".label-success").addClass("label-success-coupon")
            $(".label-success").html(`<i class="fa-solid fa-circle-exclamation"></i><span>Coupon "${inpCoupon}" does not exist!</span>`)
            $(".label-success").show()
            backTopSuccess();
        }
    })
}
export function clickUndo(){
    $(".undo-product").click(function(e){
        e.preventDefault()
        if(productUndo !== {})
            arrProductsAddToCart.unshift(productUndo)
        loadTableCart(arrProductsAddToCart)
        setItemLSProductsAddToCart(arrProductsAddToCart)
        loadShoppingCartList(arrProductsAddToCart)
        loadQuantityProductsCart(arrProductsAddToCart)
        $(".label-success").removeClass("label-success-coupon")
        $(".label-success").html(`<i class="fa-solid fa-circle-check"></i><span>Undo successfully.</span>`)
        $(".label-success").show()
        backTopSuccess();
    })
}

function removeProductFromTableCart(){
    $(".icon-remove-product").click(function(e){
        e.preventDefault()
        const id= +$(this).data("id")
        const idx= arrProductsAddToCart.findIndex(val=>val.id===id)
        productUndo = {...arrProductsAddToCart[idx]}
        const name = productUndo.titlePd
        $(".label-success-cart").removeClass("label-success-coupon")
        $(".label-success-cart").html(`<i class="fa-solid fa-circle-check"></i><span>“${name}” removed. <a href="#" class="undo-product" style="color: #007bff;">Undo?</a></span>`)
        $(".label-success-cart").show()
        
        arrProductsAddToCart.splice(idx,1)
        loadQuantityProductsCart(arrProductsAddToCart)
        setItemLSProductsAddToCart(arrProductsAddToCart)
        loadShoppingCartList(arrProductsAddToCart)
        loadTableCart(arrProductsAddToCart)
        clickUndo()
    })
}


