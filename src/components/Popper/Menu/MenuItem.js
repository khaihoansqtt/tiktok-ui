import classNames from 'classnames/bind'

import styles from './Menu.module.scss'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function MenuItem({ item, ...passProps }) {
    const classes = cx('menu-item', {
        separate: item.separate,
    })
    return (
        <Button leftIcon={item.icon} to={item.to} className={classes} {...passProps}>
            {item.title}
        </Button>
    )
}

export default MenuItem
