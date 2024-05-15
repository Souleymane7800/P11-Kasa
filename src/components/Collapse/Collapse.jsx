/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../styles/components/collapse.scss'

export default function Collapse(props) {
      const [isShow, setIsShow] = useState(false);

      const showContent = () => {
            setIsShow(!isShow);
      };

      const contentClass = (isShow ? "visible" : "hidden") + " collapse__content";
      const chevronClass = (isShow ? "fa-chevron-up" : "fa-chevron-down") + " fas";
      return (
            <div className='collapse__panel'>
                  <p className='collapse__header' aria-expanded={isShow} onClick={showContent} >
                        <span>{props.title}</span>
                        <i className={chevronClass}></i>
                  </p>
                  {isShow && <p className={contentClass}>{props.content}</p>}
            </div>
      )
}
