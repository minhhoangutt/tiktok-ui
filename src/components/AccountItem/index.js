import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Image';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@:${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name}></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
                </h4>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
