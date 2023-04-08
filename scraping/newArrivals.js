const NEW_ARRIVALS=[
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fimagegoggles.png&w=3840&q=75",
        "name": "Sunglass",
        "originalPrice": "150",
        "category": "62ea429fd72e6e469dc73f4c",
        "brand": "62ea4184d72e6e469dc73f44",
        "type": "new-arrivals",
        "subcategory": "62ea413dd72e6e469dc73f40"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(2).png&w=3840&q=75",
        "name": "Makeup",
        "originalPrice": "250",
        "category": "62ea429fd72e6e469dc73f4c",
        "brand": "62ea596d78717c2cd34314e4",
        "type": "new-arrivals",
        "subcategory": "62ea413dd72e6e469dc73f40"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fbgwatch.png&w=3840&q=75",
        "name": "Smart Watch",
        "originalPrice": "350",
        "category": "62ea429fd72e6e469dc73f4c",
        "brand": "62ea4184d72e6e469dc73f46",
        "type": "new-arrivals",
        "subcategory": "62ea413dd72e6e469dc73f40"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(1).png&w=3840&q=75",
        "name": "Lipstick",
        "originalPrice": "15",
        "category": "62ea429fd72e6e469dc73f4c",
        "brand": "62ea596d78717c2cd34314e4",
        "type": "new-arrivals",
        "subcategory": "62ea413dd72e6e469dc73f40"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(4).png&w=3840&q=75",
        "name": "Green plant",
        "originalPrice": "55",
        "category": "62ea429fd72e6e469dc73f4c",
        "brand": "62ea596d78717c2cd34314e4",
        "type": "new-arrivals",
        "subcategory": "62ea5be4b28d3c37e6715848"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flipstick%20(3).png&w=3840&q=75",
        "name": "Bonsai tree",
        "originalPrice": "535",
        "category": "62ea429fd72e6e469dc73f4c",
        "brand": "62ea596d78717c2cd34314e4",
        "type": "new-arrivals",
        "subcategory": "62ea5be4b28d3c37e6715848"
    }
];
module.exports=NEW_ARRIVALS;

/*code
const NEW_ARRIVALS=[]
const outerDiv=document.getElementsByClassName("css-1l2tnxw");
for(const element of outerDiv){
    const imgSrc=element.getElementsByTagName("img")[0].src;
    const name=element.getElementsByClassName("css-1xtjojq")[0].innerText;
    const originaloriginalPrice=element.getElementsByClassName("css-fxg7wj")[0].innerText.slice(1);
    NEW_ARRIVALS.push({imgSrc,name,originalPrice});
}
*/