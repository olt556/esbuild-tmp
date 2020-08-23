import * as React from 'react';
import { useState, Dispatch, SetStateAction } from 'react';

const Footer = (): JSX.Element => {
    const [update, updateState]: [number, Dispatch<SetStateAction<number>>] = useState(0);
    const stateValueUpdate = (): void => {
        if (update) {
            updateState(0);
        } else {
            updateState(1);
        }
    };
    return (
        <div>
            <ul></ul>
        </div>
    );
};

export { Footer };
