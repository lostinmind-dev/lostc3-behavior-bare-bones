declare global {
    interface Window {
        LOST: any;
    }
}

const TEST = 'Lost library'

window['LOST'] = TEST;
