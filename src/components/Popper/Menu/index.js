import { useState } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { PoppyWrapper } from '../'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function Menu({ menuItems = [], children, onChange }) {
    const [history, setHistory] = useState([{ data: menuItems }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            if (item.children)
                return (
                    <MenuItem key={index} item={item} onClick={() => setHistory((prev) => [...prev, item.children])} />
                )
            return <MenuItem key={index} item={item} onClick={() => onChange(item)} />
        })
    }

    return (
        <Tippy
            interactive
            delay={[0, 200]}
            offset={[12, 12]}
            placement="bottom-end"
            hideOnClick={false}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PoppyWrapper>
                        {current.title && (
                            <header className={cx('menu-header')}>
                                <Button
                                    className={cx('back-btn')}
                                    leftIcon={<i className="fa-solid fa-angle-left"></i>}
                                    onClick={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                                />
                                <span className={cx('menu-header-title')}>{current.title}</span>
                            </header>
                        )}
                        <div className={cx('menu-scrollbar')}>{renderItems()}</div>
                    </PoppyWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
