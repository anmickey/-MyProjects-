class APIError extends Error {
  constructor(public status: number, public mess: string) {
    super();
    this.message = mess;
    this.status = status;
  }

  static badRequest(mess: string) {
    return new APIError(400, mess);
  }

  static unauthorized(mess: string) {
    return new APIError(401, mess);
  }

  static forbidden(mess: string) {
    return new APIError(403, mess);
  }

  static notFound(mess: string) {
    return new APIError(404, mess);
  }

  static methodNotAllowed(mess: string) {
    return new APIError(405, mess);
  }
}

export default APIError;
