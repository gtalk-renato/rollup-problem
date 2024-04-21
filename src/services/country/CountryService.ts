import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type IGetCountryRequest from './IGetCountryRequest'
import type { ICountry } from '@/models/country/ICountry'

const COUNTRYCONTROLLER = '/country'

class CountryService {
  async getCountryAsync(request: IGetCountryRequest): Promise<ICountry[] | undefined> {
    try {
      const conf: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json'
        },
        params: request
      }

      const response: AxiosResponse = await axios.get(
        import.meta.env.VITE_MEMBER_API_URL + COUNTRYCONTROLLER + '/get-country',
        conf
      )

      if (response.status == 200 && response.data.valid) return response.data.countries
      else return []
    } catch (error) {
      console.error('There is an error! => ', error)
      return []
    }
  }
}

export default new CountryService()
