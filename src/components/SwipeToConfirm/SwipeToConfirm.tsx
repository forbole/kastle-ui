import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import RnSwipeButton from "rn-swipe-button/src/components/SwipeButton";
import { ArrowRight } from "lucide-react-native";
import { primary, background, border, typography } from "@/config/theme";

export interface SwipeToConfirmRef {
  reset: () => void;
}

export interface SwipeToConfirmProps {
  onConfirm: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  title?: string;
}

export const SwipeToConfirm = forwardRef<
  SwipeToConfirmRef,
  SwipeToConfirmProps
>(({ onConfirm, isDisabled = false, isLoading = false, title = "Swipe to confirm" }, ref) => {
  const resetRef = useRef<(() => void) | null>(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      resetRef.current?.();
    },
  }));

  return (
    <View style={[styles.wrapper, (isDisabled || isLoading) && styles.wrapperDisabled]}>
      {/* Loading state */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={typography.t900} />
        </View>
      ) : (
        <RnSwipeButton
          containerStyles={styles.container}
          disableResetOnTap
          height={52}
          onSwipeSuccess={onConfirm}
          railBackgroundColor={background.bg50}
          railBorderColor={border.b200}
          railFillBackgroundColor={primary.p500}
          railFillBorderColor={primary.p500}
          swipeSuccessThreshold={95}
          thumbIconBackgroundColor={primary.p500}
          thumbIconBorderColor={primary.p500}
          thumbIconComponent={() => (
            <ArrowRight color={typography.t900} size={22} />
          )}
          thumbIconWidth={72}
          title={title}
          titleColor={typography.t900}
          titleFontSize={18}
          forceReset={(forceReset) => {
            resetRef.current = forceReset;
          }}
        />
      )}
      {/* Overlay to block all touch/gesture events when disabled */}
      {isDisabled && <View style={styles.disabledOverlay} />}
    </View>
  );
});

SwipeToConfirm.displayName = "SwipeToConfirm";

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  wrapperDisabled: {
    opacity: 0.5,
  },
  container: {
    margin: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  disabledOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  loadingContainer: {
    height: 52,
    borderRadius: 9999,
    backgroundColor: primary.p500, // #00C4E7
    alignItems: "center",
    justifyContent: "center",
  },
});
