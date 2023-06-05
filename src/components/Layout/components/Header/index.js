import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '~/components/Layout/Popper/Menu';
import Image from '~/components/Image';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faSignOut,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { code: 'vi', title: 'Vietnamese' },
                { code: 'en', title: 'English' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard ',
    },
];

function Header() {
    const curUser = true;
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok"></img>
                </div>

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and videos" spellCheck={false}></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')}></FontAwesomeIcon>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {curUser ? (
                        <>
                            <Tippy content="Upload videos" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text> Register</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={curUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {curUser ? (
                            <Image
                                // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                className={cx('user-avatar')}
                                src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/319675017_492860606279447_8932509317476251430_n.jpg?stp=dst-jpg_p100x100&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=-vo8HL6WdGYAX-lL0Mu&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=00_AfBz0072ZkHWUl3PpVR5P1kWGaBzHJkqcOceb0JQjKsTdw&amp;oe=647A270F"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
