import React from "react";
import {Navigate} from "react-router-dom";
import {Loader} from "../components";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {HomeHeader, HomeCourses, HomeStatistics} from "../components/";

const Home: React.FC = () => {
    const {isLoadedPartnerInfo} = useTypedSelector(({partner}) => partner);

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoadedPartnerInfo ? (
                    <section className="home">
                        <div className="container">
                            <div className="home-wrapper">
								<HomeHeader />

								<HomeStatistics />
								
								<HomeCourses />
                            </div>
                        </div>
                    </section>
                ) : (
                    <Loader />
                )
            ) : (
                <Navigate to="/go/login" />
            )}
        </>
    );
};

export default Home;
