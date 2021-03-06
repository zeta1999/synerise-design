import * as React from 'react';
import { renderWithProvider } from '@synerise/ds-utils/dist/testing';
import Typography from 'antd/lib/typography';
import Drawer from '../Drawer';

const DRAWER = (visible: boolean) => (<Drawer
  visible={visible}
  width={400}
  placement='right'
>
  <Drawer.DrawerHeader>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 24}}>
      <Typography.Title style={{flex: 1, margin: 0,}} level={4}>Example drawer</Typography.Title>
    </div>
  </Drawer.DrawerHeader>
  <Drawer.DrawerBody>
    <Drawer.DrawerContent>
      <p>Content</p>
    </Drawer.DrawerContent>
  </Drawer.DrawerBody>
</Drawer>);

describe('Drawer component', () => {
  it('should render', () => {
    // ARRANGE
    const {getByTestId} = renderWithProvider(DRAWER(true));

    // ASSERT
    expect(getByTestId('ds-drawer')).toBeTruthy();
  });

  it('should not render', () => {
    //ARRANGE
    const {queryAllByTestId} = renderWithProvider(DRAWER(false));

    // ASSERT
    expect(queryAllByTestId('ds-drawer').length).toBe(0);
  });

  it('should render on change visible prop', () => {
    // ARRANGE
    const {queryAllByTestId, rerender} = renderWithProvider(DRAWER(false));

    // ASSERT
    expect(queryAllByTestId('ds-drawer').length).toBe(0);

    // ACT
    rerender(DRAWER(true));
    expect(queryAllByTestId('ds-drawer').length).toBe(1);
  });
});
