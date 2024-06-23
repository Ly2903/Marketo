import arrProducts from "./products.json" assert {type: 'json'};

//list img dropdown 
export const arrDropdownHome=[
    {id: 1, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-one.jpg', content: 'Home 01'},
    {id: 2, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-two1.jpg', content: 'Home 02'},
    {id: 3, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-three1.jpg', content: 'Home 03'},
    {id: 4, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-four1.jpg', content: 'Home 04'},
    {id: 5, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-six1.jpg', content: 'Home 05'},
    {id: 6, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-eight1.jpg', content: 'Home 06'},
    {id: 7, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-seven1.png', content: 'Home 07'},
    {id: 8, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-nine1.jpg', content: 'Home 08'},
    {id: 9, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-nine1.png', content: 'Home 09'},
    {id: 10, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-one.jpg', content: 'Wc Marketplace'},
    {id: 11, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-one.jpg', content: 'Dokan Marketplace'},
    {id: 12, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/Furniture-1.png', content: ' Furniture'},
    {id: 13, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/Grocery-1.png', content: 'Grocery'},
    {id: 14, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/Parts-1.png', content: 'Auto Parts'},
    {id: 15, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/Watch-1.png', content: 'Watch'},
    {id: 16, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/Shoe-1.png', content: 'Shoe'},
    {id: 17, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/Eye-Glass-1.png', content: 'Eye Glass'},
    {id: 18, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/Jewelry-1.png', content: 'Jewelry'},
    {id: 19, image: 'https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/home-one.jpg', content: 'Home RTL'},
    ];

export const arrAllCategories=['All Categories', 'Portable', 'Watch', 'Speaker', 'Projector', 'Mobile', 'Light', 'Laptop', 'Headphone', 'Google Glass', 'Gamepad', 'Drone', 'Camera', '3d Glass', 'Uncategorized'];

export const arrMenuCategories= ['Electronics', 'Men’s Fashion', 'Women’s Fashion', 'Office & Security', 'Camera', 'Drone', 'Gamepad', 'Mobile', 'Speaker', 'All Categories'];
//dropdown all categories women fashion
export const arrWomenFashion =[
    {
        image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/yearphone.png", 
        title: "Electronics", 
        pageList: ['Easy to Customise','Simple and intuitive','Highly customisable','Coding skills','Easy to Customise']
    },
    {
        image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/IP_camera.png", 
        title: "Security Tools", 
        pageList: ['Benches & Ottomans','Dining Tables','Coffee & Cocktail Tables','Consoles & Desks','Cocktail Tables',]
    },
    {
        image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/travel_usb.png", 
        title: "Brand Gadget", 
        pageList: ['Side Tables','Beside Tables','Sideboards & Drawers','Lounge Chairs','Consoles & Desks',]
    },
    {
        image: "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2021/10/wristband.png", 
        title: "Smartwatch", 
        pageList: ['Dining Chairs','Counter & Bar Stools','Occasional Chairs','Daybeds & Chaises','Benches & Ottomans',]
    }
]
export const arrTopCategoriesTabsName = ["Projector", "Google Glass", "Headphone", "Light", "Laptop"]
export const arrHotSaleTabsName= ["16% Off", "25% Off", "33% Off"]

//women clothing
export const arrWomenClothingCate=[
    "Speaker",
    "Mobile",
    "Headphone",
    "Google Glass",
    "Portable",
    "Light",
    "Camera",
    "Drone",
    "3d Glass"
]
export const objWomenClothing={
    "bgCateImg" : "../public/images/womenClothing/women_bg.jpg",
    "arrCate" : arrWomenClothingCate,
    "slider": ["../public/images/womenClothing/product-block-slider-women-4-1.jpg","./public/images/womenClothing/product-block-slider-women-2-1.jpg"],
    "arrProduct" : arrProducts.filter(val=>val.categories.includes("Women Clothing")),
}

//mens clothing
export const arrMensClothingCate=
[
    "Projector",
    "Laptop",
    "Headphone",
    "Google Glass",
    "Mobile",
    "Camera",
    "Light",
    "Drone",
    "3d Glass"
]
export const objMensClothing={
    "bgCateImg" : "../public/images/mensClothing/offer_banner_41-1-1-1.jpg",
    "arrCate" : arrMensClothingCate,
    "slider": ["../public/images/mensClothing/man_slider_1_406x628-1.png","../public/images/mensClothing/man_slider_4_406x628-1.jpg"],
    "arrProduct" : arrProducts.filter(val=>val.categories.includes("Mens Clothing")),
}
//mobile
export const arrMobileCate=
[
    "Projector",
    "Laptop",
    "Headphone",
    "Google Glass",
    "3d Glass",
    "Speaker",
    "Watch",
    "Drone",
    "Gamepad"
]
export const objMobile={
    "bgCateImg" : "../public/images/mobile/phone_bg-1.jpg",
    "arrCate" : arrMobileCate,
    "slider": ["../public/images/mobile/phone_slider_1_406x628-1-1.png","./public/images/mobile/phone_slider_2_406x628-1.jpg"],
    "arrProduct" : arrProducts.filter(val=>val.categories.includes("Mobile")),
}

//computer
export const arrComputerCate=
[
    "Projector",
    "Laptop",
    "Headphone",
    "Google Glass",
    "Mobile",
    "Light",
    "Gamepad",
    "Camera",
    "3d Glass"
]
export const objComputer={
    "bgCateImg" : "../public/images/computer/computer_bg.jpg",
    "arrCate" : arrComputerCate,
    "slider": ["../public/images/computer/laptop_slider_1_406x628-1.jpg","./public/images/computer/slider2_computer.jpg"],
    "arrProduct" : arrProducts.filter(val=>val.categories.includes("Computer")),
}

//watched
export const arrWatchesCate=
[
    "Laptop",
    "Headphone",
    "Google Glass",
    "3d Glass",
    "Camera",
    "Drone",
    "Gamepad",
    "Light",
    "Watch"
]
export const objWatches={
    "bgCateImg" : "../public/images/watches/laptop_bg-1.jpg",
    "arrCate" : arrWatchesCate,
    "slider": ["../public/images/watches/watch_slider_1_406x6281-1.jpg","./public/images/watches/watch_slider_2_406x6281-1.jpg"],
    "arrProduct" : arrProducts.filter(val=>val.categories.includes("Watch")),
}

//featured products
export const arrFeaturedTabsName =
["Featured Products", "Trending Products", "Hot Sale"];

//arr
export const arrSpeaker =
[
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/05-2.png",
        "titlePd": "Fuers Outdoor",
        "price": "$520.00",
        "discountPrice": "$499.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/06-300x300-1-1.jpg",
        "titlePd": "Waterproof Camera",
        "price": "$560.00",
        "discountPrice": "$520.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/18-1.png",
        "titlePd": "Professional Drone",
        "price": "$680.00",
        "discountPrice": "$660.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/Cannon-2-Mini-Smart-Bluetooth-1.png",
        "titlePd": "Wireless Microphone",
        "price": "",
        "discountPrice": "$70.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/08-2.png",
        "titlePd": "CC Camera",
        "price": "$240.00",
        "discountPrice": "$210.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/07-300x300-1-1.jpg",
        "titlePd": "Moving Camera",
        "price": "",
        "discountPrice": "$230.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/camera-drone-1.png",
        "titlePd": "Camera Drone",
        "price": "$720.00",
        "discountPrice": "$540.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/05/Speaker-Cannon-2-Mini-Smart-Bluetooth-1.png",
        "titlePd": "Mic for Phone",
        "price": "",
        "discountPrice": "$70.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2018/04/REMAX-Portable-Wireless-Bluetooth-Speaker-1.jpg",
        "titlePd": "Wireless Speaker",
        "price": "",
        "discountPrice": "$65.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/HTB1olbtmlDH8KJj-1.jpg",
        "titlePd": "Bluetooth Speaker",
        "price": "",
        "discountPrice": "$70.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/Wireless-Speaker-Portable-bluetooth-1.jpg",
        "titlePd": "Portable Speaker",
        "price": "$15.00",
        "discountPrice": "$12.00"
    },
    {
        "image": "https://demo.xpeedstudio.com/marketov2/wp-content/uploads/2013/06/New-2nd-generation-Smart-Air-1.png",
        "titlePd": "Wireless Speaker",
        "price": "",
        "discountPrice": "$60.00"
    }
]

export const arrCoupon = ["bely"]



