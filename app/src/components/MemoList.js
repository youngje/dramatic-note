import React from 'react'

import MemoItem from '../containers/memo/MemoItem'
import EmptyMemoList from './EmptyMemoList'

const MemoList = ({ labelId, memos }) => {
  if (Object.keys(memos).length == 0) {
    return <EmptyMemoList />
  } else {
    return <ul id="memo-list" className="list-group">
      {Object.keys(memos).map(id =>
        <MemoItem key={id} id={id} memo={memos[id]} labelId={labelId} />)
      }
    </ul>
  }
}

export default MemoList
