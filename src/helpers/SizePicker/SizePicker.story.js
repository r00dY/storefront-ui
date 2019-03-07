import React from "react";
import { storiesOf } from "@storybook/react";
import SizePicker from "./SizePicker";
import fonts from "../../fonts.config";

const SizePickerSizes1 = [
    { value: "size-s", label: "S", available: true, tooltip: "Small" },
    { value: "size-m", label: "M", available: true, tooltip: "Medium" },
    { value: "size-l", label: "L", available: true, tooltip: "Large" },
    { value: "size-xl", label: "XL", available: false, tooltip: "Extra Large" },
    { value: "size-xxl", label: "XXL", available: false, tooltip: "XX Large" },
    { value: "size-3xl", label: "3XL", available: true, tooltip: "3X Large" }
];
const SizePickerSizes2 = [
    { value: "size-s", label: "S", available: true, tooltip: "Small" },
    { value: "size-m", label: "M", available: true, tooltip: "Medium" },
    { value: "size-l", label: "L", available: true, tooltip: "Large" }
];
const SizePickerSizes3 = [
    { value: "size-382", label: "38 2/3", available: true, tooltip: "38 2/3" },
    { value: "size-39", label: "39", available: true, tooltip: "39" },
    { value: "size-401", label: "40 1/3", available: true, tooltip: "40 1/3" },
    { value: "size-41", label: "41", available: true, tooltip: "41" },
    { value: "size-412", label: "41 2/3", available: true, tooltip: "41 2/3" },
    { value: "size-42", label: "42", available: true, tooltip: "42" },
    { value: "size-421", label: "42 1/3", available: true, tooltip: "42 1/3" },
    { value: "size-43", label: "43", available: true, tooltip: "43" },
    { value: "size-432", label: "43 2/3", available: true, tooltip: "43 2/3" },
    { value: "size-44", label: "44", available: true, tooltip: "44" },
    { value: "size-441", label: "44 1/3", available: true, tooltip: "44 1/3" }
];
const SizePickerSizes4 = [
    { value: "size-382", label: "38 2/3", available: true, tooltip: "38 2/3" },
    { value: "size-39", label: "39", available: true, tooltip: "39" },
    { value: "size-401", label: "40 1/3", available: true, tooltip: "40 1/3" },
    { value: "size-41", label: "41", available: true, tooltip: "41" },
    { value: "size-412", label: "41 2/3", available: false, tooltip: "41 2/3" },
    { value: "size-42", label: "42", available: false, tooltip: "42" },
    { value: "size-421", label: "42 1/3", available: true, tooltip: "42 1/3" },
    { value: "size-43", label: "43", available: false, tooltip: "43" },
    { value: "size-432", label: "43 2/3", available: true, tooltip: "43 2/3" },
    { value: "size-44", label: "44", available: false, tooltip: "44" },
    { value: "size-441", label: "44 1/3", available: false, tooltip: "44 1/3" }
];
const SizePickerSizes5 = [
    { value: "size-6", label: "6", available: true },
    { value: "size-6.5", label: "6.5", available: true },
    { value: "size-7", label: "7", available: true },
    { value: "size-7.5", label: "7.5", available: true },
    { value: "size-8", label: "8", available: true },
    { value: "size-8.5", label: "8.5", available: true },
    { value: "size-9", label: "9", available: true },
    { value: "size-9.5", label: "9.5", available: true },
    { value: "size-10", label: "10", available: true },
    { value: "size-10.5", label: "10.5", available: true },
    { value: "size-11", label: "11", available: true },
    { value: "size-11.5", label: "11.5", available: true },
    { value: "size-12", label: "12", available: true },
    { value: "size-13", label: "13", available: true },
    { value: "size-14", label: "14", available: true }
];
const SizePicker1 = (
    <SizePicker
        sizes={SizePickerSizes1}
        name={"SizePicker1"}
        font={fonts.COS.text2}
    />
);
const SizePicker5 = (
    <SizePicker
        sizes={SizePickerSizes5}
        name={"SizePicker5"}
        font={fonts.NIKE.text3}
    />
);
storiesOf("SizePicker", module).add("default", () => <div>{SizePicker1}</div>);
storiesOf("SizePicker", module).add("short list", () => (
    <div>
        <SizePicker
            sizes={SizePickerSizes2}
            name={"SizePicker2"}
            font={fonts.COS.text2}
        />
    </div>
));
storiesOf("SizePicker", module).add("long list", () => (
    <div>
        <SizePicker
            sizes={SizePickerSizes3}
            name={"SizePicker3"}
            font={fonts.COS.text2}
        />
    </div>
));
storiesOf("SizePicker", module).add("long with disabled", () => (
    <div>
        <SizePicker
            sizes={SizePickerSizes4}
            name={"SizePicker4"}
            font={fonts.COS.text2}
        />
    </div>
));
storiesOf("SizePicker", module).add("nike", () => <div>{SizePicker5}</div>);

export { SizePicker1, SizePicker5 };
