import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseTransformerService {
  /**
   * Transforms a successful response into a standardized format.
   * @param data The data to include in the response.
   * @param message An optional message to include.
   * @returns A standardized response object.
   */
  transformSuccessResponse<T>(data: T, message = 'Request successful') {
    return {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Transforms an error response into a standardized format.
   * @param error The error to include in the response.
   * @param message An optional message to include.
   * @returns A standardized error response object.
   */
  transformErrorResponse(error: any, message = 'An error occurred') {
    return {
      success: false,
      message,
      error: error?.message || error,
      timestamp: new Date().toISOString(),
    };
  }
}
