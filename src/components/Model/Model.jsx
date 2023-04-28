import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../store/model/actions';
import actionCat from '../../store/categories/actions';
import './model.css';
import { Link as Anchor } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";

const { getAllCars } = actions;
const { getAllCategories } = actionCat;

export default function Model() {
  const dispatch = useDispatch();
  const cars = useSelector((store) => store.model?.cars);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchFilters, setSearchFilters] = useState({
    searchTerm: '',
    selectedCategory: ''
  });

  const categories = useSelector((store) => store.category.categories);

  useEffect(() => {
    Promise.all([dispatch(getAllCars()), dispatch(getAllCategories())])
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
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
    const nameMatch = car.name.toLowerCase().trim(" ").includes(searchFilters.searchTerm.toLowerCase());
    return categoryIdMatch && nameMatch;
  });

  const photo = filteredCars?.length ? filteredCars[currentIndex]?.photo : null;
  const name = filteredCars?.length ? filteredCars[currentIndex]?.name : null;


  return (
    <div className='contenedor-vehicles'>
      <div className='vehicles-title'>
        <h1>MODEL SELECTION</h1>
      </div>
      <div className='section-filter'>
        <div className='search-name'>
          <input
            className='search-input'
            type="text"
            placeholder="FILTER BY NAME"
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
            <option value="">category</option>
            {categories?.map((category) => (
              <option key={category?._id} value={category?._id}>{category?.name}</option>
            ))}
          </select>
        </div>
      </div>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <p style={{ marginTop: '4.5rem', fontSize: '1rem', fontWeight: 500, textTransform: 'uppercase'}}>Loading...</p>
        </div>
      ) : filteredCars.length === 0 ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <p className='no-match-search'>There is no vehicle that matches your search</p>
        </div>
      ) : (
        <div className='contenedor-vehicles-carrusel'>
          <button className='btn-slide' onClick={prevSlide}>
            <img className='img-btn-slide img-btn-slide1' src="./image/prev.png" alt="Prev" />
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
            <img className='img-btn-slide img-btn-slide2' src="./image/next.png" alt="Next" />
          </button>
        </div>
      )}
      <HashLoader
        className="spinner"
        color={'gray'}
        loading={isLoading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}