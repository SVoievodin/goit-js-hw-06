const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector("ul.gallery");
galleryRef.style.display = "flex";

const imgListRef = images.map(image => `<li style="list-style-type: none;"><img style="display: block; margin: 5px;" src="${image.url}" alt="${image.alt}" height = "200"</li>`).join('');
console.log(imgListRef);

galleryRef.insertAdjacentHTML("afterbegin", imgListRef);



// for (let i = 0; i < images.length; i++) {
//   let liImgEl = document.createElement("li");
//   let imgEl = document.createElement("img");
//   liImgEl.appendChild(imgEl);
//   imgEl.src = images[i].url;
//   imgEl.alt = images[i].alt;
//   imgEl.height = 200;
//   gallery.insertAdjacentHTML("afterbegin", imgList)
// }
// console.log(galleryEl);

