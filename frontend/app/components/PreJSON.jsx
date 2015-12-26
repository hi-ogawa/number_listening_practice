import React from "react";

const PreJSON = (props) => (
  <div>
    <pre>
      {JSON.stringify(props.json, null, 2)}
    </pre>
  </div>
)

PreJSON.propTypes = {
  json: React.PropTypes.object.isRequired
};

export default PreJSON;
