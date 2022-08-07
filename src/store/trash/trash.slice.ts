import {createSlice, PayloadAction, Dispatch} from '@reduxjs/toolkit'
import type {RootState} from '../../store'
import {TodaysRemoval, Trash} from "../../types/trash.type";
import {DataStatus} from "../../types/dataStatus.type";
import {getNextDayName} from "../../utils/date";
import {DateTime} from "luxon";
import {TMApi} from "../../api";

interface TrashState {
    list: Trash[],
    todaysRemoval?: TodaysRemoval,
    status: DataStatus
}

const initialState: TrashState = {
    list: [],
    todaysRemoval: undefined,
    status: DataStatus.Initial,
}

export const trashSlice = createSlice({
    name: 'trash',
    initialState,
    reducers: {
        fetchStart: (state: TrashState) => ({
            ...initialState,
            status: DataStatus.Fetching
        }),
        fetchSuccess: (state: TrashState, { payload }: PayloadAction<Trash[]>) => ({
            ...state,
            list: payload,
            todaysRemoval: getTodaysRemoval(payload),
            status: DataStatus.Success
        }),
        fetchError: (state) => ({
            ...state,
            status: DataStatus.Error
        })
    }
})

export const { fetchStart, fetchSuccess, fetchError } = trashSlice.actions

export const selectTodaysRemoval = (state: RootState) => state.trash.todaysRemoval
export const selectTrashDataStatus = (state: RootState) => state.trash.status

export default trashSlice.reducer

// Actions
export const fetchTrashes = () => async (dispatch: Dispatch) => {
    dispatch(fetchStart())
    try {
        await TMApi.get('/trash/list')
            .then((response) => {
                return dispatch(fetchSuccess(response.data))
            })
    }
    catch (e) {
        return dispatch(fetchError())
    }
}


const getTodaysRemoval = (trashList: Trash[]): TodaysRemoval | undefined => {
    const tomorrowsName = getNextDayName();
    const tomorrowsTrash =  trashList.find((trash) => trash.removalDays.includes(tomorrowsName));
    if (!tomorrowsTrash) return;

    const todaysRemoval = {
        ...tomorrowsTrash,
        hasAlreadyBeenRemoved: hasAlreadyBeenRemoved(tomorrowsTrash)
    };

    return todaysRemoval
}

const hasAlreadyBeenRemoved = (trash: Trash) => {
    const lastRemoval = DateTime.fromSQL(trash.lastRemoval);
    const timeSinceLastRemoval = Math.abs(lastRemoval.diffNow('hours').toObject().hours || 0);

    return timeSinceLastRemoval < 24;
}