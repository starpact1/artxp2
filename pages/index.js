import { Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroSection from './Components/IndexPage/HeroSection'
import UpComingExperience from './Components/IndexPage/UpComingExperience'


export default function Home() {

  return (
      <div>
          <HeroSection />
          <UpComingExperience />
      </div>
  )
}
