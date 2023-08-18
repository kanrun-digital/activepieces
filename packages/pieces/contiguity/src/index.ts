
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { sendSMS } from "./lib/actions/send-sms";

export const contigAuth = PieceAuth.SecretText({
  displayName: "API Key",
  required: true,
  description: "API key acquired from your Contiguity settings"
})

export const contiguity = createPiece({
  displayName: "Contiguity",
  auth: contigAuth,
  minimumSupportedRelease: '0.7.1',
  logoUrl: '',
  authors: ['Owlcept'],
  actions: [sendSMS],
  triggers: [],
});
