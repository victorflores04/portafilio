import React,{ useEffect, useRef } from 'react';
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { Banner } from './portafolio/Banner';

export const Screen = () => {

    let containerScreen = useRef(null);
    let image = useRef(null);
    let imageReveal = CSSRulePlugin.getRule('.img-container:after');
    let tl = new TimelineLite();
    useEffect(() => {
        tl.to(containerScreen,0,{css:{visibility:'visible'}})
            .to(imageReveal,1.4,{width:"0%",ease:Power2.easeInOut})
            .from(image,1.4,{scale:1.6,ease:Power2.easeInOut,delay:-1.6 })
    })

    return (
        <div className="container">
            <div className="container__screen">
                <div className="testimonial-section">
            <div className="main-p"><a  href="https://victorflores04.github.io/screen/">MIKHAILA PETERSON</a></div>
            <section>
                <div ref={el=> containerScreen= el} className="container-screen">
                    <>
                    <div className="img-container" >
                    <a href="https://victorflores04.github.io/screen/"><img ref={el=> image= el}  src="https://i.imgur.com/zH8RBgq.png" alt="sdsd" /></a>    
                    </div>
                    </>
                </div>
            </section>
            </div>
            </div>
            <Banner/>
        </div>
        
        
        
    )
}
