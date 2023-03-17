import React, { useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import './Treeveiw.css';
const Treeveiw = () => {
  //First
  const [node1, setNode1] = useState(false);
  const [node2, setNode2] = useState(false);
  const [node3, setNode3] = useState(false);
  const [node4, setNode4] = useState(false);
  const [node5, setNode5] = useState(false);
  const [node6, setNode6] = useState(false);
  const [node7, setNode7] = useState(false);
  const [node8, setNode8] = useState(false);
  const [node9, setNode9] = useState(false);
  const [node10, setNode10] = useState(false);
  const [node11, setNode11] = useState(false);
  const [node12, setNode12] = useState(false);
  const [node13, setNode13] = useState(false);
  // console.log(node1);
  return (
    <div className='parent'>
      <div className='treeComponent'>
        <h2>Tree Component Rendering</h2>

        <TreeView
          aria-label='multi-select'
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
          sx={{ height: 'auto', flexGrow: 1 }}>
          <TreeItem
            nodeId='1'
            label='+ Liverpool(1558)'
            onClick={() => setNode1(true)}></TreeItem>
          <TreeItem
            nodeId='2'
            label="Joe's Demo School(1569)"
            onClick={() => setNode2(true)}>
            <ul>
              <li onClick={() => setNode3(true)}>
                <TreeItem nodeId='3' label='English Comp(1570)' />
              </li>
            </ul>
          </TreeItem>
          <TreeItem
            nodeId='4'
            label='Model Training Academy(1631)'
            onClick={() => setNode4(true)}>
            <TreeItem
              nodeId='5'
              label='Version 1.2 (1772)'
              onClick={() => setNode5(true)}>
              <ul>
                <li onClick={() => setNode6(true)}>
                  <TreeItem
                    nodeId='6'
                    label='Tell me about your favorite book,movie,show,or play(1773)'
                  />
                </li>
                <li onClick={() => setNode7(true)}>
                  <TreeItem
                    nodeId='7'
                    label='What are you most excited about in the next 90 days?(1775)'
                  />
                </li>
                <li onClick={() => setNode8(true)}>
                  <TreeItem
                    nodeId='8'
                    label='Type twinkle twinkle litle star using only one hand(1776)'
                  />
                </li>
                <li onClick={() => setNode9(true)}>
                  <TreeItem
                    nodeId='9'
                    label='What are you most excited about in the next 90 days(1777)'
                  />
                </li>
                <li onClick={() => setNode10(true)}>
                  <TreeItem
                    nodeId='10'
                    label='What are you most excited about in the next ninety days?(b) (1778)'
                  />
                </li>
                <li onClick={() => setNode11(true)}>
                  <TreeItem
                    nodeId='11'
                    label='If you had million dollars(1782)'
                  />
                </li>
              </ul>
            </TreeItem>
            <TreeItem
              nodeId='12'
              label='- Version 1.0 (1632)'
              onClick={() => setNode12(true)}></TreeItem>
            <TreeItem
              nodeId='13'
              label='- Version 1.1 (1673)'
              onClick={() => setNode13(true)}></TreeItem>
          </TreeItem>
        </TreeView>
        <span className='note'>Click to expand Data</span>
      </div>
      <div className='treeComponent'>
        {/* Display selected data */}
        <div>
          <h2>Details view</h2>
        </div>
        <div>
          {node1 ? (
            <div>
              <li>Liverpool(1558)</li>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node2 ? (
            <div>
              <li>Joe's Demo School(1569)</li>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node3 ? (
            <div>
              <ul>
                <li>English Comp(1570)</li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node4 ? (
            <div>
              <li> Model Training Academy(1631)</li>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node5 ? (
            <div>
              <ul>
                <li>Version 1.2 (1772)</li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node6 ? (
            <div>
              <ul>
                <li>
                  Tell me about your favorite book,movie,show,or play(1773)
                </li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node7 ? (
            <div>
              <ul>
                <li>
                  {' '}
                  What are you most excited about in the next 90 days?(1775)
                </li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node8 ? (
            <div>
              <ul>
                <li>
                  Type twinkle twinkle litle star using only one hand(1776)
                </li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node9 ? (
            <div>
              <ul>
                <li>
                  What are you most excited about in the next 90 days(1777)
                </li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node10 ? (
            <div>
              <ul>
                <li>
                  What are you most excited about in the next 90 days(1778)
                </li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node11 ? (
            <div>
              <ul>
                <li>If you had million dollars(1782)</li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node12 ? (
            <div>
              <ul>
                <li> - Version 1.0 (1632)</li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div>
          {node13 ? (
            <div>
              <ul>
                <li> - Version 1.1 (1673)</li>
              </ul>
            </div>
          ) : (
            ' '
          )}
        </div>
      </div>
    </div>
  );
};

export default Treeveiw;
