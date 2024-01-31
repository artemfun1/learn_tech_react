import { hideLoader, showLoader } from "./actions";
import { CREATE_POST } from "./types";

const spam = ["php", "spam"];

export function spamWordsMiddlewere({ dispatch }) {
	return function (next) {
		return function (action) {
			if (action.type === CREATE_POST) {
				const found = spam.filter(w => action.payload.title.includes(w));

				if (found.length) {
					dispatch(showLoader());
					return setTimeout(() => {
						dispatch(hideLoader())
					}, 1000);
				}
			}
			return next(action);
		};
	};
}
