import { registerRootComponent } from "expo";

// 直接使用 AppDemo 作為主要 App
import App from "./AppDemo";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
