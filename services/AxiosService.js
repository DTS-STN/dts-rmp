import axios from 'axios'

class AxiosService {
  static insertEngagement(engagement) {
    return axios.post('/api/insertengagement', null, {
      params: {
        subject: engagement.subject,
        notes: engagement.notes,
        contactname: engagement.contactname,
        type: engagement.type
      }
    })
  }

  static getAllPocs() {
    return axios.get('/api/allengagements')
  }
}
export default AxiosService
