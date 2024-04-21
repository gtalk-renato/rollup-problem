import type EGender from '@/enums/EGender'

export default interface ICreateMemberRequest {
  firstName: string
  lastName: string
  dateOfBirth: Date
  gender: EGender
  customGender: string | undefined
  eMail: string
  password: string
  cityId: string
  agreeWithTermsAndConditions: boolean
}
