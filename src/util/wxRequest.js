import wepy from 'wepy'
import tip from './util/tip'

const wxRequest = async(params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  let res = await wepy.request({
    url: url,
    method: params.method || 'POST',
    data: data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  tip.loaded()
  return res
}
module.exports = {
  wxRequest
}
