import React from 'react'
import MainPageWrapper from '~/components/MainPageWrapper'
import { Container, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { NextSeo } from 'next-seo'
import _ from 'lodash'
import { nanoid } from 'nanoid'

function Home() {
  const { movies } = useSelector(state => state.home)

  return (
    <MainPageWrapper>
      <NextSeo title='Home' description='Sample Project showing movies' />

      <header className='bg-dark py-5'>
        <Container className='px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <h1 className='display-4 fw-bolder'>Shop in style</h1>
            <p className='lead fw-normal text-white-50 mb-0'>
              With this shop homepage template
            </p>
          </div>
        </Container>
      </header>

      <section className='py-5'>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            {_.map(movies, (movie, idx) => {
              return (
                <div className='col mb-5'>
                  <Card key={nanoid(8)}></Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </MainPageWrapper>
  )
}

export default Home
