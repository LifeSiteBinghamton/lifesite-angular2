import { FileItem } from 'ng2-file-upload/components/file-upload/file-item.class';

import { FileModel } from 'data';

export enum FileUploadEventType {
    OnAfterAddingAll,
    OnBeforeUpload,
    OnBuildItemForm,
    OnProgressAll,
    OnProgress,
    OnComplete,
    OnCompleteAll
}

export interface IFileUpload {
    event: FileUploadEventType;
    progress?: number;
    category?: string;
    form?: FormData;
    file?: FileItem;
    files?: FileItem[];
    response?: FileModel;
}
