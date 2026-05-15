import React, { useEffect, useRef, useCallback } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const ANIMATION_DURATION = 300;

export interface InlineActionSheetProps {
  /** Controls visibility */
  isOpen: boolean;
  /** Called when the backdrop is pressed or the sheet is dismissed */
  onClose: () => void;
  /** Sheet content */
  children: React.ReactNode;
  /** Dismiss when pressing the backdrop (default: true) */
  closeOnBackdropPress?: boolean;
  /** Max height as a ratio of screen height (0–1). Default: 0.86 */
  heightRatio?: number;
}

/**
 * InlineActionSheet — a bottom sheet that renders in the normal view
 * hierarchy (no Modal) to avoid keyboard-related issues.
 *
 * Usage: place this component at the root level of your screen so that its
 * absolute-positioned overlay can cover the full screen. It uses
 * KeyboardAvoidingView internally so text inputs inside the sheet will be
 * pushed above the keyboard automatically.
 *
 * @example
 * // In your screen root:
 * <View style={{ flex: 1 }}>
 *   <ScreenContent />
 *   <InlineActionSheet isOpen={open} onClose={() => setOpen(false)}>
 *     <MySheetContent />
 *   </InlineActionSheet>
 * </View>
 */
export const InlineActionSheet: React.FC<InlineActionSheetProps> = ({
  isOpen,
  onClose,
  children,
  closeOnBackdropPress = true,
  heightRatio = 0.86,
}) => {
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  // Tracks whether we are fully hidden so we can use `display: none`
  // to remove the overlay from the hit-test tree when closed.
  const [hidden, setHidden] = React.useState(!isOpen);

  const animateIn = useCallback(() => {
    setHidden(false);
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateY, backdropOpacity]);

  const animateOut = useCallback(
    (onFinish?: () => void) => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: SCREEN_HEIGHT,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setHidden(true);
        onFinish?.();
      });
    },
    [translateY, backdropOpacity],
  );

  useEffect(() => {
    if (isOpen) {
      animateIn();
    } else {
      animateOut();
    }
  }, [isOpen, animateIn, animateOut]);

  const handleBackdropPress = useCallback(() => {
    if (!closeOnBackdropPress) return;
    animateOut(onClose);
  }, [closeOnBackdropPress, animateOut, onClose]);

  if (hidden) return null;

  return (
    <View style={styles.overlay} pointerEvents="box-none">
      {/* Backdrop */}
      <TouchableWithoutFeedback onPress={handleBackdropPress}>
        <Animated.View
          style={[styles.backdrop, { opacity: backdropOpacity }]}
        />
      </TouchableWithoutFeedback>

      <Animated.View
        renderToHardwareTextureAndroid
        collapsable={false}
        style={[
          styles.sheetWrapper,
          {
            maxHeight: SCREEN_HEIGHT * heightRatio,
            transform: [{ translateY }],
          },
        ]}
        pointerEvents="box-none"
      >
        {/* Top tap zone — closes the sheet when the handlebar area is tapped */}
        <TouchableWithoutFeedback onPress={() => animateOut(onClose)}>
          <View style={styles.topTapZone} />
        </TouchableWithoutFeedback>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  /** Full-screen container rendered in the normal view hierarchy */
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    elevation: 100,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  sheetWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  topTapZone: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    zIndex: 10,
  },
});
