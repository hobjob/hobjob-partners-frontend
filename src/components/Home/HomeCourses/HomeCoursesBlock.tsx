import React from "react";

import {CourseGood} from "../../../models/ICourseGood";

interface HomeCoursesBlockProps extends CourseGood {
    partnerId: string;
}

const HomeCoursesBlock: React.FC<HomeCoursesBlockProps> = ({
    image,
    title,
    url,
    partnerId,
}) => {
    const [isCopy, setIsCopy] = React.useState<boolean>(false);

    const onClickCopy = () => {
        setIsCopy(true);

        setTimeout(() => {
            setIsCopy(false);
        }, 2000);

        navigator.clipboard.writeText(
            `${process.env.REACT_APP_DOMEN}/course/${url}?ref=${partnerId}`
        );
    };

    return (
        <div className="home-courses-block">
            <div
                className="home-courses-block-image"
                style={{
                    backgroundImage: `url('${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_768}')`,
                }}
            ></div>

            <div className="home-courses-block-text">
                <h3 className="home-courses-block-text__title">{title}</h3>

                {isCopy ? (
                    <button className="btn-small-round disabled home-courses-block-text__btn">
                        Скопировано
                    </button>
                ) : (
                    <button
                        className="btn-small-round home-courses-block-text__btn"
                        onClick={onClickCopy}
                    >
                        Скопировать реферальную ссылку
                    </button>
                )}
            </div>
        </div>
    );
};

export default HomeCoursesBlock;
