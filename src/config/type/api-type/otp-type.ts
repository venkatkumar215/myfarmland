export interface SendOtpPayload {
  mobile: string;
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
}
