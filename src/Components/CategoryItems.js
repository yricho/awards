import { useState } from "react";
import PropTypes from "prop-types";
import CardItem from "./common/Card";

const CategoryItems = ({ item, callBack }) => {
    const { id, items, title } = item;
    const [selectItem, setSelectItem] = useState({});

    const handleSelectItem = (item) => {
        const selectItem = {
            ...item,
            categoryId: id,
            categoryName: title
        }
        const dataStorage = JSON.parse(localStorage.getItem("selected"));
        if (!dataStorage) {
            let storage = [];
            storage.push(selectItem);
            callBack(storage);
            localStorage.setItem("selected", JSON.stringify(storage));
        } else {
            let storage = JSON.parse(localStorage.getItem("selected"));
            let newItems = storage.filter(item => item.categoryId !== selectItem.categoryId);
            newItems.push(selectItem);
            callBack(newItems);
            localStorage.setItem("selected", JSON.stringify(newItems));
        }
        setSelectItem(selectItem);
    }

    return (
        <div className="my-8">
            <h2 className="text-2xl font-medium p-2 bg-gray-200">
                {title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    items.map((item, index) =>
                        <div key={index}>
                            <CardItem
                                selected={item.id === selectItem.id}
                                item={item}
                                onClick={item => handleSelectItem(item)} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

CategoryItems.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        items: PropTypes.array,
        title: PropTypes.string
    }),
    callBack: PropTypes.func
}

export default CategoryItems;