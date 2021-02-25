import React,{useEffect, useRef} from 'react';
import {TimelineLite ,TweenMax, Power3} from 'gsap';

//import arrow from '../../images/arrow-right.svg';
// import imgGirl from '../../images/girl.webp';
//import imgBoy from '../../images/boy.webp';

const arrow = 'https://raw.githubusercontent.com/victorflores04/portafilio/main/src/images/arrow-right.svg';
const imgGirl ='https://i.imgur.com/K12EECp.jpg';
const imgBoy ='https://i.imgur.com/K2fTz8e.jpg';
export const Section = () => {

    let app = useRef(null);
    let images = useRef(null);
    let content = useRef(null);

    let tl= new TimelineLite({delay:.8})

    useEffect(() => {
        //img vars
        const girlImage = images.firstElementChild;
        const boyImage = images.lastElementChild;
        //contens vars  
        const headlineFirst =  content.children[0].children[0]
        const headlineSecond = headlineFirst.nextSibling;
        const headlineThird = headlineSecond.nextSibling;
        const contentP = content.children[1];
        const contentButton = content.children[2];

        //remove initial flash
        TweenMax.to(app,0,{css:{visibility:'visible'}})
        //imgs animation
        tl.from(girlImage,1.2,{y:1280,ease:Power3.easeInOut},'Start')
            .from(girlImage.firstElementChild,2,{scale:1.6, ease:Power3.easeInOut},.2)
            .from(boyImage,1.2,{y:1280,ease:Power3.easeInOut},.2)
            .from(boyImage.firstElementChild,2,{scale:1.6, ease:Power3.easeInOut},.2)
        //console.log(app)
        //console.log(girlImage, boyImage)
        //console.log(headlineFirst, headlineSecond,headlineThird,contentP,contentButton)


        //Content animation
        tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children],1,{
            y: 44,
            ease: Power3.easeInOut,
            delay:.8,
        },.15,'Start')
        .from(contentP,1,{y:20,opacity:0, ease:Power3.easeInOut,},1.4)
        .from(contentButton,1,{y:20,opacity:0, ease:Power3.easeInOut,},1.6)
    },[tl])

    return (
        <div className= "hero" ref={el=>app=el}>
            <div className="container-hero">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-content-inner" ref={el=>content=el}>
                            <h1>
                            <div className="hero-content-line">
                                <div className="hero-content-line-title"> I'm Victor Flores - </div>
                            </div>
                            <div className="hero-content-line">
                                <div className="hero-content-line-inner-dot"><a>UI/UX Designer</a> </div>
                            </div>
                            <div className="hero-content-line">
                                <div className="hero-content-line-inner"> &lt;coder&gt;</div>
                            </div>
                            </h1>
                            <p> <b>Front End</b> developer who focuses on writing clean,elegant and eficient code.
                            </p>
                            <div className="btn-row">
                                <button className="explore-button">
                                LATEST WORK
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-images">
                        <div className="hero-images-inner" ref={el=>images=el}>
                            <div className="hero-image girl">
                                <img src={imgGirl} alt="images girl" />
                            </div>
                            <div className="hero-image boy">
                                <img src={imgBoy} alt="images boy" />
                            </div>
                        </div>
                    </div>
                    <div className="fixed-misc">ui front-end developer.</div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="black-box overlay"></div>
        </div>
    )
}
