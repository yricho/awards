import React from "react"
import { mount } from "enzyme"
import CardItem, { CardList } from "../src/Components/common/Card"

test('CardItem Render', () => {
    const item = {
        "title": "Sacha Baron Cohen",
        "photoUrL": "https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg"
    }
    const wrapper = mount(<CardItem item={item} selected />)
    const image = wrapper.find('.image')
    const title = wrapper.find('.title')
    const bgClass = wrapper.find('.bg-green-persia')
    expect(image.prop("src")).toEqual(item.photoUrL)
    expect(title.text()).toBe('Sacha Baron Cohen')
    expect(bgClass.length).toBe(1)
})


test('CardList Render', () => {
    const item = {
        "title": "Sacha Baron Cohen",
        "photoUrL": "https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg",
        "categoryName": "Best Supporting Actor"
    }
    const wrapper = mount(<CardList item={item} />)
    const image = wrapper.find('.image')
    const title = wrapper.find('.title')
    const category = wrapper.find('.category-name')
    expect(image.prop("src")).toEqual(item.photoUrL)
    expect(title.text()).toBe('Sacha Baron Cohen')
    expect(category.text()).toBe('Best Supporting Actor')
})


// test('toggleDone complete and incomplete todo', () => {
//     const startState = [{ id: 1, done: false, text: "Buy Milk" }]
//     const finState = toggleDone(startState, 1)
//     expect(finState).toEqual([{
//         id: 1,
//         done: true,
//         text: "Buy Milk"
//     }])
// })

