import React from "react";
import { mount } from "enzyme";
import Button from "../src/Components/common/Button";

test("Button Render", () => {
    const wrapper = mount(<Button>Submit</Button>)
    const button = wrapper.find(".button")
    expect(button.text()).toBe("Submit")
})