import React from "react";

interface HomeStatisticsBlockProps {
    subtitle: string;
    title: string;
    count: string;
}

const HomeStatisticsBlock: React.FC<HomeStatisticsBlockProps> = ({
    subtitle,
    title,
    count,
}) => {
    return (
        <div className="home-statistics-block">
            <p className="home-statistics-block__subtitle">{subtitle}</p>
            <h2 className="home-statistics-block__title">{title}</h2>
            <p className="home-statistics-block__count">{count}</p>
        </div>
    );
};

export default HomeStatisticsBlock;
