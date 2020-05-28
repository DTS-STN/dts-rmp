import axios from 'axios'

class AxiosService {
  static insertEngagement(engagement) {
    return axios.post(`/api/insertengagement`, null, {
      params: {
        fname: engagement.fname,
        lname: engagement.lname,
        email: engagement.email,
        message: engagement.message
      }
    })
  }

  static getAllPocs() {
    return axios.get(`/api/allengagements`)
  }
}
export default AxiosService
