import { useMediaQuery } from "react-responsive"

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1180 });
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1179 });
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 640 });
    return isMobile ? children : null
}
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null
}

const IsDesktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 1180 });
    return isDesktop ? true : false;
}

const IsTablet = () => {
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1179 });
    return isTablet ? true : false;
}

const IsMobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 640 });
    return isMobile ? true : false;
}

export { Desktop, Tablet, Mobile, Default, IsDesktop, IsTablet, IsMobile };