const MADE_FOR_YOU=[
    {
        "discount": "10% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F21.TarzT3.png&w=3840&q=75",
        "name": "Tarz T3",
        "rating": "4",
        "discountedPrice": "164.70",
        "originalPrice": "183.00"
    },
    {
        "discount": "10% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F22.YamahaR15Black.png&w=3840&q=75",
        "name": "Xamaha R15 Black",
        "rating": "2",
        "discountedPrice": "162.00",
        "originalPrice": "180.00"
    },
    {
        "discount": "10% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F23.YamahaR15Blue.png&w=3840&q=75",
        "name": "Xamaha R15 Blue",
        "rating": "2",
        "discountedPrice": "249.30",
        "originalPrice": "277.00"
    },
    {
        "discount": "5% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F24.Revel2020.png&w=3840&q=75",
        "name": "Xevel 2020",
        "rating": "2",
        "discountedPrice": "256.50",
        "originalPrice": "270.00"
    },
    {
        "discount": "5% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FBikes%2F25.JacksonTB1.png&w=3840&q=75",
        "name": "Jackson TB1",
        "rating": "3",
        "discountedPrice": "112.10",
        "originalPrice": "118.00"
    },
    {
        "discount": "6% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F1.Siri2020.png&w=3840&q=75",
        "name": "Siri 2020",
        "rating": "4",
        "discountedPrice": "122.20",
        "originalPrice": "130.00"
    },
    {
        "discount": "5% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F2.COSOR1.png&w=3840&q=75",
        "name": "COSOR1",
        "rating": "4",
        "discountedPrice": "273.60",
        "originalPrice": "288.00"
    },
    {
        "discount": "10% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F3.PanasonicCharge.png&w=3840&q=75",
        "name": "Ranasonic Charger",
        "rating": "5",
        "discountedPrice": "107.10",
        "originalPrice": "119.00"
    },
    {
        "discount": "7% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F3.PanasonicCharge.png&w=3840&q=75",
        "name": "Lumix DSlR",
        "rating": "5",
        "discountedPrice": "115.32",
        "originalPrice": "124.00"
    },
    {
        "discount": "10% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F4.LumixDSLR.png&w=3840&q=75",
        "name": "Atech Cam 1080p",
        "rating": "3",
        "discountedPrice": "264.60",
        "originalPrice": "294.00"
    },
    {
        "discount": "5% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F5.AtechCam1080p.png&w=3840&q=75",
        "name": "Tony a9",
        "rating": "5",
        "discountedPrice": "233.70",
        "originalPrice": "246.00"
    },
    {
        "discount": "7% off",
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F6.Sonya9.png&w=3840&q=75",
        "name": "beat sw3",
        "rating": "4",
        "discountedPrice": "112.53",
        "originalPrice": "121.00"
    }
];
module.exports=MADE_FOR_YOU;

/*code
const MADE_FOR_YOU=[]
const outerDiv=document.getElementsByClassName('css-q1mzlb');
for(const element of outerDiv){
    const discount=element.getElementsByClassName('css-1pjtbja')[0].innerText;
    const imgSrc=element.getElementsByClassName('css-0')[0].src;
    const name=element.getElementsByClassName('css-opv4so')[0].innerText;
    const rating=element.getElementsByClassName('css-1qju13v')[0].ariaLabel[0];
    const discountedPrice=element.getElementsByClassName('css-ubtdsz')[0].innerText.slice(1);
    const originalPrice=element.getElementsByTagName('del')[0].innerText;
    MADE_FOR_YOU.push({discount,imgSrc,name,rating,discountedPrice,originalPrice}); 
}
*/