import * as React from 'react';
import { withTheme } from 'styled-components';
import Dropdown from '@synerise/ds-dropdown';
import Icon from '@synerise/ds-icon';
import { Add3M, SearchM } from '@synerise/ds-icon/dist/icons';
import { Props } from './Tags.types';
import * as S from './Tags.styles';
import Tag from './Tag/Tag';
import { Props as TagProps } from './Tag/Tag.types';

const Tags: React.FC<Props> = ({
  data,
  tagShape,
  onSelectedChange,
  disabled,
  removable,
  addable,
  creatable,
  texts,
  selected,
  style,
  className,
  manageLink,
  onCreate,
  theme,
  maxHeight,
  overlayStyle,
  overlayPlacement,
}: Props) => {
  const [isAdding, setAddingState] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const addIcon = (
    <S.AddIconWrapper>
      <Icon component={<Add3M />} size={24} color={theme.palette['grey-500']} />
    </S.AddIconWrapper>
  );

  const onRemove = (tagKey: string | number): void => {
    if (!onSelectedChange || !selected) {
      return;
    }

    const removedTag = selected.find(tag => tag.id === tagKey);

    if (!removedTag) {
      return;
    }

    onSelectedChange(
      selected.filter(tag => tag.id !== tagKey),
      {
        type: 'REMOVE',
        tag: removedTag,
      }
    );
  };

  const notSelectedList = data && selected && data.filter(t => !selected.find(s => s.id === t.id));
  const selectablePool = !searchQuery
    ? notSelectedList
    : notSelectedList &&
      notSelectedList.filter(t => t.name && t.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const isExactMatchFound = searchQuery && selectablePool && selectablePool.find(t => t.name === searchQuery);
  const emptyPool = selectablePool && selectablePool.length === 0;
  const isCreatable = creatable && !isExactMatchFound && searchQuery;
  const isSeperated = !(!manageLink && emptyPool);

  const reset = (): void => {
    setAddingState(false);
    setSearchQuery('');
  };

  const onPoolTagSelect = (tag: TagProps): void => {
    onSelectedChange &&
      selected &&
      onSelectedChange([...selected, tag], {
        type: 'ADD',
        tag,
      });

    reset();
  };

  const onCreateNewTag = (): void => {
    onCreate && onCreate(searchQuery);
    reset();
  };

  const dropdownOverlay = (
    <S.Overlay data-testid="dropdown">
      <S.DropdownSearch
        value={searchQuery}
        onSearchChange={setSearchQuery}
        placeholder={(texts && texts.searchPlaceholder) || ''}
        iconLeft={<Icon component={<SearchM />} color={theme.palette['grey-600']} />}
        onClearInput={(): void => setSearchQuery('')}
        clearTooltip={texts && texts.clearTooltip}
      />
      <S.DropdownContainer maxHeight={maxHeight}>
        {isCreatable && (
          <>
            <S.CreateTagDropdownButton type="ghost" onClick={onCreateNewTag} marginless={!isSeperated}>
              {addIcon}
              <span>{texts && texts.createTagButtonLabel}</span>
              <strong>{searchQuery}</strong>
            </S.CreateTagDropdownButton>

            {isSeperated && <S.Seperator />}
          </>
        )}

        {!emptyPool && (
          <S.DropdownTagsContainer isCreatable={!!isCreatable}>
            {selectablePool &&
              selectablePool.map(tag => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <Tag {...tag} key={tag.id} shape={tagShape} onClick={(): void => onPoolTagSelect(tag)} />
              ))}
          </S.DropdownTagsContainer>
        )}

        {emptyPool && !isCreatable && !manageLink && (
          <S.DropdownNoTags>{texts && texts.dropdownNoTags}</S.DropdownNoTags>
        )}

        {manageLink && selectablePool && !selectablePool.length && (
          <>
            <S.ManageLinkButton type="ghost" href={manageLink} onlyChild={!!(emptyPool && !isCreatable)}>
              {texts && texts.manageLinkLabel}
            </S.ManageLinkButton>
          </>
        )}
      </S.DropdownContainer>
    </S.Overlay>
  );

  return (
    <S.Container className={`ds-tags ${className || ''}`} style={style} data-testid="tags">
      <S.SelectedTags>
        {selected &&
          selected.map(tag => (
            <Tag
              key={tag.id}
              shape={tagShape}
              removable={removable}
              onRemove={removable ? onRemove : undefined}
              disabled={disabled}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...tag}
            />
          ))}
        {addable && (
          <Dropdown
            trigger={['click']}
            placement={overlayPlacement}
            visible={isAdding}
            onVisibleChange={setAddingState}
            overlay={dropdownOverlay}
            overlayStyle={overlayStyle}
          >
            <S.AddButton type="ghost" marginless={selected && !selected.length ? true : undefined}>
              {addIcon}
              {texts && texts.addButtonLabel && <span>{texts.addButtonLabel}</span>}
            </S.AddButton>
          </Dropdown>
        )}
      </S.SelectedTags>
    </S.Container>
  );
};

Tags.defaultProps = {
  texts: {},
  data: [],
  selected: [],
};

export default withTheme(Tags);
