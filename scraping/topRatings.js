const TOP_RATING=[
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcamera-1.png&w=3840&q=75",
        "rating": "4",
        "reviews": "49",
        "name": "Camera",
        "originalPrice": "3300",
        "category": "62ea3c3e0953daa588719343",
        "subcategory": "62ea4ca872cc78d0c8510726",
        "brand": "62ea5e164f7b0a801afa34c0",
        "type": "top-ratings"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fshoes-2.png&w=3840&q=75",
        "rating": "5",
        "reviews": "20",
        "name": "Shoe",
        "originalPrice": "400",
        "category": "62ea429fd72e6e469dc73f4c",
        "subcategory": "62ea3b80925f814743c97025",
        "brand": "62ea4184d72e6e469dc73f44",
        "type": "top-ratings"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fmobile-1.png&w=3840&q=75",
        "rating": "5",
        "reviews": "65",
        "name": "Phone",
        "originalPrice": "999",
        "category": "62ea3c3e0953daa588719343",
        "subcategory": "62ea41fdd72e6e469dc73f49",
        "brand": "62ea4184d72e6e469dc73f46",
        "type": "top-ratings"
    },
    {
        "imgSrc": "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fwatch-1.png&w=3840&q=75",
        "rating": "5",
        "reviews": "75",
        "name": "Watch",
        "originalPrice": "999",
        "category": "62ea429fd72e6e469dc73f4c",
        "subcategory": "62ea4ca872cc78d0c8510725",
        "brand": "62ea4ca872cc78d0c8510725",
        "type": "top-ratings"
    }
]
module.exports=TOP_RATING;
/*code
const TOP_RATING = [];
const outerDiv = document.getElementsByClassName("css-m0y1v0");
for (const element of outerDiv) {
    const imgSrc = element.getElementsByClassName("css-a9n7s9")[0].src;
    const rating = element.getElementsByClassName("css-1qju13v")[0].ariaLabel[0];
    const reviews = element.getElementsByTagName("small")[0].innerText.slice(1, -1);
    const name = element.getElementsByClassName("css-1upshh6")[0].innerText;
    const price = element.getElementsByClassName("css-nm59vz")[0].innerText.slice(1);
    TOP_RATING.push({ imgSrc, rating, reviews, name, price });
}
*/

