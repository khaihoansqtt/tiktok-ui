import { Link } from 'react-router-dom'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '~/assets/images'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import { EffectIcon, InboxIcon, MessageIcon, UploadIcon } from '~/components/Icon'
import Image from '~/components/Image'
import Search from '../Search'
import config from '~/config'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <i className="fa-solid fa-earth-americas"></i>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    title: 'English',
                    code: 'en',
                },
                {
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
                {
                    title: 'English',
                    code: 'en',
                },
                {
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
                {
                    title: 'English',
                    code: 'en',
                },
                {
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
                {
                    title: 'English',
                    code: 'en',
                },
                {
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
                {
                    title: 'English',
                    code: 'en',
                },
                {
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
                {
                    title: 'English',
                    code: 'en',
                },
                {
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
                {
                    title: 'English',
                    code: 'en',
                },
                {
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
            ],
        },
    },
    {
        icon: <i className="fa-solid fa-circle-question"></i>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <i className="fa-solid fa-keyboard"></i>,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <i className="fa-solid fa-moon"></i>,
        title: 'Dark mode',
    },
]

const userMenu = [
    {
        icon: <i className="fa-solid fa-user"></i>,
        title: 'View Profile',
        to: '/@hoan',
    },
    {
        icon: <i className="fa-solid fa-video"></i>,
        title: 'Live Studio',
        to: '/livestudio',
    },
    {
        icon: <i className="fa-solid fa-gear"></i>,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <i className="fa-solid fa-right-from-bracket"></i>,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
]

function Header() {
    const currentUser = true

    //Handle menu logic
    const handleMenuLogic = (item) => {
        switch (item.type) {
            case 'change-language':
        }
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok-logo" />
                </Link>

                {/* Search component */}
                <Search />

                {/* Header-action */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button className={cx('action-btn')} text leftIcon={<UploadIcon />}>
                                Upload
                            </Button>
                            <Tippy content="Create Effects">
                                <button className={cx('action-btn')}>
                                    <EffectIcon fill="none" />
                                </button>
                            </Tippy>
                            <Tippy content="Messages">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy visible={false} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline>Upload</Button>
                            <Button primary className={cx('custom-login')}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu menuItems={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuLogic}>
                        {currentUser ? (
                            <Image
                                className={cx('avatar-user')}
                                src="https://p9-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/1691941910801409.jpeg?x-expires=1675123200&x-signature=6yb7vs7%2F0noLXINSFg%2FzK7NPdBI%3D"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/03b70f0513186c7bbb2c1cf8fe840ae7~c5_100x100.jpeg?x-expires=1675130400&x-signature=FncIdH%2F%2BgmFIn92uP0T%2BkZtmuJ0%3D"
                            />
                        ) : (
                            <button className={cx('menu-btn')}>
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
