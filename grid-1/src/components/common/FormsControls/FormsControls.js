import React from "react";
import s from "./FormsControls.module.css"

const FormsControls = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            {props.children}
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormsControls {...props}><textarea {...props.input} {...restProps} /></FormsControls>
}

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormsControls {...props}><input {...props.input} {...restProps} /></FormsControls>
}