import { Draft } from 'immer'

export const TOGGLE_NAV_PANEL = '[ui] toggle nav'
export const NAV_ANIM_FININISHED = '[ui] nav anim finished'
export const NAV_ANIM_PROGRESS = '[ui] nav anim progress'

export type UiActions = {
    type:
        | typeof TOGGLE_NAV_PANEL
        | typeof NAV_ANIM_FININISHED
        | typeof NAV_ANIM_PROGRESS
    payload?: object
}

export type UiState = Readonly<{
    nav: 'opened' | 'closed' | 'progress'
    navToggle: 'open' | 'close'
}>
export const initUiState: UiState = {
    nav: 'closed',
    navToggle: 'close',
}

// export type UiState = Readonly<typeof initUiState>

export function uiReducer(
    state: Draft<UiState> = initUiState,
    action: UiActions
): UiState {
    switch (action.type) {
        case TOGGLE_NAV_PANEL: {
            if (state.navToggle === 'close') {
                state.navToggle = 'open'
            } else {
                state.navToggle = 'close'
            }
            break
        }
        case NAV_ANIM_FININISHED: {
            if (state.navToggle === 'open') {
                state.nav = 'opened'
            } else if (state.navToggle === 'close') {
                state.nav = 'closed'
            }
            break
        }
        case NAV_ANIM_PROGRESS: {
            state.nav = 'progress'
            break
        }

        default:
            return state
    }
}