import React from 'react';

import './Ability.scss';

const Ability = (props) => {
    var {ability} = props;
    console.log(ability);
    /*return <div className="FP-Ability">
        <div class={"hex level-"+ability.niveau}>
            <div class="bar bar1" style={{background:ability.couleur}}></div>
            <div class="bar bar2" style={{background:ability.couleur}}></div>
            <div class="bar bar3" style={{background:ability.couleur}}></div>
            <div class="bar bar4" style={{background:ability.couleur}}></div>
            <div class="bar bar5" style={{background:ability.couleur}}></div>
        </div>
    </div>*/
    return <div className="FP-Ability">
    <div class={"hex level-"+ability.niveau}>
        <div class="inner" style={{background:ability.couleur}}></div>
    </div>
</div>
}

export default Ability;