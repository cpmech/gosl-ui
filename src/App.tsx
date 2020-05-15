import React, { useState } from 'react';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import { OnRouteChange } from './OnRouteChangeWorker';
import { Layout, MenuHorizontal, SideNav, MenuVertical } from './rcomps';
import { typography, colors, maxContentWidth } from './styles';
import { menuTopEntriesNarrow, menuTopEntries, menuLeftEntries } from './menus';
import { Footer } from './components';
import { HomePage, NotFoundPage } from './pages';

const bg = `background-color: #e3e8ee;`;

export const App: React.FC = () => {
  const isNarrow = useMediaQuery({ maxWidth: 600 });
  const isVeryWide = useMediaQuery({ minWidth: 900 });
  const [showSideNav, setShowSideNav] = useState(false);

  const sbWidth = isVeryWide || isNarrow ? 240 : 200;

  const menuHorizontal = () => (
    <MenuHorizontal
      entries={isNarrow ? menuTopEntriesNarrow(() => setShowSideNav(true)) : menuTopEntries}
      minHeight={80}
      maxWidth={maxContentWidth}
    />
  );

  const menuVertical = () => (
    <MenuVertical
      entries={menuLeftEntries(() => setShowSideNav(false))}
      maxWidth={sbWidth}
      gapVertSubEntries={40}
    />
  );

  const leftMenu = () => (
    <SideNav
      onClose={() => setShowSideNav(false)}
      bottomVSpace={100}
      bgColor="#eee"
      color={colors.dark}
    >
      {menuVertical()}
    </SideNav>
  );

  const main = () => (
    <React.Fragment>
      <Router>
        <HomePage path="/" />
        <NotFoundPage default />
      </Router>
      <OnRouteChange action={() => window.scrollTo(0, 0)} />
    </React.Fragment>
  );

  const content = () => (
    <React.Fragment>
      <Layout
        warning={null}
        header={menuHorizontal()}
        sidebar={!isNarrow && menuVertical()}
        main={main()}
        footer={<Footer maxWidth={maxContentWidth} />}
        maxContentWidth={maxContentWidth}
        stickyWarning={false}
        stickyHeader={true}
      />
      {showSideNav && leftMenu()}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Helmet>
        <style>{`html { margin: 0; } body { margin: 0; ${bg} }`}</style>
        <style>{typography.toString()}</style>
      </Helmet>
      {content()}
    </React.Fragment>
  );
};
