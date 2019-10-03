import * as React from 'react';
import { DSProvider } from '@synerise/ds-core';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import List from '@synerise/ds-list';
import Checkbox from '@synerise/ds-checkbox';
import Radio from "@synerise/ds-radio";
import Switch from "@synerise/ds-switch";

const dataMultiple = [
  [
    { text: 'Item 1', disabled: true },
    { text: 'Item 2', disabled: false },
    { text: 'Item 3', disabled: true },
    { text: 'Item 4', disabled: false, danger: true },
  ],
  [
    { text: 'Item 5', disabled: false },
  ]
];

const dataSingle = [
  [
    { text: 'Item 1', disabled: true },
    { text: 'Item 2', disabled: false },
    { text: 'Item 3', disabled: true },
    { text: 'Item 4', disabled: false, danger: true },
  ],
];

const dataCheckboxes = [
  [
    { label: 'Country', value: 'country' },
    { label: 'City', value: 'city' },
    { label: 'Address', value: 'address' },
  ]
];

const actions = (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <div style={{ marginRight: '8px' }} onClick={action('edit')}>Edit</div>
    <div onClick={action('delete')}>Delete</div>
  </div>
);

storiesOf('Components|List', module)
  .add('default', () => (
    <div style={{width: '200px'}}>
      <DSProvider code="en_GB">
        <div style={{ background: "#fff", padding: '16px', width: '300px' }}>
          <List
            header="Folders"
            dataSource={dataSingle}
            renderItem={item => (
              <List.Item
                onSelect={action('onSelect')}
                icon={<div>a</div>}
                disabled={item.disabled}
                danger={item.danger}
              >
                {item.text}
              </List.Item>
            )}
          />
        </div>
      </DSProvider>
    </div>
  ))
  .add('complex list', () => (
    <div style={{width: '200px'}}>
      <DSProvider code="en_GB">
        <div style={{ background: "#fff", padding: '16px', width: '300px' }}>
          <List
            header="Folders"
            dataSource={dataMultiple}
            renderItem={item => (
              <List.Item
                onSelect={action('onSelect')}
                icon={<div>a</div>}
                disabled={item.disabled}
                danger={item.danger}
                actions={actions}
              >
                {item.text}
              </List.Item>
            )}
          />
        </div>
      </DSProvider>
    </div>
  ))
  .add('with checkboxes', () => (
    <div style={{width: '200px'}}>
      <DSProvider code="en_GB">
        <div style={{ background: "#fff", padding: '16px', width: '300px' }}>
          <List
            header="Select option"
            dataSource={dataCheckboxes}
            renderItem={item => (
              <Checkbox
                value={item.value}
              >
                {item.label}
              </Checkbox>
            )}
          />
        </div>
      </DSProvider>
    </div>
  ))
  .add('mixed', () => (
    <div style={{width: '200px'}}>
      <DSProvider code="en_GB">
        <div style={{ background: "#fff", padding: '16px', width: '300px' }}>
          <List
            dataSource={dataCheckboxes}
            renderItem={item => (
              <Checkbox
                value={item.value}
              >
                {item.label}
              </Checkbox>
            )}
          />
          <List.Divider />
          <List
            dataSource={dataSingle}
            renderItem={item => (
              <List.TextItem
                onSelect={action('onSelect')}
                icon={<div>a</div>}
                disabled={item.disabled}
                danger={item.danger}
                actions={actions}
              >
                {item.text}
              </List.TextItem>
            )}
          />
        </div>
      </DSProvider>
    </div>
  ))
  .add('with radios', () => (
    <div style={{width: '200px'}}>
      <DSProvider code="en_GB">
        <div style={{ background: "#fff", padding: '16px', width: '300px' }}>
          <List
            header="Select option"
            dataSource={dataCheckboxes}
            radio
            options={{ defaultValue: 'A' }}
            renderItem={item => (
              <Radio
                value={item.value}
              >
                {item.label}
              </Radio>
            )}
          />
        </div>
      </DSProvider>
    </div>
  ))
  .add('with switches', () => {
    const [state, setState] = React.useState([
      [
        { label: 'Option A', checked: false },
        { label: 'Option B', checked: true },
        { label: 'Option C', checked: false },
        { label: 'Option D', checked: false, errorText: 'This option in recommended' },
      ]
    ]);

    const handleChange = (label: string) => {
      setState(state.map(innerArray => {
        return innerArray.map(item => {
          const newCheckedValue = !item.checked;

          if (item.label === 'Option D') {
            return { ...item, checked: newCheckedValue, ...(newCheckedValue ? {errorText: ''} : {errorText: 'This option in recommended'} ) };
          }

          if (item.label === label) {
            return { ...item, checked: !item.checked };
          }
          return item;
        });
      }));
    };

    return (
      <div style={{width: '200px'}}>
        <DSProvider code="en_GB">
          <div style={{ background: "#fff", padding: '16px', width: '300px' }}>
            {console.log(state)}
            <List
              dataSource={state}
              renderItem={item => (
                <Switch
                  label={item.label}
                  errorText={item.errorText}
                  checked={item.checked}
                  onChange={() => handleChange(item.label)}
                />
              )}
            />
          </div>
        </DSProvider>
      </div>
    );
  })
;