export interface Props {
  className?: string
}

export const MyEditor = ({ className }: Props) => {
  return <div className={className}>MyEditor</div>
}

export default MyEditor
