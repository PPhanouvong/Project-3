import React from 'react';
import './TypeWriter.css';
import Typing from 'react-typing-animation';

const TypeWriter = () => {
    return (
        <Typing startDelay={50} hideCursor='true' speed={1}>
            <span id='typing'> This line will stay. Test test test test test </span>
            <span id='typing'> This line will get instantly removed after a 500 ms delay </span>
            <Typing.Reset count={1} delay={500} />
        </Typing>
    );
};

export default TypeWriter;