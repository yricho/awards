import React from "react";
import { mount } from "enzyme";
import Modal from "../src/Components/common/Modal";

test("Modal Render", () => {
    const wrapper = mount(
        <Modal isShow={true} title="Selected Nominee">
            Modal Content
        </Modal>
    )
    const title = wrapper.find(".title")
    const content = wrapper.find(".content")
    expect(title.text()).toBe("Selected Nominee")
    expect(content.text()).toBe("Modal Content")
})