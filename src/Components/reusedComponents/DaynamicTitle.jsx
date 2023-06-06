import React from 'react';
import {Helmet} from "react-helmet";

const DaynamicTitle = ({children}) => {
    return (
        <Helmet>
            <title>FrameFusion | {children}</title>
        </Helmet>
    );
};

export default DaynamicTitle;