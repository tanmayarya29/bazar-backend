const FEATURED_BRANDS = [
	{
		"imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Flondon-britches.png&w=3840&q=75",
		"name": "London Britches",
        "category":"62ea3c3e0953daa588719343",
        "brand":"62ea6fb9c5e2a839144734ae",
        "originalPrice":"0",
        "type":"featured-brands"

	},
	{
		"imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fjim%20and%20jiko.png&w=3840&q=75",
		"name": "Jim & Jago",
        "category":"62ea429fd72e6e469dc73f4c",
        "brand":"62ea6fb9c5e2a839144734af",
        "originalPrice":"0",
        "type":"featured-brands"
	}
]
module.exports = FEATURED_BRANDS;

/*
const FEATURED_BRANDS=[]
const wrapper = document.getElementsByClassName("css-m860y2");
const outerDiv = wrapper[0].childNodes[1].childNodes[0].children;
for (const element of outerDiv) {
    const imgSrc = element.getElementsByTagName("img")[0].src;
    const name = element.getElementsByClassName("css-1htasj6")[0].innerText;
    FEATURED_BRANDS.push({ imgSrc, name });
}
*/
