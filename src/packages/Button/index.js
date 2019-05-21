import { Button as Button_orig } from "../base/button";
import { withTheme } from "../Theme";

const Button = Button_orig; //withTheme(Button_orig, "Button");

export { Button };
export { KIND, SIZE, SHAPE } from "../base/button";
