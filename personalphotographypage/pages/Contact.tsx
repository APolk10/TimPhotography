import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ContactForm from '../components/ContactForm'
import { PHASE_PRODUCTION_SERVER } from 'next/dist/shared/lib/constants'


const Contact: NextPage = () => {
  return (
    <ContactForm />
  )
}

export default Contact;

/*
What type of photos? (Wedding, Portraits, Family, General Inquiry)
First/Last Name
Email Address
Phone Number
Tell us more about what you're looking for
*/
