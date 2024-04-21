import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type IGetMemberRequest from './IGetMemberRequest'
import type ICreateMemberRequest from './ICreateMemberRequest'
import type IUpdateMemberRequest from './IUpdateMemberRequest'
import type { IMember } from '@/models/member/IMember'
import type IGetMemberExistsRequest from './IGetMemberExistsRequest'
import type ISignInMemberRequest from './ISignInMemberRequest'

const MEMBERCONTROLLER = '/member'

class MemberService {
  async getMemberAsync(request: IGetMemberRequest): Promise<IMember[]> {
    try {
      const conf: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json'
        },
        params: request
      }

      const response: AxiosResponse = await axios.get(
        import.meta.env.VITE_MEMBER_API_URL + MEMBERCONTROLLER + '/get-member',
        conf
      )

      if (response.status == 200 && response.data.valid) return response.data.members
      else return []
    } catch (error) {
      console.error('There is an error! => ', error)
      return []
    }
  }

  async updateMemberAsync(request: IUpdateMemberRequest): Promise<boolean> {
    try {
      const conf: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const response: AxiosResponse = await axios.put(
        import.meta.env.VITE_MEMBER_API_URL + MEMBERCONTROLLER + '/update-member',
        request,
        conf
      )

      if (response.status == 200 && response.data.valid) return true
      else return false
    } catch (error) {
      console.error('There is an error! => ', error)
      return false
    }
  }

  async createMemberAsync(request: ICreateMemberRequest): Promise<boolean> {
    try {
      const conf: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const response: AxiosResponse = await axios.post(
        import.meta.env.VITE_MEMBER_API_URL + MEMBERCONTROLLER + '/create-member',
        request,
        conf
      )

      if (response.status == 200 && response.data.valid) return true
      else return false
    } catch (error) {
      console.error('There is an error! => ', error)
      return false
    }
  }

  async getMemberExistsAsync(request: IGetMemberExistsRequest): Promise<boolean> {
    try {
      const conf: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json'
        },
        params: request
      }

      const response: AxiosResponse = await axios.get(
        import.meta.env.VITE_MEMBER_API_URL + MEMBERCONTROLLER + '/get-member-exists',
        conf
      )

      if (response.status == 200 && response.data.valid) return response.data.exists
      else return false
    } catch (error) {
      console.error('There is an error! => ', error)
      return false
    }
  }

  async signInMemberAsync(request: ISignInMemberRequest): Promise<boolean> {
    try {
      const conf: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const response: AxiosResponse = await axios.post(
        import.meta.env.VITE_MEMBER_API_URL + MEMBERCONTROLLER + '/sign-in-member',
        request,
        conf
      )

      if (response.status == 200) {
        const jwtToken = response.data as string
        localStorage.setItem('rankiei-jwtToken', jwtToken)
        return true
      }

      return false
    } catch (error) {
      console.error('There is an error! => ', error)
      return false
    }
  }

  async signOutMemberAsync(): Promise<boolean> {
    try {
      const jwtToken = localStorage.getItem('rankiei-jwtToken')
      if (jwtToken) {
        localStorage.removeItem('rankiei-jwtToken')
      }
      return true
    } catch (error) {
      console.error('There is an error! => ', error)
      return false
    }
  }
}

export default new MemberService()
