import React from 'react'

const FieldInput = ({ children, type, value }) => {
    return (
        <>
            <input
                type={type}
                className="field-input"
                placeholder={children}
                defaultValue={value}
            />
        </>
    )
}

export default FieldInput