import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type IGetStateRequest from './IGetStateRequest'
import type { IState } from '@/models/state/IState'

const STATECONTROLLER = '/state'

class StateService {
  async getStateAsync(request: IGetStateRequest): Promise<IState[] | undefined> {
    try {
      const conf: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json'
        },
        params: request
      }

      const response: AxiosResponse = await axios.get(
        import.meta.env.VITE_MEMBER_API_URL + STATECONTROLLER + '/get-state',
        conf
      )

      if (response.status == 200 && response.data.valid) return response.data.states
      else return []
    } catch (error) {
      console.error('There is an error! => ', error)
      return []
    }
  }
}

export default new StateService()
