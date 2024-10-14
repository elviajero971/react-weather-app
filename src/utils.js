export const roundNumber = (number) => {
    return Math.round(number);
}

export const getIconPath = (icon) => {
    // Using import.meta.env.BASE_URL to dynamically set the base URL in both environments
    const baseIconPath = `${import.meta.env.BASE_URL}icons/`;

    switch (icon) {
        case "01d":
            return `${baseIconPath}sun.png`;
        case "02d":
            return `${baseIconPath}cloud.png`;
        case "03d":
            return `${baseIconPath}cloud.png`;
        case "04d":
            return `${baseIconPath}cloud.png`;
        case "09d":
            return `${baseIconPath}rain.png`;
        case "10d":
            return `${baseIconPath}rain.png`;
        case "11d":
            return `${baseIconPath}storm.png`;
        case "13d":
            return `${baseIconPath}snow.png`;
        case "50d":
            return `${baseIconPath}fog.png`;
        default:
            return `${baseIconPath}sun.png`;
    }
};