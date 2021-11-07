import React from 'react'
import MainPageWrapper from '../../components/MainPageWrapper'
import { Container } from 'react-bootstrap'
import { pageRequest } from '../../slice/homeSlice'
import { wrapper } from '../../app/store'
import { useSelector } from 'react-redux'
import { END } from 'redux-saga'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'

const Test = styled.div`
  background-color: green;
  height: 300px;
  width: 300px;
`

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

      <Test />
    </MainPageWrapper>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ req, res }) => {
      store.dispatch(pageRequest())
      store.dispatch(END)

      await store.homeSagaTask.toPromise()

      console.log(store)

      return {}
    },
)

export default Home
