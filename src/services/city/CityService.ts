import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type IGetCityRequest from './IGetCityRequest'
import type { ICity } from '@/models/city/ICity'

const CITYCONTROLLER = '/city'

class CityService {
  async getCityAsync(request: IGetCityRequest): Promise<ICity[] | undefined> {
    try {
      const conf: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json'
        },
        params: request
      }

      const response: AxiosResponse = await axios.get(
        import.meta.env.VITE_MEMBER_API_URL + CITYCONTROLLER + '/get-city',
        conf
      )

      if (response.status == 200 && response.data.valid) return response.data.cities
      else return []
    } catch (error) {
      console.error('There is an error! => ', error)
      return []
    }
  }
}

export default new CityService()
