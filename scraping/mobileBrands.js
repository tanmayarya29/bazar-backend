const MOBILE_BRANDS=[
    {
        "logoImg": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fapple.png&w=48&q=75",
        "brandName": "Apple"
    },
    {
        "logoImg": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fdell.png&w=48&q=75",
        "brandName": "Dell"
    },
    {
        "logoImg": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fxiaomi.png&w=48&q=75",
        "brandName": "Xiaomi"
    },
    {
        "logoImg": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fasus.png&w=48&q=75",
        "brandName": "Asus"
    },
    {
        "logoImg": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fsony.png&w=48&q=75",
        "brandName": "Sony"
    },
    {
        "logoImg": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Facer.png&w=48&q=75",
        "brandName": "Acer"
    }
];

module.exports=MOBILE_BRANDS;

/*code
const MOBILE_BRANDS=[]
const outerDiv=document.getElementsByClassName('css-wgx0j5')[0].children;
for(let i=1;i<7;i++){
    const element=outerDiv[i];
    const logoImg=element.getElementsByTagName('img')[0].src;
    const brandName=element.getElementsByTagName('h4')[0].innerText;
    MOBILE_BRANDS.push({logoImg,brandName})
}
*/
