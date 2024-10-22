export interface BaseState {
  isPending: boolean,
  errorMessage: string | null
}

export const initialBaseState = () => ({isPending: false, errorMessage: null});

export const pendingState = () => ({isPending: true, errorMessage: null});

export const errorState = (errorMessage: string) => ({isPending: false, errorMessage});
