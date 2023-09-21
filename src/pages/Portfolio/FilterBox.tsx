import { IonIcon } from "@ionic/react";
import classNames from "classnames";
import { Category } from "data/portfolio";
import { chevronDown } from "ionicons/icons";
import React from "react";

export const FilterBox: React.FC<{
  category: Category;
  setCategory: (category: Category) => void;
}> = ({ category, setCategory }) => {
  return (
    <>
      <ul className="filter-list">
        <li className="filter-item">
          <button
            className={classNames({ active: category === Category.ALL })}
            onClick={() => setCategory(Category.ALL)}
            data-filter-btn
          >
            {Category.ALL}
          </button>
        </li>

        <li className="filter-item">
          <button
            className={classNames({
              active: category === Category.WEB_DEVELOPMENT,
            })}
            onClick={() => setCategory(Category.WEB_DEVELOPMENT)}
            data-filter-btn
          >
            {Category.WEB_DEVELOPMENT}
          </button>
        </li>

        <li className="filter-item">
          <button
            className={classNames({
              active: category === Category.MOBILE_APPLICATOIN,
            })}
            onClick={() => setCategory(Category.MOBILE_APPLICATOIN)}
            data-filter-btn
          >
            {Category.MOBILE_APPLICATOIN}
          </button>
        </li>
      </ul>

      <div className="filter-select-box">
        <button className="filter-select" data-select>
          <div className="select-value" data-selecct-value>
            Select category
          </div>

          <div className="select-icon">
            <IonIcon icon={chevronDown} />
          </div>
        </button>

        <ul className="select-list">
          <li className="select-item">
            <button data-select-item>{Category.ALL}</button>
          </li>

          <li className="select-item">
            <button data-select-item>{Category.WEB_DEVELOPMENT}</button>
          </li>

          <li className="select-item">
            <button data-select-item>{Category.MOBILE_APPLICATOIN}</button>
          </li>
        </ul>
      </div>
    </>
  );
};
