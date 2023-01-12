import React from 'react';

import {classes} from "../../../core/helpers/classes";
import styles from "./BaseSpinner.module.scss";

interface IProps {
    className?: string;
}

const BaseSpinner: React.FC<IProps> = ({ className }) => {
    return (
        <div className={classes(styles.BaseSpinner, className || '')}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default BaseSpinner;
