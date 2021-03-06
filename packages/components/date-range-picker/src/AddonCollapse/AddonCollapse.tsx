import * as React from 'react';
import Button from '@synerise/ds-button';
import * as S from './AddonCollapse.styles';
import { Props } from './AddonCollapse.types';

const AddonCollapse: React.FC<Props> = ({
  title,
  content,
  expanded: initialExpanded,
  onCollapseChange,
  collapsedSummary,
}: Props) => {
  const [expanded, setExpand] = React.useState<boolean>(initialExpanded || false);
  return (
    <S.AddonWrapper expanded={expanded}>
      <S.AddonHeader>
        <S.Title>{title}</S.Title>
        {!expanded && <S.Suffix>{collapsedSummary}</S.Suffix>}
        <Button.Expander
          onClick={(): void => {
            setExpand(!expanded);
            onCollapseChange && onCollapseChange();
          }}
          expanded={expanded}
        />
      </S.AddonHeader>

      {expanded && <S.Content>{content}</S.Content>}
    </S.AddonWrapper>
  );
};

export default AddonCollapse;
