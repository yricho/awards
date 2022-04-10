import React from "react";
import { mount } from "enzyme";
import { Footer, Nav } from "../src/Components/common";

test("Nav-Footer Render", () => {
    const wrapperNav = mount(<Nav>Awards</Nav>)
    const wrapperFooter = mount(<Footer />)
    const nav = wrapperNav.find(".nav")
    const footer = wrapperFooter.find(".footer")
    expect(nav.text()).toBe("Awards")
    expect(footer.text()).toBe("© Awards 2022")
})