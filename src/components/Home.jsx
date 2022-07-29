import React from 'react'
import Feature from './Feature'
import Footer from './Footer'
import JoinForm from './JoinForm'
import Nav from './Nav'
import TopFeature from './TopFeature'

function Home() {
    document.title ="Netflix | Home"

    return (
        <div style={{ background: 'black' }}>
            {/* <Nav /> */}

            <div className="top-section">

                <div className="join-section">

                    <center>
                        <h1 className='catch-clause'>Unlimited movies, TV shows, and more.</h1>
                        <h3>Watch anywhere,cancel anytime</h3>
                        
                        <JoinForm />
                    </center>
                </div>

            </div>
            <div className="content container">

                <TopFeature position={'left'} title={'Enjoy on your TV.'} desc='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' img='phone.jpg' />
                <Feature position={'right'} title={'Download your shows to watch offline.'} desc='Save your favorites easily and always have something to watch.' img='download.jpg'/>
                <Feature position={'left'} title={'Watch everywhere.'} desc='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' img='tv.png' />
                <Feature position={'right'} title={'Create profiles for kids.'} desc='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.' img='kids.png'/>
                <Feature position={'left'} title={'Have an Android Phone? Get our new free plan!'} desc='Watch a selection of new movies and TV shows without adding any payment details!' img='phone.jpg'/>

            </div>
            <br />
            <div className="container">
                <JoinForm />
                <br />
            </div>
            <Footer/>
        </div>
    )
}

export default Home