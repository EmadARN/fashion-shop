

export const responsive_CardProductView_List = {
    desktop: {
        autoplay:false,
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        autoplay:false,
        breakpoint: { max: 1024, min: 464 },
        items: 4,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        autoplay:true,
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
    },
};