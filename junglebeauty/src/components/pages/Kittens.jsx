import { Component, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import CatCardCarousel from '../CatCardCarousel';
import CatProfile from './CatProfile';
import CatCard from '../CatCard';
import CatList from '../CatList';
import { GetCatFilepath } from '../Functions';
import './../../App.css';

const Kittens = () => {
  return (
    <CatCardCarousel cats={CatList.filter(cat => cat.status == 'available')}/>
  );
};

export default Kittens;