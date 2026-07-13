import { Ratelimit } from "@upstash/ratelimit";
import { redis } from "./redis";

export const forgotPasswordLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "15 m"),
});