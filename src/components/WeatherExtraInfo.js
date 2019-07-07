import React from "react";

const WeatherExtraInfo = (props) => {
    const {humidity,wind} = props;

    return (
    <div>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} wind`}</span>
        {/* template string */}
    </div>);
};

export default WeatherExtraInfo;
