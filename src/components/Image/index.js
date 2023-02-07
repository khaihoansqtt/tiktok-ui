import { forwardRef } from 'react'

import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './Image.module.scss'

import images from '~/assets/images/'
const cx = classNames.bind(styles)

function Image({ className, src, fallback: customFallback = images.noImage, ...passProps }, ref) {
    const [fallback, setFallback] = useState('')

    const classes = cx('wrapper', {
        [className]: true,
    })

    return (
        <img
            ref={ref}
            className={classes}
            src={fallback || src}
            onError={() => setFallback(customFallback)}
            {...passProps}
        />
    )
}
export default forwardRef(Image)
