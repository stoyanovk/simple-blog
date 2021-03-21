module.exports = class HttpSender {
  constructor(response) {
    this._response = response
  }

  respondSuccess({ data, status = 200 }) {
    this._response.status(status)
    this._response.json(data)
  }

  respondFailure(error) {
    const { code, ...rest } = error
    this._response.status(code)
    this._response.json(rest)
  }
}
