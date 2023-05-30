import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok"></img>
        </div>
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
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
