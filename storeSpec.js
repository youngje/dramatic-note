/* Redux store spec for the app */
{
  /*
   * States below are stored in URL
   *
   * labelId: An id of currently selected label
   * memoId: An id of currently selected memo
   */

  /*
   * labels: An object storing all labels
   */
  labels: {
    "1": {
      "name"    : "STRING - Label name",
      "memoIds" : "[STRING] - A list of memos' Ids related with the label"
    }
  },

  /*
   * memos: An object storing all memos
   */
  memos: {
    "1": {
      "title"       : "STRING - Memo title",
      "body"        : "STRING - Memo body",
      "modifiedAt"  : "NUMBER - Last modified time in unix time",
      "labelIds"    : "[STRING] - A list of labels' Ids related with the memo"
    }
  },

  checkedMemoIds: ["1", "2", "3", ...]

  /* States below can be calculated using states above
   *
   * labelId + memos -> visibleMemos
   */
}
