import { PartnerState, PartnerActions, PartnerActionTypes } from "../types/partner/IPartner";

const initialState: PartnerState = {
	partnerInfo: {
		_id: "",

		email: "",
		name: "",

		buy: {
			sum: 0,
			count: 0
		},
		subscribe: {
			sum: 0,
			count: 0
		},
	},


	isLoadedPartnerInfo: false,
};

const partner = (state = initialState, action: PartnerActions) => {
	if (action.type === PartnerActionTypes.SET_PARTNER_INFO) {
		return {
			...state,
			partnerInfo: action.payload,
			isLoadedPartnerInfo: true,
		};
	}

	return state;
};

export default partner;
