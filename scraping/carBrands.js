const CAR_BRANDS=[
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fferrari.png&w=48&q=75",
        "name": "ferrari"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Ftesla.png&w=48&q=75",
        "name": "tesla"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fbmw.png&w=48&q=75",
        "name": "bmw"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Ftoyota.png&w=48&q=75",
        "name": "toyota"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fmini.png&w=48&q=75",
        "name": "mini"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fford.png&w=48&q=75",
        "name": "ford"
    }
];
module.exports=CAR_BRANDS;

/*
const CAR_BRANDS=[]
const outerDiv=document.getElementsByClassName('css-zdfmos')[0].children;
for(const element of outerDiv){
    if(element.getElementsByTagName('h4')[0].innerText==="View All Brands")
        continue;
    const logoImg=element.getElementsByTagName('img')[0].src;
    const brandName=element.getElementsByTagName('h4')[0].innerText;
    CAR_BRANDS.push({logoImg,brandName})
}
*/
