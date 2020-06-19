let line = document.querySelector('.line');
let slides = document.querySelectorAll('.slide');
let sliderWidth = document.querySelector('.slider').offsetWidth;
let widthArray = [0];
let lineWidth = 0;
let offset = 0;
let step = 0;
let balance = 0;

//  картинки встанут в ряд (ширина блока = ширине картинки)
for (let i = 0; i < slides.length; i++) {
    widthArray.push(slides[i].offsetWidth);
    lineWidth += slides[i].offsetWidth;
}
line.style.width = lineWidth + 'px';

// сдвигает слайдер
document.onclick = function () {
    // остаток (ширина line - ширина slider)
    balance = lineWidth - sliderWidth - (offset + widthArray[step]);
    
    //сдвиг влево без свободного пространства
    if (balance >= 0) {
        offset = offset + widthArray[step];
        line.style.left = -offset + 'px';
    }
    else {
        line.style.left = -(lineWidth - sliderWidth) + 'px';

        //запускаем слайдер по кругу 
        offset = 0;
        step = -1;
    }
    if (step + 1 == slides.length) {
        step = 0;
        offset= 0;
    }
    else {
        step++;
    }
}
