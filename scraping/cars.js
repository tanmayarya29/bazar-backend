const CARS=[
    {
        "discount": 8,
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=3840&q=75",
        "name": "Lord 2019",
        "rating": 2,
        "discountedPrice": 154.56,
        "originalPrice": 168.00,
        "type": ["cars"],
        "brand": "62ea59356423bdccdfa0aa60",
        "category": "62ea5cf3ec964e45e3545630",
        "subcategory": "62ea4ca872cc78d0c851072c"
    },
    {
        "discount": 6,
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F2.Audi2017.png&w=3840&q=75",
        "name": "Budi 2017",
        "rating": 3,
        "discountedPrice": 212.44,
        "originalPrice": 226.00,
        "type": ["cars"],
        "brand": "62ea59356423bdccdfa0aa5d",
        "category": "62ea5cf3ec964e45e3545630",
        "subcategory": "62ea4ca872cc78d0c851072c"
    },
    {
        "discount": 10,
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F3.Tesla2015.png&w=3840&q=75",
        "name": "Resla 2015",
        "rating": 4,
        "discountedPrice": 90.90,
        "originalPrice": 101.00,
        "type": ["cars"],
        "brand": "62ea59356423bdccdfa0aa5c",
        "category": "62ea5cf3ec964e45e3545630",
        "subcategory": "62ea4ca872cc78d0c851072c"
    },
    {
        "discount": 7,
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F4.Porsche2018.png&w=3840&q=75",
        "name": "Xorsche 2018",
        "rating": 2,
        "discountedPrice": 224.13,
        "originalPrice": 241.00,
        "type": ["cars"],
        "brand": "62ea59356423bdccdfa0aa5b",
        "category": "62ea5cf3ec964e45e3545630",
        "subcategory": "62ea4ca872cc78d0c851072c"
    },
    {
        "discount": 7,
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F5.Ford2018.png&w=3840&q=75",
        "name": "Lord 2018",
        "rating": 5,
        "discountedPrice": 219.48,
        "originalPrice": 236.00,
        "type": ["cars"],
        "brand": "62ea59356423bdccdfa0aa60",
        "category": "62ea5cf3ec964e45e3545630",
        "subcategory": "62ea4ca872cc78d0c851072c"
    },
    {
        "discount": 6,
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F6.Ford2020.png&w=3840&q=75",
        "name": "Lord 2020",
        "rating": 2,
        "discountedPrice": 109.98,
        "originalPrice": 117.00,
        "type": ["cars"],
        "brand": "62ea59356423bdccdfa0aa60",
        "category": "62ea5cf3ec964e45e3545630",
        "subcategory": "62ea4ca872cc78d0c851072c"
    }
]
module.exports=CARS;

/*
const CARS=[]
const outerDiv=document.getElementsByClassName('css-v27wog')[0].getElementsByClassName('css-n5q0zx');
for(const element of outerDiv){
    const discount=element.getElementsByClassName('css-1pjtbja')[0].innerText;
    const imgSrc=element.getElementsByClassName('css-0')[0].src;
    const name=element.getElementsByClassName('css-opv4so')[0].innerText;
    const rating=element.getElementsByClassName('css-1qju13v')[0].ariaLabel[0];
    const discountedPrice=element.getElementsByClassName('css-ubtdsz')[0].innerText.slice(1);
    const originalPrice=element.getElementsByTagName('del')[0].innerText;

    CARS.push({discount,imgSrc,name,rating,discountedPrice,originalPrice}); 
}
*/