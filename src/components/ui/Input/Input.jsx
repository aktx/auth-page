import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {
    console.log(props.required)
    return <div className={styles.root}>
        <img className={styles.icon} src={props.icon} alt="EmailIcon" />
        <input required={props.required} placeholder={props.placeholder} type={props.type} className={styles.input} />
    </div>
}

export default Input;