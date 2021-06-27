import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/header.js'
import Presentacion from '../components/presentacion.js'
import Skills from '../components/skills.js'
import BotonExperienceSkill from '../components/botonExperienceSkill.js'
import { useEffect, useState } from 'react';
import Footer from '../components/footer'

export default function Home() {

  return (
    <div className="b-nw">
      <Head>
        
      </Head>
      <div className="b-nn container-fluid">
        <Header>
        </Header>
      </div>
      <Presentacion></Presentacion>
      <div className="mt-3"></div>
      <BotonExperienceSkill></BotonExperienceSkill>
      <div className="mt-3"></div>
      <Footer></Footer>
      
      
    </div>
  )
}
