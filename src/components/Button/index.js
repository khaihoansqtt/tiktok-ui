import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    href,
    to,
    primary = false,
    outline = false,
    text = false,
    round = false,
    small = false,
    large = false,
    disabled = false,
    className,
    leftIcon,
    rightIcon,
    children,
    ...passProps
}) {
    let Comp = 'button'
    let props = {
        ...passProps,
    }

    if (to) {
        Comp = Link
        props.to = to
    }

    if (href) {
        Comp = 'a'
        props.href = href
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
                console.log(props)
            }
        })
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        round,
        small,
        large,
        disabled,
        [className]: className,
    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button
