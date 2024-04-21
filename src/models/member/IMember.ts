import type EGender from '@/enums/EGender'
import type { ICity } from '../city/ICity'
import type { IProfile } from '../profile/IProfile'

export type IMember = {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  gender: EGender
  customGender: string | undefined
  eMail: string
  password: string
  createdAt: Date
  updatedAt: Date | undefined
  cityId: string | undefined
  city: ICity | undefined
  agreeWithTermsAndConditions: boolean
  address: string | undefined
  postCode: string | undefined
  phoneNumber: string | undefined
  profile: IProfile | undefined
}
