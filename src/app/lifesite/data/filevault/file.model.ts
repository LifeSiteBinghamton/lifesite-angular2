export interface FileModel {
    filename: string;
    _id?: string;
    chunkSize?: number;
    contentType?: string;
    length?: number;
    uploadDate?: string;
    aliases?: string;
    md5?: string;
    metadata?: {
        container: string;
        filename: string;
        comment: string;
        mimetype: string;
        userid: string;
        url: string;
        thumbnail: string;
    };
}
