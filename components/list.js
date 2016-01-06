import React from 'react';
import Poster from './poster.js';

const List = (props) => {
  let posts = props.data.map((movie, id) => <Poster key={id} movie={movie} />);

  return (
    <div>
      {posts}
    </div>
  )
}

export default List;
