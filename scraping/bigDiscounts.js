const BIG_DISCOUNTS=[
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F7.beatsw3.png&w=3840&q=75",
        "name": "BenX 2020",
        "originalPrice": "233",
        "category":"62ea3c3e0953daa588719343",
        "brand":"62ea596d78717c2cd34314e5",
        "subcategory":"62ea4ca872cc78d0c851072a",
        "type":"big-discounts"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F9.SonyTV1080p.png&w=3840&q=75",
        "name": "Sony TV 1080p",
        "originalPrice": "278",
        "category":"62ea3c3e0953daa588719343",
        "brand":"62ea5e164f7b0a801afa34c0",
        "subcategory":"62ea4ca872cc78d0c8510729",
        "type":"big-discounts"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F10.SonyPS4.png&w=3840&q=75",
        "name": "Sony PS4",
        "originalPrice": "177",
        "category":"62ea3c3e0953daa588719343",
        "brand":"62ea5e164f7b0a801afa34c0",
        "subcategory":"62ea62f54f7b0a801afa34d4",
        "type":"big-discounts"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F11.Netgear2020.png&w=3840&q=75",
        "name": "Netgear 2020",
        "originalPrice": "124",
        "category":"62ea3c3e0953daa588719343",
        "brand":"62ea5e164f7b0a801afa34bf",
        "subcategory":"62ea62f54f7b0a801afa34d5",
        "type":"big-discounts"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F12.SonyBGB.png&w=3840&q=75",
        "name": "Sony BGB",
        "originalPrice": "284",
        "category":"62ea3c3e0953daa588719343",
        "brand":"62ea5e164f7b0a801afa34c0",
        "subcategory":"62ea413dd72e6e469dc73f40",
        "type":"big-discounts"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F13.LGProducts.png&w=3840&q=75",
        "name": "LG products",
        "originalPrice": "300",
        "category":"62ea3c3e0953daa588719343",
        "brand":"62ea5e164f7b0a801afa34c1",
        "subcategory":"62ea5be4b28d3c37e6715848",
        "type":"big-discounts"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F14.Panasonic2019.png&w=3840&q=75",
        "name": "Panasonic 2019",
        "originalPrice": "137",
        "category":"62ea3c3e0953daa588719343",
        "brand":"62ea5e164f7b0a801afa34c2",
        "subcategory":"62ea630b4f7b0a801afa34d8",
        "type":"big-discounts"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F15.DuneHD.png&w=3840&q=75",
        "name": "Dune HD",
        "originalPrice": "111",
        "category":"62ea3c3e0953daa588719343",
        "brand":"62ea5e164f7b0a801afa34c3",
        "subcategory":"62ea62f54f7b0a801afa34d5",
        "type":"big-discounts"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F16.SonyCCTV.png&w=3840&q=75",
        "name": "Sony CCTV",
        "originalPrice": "150",
        "category":"62ea3c3e0953daa588719343",
        "brand":"62ea5e164f7b0a801afa34c0",
        "subcategory":"62ea62f54f7b0a801afa34d5",
        "type":"big-discounts"
    }
];
module.exports=BIG_DISCOUNTS;

/*code
const BIG_DISCOUNTS=[];
const outerDiv=document.getElementsByClassName("css-nfqbe7");
for(const element of outerDiv){
    const imgSrc=element.getElementsByTagName("img")[0].src;
    const name=element.getElementsByClassName("css-1xtjojq")[0].innerText;
    const discountedPrice=element.getElementsByClassName("css-fxg7wj")[0].innerText.slice(1);
    const originalPrice=element.getElementsByTagName("del")[0].innerText.slice(1);
    BIG_DISCOUNTS.push({imgSrc,name,discountedPrice,originalPrice});
}
*/