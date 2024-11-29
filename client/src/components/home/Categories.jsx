import { Button, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { AddCircleOutline as PlusIcon, ExpandMore as ArrowDownIcon } from '@mui/icons-material'; // Import arrow icon
import { useState } from 'react'; // Import useState hook for handling visibility

import { categories } from '../../constants/data';

const PlusButton = styled(Button)`
    position: absolute;
    right: 20px;
    top: 450px;
    background: none;
    color: Blue;
    min-width: 0;
    padding: 0;

    &:hover {
        color: #FF6347;
        background: none;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #6495ED;
    font-weight: 600;
    display: block;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: black;
        color: #fff;
        font-weight: 700;
    }
`;

const MainButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: #6495ED;
    font-weight: 600;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
    position: relative;

    &:hover {
        background-color: black;
        color: #fff;
        font-weight: 700;
    }
`;

const ArrowIcon = styled(ArrowDownIcon)`
    margin-left: 8px; /* Space between text and arrow */
    font-size: 20px;
    transition: transform 0.3s ease;
    transform: ${({ visible }) => (visible ? 'rotate(180deg)' : 'rotate(0)')}; /* Rotate arrow when categories are visible */
`;

const CategoryContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const CategoryItem = styled('div')`
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transform: ${({ visible }) => (visible ? 'translateY(0)' : 'translateY(-10px)')};
    transition: opacity 0.3s ease, transform 0.3s ease;
    margin-top: 10px; /* Space between categories */
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    // State to handle visibility of category buttons
    const [visibleCategories, setVisibleCategories] = useState(true); // Default to true on page load

    // Toggle visibility of categories when the arrow icon is clicked
    const handleToggleCategories = () => {
        setVisibleCategories((prevVisible) => !prevVisible); // Toggle visibility
    };

    return (
        <>
            {/* Plus button on the right side */}
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <PlusButton variant="contained">
                    <PlusIcon fontSize="large" />
                </PlusButton>
            </Link>

            <CategoryContainer>
                {/* Main button that navigates to home page */}
                <MainButton to="/" onClick={() => setVisibleCategories(false)}>
                    All Categories
                </MainButton>

                {/* Arrow icon separate from the button */}
                <ArrowIcon visible={visibleCategories} onClick={handleToggleCategories} />

                {/* Render categories with animation */}
                {categories.map((category, index) => (
                    <CategoryItem
                        key={category.id}
                        visible={visibleCategories}
                        style={{ animationDelay: `${index * 0.2}s` }} // Delay for each category
                    >
                        <StyledLink to={`/?category=${category.type}`}>
                            {category.type}
                        </StyledLink>
                    </CategoryItem>
                ))}
            </CategoryContainer>
        </>
    );
};

export default Categories;
