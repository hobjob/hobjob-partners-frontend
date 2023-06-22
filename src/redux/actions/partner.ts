import { Dispatch } from "redux";

import $api from "../../http/";

import { PartnerActions, PartnerActionTypes } from "../types/partner/IPartner";

import { Partner } from "../../models/IPartner";

export const fetchPartnerInfo = () => {
	return async (dispatch: Dispatch<PartnerActions>) => {
		const response = await $api.get<Partner>("/partners/my/info");

		dispatch({
			type: PartnerActionTypes.SET_PARTNER_INFO,
			payload: response.data,
		});
	};
};