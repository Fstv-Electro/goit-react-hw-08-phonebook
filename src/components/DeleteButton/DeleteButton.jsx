import React from "react";
import PropTypes from 'prop-types';
import { ButtonStyle } from "./DeleteButton.styled";

const DeleteButton = ({
    type,
    background = null,
    color = null,
    onClick = () => null,
    children = null,
    ...allyProps
}) => {
    return (
        <ButtonStyle
            background={background}
            color={color}
            type={type}
            onClick={onClick}
        >
            {children}
        </ButtonStyle>
    );
};

DeleteButton.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    'aria-label': PropTypes.string.isRequired,
};

export default DeleteButton;