const FLASH_DEALS=[
    {
        "discount": "25% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=3840&q=75",
        "name": "NikeCourt Zoom Vapor Cage",
        "rating": "4",
        "discountedPrice": "187.50",
        "originalPrice": "250.00"
    },
    {
        "discount": "15% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75",
        "name": "Classic Rolex Watch",
        "rating": "3",
        "discountedPrice": "297.50",
        "originalPrice": "350.00"
    },
    {
        "discount": "28% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=3840&q=75",
        "name": "IPhone 13 Pro Max",
        "rating": "5",
        "discountedPrice": "108.00",
        "originalPrice": "150.00"
    },
    {
        "discount": "21% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75",
        "name": "Mi Led Smart Watch",
        "rating": "4",
        "discountedPrice": "142.20",
        "originalPrice": "180.00"
    },
    {
        "discount": "25% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-1.png&w=3840&q=75",
        "name": "NikeCourt Zoom Vapor Cage",
        "rating": "4",
        "discountedPrice": "187.50",
        "originalPrice": "250.00"
    },
    {
        "discount": "15% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-2.png&w=3840&q=75",
        "name": "Classic Rolex Watch",
        "rating": "3",
        "discountedPrice": "297.50",
        "originalPrice": "350.00"
    },
    {
        "discount": "28% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-3.png&w=3840&q=75",
        "name": "IPhone 13 Pro Max",
        "rating": "5",
        "discountedPrice": "108.00",
        "originalPrice": "150.00"
    },
    {
        "discount": "21% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fflash-4.png&w=3840&q=75",
        "name": "Mi Led Smart Watch",
        "rating": "4",
        "discountedPrice": "142.20",
        "originalPrice": "180.00"
    }
]
module.exports = FLASH_DEALS;

/*code
const FLASH_DEALS=[]
const parentDiv=document.getElementsByClassName('css-iujtki');
for(const element of parentDiv){
    const discount=element.getElementsByClassName('css-1pjtbja')[0].innerText;
    const imgSrc=element.getElementsByClassName('css-0')[0].src;
    const name=element.getElementsByClassName('css-opv4so')[0].innerText;
    const rating=element.getElementsByClassName('css-1qju13v')[0].ariaLabel[0];
    const discountedPrice=element.getElementsByClassName('css-ubtdsz')[0].innerText.slice(1);
    const originalPrice=element.getElementsByTagName('del')[0].innerText;

    FLASH_DEALS.push({discount,imgSrc,name,rating,discountedPrice,originalPrice});
}
FLASH_DEALS;
*/