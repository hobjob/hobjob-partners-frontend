import { CourseGood } from "../../../models/ICourseGood";

export interface CoursesState {
	courses: CourseGood[];
	isLoadedCourses: boolean;
}

export enum CoursesActionTypes {
	SET_COURSES = "SET_COURSES",
	SET_LOADED_COURSES = "SET_LOADED_COURSES",
}

interface setCoursesAction {
	type: CoursesActionTypes.SET_COURSES;
	payload: CourseGood[];
}

interface setLoadedCoursesAction {
	type: CoursesActionTypes.SET_LOADED_COURSES;
	payload: boolean;
}

export type CoursesActions = setCoursesAction | setLoadedCoursesAction