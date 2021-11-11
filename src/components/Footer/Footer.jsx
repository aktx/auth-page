import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return <div className={styles.root}>
        <div>
            <ul>
                <li>
                    Тут
                </li>
                <li>
                    немного
                </li>
                <li>
                    очень
                </li>
                <li>
                    важной
                </li>

            </ul>
        </div>
        <div>
            <ul>
                <li>
                    информации
                </li>
                <li>
                    для
                </li>
                <li>
                    любимых
                </li>
                <li>
                    пользователей
                </li>
            </ul>
        </div>
    </div>
}

export default Footer;