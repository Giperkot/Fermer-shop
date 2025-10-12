
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import Swiper and modules styles

// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


import { Swiper, SwiperSlide } from 'swiper/react';


function ExampleSwiper () {

    /*const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });*/

    return (
        <div>
            <div className="swiper-pagination">
                <div className="">1</div>
                <div className="">2</div>
                <div className="">3</div>
                <div className="">4</div>
            </div>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
            }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        </div>
    );
}

export default ExampleSwiper;

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

</body>
</html>*/
