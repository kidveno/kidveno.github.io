export default {
  GetBaseUrl: function () {
    return window.location.protocol + '//' + window.location.host + '/' + window.location.pathname.split('/')[0]
  },
  onlyUnique: function (value: any, index: number, self: any) {
    return self.indexOf(value) === index
  }
}
