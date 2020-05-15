import React from 'react';
import { Location } from '@reach/router';

// reference:
//   https://stackoverflow.com/questions/53058110/stop-reach-router-scrolling-down-the-page-after-navigating-to-new-page/56996986#56996986
//
// Location is an import from @reach/router; it provides current location from context
//
// NOTE: OnRouteChange must come *after* <Router> else Reach router will call focus()
//       on the matched route after action is called, undoing the behaviour!

class OnRouteChangeWorker extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.action();
    }
  }
  render() {
    return null;
  }
}

export const OnRouteChange = ({ action }) => (
  <Location>
    {({ location }) => <OnRouteChangeWorker location={location} action={action} />}
  </Location>
);
