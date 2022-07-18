
let imagesToLoad = document.querySelectorAll('img[data-src]');
let srcToLoad = document.querySelectorAll('source[data-src]');
let options = {
    threshold: .5 
}

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const loadSrcSet = (srcset) => {
    srcset.setAttribute('srcset', srcset.getAttribute('data-src'));
    srcset.removeAttribute('data-src');
    console.log(srcset.parentNode);
    srcset.parentNode.removeAttribute('class');
    console.log(srcset.parentNode);

};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((imagesToLoad, observer) => {
        imagesToLoad.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
        });
    }, {threshold: 0.5});

    const srcObserver = new IntersectionObserver((imagesToLoad, observer) => {
        imagesToLoad.forEach((item) => {
            if(item.isIntersecting) {
            loadSrcSet(item.target);
            srcObserver.unobserve(item.target);
            }
        });
        });

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });

    srcToLoad.forEach((img) => {
        srcObserver.observe(img);
    });
    } else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
    srcToLoad.forEach((img) => {
        loadImages(img);
    });
    }
