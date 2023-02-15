/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { resolve } from 'path';
import Image from 'next/image';
import styles from '../styles/images.module.css';


const Family = () => {
  const [gallery, setGallery] = useState([])

  useEffect(() => {
    axios.post('http://localhost:3000/api/images/pictureAPI', {folder: 'Weddings'})
      .then((res: AxiosResponse) => {
        setGallery(res.data.images)
        resolve();
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return (
    gallery.length > 0 ?
    <div className={styles.imagesContainer}>
      {gallery.map((image: any) => {
        return <img src={image.url} alt="Wedding/Engagement photo" key={image.asset_id} />
      })}
    </div>
    :
    <div>No Photos Currently Available</div>

  )
}

export default Family;