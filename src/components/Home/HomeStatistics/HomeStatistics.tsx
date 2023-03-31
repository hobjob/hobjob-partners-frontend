import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {HomeStatisticsBlock} from "../../";

const HomeStatistics: React.FC = () => {
    const {
        partnerInfo: {buy, subscribe},
    } = useTypedSelector(({partner}) => partner);

    return (
        <div className="home-statistics">
            <HomeStatisticsBlock
                subtitle="Продажа курсов (навсегда)"
                title={`${buy.sum}₽`}
                count={`Кол-во продаж: ${buy.count}`}
            />

            <HomeStatisticsBlock
                subtitle="Продажа подписки"
                title={`${subscribe.sum}₽`}
                count={`Кол-во продаж: ${subscribe.count}`}
            />
        </div>
    );
};

export default HomeStatistics;
