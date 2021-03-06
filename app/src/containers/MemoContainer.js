import React from 'react'

import { connect } from 'react-redux'

import { MemoHandler } from './memo'
import { EmptyMemoList, MemoList } from '../components'

const MemoContainer = ({ children, params, memos }) => {
  const labelId = params.labelId

  const visibleMemoIds = Object.keys(memos)
    .filter(id => labelId == "all" || memos[id].labelIds.includes(labelId))

  const visibleMemos = Object.assign({},
    ...visibleMemoIds.map(id => ({ [id]: memos[id] }))
  )

  const MemoPanel = visibleMemoIds.includes(params.memoId)
    ? React.cloneElement(children, { memo: memos[params.memoId] })
    : children

  return (
    <div id="memo-container" className="col-md-8">
      <div id="memo-list-column" className="col-md-6">
        <MemoHandler memoIds={visibleMemoIds} currentLabelId={labelId} />
        <MemoList memos={visibleMemos} labelId={labelId} />
      </div>
      <div id="memo" className="col-md-6">
        { MemoPanel }
      </div>
    </div>
  )
}

export default connect()(MemoContainer)
