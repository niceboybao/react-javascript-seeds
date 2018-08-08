import { createSelector } from 'reselect';

//data
//createSelector(...inputSelectors | [inputSelectors], resultFunc)
// const data = (state: any) => state.team1Reducer.getData;
const data = function() {
	return state.team1Reducer.getData;
};
export const dataSelector = createSelector(data, (data) => {
	return data;
});
//count
const count = () => state.team1Reducer.count;
export const countSelector = createSelector([ count ], (count) => {
	return count;
});

// export function dataSelector(state: any) {
//     debugger;
//     return state.team1Reducer.getData;
// }
//
// export function countSelector(state: any) {
//     debugger;
//     return state.team1Reducer.count as number;
// }
