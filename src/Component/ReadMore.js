import React, {useState} from 'react'
import useCollapse from 'react-collapsed'
import Records from "./records.json";

function ReadMore() {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <div className='card'>
        
      <button className='inline-flex record-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      <section {...getCollapseProps()}>{Records && Records.map((record) => {
      return(
        <div>
            {record.description1}
        </div>)})}</section>
    </div>
  )
}

export default ReadMore