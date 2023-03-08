/// <reference types="react" />
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

interface Props {
    className?: string;
}
declare const MyEditor: ({ className }: Props) => JSX.Element;

export { MyEditor, Size };
