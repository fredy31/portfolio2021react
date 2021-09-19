import React from 'react';

import './Loading.scss';

const Loading = (props) => {
    var contClass="FP-Loading ";
    if(props.loading){
        contClass+="is-loading";
    }else{
        contClass+="is-done";
    }
    return <div className={contClass}>
        <div className="chargement">
            <div>
                Chargement
                <div className="title">&nbsp;</div>
            </div>
        </div>
        <div className="name">
            <div>
                Frédéric Pilon
                <div className="title">Intégrateur Web</div>
            </div>
        </div>
    </div>
}

export default Loading;