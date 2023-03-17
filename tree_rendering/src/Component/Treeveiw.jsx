import React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
const Treeveiw = () => {
  return (
    <div>
      {' '}
      <TreeView
        aria-label='multi-select'
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        sx={{ height: 'auto', flexGrow: 1, maxWidth: 'auto' }}>
        <TreeItem nodeId='1' label='Liverpool(1558)'>
          <TreeItem nodeId='1' label='Liverpool' />
        </TreeItem>
        <TreeItem nodeId='3' label="Joe's Demo School(1569)">
          <li>
            <TreeItem nodeId='4' label='English Comp(1570)' />
          </li>
        </TreeItem>
        <TreeItem nodeId='5' label='Model Training Academy(1631)'>
          <TreeItem nodeId='6' label='Version 1.2 (1772)'>
            <li>
              <TreeItem
                nodeId='7'
                label='Tell me about your favorite book,movie,show,or play(1773)'
              />
            </li>
            <li>
              <TreeItem
                nodeId='9'
                label='What are you most excited about in the next 90 days?(1775)'
              />
            </li>
            <li>
              {' '}
              <TreeItem
                nodeId='10'
                label='Type twinkle twinkle litle star using only one hand(1776)'
              />
            </li>
            <li>
              <TreeItem
                nodeId='11'
                label='What are you most excited about in the next 90 days(1777)'
              />
            </li>
            <li>
              <TreeItem
                nodeId='12'
                label='What are you most excited about in the next ninety days?(b) (1778)'
              />
            </li>
            <li>
              <TreeItem nodeId='13' label='If you had million dollars(1782)' />
            </li>
          </TreeItem>
          <TreeItem nodeId='14' label='Version 1.0 (1632)'>
            <TreeItem nodeId='14' label='Version 1.0 (1632)' />
          </TreeItem>
          <TreeItem nodeId='15' label='Version 1.1 (1673)'>
            <TreeItem nodeId='15' label='Version 1.1 (1673)' />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default Treeveiw;
