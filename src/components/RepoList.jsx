import React from 'react';
import PropTypes from 'prop-types';

const RepoList = ({ data }) => (
  <div>
    <ul className="list-group">
      {
            data && data.map(repo => (
              <li className="list-group-item" key={repo.id}>
                {repo.name}
              </li>
            ))
        }
    </ul>
  </div>
);


RepoList.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default RepoList;
