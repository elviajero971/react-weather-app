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