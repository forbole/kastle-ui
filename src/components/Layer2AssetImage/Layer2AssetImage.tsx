import React from "react";
import { AssetImage, ChainAssetImageProps } from "../AssetImage";

/**
 * @deprecated Round 5, 2026-09-26 — Nicole: too many image components.
 * `Layer2AssetImage`, `DualAssetImage`, and `TokenIcon` merged into one
 * `AssetImage` (`variant="single" | "chain" | "dual"`). Use
 * `<AssetImage variant="chain" .../>` in new code.
 *
 * Kept as a thin re-export, same name/prop shape, because kastle-mobile's
 * `kastle-ui-port` imports this exact component by relative path
 * (`components/kastle-ui-port/src/components/Layer2AssetImage`, confirmed
 * via `git grep` on kastle-mobile's `origin/main`) — deleting or renaming
 * it would break that port, not just this repo.
 */
export type Layer2AssetImageProps = ChainAssetImageProps;

/** @deprecated See `Layer2AssetImageProps` above — use `AssetImage variant="chain"` in new code. */
export const Layer2AssetImage: React.FC<Layer2AssetImageProps> = (props) => (
  <AssetImage variant="chain" {...props} />
);
