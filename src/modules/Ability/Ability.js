import React, {useRef, useEffect} from 'react';

import './Ability.scss';

import Image from './../Image/Image.js'

const Ability = (props) => {
    var {ability} = props;
    const imageRef = useRef();
    //console.log(ability);
    useEffect(() => {
        console.log(imageRef.current.getElementsByClassName('FP-Image-element')[0].width );
        function handleResize() {
            if(imageRef){
                imageRef.current.getElementsByClassName('FP-Image-element')[0].style.height = imageRef.current.getElementsByClassName('FP-Image-element')[0].width + 'px'
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize();
    }, [])
    /*return <div className="FP-Ability">
        <div class={"hex level-"+ability.niveau}>
            <div class="bar bar1" style={{background:ability.couleur}}></div>
            <div class="bar bar2" style={{background:ability.couleur}}></div>
            <div class="bar bar3" style={{background:ability.couleur}}></div>
            <div class="bar bar4" style={{background:ability.couleur}}></div>
            <div class="bar bar5" style={{background:ability.couleur}}></div>
        </div>
    </div>*/
    return <div className="FP-Ability" ref={imageRef}>
    <div className={"hex level-"+ability.niveau}>
        <div className="inner" style={{background:ability.couleur}}></div>
    </div>
    <Image src={ability.logo_src} alt={ability.nom} />
    <h3 dangerouslySetInnerHTML={{__html:ability.nom}}></h3>
    <p className="d-none" dangerouslySetInnerHTML={{__html:ability.description}}></p>
</div>
}

export default Ability;