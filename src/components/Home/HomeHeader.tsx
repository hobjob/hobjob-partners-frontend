import React from "react";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import Logo from "../../assets/images/logo.svg";

const HomeHeader: React.FC = () => {
    const {partnerInfo} = useTypedSelector(({partner}) => partner);

    return (
        <div className="home-header">
            <div className="home-header-logo">
                <img
                    src={Logo}
                    alt="HobJob Партнеры"
                    className="home-header-logo__image"
                />
            </div>

            <p className="home-header__name">{partnerInfo.name}</p>
        </div>
    );
};

export default HomeHeader;
