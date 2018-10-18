import React from 'react';
import './Parallax.css';
import { Parallax } from 'react-parallax';

const MyParallax = () => {
    return (
        <div>
            {/* -----renderProp: "renderLayer"-----*/}
            <Parallax
                bgImage={'/path/to/another/image'}
                strength={400}
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                            left: '50%',
                            top: '50%',
                            right: '50%',
                            bottom: '50',
                            width: percentage * 500,
                            height: percentage * 500,
                        }}
                    />
                )}
            >
                <p>... Content</p>
            </Parallax>
        </div>
    );
};

export default MyParallax;