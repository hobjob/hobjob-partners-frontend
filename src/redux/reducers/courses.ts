import {
	CoursesState,
	CoursesActions,
	CoursesActionTypes,
} from "../types/courses/ICourses";

const initialState: CoursesState = {
	courses: [],
	isLoadedCourses: false,
};

const courses = (
	state = initialState,
	action: CoursesActions
): CoursesState => {
	if (action.type === CoursesActionTypes.SET_COURSES) {
		return {
			...state,
			courses: action.payload,
			isLoadedCourses: true,
		};
	}

	return state;
};

export default courses;
