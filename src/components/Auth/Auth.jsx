import React, { useState } from 'react';
import styles from './Auth.module.scss';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import EmailIcon from '../../assets/icons/auth-email-icon.svg';
import PassIcon from '../../assets/icons/auth-pass-icon.svg';

const mockRequest = (email, password) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(email, password);
    },700)
})

const Auth = () => {
    const [requestIsSending, setRequestIsSending] = useState(false);

    const handleSubmit = async (e) => {
        const email = e.target[0].value;
        const password = e.target[1].valu;
        setRequestIsSending(true);
        await mockRequest(email,password);
        setRequestIsSending(false);
        e.preventDefault();
    }

    return <div className={styles.formWrapper}>
        <span className={styles.backgroundWords}>Безумно вдохновляющий слоган</span>
        <form onSubmit={handleSubmit} className={styles.root}>
            <Input required placeholder='Email' type="email" icon={EmailIcon} />
            <Input required placeholder='Password' type="password" icon={PassIcon} />
            <Button type='submit' className={styles.button}>{requestIsSending ? 'Wait...' :  'Sign In'}</Button>
        </form>
    </div>
}

export default Auth;