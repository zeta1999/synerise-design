import { FileViewTexts } from './FileView/FileView';

export interface ExtendedFile {
  file: File;
  error?: string;
  disabled?: boolean;
  progress?: number;
}

type FileUploaderTexts = FileViewTexts & {
  buttonLabel: string | React.ReactNode;
  buttonDescription: string | React.ReactNode;
};

export interface FileUploaderProps {
  mode: 'single' | 'multi-medium' | 'multi-large';
  description?: string;
  disabled?: boolean;
  removable?: boolean;
  infoTooltip?: string;
  label?: string;
  error?: string;
  texts: FileUploaderTexts;
  files: ExtendedFile[];
  accept?: string[];

  onRemove?: (file: File, index: number) => void;
  onUpload?: (files: File[]) => void;
}