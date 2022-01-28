declare namespace Express {
  export interface Response {
     apiResponse?: import('../lib/ApiResponse').ApiResponse
  }
}