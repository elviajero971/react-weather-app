export const roundNumber = (number) => {
    return Math.round(number);
}

export const getIconPath = (icon) => {

    switch (icon) {
        case "01d":
            return "/icons/sun.png";
        case "02d":
            return "/icons/cloud.png";
        case "03d":
            return "/icons/cloud.png";
        case "04d":
            return "/icons/cloud.png";
        case "09d":
            return "/icons/rain.png";
        case "10d":
            return "/icons/rain.png";
        case "11d":
            return "/icons/storm.png";
        case "13d":
            return "/icons/snow.png";
        case "50d":
            return "/icons/fog.png";
        default:
            return "/icons/sun.png";
    }
}

export const getWindDirection = (degree) => {
    if (degree >= 337.5 || degree < 22.5) {
        return "N";
    } else if (degree >= 22.5 && degree < 67.5) {
        return "NE";
    } else if (degree >= 67.5 && degree < 112.5) {
        return "E";
    } else if (degree >= 112.5 && degree < 157.5) {
        return "SE";
    } else if (degree >= 157.5 && degree < 202.5) {
        return "S";
    } else if (degree >= 202.5 && degree < 247.5) {
        return "SW";
    } else if (degree >= 247.5 && degree < 292.5) {
        return "W";
    } else if (degree >= 292.5 && degree < 337.5) {
        return "NW";
    }
}