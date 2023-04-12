
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/model/actions';
import actionCat from '../../store/categories/actions';
import './model.css';
import { Link as Anchor } from 'react-router-dom';

const { getAllCars } = actions;
const { getAllCategories } = actionCat;

export default function Model() {
    const dispatch = useDispatch();
    const cars = useSelector((store) => store.model?.cars);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchFilters, setSearchFilters] = useState({
        searchTerm: '',
        selectedCategory: ''
    });

    const categories = useSelector((store) => store.category.categories);

    useEffect(() => {
        Promise.all([dispatch(getAllCars()), dispatch(getAllCategories())])
          .catch((error) => console.log(error)); // manejar errores si alguno de los dispatches falla
      }, [dispatch]);
      

    const prevSlide = () => {
        const lastIndex = (filteredCars?.length || 0) - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const lastIndex = (filteredCars?.length || 0) - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

const filteredCars = cars?.filter(car => {
    const categoryIdMatch = searchFilters.selectedCategory === '' || car?.category_id._id.toString() === searchFilters.selectedCategory.toString();
    const nameMatch = car.name.toLowerCase().includes(searchFilters.searchTerm.toLowerCase());

    console.log('car:', car, 'categoryIdMatch:', categoryIdMatch, 'nameMatch:', nameMatch);

    return categoryIdMatch && nameMatch;
});

      const photo = filteredCars?.length ? filteredCars[currentIndex].photo : null;
      const name = filteredCars?.length ? filteredCars[currentIndex].name : null;
      

      return (
        <div className='contenedor-vehicles'>
          <div className='section-filter'>
            <div className='search-name'>
              <input
                className='search-input'
                type="text"
                placeholder="  Search"
                value={searchFilters.searchTerm}
                onChange={(e) => setSearchFilters({ ...searchFilters, searchTerm: e.target.value })}
              />
            </div>
            <div className='select-option'>
              <select
                className='select-input'
                value={searchFilters.selectedCategory}
                onChange={(e) => setSearchFilters({ ...searchFilters, selectedCategory: e.target.value })}
              >
                <option value="">All</option>
                {categories?.map((category) => (
                  <option key={category?._id} value={category?._id}>{category?.name}</option>
                ))}
              </select>
            </div>
          </div>
          {filteredCars.length === 0 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
              <p>Sorry, there is no vehicle that matches your search.</p>
            </div>
          ) : (
            <div className='contenedor-vehicles-carrusel'>
              <button className='btn-slide' onClick={prevSlide}>
                <img className='img-btn-slide' src="./image/prev.png" alt="Prev" />
              </button>
              <Anchor className='section-img-title anchortoCustome' to={`/details/${filteredCars?.[currentIndex]?._id}`}>
                {photo && (
                  <img
                    className='photo-vehicles'
                    src={photo}
                    alt={`Car model ${filteredCars?.[currentIndex]?.model}`}
                  />
                )}
                {name && (
                  <h1 className={photo ? 'title-name-car' : 'title-name-car no-photo'}>
                    {name}
                  </h1>
                )}
              </Anchor>
              <button className='btn-slide' onClick={nextSlide}>
                <img className='img-btn-slide' src="./image/next.png" alt="Next" />
              </button>
            </div>
          )}
        </div>
      );      
}
