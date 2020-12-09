export default {
  /**
   * Returns the windows.locations base url
   */
  GetBaseUrl: function () {
    return window.location.protocol + '//' + window.location.host + '/' + window.location.pathname.split('/')[0]
  },
  /**
   * Returns unique values in an array
   * @param value
   * @param index
   * @param self
   */
  onlyUnique: (value: any, index: number, self: any) => {
    return self.indexOf(value) === index
  }
}
