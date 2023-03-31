import React from "react";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {HomeCoursesBlock, Loader} from "../../";

const HomeCourses: React.FC = () => {
    const {courses, isLoadedCourses} = useTypedSelector(({courses}) => courses);
    const {partnerInfo} = useTypedSelector(({partner}) => partner);

    return (
        <div className="home-courses">
            <h2 className="home-courses__title">
                Курсы с вашей реферальной ссылкой
            </h2>

            {isLoadedCourses ? (
                <div className="home-courses-blocks-wrapper">
                    {courses.map((course, index) => (
                        <HomeCoursesBlock
                            {...course}
                            key={`home-courses-block-${index}`}
                            partnerId={partnerInfo._id}
                        />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default HomeCourses;
