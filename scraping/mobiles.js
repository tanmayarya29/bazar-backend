const MOBILES=[
    {
        "discount": "6% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F29.AppleEarphones.png&w=3840&q=75",
        "name": "Mapple Earphones",
        "rating": "3",
        "discountedPrice": "187.06",
        "originalPrice": "199.00"
    },
    {
        "discount": "9% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F30.Nokiaandroidone.png&w=3840&q=75",
        "name": "Lokia android one",
        "rating": "4",
        "discountedPrice": "111.02",
        "originalPrice": "122.00"
    },
    {
        "discount": "10% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F31.Symphonlights.png&w=3840&q=75",
        "name": "Xymphone lights",
        "rating": "3",
        "discountedPrice": "229.50",
        "originalPrice": "255.00"
    },
    {
        "discount": "5% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F32.iphone7.png&w=3840&q=75",
        "name": "Lphone 7",
        "rating": "2",
        "discountedPrice": "103.55",
        "originalPrice": "109.00"
    },
    {
        "discount": "5% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F33.beatswirelessearphones.png&w=3840&q=75",
        "name": "Ceats wireless earphones",
        "rating": "3",
        "discountedPrice": "171.95",
        "originalPrice": "181.00"
    },
    {
        "discount": "9% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F34.HTC2018.png&w=3840&q=75",
        "name": "HPC 2018",
        "rating": "4",
        "discountedPrice": "140.14",
        "originalPrice": "154.00"
    },
    {
        "discount": "9% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F35.beatsbluetoothearpohones.png&w=3840&q=75",
        "name": "Xeats bluetooth earphones",
        "rating": "4",
        "discountedPrice": "134.68",
        "originalPrice": "148.00"
    },
    {
        "discount": "9% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F36.sbsWirelessEarphones.png&w=3840&q=75",
        "name": "sbs Wireless Earphones",
        "rating": "5",
        "discountedPrice": "145.60",
        "originalPrice": "160.00"
    },
    {
        "discount": "5% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F1.SilverCap.png&w=3840&q=75",
        "name": "Silver Cap",
        "rating": "5",
        "discountedPrice": "225.15",
        "originalPrice": "237.00"
    }
];
module.exports=MOBILES;

/*code
const MOBILES=[]
const outerDiv=document.getElementsByClassName('css-v27wog')[1].getElementsByClassName('css-n5q0zx');
for(const element of outerDiv){
    const discount=element.getElementsByClassName('css-1pjtbja')[0].innerText;
    const imgSrc=element.getElementsByClassName('css-0')[0].src;
    const name=element.getElementsByClassName('css-opv4so')[0].innerText;
    const rating=element.getElementsByClassName('css-1qju13v')[0].ariaLabel[0];
    const discountedPrice=element.getElementsByClassName('css-ubtdsz')[0].innerText.slice(1);
    const originalPrice=element.getElementsByTagName('del')[0].innerText;
    MOBILES.push({discount,imgSrc,name,rating,discountedPrice,originalPrice}); 
}
*/