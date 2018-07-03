import React, { Component } from 'react'
import Header from './Header'
import Main from './Main'
import Ad from './Ad'
import Articles from './Articles'
import Footer from './Footer'

class Blog extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <main className="expanded row">
                    <Main />
                    <aside className="large-4 medium-12 columns">
                    <Ad />
                    </aside>
                    <Articles />
                </main>
                <Footer />
            </div>
        )
    }
}

export default Blog