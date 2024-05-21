import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/b9e1fb6031f81c5eb0d63a9dbbb1da27~c5_300x300.webp?lk3s=a5d48078&nonce=25496&refresh_token=4b0fc7a64c445a101808dd023b198f10&x-expires=1716465600&x-signature=IvFUqL%2FMc4xz05cptD%2FMwzfOdCg%3D&shp=a5d48078&shcp=c1333099"
                alt="namme"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Dinh Khac Dien</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCircleCheck}
                    ></FontAwesomeIcon>
                </h4>
                <p className={cx('username')}>Dienkk</p>
            </div>
        </div>
    );
}

export default AccountItem;
