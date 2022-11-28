import { NetworkStatusCode } from "@/app/network/domain/data/NetworkStatusCode"
import { BaseError, DataErrorType, ErrorType } from "./BaseError"

export default class Exception extends BaseError {
  readonly statusCode: NetworkStatusCode

  constructor(
    statusCode: NetworkStatusCode,
    errors?: ErrorType | ErrorType[],
    warnings?: ErrorType | ErrorType[]
  ) {
    super(errors, warnings)
    this.name = "Exception"
    this.statusCode = statusCode
    Object.setPrototypeOf(this, Exception.prototype)
  }
}