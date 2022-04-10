import React from 'react';
import PropTypes from "prop-types";
import Button from './Button';

const CardItem = ({ item, selected, onClick }) => {
  const { title, photoUrL } = item;
  return (
    <div className={`${selected && 'bg-green-persia border-2 border-gray-400'} hover:text-silver hover:bg-keppel relative border shadow rounded-lg h-full`}>
      <h3 className={`title ${selected ? 'font-normal' : 'font-light'} mx-8 my-2 text-center text-lg`}>
        {title}
      </h3>
      <img
        className='image mb-16 mx-auto bg-gray-500 rounded-md shadow rounded-full w-32 h-32 object-cover object-center'
        src={photoUrL}
        alt={title} />
      <div className='absolute bottom-2' style={{ left: '50%', transform: 'translateX(-50%)' }}>
        <Button
          className='border rounded px-4 py-2 text-white text-md font-medium'
          onClick={() => onClick(item)}>
          Select Nominee
        </Button>
      </div>
    </div>
  )
}

export const CardList = ({ item }) => {
  const { title, photoUrL, categoryName } = item;
  return (
    <div className='flex gap-2'>
      <img
        className='image w-16 h-16 rounded object-cover object-center'
        src={photoUrL}
        alt={title} />
      <div className='self-center w-full'>
        <div className='title font-medium'>
          {title}
        </div>
        <div className='category-name text-sm font-light'>
          {categoryName}
        </div>
      </div>
    </div>
  )
}

CardItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    photoUrL: PropTypes.string
  }),
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

CardList.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    photoUrL: PropTypes.string,
    categoryName: PropTypes.string
  }),
}

export default CardItem;