import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/319675017_492860606279447_8932509317476251430_n.jpg?stp=dst-jpg_p100x100&amp;_nc_cat=108&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=-vo8HL6WdGYAX-lL0Mu&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=00_AfBz0072ZkHWUl3PpVR5P1kWGaBzHJkqcOceb0JQjKsTdw&amp;oe=647A270F"
                alt="X"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Ngọc Thảo</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('user-name')}>stillmanhmanh</span>
            </div>
        </div>
    );
}

export default AccountItem;
