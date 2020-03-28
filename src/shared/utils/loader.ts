const loadedScripts: string[] = [];

export async function loadScript(src: string): Promise<any> {
    return new Promise((resolve, reject) => {
        if (loadedScripts.includes(src)) {
            resolve(true);
        } else {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                loadedScripts.push(src);
                resolve(true);
            };
            script.onerror = err => reject(err);

            document.body.append(script);
        }
    });
}
