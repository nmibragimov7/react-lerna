import React from 'react';

import BaseButton from "./components/base/BaseButton/BaseButton";
import BaseInput from "./components/base/BaseInput/BaseInput";
import BaseCheckbox from "./components/base/BaseCheckbox/BaseCheckbox";
import BaseModal from "./components/base/BaseModal/BaseModal";
import BaseCart from "./components/base/BaseCart/BaseCart";
import BaseImage from "./components/base/BaseImage/BaseImage";
import BaseToasts from "./components/base/BaseToasts/BaseToasts";
import BaseSpinner from "./components/base/BaseSpinner/BaseSpinner";
import {Description as DescriptionComponent} from "./components/Description";

import {classes as globalClasses} from "./core/helpers/classes";

import imageClose from "./static/images/close.svg";

// components
export const Button = BaseButton;
export const Input = BaseInput;
export const Checkbox = BaseCheckbox;
export const Modal = BaseModal;
export const Cart = BaseCart;
export const Image = BaseImage;
export const Toasts = BaseToasts;
export const Spinner = BaseSpinner;
export const Description = DescriptionComponent;

// helpers
export const classes = globalClasses;

// constants
// export let toast = globalToast;

// statics
export const close = imageClose;
