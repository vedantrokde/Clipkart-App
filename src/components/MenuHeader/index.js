import React, { useEffect } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../actions'

/**
* @author
* @function MenuHeader
**/

const MenuHeader = (props) => {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    const renderCategories = (categories) => {
        let cats = [];
        for (let cat of categories) {
            cats.push(
                <li key={cat._id}>
                    {
                        cat.parentId ? 
                        <a href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`}>{cat.name}</a> :
                        <span>{cat.name}</span>
                    }
                    {cat.children && cat.children.length > 0 ? (<ul>{renderCategories(cat.children)}</ul>) : null}
                </li>
            );
        }
        return cats;
    }

    return (
        <div className="menuHeader">
            <ul>
                {
                    category.categories.length>0 ? renderCategories(category.categories) : null
                }
            </ul>

        </div>
    )

}

export default MenuHeader