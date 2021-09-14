import React from 'react';

import './Image.scss';

const Image = (props) => {
    const {src, webp, alt} = props;
    return <picture className="FP-Image">
        <source srcSet={webp} type="image/webp" />
        <img src={src} alt={alt} loading="lazy" className="FP-Image-element" />
    </picture>
}
export default Image;