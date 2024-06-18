// This file will add the repeating elements in the html 

// Nav Bar
let navbar = ["Gadgets" , "Fashion & Lifestyle" , "Skin Care" , "Perfumes & Deos" , "Hair" , "Bath & Body" , "Shaving & Beard Care" , "Luxe" , "Health & Nutrition" , "Sports & Fitness"];

for(let i = 0;i< navbar.length;i++){
    document.getElementById("nav-container").innerHTML += 
        '<div class="nav-items">\
            <a href="" class="aremove">\
                <div class="nav-text">' + navbar[i] + '</div>\
            </a>\
        </div>'
}

// Product slider
let arr = ["Skin Care", "Health & Nutrition", "Luxe Store", "Perfumes & Deos", "Footwear", "Hair Care", "Fashion Store", "Grooming Store", "Bath & Body", "Shaving", "Beard Care", "Top wear", "Bottom Wear", "Watches", "Activewear & Clothing", "Fitness", "Fashion Accessories", "Gadgets & Tech Store"];
let links = ['skin' , 'health' , 'main' , 'perfume' , 'footwear' , 'hair']
let clink = '#';

for (let i = 0; i < arr.length; i++) {
    if (i >= links.length || links[i] == 'main')
        clink = '#';
    else  
        clink = '/pages/' + links[i] + '.html';
    
    document.getElementById("productContainer").innerHTML +=
        '<a class="aremove" href="' + clink + '"><div class="card">\
        <img class="cardimg" src="assets/images/cards/c' + (i + 1) + '.avif" alt="">\
        <div align="center" class="cardtext">' + arr[i] + '</div>\
        </div></a>'
}



const textArr = [
    'Free Gift On ₹599+',
    'Buy 2 Get 10% OFF',
    'Buy 2, Get Extra 5% OFF',
    'Extra 5% Off On ₹999+',
    '#HairyMasculinity',
    'On Haircare Regimes',
    'On Bestsellers',
    'On Entire Range',
    'On Bestsellers',
    'Extra 10% OFF On ₹599',
    'On BodyCare',
    'The Best A Man Can Get',
    'On Bestselling Range',
    'On Bestsellers',
    "On Entire Range",
    "Extra 5% Off On ₹999+",
    "Buy 2 Get 10% OFF",
    "Extra 10% OFF On ₹599",
    "Extra 10% OFF On ₹599",
    "On Bestsellers",
    "On Entire Range",
    "#Backed by Science"
]


const disarr = [45, 30, 35, 20, 40, 10, 60, 45, 50, 50, 15, 30, 60, 25, 22, 29, 28, 44, 25, 15, 19, 20];

let ml, mr;

// Brands
for (let i = 0;i < 22;i++){

    ml = (i%5 == 0) ? "0" : "1.42em";
    mr = (i%5 == 4) ? "0" : "1.42em";

    if (i == 0)
        clink = 'pages/ustraa.html';
    else 
        clink = '#';


    document.getElementById('container').innerHTML += 
    '<a class="aremove" href="' + clink + '"><div class="brandCard" \
    style="margin-left:' + ml + '; margin-right:' + mr + '">\
        <img src="assets/images/brands/b' + (i+1) + '.avif" alt="" class="brandCardImg">\
        <div align="center" class="cardText">\
            <div class="cardTextUp">Up To ' + disarr[i] + ' % OFF</div>\
            <div class="cardTextDown">' + textArr[i] + '</div>\
        </div>\
    </div></a>'
}
