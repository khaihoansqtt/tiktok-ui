import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import Image from '../Image'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem({
    item = {
        nickname: 'hoann98',
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d382d90603220bd168f77294ab193dd9~c5_100x100.jpeg?x-expires=1675216800&x-signature=KnpDSdtVoYD6oPCRy8FL1EfMjxM%3D',
        tick: true,
        full_name: 'Khải Hoàn vip',
    },
}) {
    return (
        <Link to={`/@${item.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={item.avatar} />
            <div className={cx('info')}>
                <div className={cx('username')}>
                    {item.nickname}
                    {item.tick && <i className={'fa-solid fa-circle-check'}></i>}
                </div>
                <div className={cx('name')}>{item.full_name}</div>
            </div>
        </Link>
    )
}

export default AccountItem
