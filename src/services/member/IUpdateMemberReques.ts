import type EGender from '@/enums/EGender'

export default interface IUpdateMemberRequest {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  gender: EGender
  customGender: string | undefined
  eMail: string
  password: string
  cityId: string
  agreeWithTermsAndConditions: boolean
  address: string | undefined
  postCode: string | undefined
  phoneNumber: string | undefined
}
