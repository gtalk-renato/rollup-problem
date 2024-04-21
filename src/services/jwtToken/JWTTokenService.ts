import VueJwtDecode from 'vue-jwt-decode'

class JWTTokenService {
  getMemberId(): string | undefined {
    try {
      const jwtToken = localStorage.getItem('rankiei-jwtToken')
      if (!jwtToken) return undefined

      const decoded = VueJwtDecode.decode(jwtToken)

      return decoded['member.id']
    } catch (error) {
      console.error('There is an error! => ', error)
      return undefined
    }
  }

  getMemberEMail(): string | undefined {
    try {
      const jwtToken = localStorage.getItem('rankiei-jwtToken')
      if (!jwtToken) return

      const decoded = VueJwtDecode.decode(jwtToken)

      return decoded['member.email']
    } catch (error) {
      console.error('There is an error! => ', error)
      return undefined
    }
  }

  getMemberFirstName(): string | undefined {
    try {
      const jwtToken = localStorage.getItem('rankiei-jwtToken')
      if (!jwtToken) return undefined

      const decoded = VueJwtDecode.decode(jwtToken)

      return decoded['member.firstName']
    } catch (error) {
      console.error('There is an error! => ', error)
      return undefined
    }
  }
}

export default new JWTTokenService()
