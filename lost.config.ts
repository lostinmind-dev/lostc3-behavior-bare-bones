import { defineConfig } from './deps.ts'

export default defineConfig<'behavior'>({
    type: 'behavior',
    // deprecated?: boolean;
    // minConstructVersion?: string;
    // canBeBundled?: boolean;
    isOnlyOneAllowed: true,
    objectName: 'LostBehavior',

    addonId: 'LostBehaviorId',
    category: 'general',
    addonName: 'Lost behavior for Construct 3',
    addonDescription: 'My awesome addon was made with Lost',
    version: '1.0.0.0',
    author: 'lostinmind.',
    docsUrl: 'https://myaddon.com/docs',
    helpUrl: {
        EN: 'https://myaddon.com/help/en'
    },
    websiteUrl: 'https://myaddon.com'
})