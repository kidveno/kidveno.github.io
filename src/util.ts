export default {
  GetBaseUrl: function () {
    return window.location.protocol + '//' + window.location.host + '/' + window.location.pathname.split('/')[0]
  }
}
