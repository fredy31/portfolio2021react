import React, {useRef, useEffect} from 'react';
import useOnScreen from '../../functions/useOnScreen';

import './Ability.scss';

import Image from './../Image/Image.js'

const Ability = (props) => {
    var {ability} = props;
    const imageRef = useRef();
    const isVisible = useOnScreen(imageRef)
    //console.log(ability);
    useEffect(() => {
        //console.log(imageRef.current.getElementsByClassName('FP-Image-element')[0].width );
        function handleResize() {
            if(imageRef){
                imageRef.current.getElementsByClassName('FP-Image-element')[0].style.height = imageRef.current.getElementsByClassName('FP-Image-element')[0].width + 'px'
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize();
    }, [])
    return <div className={isVisible ? "FP-Ability is-visible" : "FP-Ability"} ref={imageRef}>
    <div className={"hex level-"+ability.niveau}>
        <div className="inner" style={{background:ability.couleur}}></div>
    </div>
    <Image src={ability.logo_src} alt={ability.nom} webp={ability.logo_src_webp} />
    <h3 dangerouslySetInnerHTML={{__html:ability.nom}}></h3>
    <p className="d-none" dangerouslySetInnerHTML={{__html:ability.description}}></p>
</div>
}

export default Ability;