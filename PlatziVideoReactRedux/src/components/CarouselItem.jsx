import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite,deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png'

const CarouselItem = (props) => {
  const { id,cover, title, year, contentRating, duration } = props;
  //función que maneja el guardado de los favoritos
  const handleSetFavorite = () =>{
    props.setFavorite(
      {
        id,cover, title, year, contentRating, duration
      }
    )
  }

  //función para eliminar
  const handleDeleteFavorite = (itemId) =>{
    props.deleteFavorite(itemId)
  }
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img 
          className="carousel-item__details--img" 
          src={playIcon} 
          alt="Play Icon"/>
          {/* envia el id */}
          <img 
          className="carousel-item__details--img" 
          src={plusIcon} 
          alt="Plus Icon"
          onClick={handleSetFavorite} />
          {/* agrega en favorito */}
          <img 
           className="carousel-item__details--img" 
           src={removeIcon} 
           alt="Plus Icon"
           onClick={()=>handleDeleteFavorite(id)}
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  )
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

/*viene de actions/index.js */
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);