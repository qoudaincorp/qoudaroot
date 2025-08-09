import React, { Component, ImgHTMLAttributes } from 'react';

interface PreloadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    // You can add any additional props specific to your PreloadImage component here
}

class PreloadImage extends Component<PreloadImageProps> {
    state = {
        loaded: false,
    };

    componentDidMount() {
        const img = new Image();
        // @ts-ignore
        img.src = this.props.src;

        img.onload = () => {
            this.setState({ loaded: true });
        };
    }

    render() {
        const { loaded } = this.state;
        const { src, alt, ...otherProps } = this.props;

        return loaded ? (
            <img src={src} alt={alt} {...otherProps} />
        ) : null;
    }
}

export default PreloadImage;
