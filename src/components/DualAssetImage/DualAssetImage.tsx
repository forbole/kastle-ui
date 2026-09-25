import React from "react";
import { AssetImage, DualAssetImageInnerProps } from "../AssetImage";

/**
 * @deprecated Round 5, 2026-09-26 — Nicole: too many image components.
 * `Layer2AssetImage`, `DualAssetImage`, and `TokenIcon` merged into one
 * `AssetImage` (`variant="single" | "chain" | "dual"`). Use
 * `<AssetImage variant="dual" .../>` in new code.
 *
 * Kept as a thin re-export, same name/prop shape, because kastle-mobile's
 * `kastle-ui-port` imports this exact component by relative path
 * (`components/kastle-ui-port/src/components/DualAssetImage`, and
 * `ActivityRow.tsx` imports `DualAssetImageProps` by name — both
 * confirmed via `git grep` on kastle-mobile's `origin/main`) — deleting or
 * renaming it would break that port, not just this repo. All the pixel
 * math (and the warning not to re-derive it from Figma exports) now lives
 * in `AssetImage.tsx`'s `DualVariant`, unchanged.
 */
export type DualAssetImageProps = DualAssetImageInnerProps;

/** @deprecated See `DualAssetImageProps` above — use `AssetImage variant="dual"` in new code. */
export const DualAssetImage: React.FC<DualAssetImageProps> = (props) => (
  <AssetImage variant="dual" {...props} />
);
