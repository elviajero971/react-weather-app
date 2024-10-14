import sunIcon from './assets/icons/sun.png';
import cloudIcon from './assets/icons/cloud.png';
import rainIcon from './assets/icons/rain.png';
import stormIcon from './assets/icons/storm.png';
import snowIcon from './assets/icons/snow.png';
import fogIcon from './assets/icons/fog.png';


export const roundNumber = (number) => {
    return Math.round(number);
}

export const getIconPath = (icon) => {

    switch (icon) {
        case "01d":
            return sunIcon;
        case "02d":
            return cloudIcon;
        case "03d":
            return cloudIcon;
        case "04d":
            return cloudIcon;
        case "09d":
            return rainIcon;
        case "10d":
            return rainIcon;
        case "11d":
            return stormIcon;
        case "13d":
            return snowIcon;
        case "50d":
            return fogIcon;
        default:
            return sunIcon;
    }
}