import { ElementRef } from '@angular/core';

export class DownloadUtility {

    public static downloadFile(url: string) {
        let iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        setTimeout(() => {
            iframe.remove();
        }, 10000);
    }
}
