export const updateRouterUrl = (query: any): void => {
    const _query = { ...query }
    for (const prop in _query) {
      if (Object.prototype.hasOwnProperty.call(query, prop) && !_query[prop]) {
        delete _query[prop]
      }
    }
    let params = new URLSearchParams(_query).toString()
    if (!params.startsWith('?')) {
      params = '?' + params
    }
    if (params == '?') {
      params = ''
    }
    window.history.pushState('', '', window.location.href.split('?')[0] + params)
}