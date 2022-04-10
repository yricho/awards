import React from "react";
import { mount } from "enzyme";
import Layout from "../src/Components/Layout";

test("Layout Render", ()=>{
    const wrapper = mount(<Layout>Content</Layout>)
    const content = wrapper.find(".main-content")
    expect(content.text()).toBe("Content")
})