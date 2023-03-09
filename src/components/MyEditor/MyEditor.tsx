import {
  LexicalComposer,
  type InitialEditorStateType,
  type InitialConfigType,
} from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'

export interface Props {
  name: string
  className?: string
  initialEditorState?: InitialEditorStateType
  placeholder?: string
}

export const MyEditor = ({
  className,
  name,
  initialEditorState,
  placeholder = 'Enter some text...',
}: Props) => {
  const editorConfig: InitialConfigType = {
    namespace: name,
    editorState: initialEditorState,
    onError(error) {
      throw error
    },
  }

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className={className}>
        <RichTextPlugin
          contentEditable={<ContentEditable />}
          placeholder={<div>{placeholder}</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
      </div>
    </LexicalComposer>
  )
}

export default MyEditor
