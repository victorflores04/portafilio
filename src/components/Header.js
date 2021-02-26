import React, { useState,useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {Hamburger} from './Hamburger';

const Header = ({history}) => {
    //state for menu disable
    const [state, setstate] = useState({
        initial:false,
        clicked: null,
        menuName: "Menu",
    })
    //state for menu button
    const [disabled, setDisabled] = useState(false);

    //Use effect for page changes
    useEffect(() => {
        //Listen for page changes
        history.listen(()=>{
            setstate({clicked:false,menuName:'Menu'})
        })
    })

    const handleMenu=()=>{
        disableMenu();
        if(state.initial === false){
            setstate({
                initial: null,
                clicked: true,
                menuName: 'Close'
            });
            console.log(1)
        }else if(state.clicked === true){
            setstate({
                clicked: !state.clicked,
                menuName: 'Menu'
            });
            console.log(2)
        }
        else if(state.clicked === false){
            setstate({
                clicked: !state.clicked,
                menuName: 'Close'
            });
            console.log(3)
        }
    };

    const disableMenu=()=>{
        setDisabled(!disabled);
        setTimeout(()=>{
            setDisabled(false)
        },1200);
    }

    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header">
                        <div className="logo">
                            <Link to="/">victorFlores.</Link>
                        </div>
                        <div className="menu">
                            <button disabled={disabled} onClick={handleMenu}>menu</button>
                        </div>
                    </div>
                </div>
            </div>
            <Hamburger state={state}/>
        </header>
    )
}
export  default withRouter(Header);
