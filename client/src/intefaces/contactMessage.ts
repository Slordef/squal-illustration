export interface ContactMessage {
  name: string,
  email: string,
  message: string,
  recaptcha: string
}

export interface ContactResponse {
  success: boolean,
  error: string
}
