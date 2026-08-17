import React, { useEffect, useRef, useCallback } from "react";
import {
  Animated,
  Dimensions,
  Keyboard,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const ANIMATION_DURATION = 300;

export interface ActionSheetProps {
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
  /**
   * Fixed gap (in px) to leave between the top of the screen and the top of
   * the sheet, giving `maxHeight = SCREEN_HEIGHT - topInset`.
   *
   * Use this instead of `heightRatio` when the sheet should expose the same
   * amount of backdrop on every device, rather than a percentage that shrinks
   * on small screens.
   *
   * ⚠️ Takes precedence: when both `topInset` and `heightRatio` are provided,
   * `topInset` wins and `heightRatio` is ignored.
   */
  topInset?: number;
}

export const ActionSheet: React.FC<ActionSheetProps> = ({
  isOpen,
  onClose,
  children,
  closeOnBackdropPress = true,
  heightRatio = 0.86,
  topInset,
}) => {
  const maxHeight =
    topInset !== undefined ? SCREEN_HEIGHT - topInset : SCREEN_HEIGHT * heightRatio;
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  const animateIn = useCallback(() => {
    Keyboard.dismiss();
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
      ]).start(() => onFinish?.());
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

  const handleClose = useCallback(() => {
    if (!closeOnBackdropPress) return;
    animateOut(onClose);
  }, [closeOnBackdropPress, animateOut, onClose]);

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={() => animateOut(onClose)}
    >
      {/* Backdrop */}
      <TouchableWithoutFeedback onPress={handleClose}>
        <Animated.View
          style={[styles.backdrop, { opacity: backdropOpacity }]}
        />
      </TouchableWithoutFeedback>

      {/* Sheet */}
      <Animated.View
        renderToHardwareTextureAndroid
        collapsable={false}
        style={[styles.sheetWrapper, { maxHeight, transform: [{ translateY }] }]}
        pointerEvents="box-none"
      >
        {/* Top tap zone — tapping the handlebar area closes the sheet */}
        <TouchableWithoutFeedback onPress={() => animateOut(onClose)}>
          <View style={styles.topTapZone} />
        </TouchableWithoutFeedback>
        {children}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
