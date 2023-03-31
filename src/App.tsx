import React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { compose } from "redux";
import "moment/locale/ru";

import { useTypedSelector } from "./hooks/useTypedSelector";

import { fetchPartnerInfo } from "./redux/actions/partner";
import { fetchCategories } from "./redux/actions/categories";
import { fetchCourses } from "./redux/actions/courses";

import { Login, Home } from "./pages/";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
		YooMoneyCheckoutWidget?: any;
	}
}

const App: React.FC = () => {
	const dispatch = useDispatch();

	const { pathname } = useLocation();

	const { partnerInfo } = useTypedSelector(({ partner }) => partner);
	const { courses } = useTypedSelector(({ courses }) => courses);

	const categories = useTypedSelector(({ categories }) => categories.items);

	React.useEffect(() => {
		let cords: any = ["scrollX", "scrollY"];

		// Перед закрытием записываем в локалсторадж window.scrollX и window.scrollY как scrollX и scrollY
		window.addEventListener("unload", (e) =>
			cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
		);

		// Прокручиваем страницу к scrollX и scrollY из localStorage (либо 0,0 если там еще ничего нет)
		window.scroll(...cords.map((cord: any) => localStorage[cord]));

		if (partnerInfo._id == "" && localStorage.getItem("accessToken")) {
			dispatch(fetchPartnerInfo());
		}

		if (!Object.keys(categories).length) {
			dispatch(fetchCategories());
		}

		if (!courses.length) {
			dispatch(fetchCourses());
		}
	}, []);

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className="wrapper">
			<React.Suspense fallback={<></>}>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/go/login" element={<Login />} />

					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</React.Suspense>
		</div>
	);
};

export default App;
