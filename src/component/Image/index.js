import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/img';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);
const Image = forwardRef(
    ({ src, alt, className, fallBack = images.noImage, ...props }, ref) => {
        const [_fallBack, setFallBack] = useState('');
        const handlError = () => {
            setFallBack(fallBack);
        };
        return (
            <img
                className={cx(className, 'wrapper')}
                {...props}
                src={_fallBack || src}
                alt={alt}
                ref={ref}
                onError={handlError}
            />
        );
    },
);

export default Image;
