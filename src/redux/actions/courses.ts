import { Dispatch } from "redux";

import $api from "../../http/";

import {
	CoursesActions,
	CoursesActionTypes,
} from "../types/courses/ICourses";

import { CourseGood } from "../../models/ICourseGood";

export const fetchCourses = () => {
	return async (dispatch: Dispatch<CoursesActions>) => {
		const { data } = await $api.get<CourseGood[]>("/courses");

		dispatch({
			type: CoursesActionTypes.SET_COURSES,
			payload: data,
		});
	};
};