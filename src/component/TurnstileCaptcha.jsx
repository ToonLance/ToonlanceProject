"use client";

import { Turnstile } from "@marsidev/react-turnstile";

export default function TurnstileCaptcha({
  onSuccess,
})
 {
    console.log(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
      onSuccess={onSuccess}
    />
  );
}