import React from 'react'
import PropTypes from "prop-types";
import RatingStars from './RatingStars';

function ProductCard({
    contentImage,
    title,
    description,
    instructor,
    rating,
    reviewCount,
    price,
}) {
    return (
        <div className="rounded-[10px] bg-light-primary w-full border border-other-border ">
            <div className="flex sm:grid sm:grid-flow-row">
                <div className="sm:px-5 sm:pt-5 sm:pb-4">
                    <img src={contentImage} alt=""
                        className="rounded-[10px] object-cover w-26 h-28 m-5 sm:m-0  sm:w-full sm:h-48 sm:object-cover" />
                </div>

                <div className="flex-auto ps-3 pt-5 items-center sm:px-5 sm:pt-0">
                    <div className="px-2 sm:px-0">
                        <h6 className="text-lg text-dark-primary font-semibold">{title}</h6>
                        <p
                            className="text-base font-medium text-black-secondary line-clamp-2 hidden sm:line-clamp-2 sm:overflow-hidden">
                            {description}</p>
                    </div>
                    <div className="flex pt-2 pb-4 items-center px-2 sm:px-0 sm:pt-4 sm:pb-2">
                        <div className="">
                            <img src={instructor.avatar} alt="" className="rounded-[10px] object-cover" />
                        </div>
                        <div className="ps-2.5 ">
                            <span className="text-sm sm:text-base">
                                {instructor.name}</span>
                            <p
                                className="text-xs tracking-[0.2px] sm:tracking-[0.2px] sm:text-sm text-black-secondary">
                                {instructor.role}
                                <span className="text-sm text-black-secondary sr-only sm:not-sr-only"> di </span>
                                <span
                                    className="font-bold text-sm text-black-secondary tracking-[0.2px] sm:tracking-[0.2px] sr-only sm:not-sr-only">
                                    {instructor.company}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 flex  justify-between content-between items-center pb-4 sm:pb-5 ">
                <div className="flex items-center">
                    <RatingStars />
                    <span className="text-sm text-black-secondary font-medium ps-2">{rating} ({reviewCount})</span>
                </div>
                <div>
                    <h4 className="text-2xl text-primary font-semibold">{price}</h4>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    contentImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    instructor: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
        avatar: PropTypes.string,
    }),
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    price: PropTypes.string,
};

export default ProductCard