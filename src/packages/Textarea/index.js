// export { default as StatefulInput } from "../base/input";
// export { default as StatefulContainer } from "./stateful-container.js";
// export { default as Input } from "./input.js";
// export { default as BaseInput } from "./base-input.js";
// export { default as MaskedInput } from "./masked-input.js";
// // Styled elements
// export {
//     Root as StyledRoot,
//     InputEnhancer as StyledInputEnhancer,
//     InputEnhancer as StyledStartEnhancer,
//     InputEnhancer as StyledEndEnhancer,
//     InputContainer as StyledInputContainer,
//     Input as StyledInput
// } from "./styled-components.js";
//
// export {
//     STATE_CHANGE_TYPE,
//     ADJOINED,
//     SIZE,
//     CUSTOM_INPUT_TYPE
// } from "./constants.js";
// export * from "./types.js";
//
// export { Textarea } from "../base/textarea";
// export { StatefulTextarea } from "../base/textarea";

import { withTheme } from "../Theme";

import { Textarea as Textarea_orig } from "../base/textarea";
import { StatefulTextarea as StatefulTextarea_orig } from "../base/textarea";

const Textarea = withTheme(Textarea_orig, "Textarea");
const StatefulTextarea = withTheme(StatefulTextarea_orig, "Textarea");

export { StatefulTextarea, Textarea };
