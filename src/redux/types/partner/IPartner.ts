import { Partner } from "../../../models/IPartner";

export interface PartnerState {
	partnerInfo: Partner;

	isLoadedPartnerInfo: boolean;
}

export enum PartnerActionTypes {
	SET_PARTNER_INFO = "SET_PARTNER_INFO",
}

interface setPartnerInfo {
	type: PartnerActionTypes.SET_PARTNER_INFO;
	payload: Partner;
}

export type PartnerActions =
	| setPartnerInfo
