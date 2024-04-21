import type { IState } from '../state/IState'

export type ICity = {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date | undefined
  stateId: string
  state: IState | undefined
}
