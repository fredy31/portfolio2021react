import React from 'react';

import './LightModeSwitcher.scss';

const LightModeSwitcher = () => {
    const switchMode = () => {
        var menu = document.querySelector('body') // Using a class instead, see note below.
        menu.classList.toggle('is-lightmode');
    }
    return <div className="FP-LightModeSwitcher" onClick={switchMode}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="adjust" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-adjust fa-w-16"><path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z" className=""></path></svg>
    </div>
}

export default LightModeSwitcher;