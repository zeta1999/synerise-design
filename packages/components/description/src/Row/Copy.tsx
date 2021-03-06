import Tooltip from '@synerise/ds-tooltip/dist/Tooltip';
import Icon from '@synerise/ds-icon';
import { DuplicateM } from '@synerise/ds-icon/dist/icons';
import * as React from 'react';
import * as S from './DescriptionRow.styles';
import { CopyProps } from './Copy.types';

const Copy: React.FC<CopyProps> = ({ tooltipVisible, tooltipTitle }) => {
  return (
    <Tooltip title={tooltipTitle} visible={tooltipVisible}>
      <S.Copyable className="ds-description-copy">
        <Icon component={<DuplicateM />} />
      </S.Copyable>
    </Tooltip>
  );
};

export default Copy;
