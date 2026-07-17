/**
 * "How a Vault works?" explainer — shared by the create-amount step and the
 * intro screen. Copy + emphasis ranges pulled from Figma 12824:656344: the
 * Step headings (and "Normal:" / "Theft:") are white semibold, the body is the
 * muted description colour.
 */
export const HOW_VAULT_WORKS = {
  title: "How a Vault works?",
  descriptionRich: [
    {
      text: "A Vault locks your KAS behind a time-delay you choose. Anyone who tries to move it — even with your phone in hand — has to wait out that delay. You can withdraw anytime during or after the delay; the external recovery address you set is the only place funds can go. The delay is enforced on Kaspa itself, so it works even if you miss the notification. Kastle never holds your keys or your funds.\n\n\n",
    },
    { text: "Step 1: Set up your vault\n", emphasis: true },
    {
      text: "Choose how much KAS to protect, how long the delay is (e.g. 3 days), and an external recovery address — an external key you control on a different device. All locked in; can't change later without closing the vault.\n\n\n",
    },
    { text: "Step 2: Funds are protected\n", emphasis: true },
    {
      text: "Your KAS is now in the vault. Anyone trying to move it — including a thief with your seed — has to wait out the delay and send to your external recovery address only.\n\n\n",
    },
    { text: "Step 3: Withdraw or respond to theft\nNormal: ", emphasis: true },
    {
      text: "After the delay, withdraw anytime. Funds go to your recovery address automatically.\n",
    },
    { text: "Theft: ", emphasis: true },
    {
      text: "A thief's withdrawal waits the same delay. You get a notification. Tap 'Withdraw now', and funds go straight to your recovery address (only you can access). The thief can't redirect or stop it.",
    },
  ],
};
