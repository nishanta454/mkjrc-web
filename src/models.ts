export class ContactResponse {
  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
  status: number;
  message: string;
}

export class ContactRequest {
  constructor(name: string, email: string, mobile: string, message: string) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.message = message;
  }
  name: string;
  email: string;
  mobile: string;
  message: string;
}
