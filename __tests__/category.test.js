import React from "react";
import { mount } from "enzyme";
import CategoryItems from "../src/Components/CategoryItems";

test("Category Render", () => {
    const item = {
        "id": "best-picture",
        "items": [
            {
                "title": "Nomadland",
                "photoUrL": "https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg",
                "id": "nomadland"
            },
            {
                "title": "The Trial of the Chicago 7",
                "photoUrL": "https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg",
                "id": "the-trial-of-the-chicago-7"
            },
            {
                "title": "Minari",
                "photoUrL": "https://variety.com/wp-content/uploads/2020/12/Minari.jpg",
                "id": "minari"
            },
            {
                "title": "Mank",
                "photoUrL": "https://variety.com/wp-content/uploads/2020/12/mank.jpg",
                "id": "mank"
            },
            {
                "title": "One Night in Miami",
                "photoUrL": "https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg",
                "id": "one-night-in-miami"
            }
        ],
        "title": "Best Picture"
    }
    const wrapper = mount(<CategoryItems item={item} />)
    const title = wrapper.find(".title-category")
    const itemClass = wrapper.find(".item-1")
    expect(title.text()).toBe("Best Picture")
    expect(itemClass.length).toBe(1)
})