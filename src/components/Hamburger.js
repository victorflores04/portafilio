import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap';


//import ecommerce from '../images/ecommerce.jpg';
// import uxui from '../images/ux-ui.jpg';
// import appmovile from '../images/app-movile.jpg';
// import marketing from '../images/marketing.jpg';
// import seo from '../images/seo.jpg';

const ecommerce = 'https://i.imgur.com/e10JqIl.jpg';
const uxui = 'https://i.imgur.com/9kWPZSD.jpg';
const appmovile = 'https://i.imgur.com/HVROYfh.jpg';
const marketing = 'https://i.imgur.com/CI58Axe.jpg';
const seo = 'https://i.imgur.com/t2T5z8v.jpg';

const cities=[
    {name: 'E-commerce', image:ecommerce},
    {name: 'Diseño UX/UI', image:uxui},
    {name: 'App Moviles', image:appmovile},
    {name: 'Marketing', image:marketing},
    {name: 'SEO', image:seo},
];

export const Hamburger = ({state}) => {

    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBackground = useRef(null);
    let cityBackground = useRef(null);
    let lineOne = useRef(null);
    let lineTwo = useRef(null);
    let lineThree = useRef(null);
    let info = useRef(null);


    useEffect(() => {
        if(state.clicked === false){
            gsap.to([revealMenu, revealMenuBackground],{
                duration:0.8,
                height:0,
                ease:"power3.inOut",
                stagger:{
                    amount:0.07
                }
            });
            gsap.to(menu,{
                duration: 1,
                css:{display:'none'}
            })
            // menu.style.display='none'
        }else if(state.clicked === true||state.clicked === true && state.initial === null){
            gsap.to(menu,{
                duration: 0,
                css:{display:'block'}
            });
            gsap.to([revealMenuBackground,revealMenu],{
                duration:0,
                opacity:1,
                height:"100%",
            });
            staggerReveal(revealMenuBackground,revealMenu);
            fadeInUp(info);
            staggerText(lineOne,lineTwo,lineThree);
        }
    },[state]);

    const staggerReveal=(node1,node2)=>{
        gsap.from([node1,node2],{
            duration:0.8,
            height:0,
            transformOrigin:'right top',
            skewY:2,
            ease:"power3.inOut",
            stagger:{
                amount:0.1
            }
        });
    }

    const staggerText=(node1,node2,node3)=>{
        gsap.from([node1,node2,node3],{
            duration:0.8,
            y:100,
            delay:0.1,
            ease:"power3.inOut",
            stagger:{
                amount:0.3
            }
        });
    }

    const fadeInUp=(node)=>{
        gsap.from(node,{
            y:60,
            duration:1,
            delay:0.2,
            opacity:0,
            ease:"power3.inOut",
        });
    }

    const handleCity = city =>{
        gsap.to(cityBackground,{
            duration:0,
            background:`url(${city}) center center`
        });
        gsap.to(cityBackground,{
            duration:0.4,
            opacity:1,
            ease:"power3.inOut",
        });
        gsap.from(cityBackground,{
            duration:0.4,
            skewY:2,
            transformOrigin: "right top"
        })
    }

    const handleCityReturn =()=>{
        gsap.to(cityBackground,{
            duration:0.4,
            opacity:0,
        })
    }

    const handleHover = e =>{
        gsap.to(e.target, {
            duration: 0.3,
            y: 3,
            skewX: 4,
            ease: "power3.inOut"
          });
    }
    const handleHoverExit = e=>{
        gsap.to(e.target,{
            duration: 0.3,
            y: -3,
            skewX: 0,
            ease: "power3.inOut"
        })
    }


    return (
        <div ref={el=>(menu=el)} className='hamburger-menu'>
            <div ref={el=>(revealMenuBackground=el)} className="menu-secondary-background-color"></div>
            <div ref={el=>(revealMenu=el)} className="menu-layer">
                <div ref={el=>(cityBackground=el)} className="menu-city-background">

                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                        <nav>
                            <ul>
                                <li>
                                    <Link 
                                    onMouseEnter={e => handleHover(e)}
                                    onMouseOut={e => handleHoverExit(e)}
                                    ref={el=>(lineOne=el)}  to="/opportunities">Opportunities</Link>
                                </li>
                                <li>
                                    <Link 
                                    onMouseEnter={e => handleHover(e)}
                                    onMouseOut={e => handleHoverExit(e)} 
                                    ref={el=>(lineTwo=el)}  to="/solutions">Solutions</Link>
                                </li>
                                <li>
                                    <Link 
                                    onMouseEnter={e => handleHover(e)}
                                    onMouseOut={e => handleHoverExit(e)}
                                    ref={el=>(lineThree=el)}  to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                        <div ref={el=>(info=el)}  className="info">
                            <h3>Victor Flores, Founder</h3>
                            <p>
                            I started coding when I was 1 years old.
                            I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning — learning about computers, learning mathematics and philosophy, studying design, always just learning.
                            </p>
                        </div>
                        <div className="locations">
                            Services:
                            {cities.map(el=>(
                                <span key={el.name} onMouseEnter={()=>handleCity(el.image)} onMouseOut={handleCityReturn} >{el.name}</span>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
