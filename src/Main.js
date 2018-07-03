import React, { Component } from 'react'
import Avatar from './Avatar'
import Links from './Links'
import Body from './Body'

class Main extends Component {
    render() {
        return (
            <div className="large-8 medium-12 columns article">
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                <Avatar />
                <Body />
                <Links />
            </div>
        )
    }
}

export default Main