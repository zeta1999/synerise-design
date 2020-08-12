import * as React from 'react';
import Scrollbar from '@synerise/ds-scrollbar';
import * as S from './Layout.styles';

interface Style<T> {
  left?: T;
  leftInner?: T;
  main?: T;
  mainInner?: T;
  right?: T;
  rightInner?: T;
}

export type LayoutProps = {
  header?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  styles?: Style<object>;
};

const Layout: React.FC<LayoutProps> = props => {
  const { header, left, right, children, className, styles } = props;
  return (
    <S.LayoutContainer className={`ds-layout ${className || ''}`}>
      {header ? <S.LayoutHeader className="ds-layout__header">{header}</S.LayoutHeader> : null}
      <S.LayoutBody>
        <>
          {left ? (
            <S.LayoutSidebar className="ds-layout__sidebar" style={styles && styles.left}>
              <Scrollbar>
              <S.LayoutSidebarInner style={styles && styles.leftInner}>{left}</S.LayoutSidebarInner>
              </Scrollbar>
            </S.LayoutSidebar>
          ) : null}
        </>
        <S.LayoutMain className="ds-layout__main" data-popup-container style={styles && styles.main}>
          <Scrollbar>
          <S.LayoutMainInner style={styles && styles.mainInner}>{children}</S.LayoutMainInner>
          </Scrollbar>
        </S.LayoutMain>
        <>
          {right ? (
            <S.LayoutSidebar className="ds-layout__sidebar ds-layout__sidebar--right" style={styles && styles.right}>
              <Scrollbar>
              <S.LayoutSidebarInner style={styles && styles.rightInner}>{right}</S.LayoutSidebarInner>
              </Scrollbar>
            </S.LayoutSidebar>
          ) : null}
        </>
      </S.LayoutBody>
    </S.LayoutContainer>
  );
};

export default Layout;
