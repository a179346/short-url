export class ApiResponse {
  public readonly statusCode: number;
  public readonly data: any;

  constructor (statusCode: number, data: any) {
    this.statusCode = statusCode;
    this.data = data;
  }
}