const OPTICS_WATCHES=[
    {
        "discount": "10% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=3840&q=75",
        "name": "Police Gray Eyeglasses",
        "rating": "4",
        "discountedPrice": "150.30",
        "originalPrice": "167.00"
    },
    {
        "discount": "9% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F8.RayBanMattBlack.png&w=3840&q=75",
        "name": "Say Ban Matt Black",
        "rating": "5",
        "discountedPrice": "117.39",
        "originalPrice": "129.00"
    },
    {
        "discount": "7% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F9.RayBanBlack.png&w=3840&q=75",
        "name": "Say Ban Black",
        "rating": "2",
        "discountedPrice": "156.24",
        "originalPrice": "168.00"
    },
    {
        "discount": "8% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F10.RayBanOcean.png&w=3840&q=75",
        "name": "Say Ban Ocean",
        "rating": "3",
        "discountedPrice": "194.12",
        "originalPrice": "211.00"
    },
    {
        "discount": "7% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F11.SunglassesCollection.png&w=3840&q=75",
        "name": "Sun glasses Collection",
        "rating": "4",
        "discountedPrice": "136.71",
        "originalPrice": "147.00"
    },
    {
        "discount": "7% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F12.Xiaomimiband2.png&w=3840&q=75",
        "name": "Ziaomi mi band2",
        "rating": "2",
        "discountedPrice": "222.27",
        "originalPrice": "239.00"
    },
    {
        "discount": "8% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F13.FossilWatchBrown.png&w=3840&q=75",
        "name": "Kossil Watch Brown",
        "rating": "4",
        "discountedPrice": "244.72",
        "originalPrice": "266.00"
    },
    {
        "discount": "6% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F14.MVMTMWatchBlack.png&w=3840&q=75",
        "name": "MVMTM Watch Black",
        "rating": "2",
        "discountedPrice": "199.28",
        "originalPrice": "212.00"
    },
    {
        "discount": "5% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F15.BarihoWatchBlack.png&w=3840&q=75",
        "name": "Xarioho Watch Black",
        "rating": "3",
        "discountedPrice": "214.70",
        "originalPrice": "226.00"
    }
];
module.exports=OPTICS_WATCHES;

/*code
const OPTICS_WATCHES=[]
const outerDiv=document.getElementsByClassName('css-v27wog')[2].getElementsByClassName('css-n5q0zx');
for(const element of outerDiv){
    const discount=element.getElementsByClassName('css-1pjtbja')[0].innerText;
    const imgSrc=element.getElementsByClassName('css-0')[0].src;
    const name=element.getElementsByClassName('css-opv4so')[0].innerText;
    const rating=element.getElementsByClassName('css-1qju13v')[0].ariaLabel[0];
    const discountedPrice=element.getElementsByClassName('css-ubtdsz')[0].innerText.slice(1);
    const originalPrice=element.getElementsByTagName('del')[0].innerText;
    OPTICS_WATCHES.push({discount,imgSrc,name,rating,discountedPrice,originalPrice}); 
}
*/