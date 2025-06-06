import { z } from "zod";
import ERROR_CONSTANTS from "../config/constants/error-constant";

export const mobileSchema = z.object({
  mobileNumber: z
    .string()
    .min(10, ERROR_CONSTANTS.MOBILE_NUMBER_VALIDATIDATION.MOBILE_NUMBER_LENGTH)
    .max(10, ERROR_CONSTANTS.MOBILE_NUMBER_VALIDATIDATION.MOBILE_NUMBER_LENGTH)
    .regex(
      /^[6-9]\d{9}$/,
      ERROR_CONSTANTS.MOBILE_NUMBER_VALIDATIDATION.INVALID_MOBILE_NUMBER
    ),
});
