const divEl1 = document.querySelector('#img');
const imgSize = document.querySelector('#text')

const addImg = (imgSrc) => {

    const handleOnImgLoad = () => {
        const imgWidth = imgEl.width;
        console.log(imgWidth);
    }

    const imgEl = document.createElement('img');
    imgEl.src = "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg";
    divEl1.append(imgEl);
    
    const imgWidth = imgEl.width;
    
    imgEl.addEventListener('load', handleOnImgLoad);

    return imgWidth;
}
addImg();

const addImageSizes = (w) => {
imgSize.append(w);


}
addImageSizes();