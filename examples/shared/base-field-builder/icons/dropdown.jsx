// Copyright 2017 Quip

import React from "react";
import SVG from "./svg.jsx";

export default class Icon extends React.Component {
    render() {
        return <SVG viewBox="0 0 14 14">
            <path d="M7,13.5c-0.2,0-0.4-0.1-0.5-0.2l-3-3c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0L7,11.6l2.5-2.5c0.3-0.3,0.8-0.3,1.1,0c0.3,0.3,0.3,0.8,0,1.1l-3,3C7.4,13.4,7.2,13.5,7,13.5z"/>
            <path d="M7.1,0.6c0.2,0,0.4,0.1,0.5,0.2l3,3c0.3,0.3,0.3,0.8,0,1.1c-0.3,0.3-0.8,0.3-1.1,0L7.1,2.5L4.6,5C4.3,5.3,3.8,5.3,3.5,5s-0.3-0.8,0-1.1l3-3C6.7,0.7,6.9,0.6,7.1,0.6z"/>
        </SVG>;
    }
}
