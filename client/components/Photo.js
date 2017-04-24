import React from 'react'
import { Link } from 'react-router'

class Photo extends React.Component {
  render () {
    const {post, index, comments} = this.props
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className='grid-photo' />
            {post.caption}
          </Link>
        </div>
      </figure>
    )
  }
}

export default Photo