import React from 'react';
import cx from 'clsx';
import styles from './styles.css';

const Paragraph = ({ children, className, variant, ...rest }) => {
    const classes = cx(
        styles.Paragraph,
        {
            [styles.ParagraphSecondary]: variant === 'secondary',
        },
        className
    );
    return (
        <p {...rest} className={classes}>
            {children}
        </p>
    );
};

export { Paragraph };