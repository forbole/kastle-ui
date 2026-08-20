import React, { useEffect, useRef, useCallback } from "react";
import {
  Animated,
  Dimensions,
  Keyboard,
  Modal,
  PanResponder,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const ANIMATION_DURATION = 300;
/** Drag past this many px, or flick faster than this, to dismiss. */
const DISMISS_DISTANCE = 120;
const DISMISS_VELOCITY = 0.7;
/** Ignore drags shorter than this so taps still reach the children. */
const DRAG_SLOP = 6;

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
  // PanResponder is created once; read onClose through a ref so a re-rendered
  // parent's newer callback still wins.
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
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

  // Drag-to-dismiss. PanResponder rather than react-native-gesture-handler:
  // it drives the same Animated.Value the open/close timings already use, so
  // the sheet stays on the native driver and the library stays dependency-free.
  const pan = useRef(
    PanResponder.create({
      // Claim only a clear downward drag — a horizontal swipe or a tap must
      // still reach the sheet's own content (lists, buttons, inputs).
      onMoveShouldSetPanResponder: (_e, g) =>
        g.dy > DRAG_SLOP && g.dy > Math.abs(g.dx) * 2,
      onPanResponderMove: (_e, g) => {
        // Downward only: dragging up must not lift the sheet off its anchor.
        if (g.dy > 0) translateY.setValue(g.dy);
      },
      onPanResponderRelease: (_e, g) => {
        if (g.dy > DISMISS_DISTANCE || g.vy > DISMISS_VELOCITY) {
          animateOut(onCloseRef.current);
          return;
        }
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          bounciness: 0,
        }).start();
      },
      // A cancelled gesture (call, notification shade) must not strand the
      // sheet mid-drag.
      onPanResponderTerminate: () => {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          bounciness: 0,
        }).start();
      },
    }),
  ).current;

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
        {...pan.panHandlers}
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
