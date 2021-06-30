export const PageAnimation={
hidden:{
    opacity:0,
    y:300,
},
show:{
    opacity: 1,
    y:0,
    transition:{
        duration:1,
        // when:"beforeChildern",
    //    staggerChildren:0.25, 
    },

},
exit:{
    opacity:0,
    y:300,
    transition:{
        duration:1,
    },
}
}
export const TitleAnimation={
    hidden:{
        y:200
    },
    show:{
        y:0,
        transition:{duration:0.75,ease:"easeOut"}
    }
}
export const PhotoAnimation={
    hidden:{
        scale:1.5,
        opacity: 0,
    },
    show:{
        scale: 0,
        opacity: 1,
        transition: {
            duration:0.75,
            ease:"easeOut"
        }

    }
}