import React, {useState, useEffect}  from 'react';

import axios from 'axios';

import Intro from './../../containers/Intro/Intro';
import Abilities from './../../containers/Abilities/Abilities';
import Contact from './../../containers/Contact/Contact';
import Experience from './../../containers/Experience/Experience';
import Formation from './../../containers/Formation/Formation';
import Projects from './../../containers/Projects/Projects';
import FPNavbar from './../../containers/FPNavbar/FPNavbar';
import Logiciels from './../../containers/Logiciels/Logiciels';
import Loading from './../../containers/Loading/Loading';
import LightModeSwitcher from '../../containers/LightModeSwitcher/LightModeSwitcher';

import './Main.scss';

const Main = () => {
    const [siteData, setSiteData] = useState(false);
    useEffect(()=>{
        if(!siteData){
            axios({
                method:'get',
                url:"https://wp.fredericpilon.com/?rest_route=/wp/v2/pages/2",
                //mode: 'no-cors',
                headers: {
                    //'Access-Control-Allow-Credentials':true,
                    //"content-type": 'application/json',
                    //'access-control-allow-origin': "*",
                },
            }).then(function(response){
                //console.log(response);
                if(response.data.trmeta){
                    setSiteData(response.data.trmeta);
                }else{
                    setSiteData('Error: Unexpected data')
                    console.log(response)
                }
            }).catch(function(response){
                setSiteData('Error: Query error')
                console.log(response)
            })
        }
    })
    const sections = {
        //"intro"       : 'Introduction',
        "abilities"   : 'Abiletés',
        "projects"    : 'Projects',
        "experience"  : 'Experience',
        "formation"   : 'Formation',
        "contact"     : 'Contact'
    };
    if(typeof siteData === 'string' || siteData instanceof String){
        console.log(siteData);
        return <div className="FP-Error"><div dangerouslySetInnerHTML={{__html: siteData + '<br />Veuillez réessayer.'}}></div></div>
    }else if(siteData){
        return <div className='FP-Main'>
            <Loading loading={false} />
            <FPNavbar sections={sections} />
            <Intro text={siteData.intro} img={siteData.intro_img["0_src"]} webp={siteData.intro_img["0_src_webp"]} />
            <Abilities abilities={siteData.abilities} titre={siteData.titre_abilets} />
            <Projects projects={siteData.projects} titre={siteData.titre_projets}  />
            <Logiciels logiciels={siteData.logiciels} titre={siteData.titre_logiciels} />
            <Experience experience={siteData.experience} titre={siteData.titre_exprience}  />
            <Formation formation={siteData.formation} titre={siteData.titre_formation}  />
            <Contact text={siteData.contact} />
            <LightModeSwitcher />
        </div>;
    }else{
        return <div className='FP-Main'>
            <Loading loading={true} />
        </div>
    }
}

export default Main;