import { type LostConfig, STABLE, BETA, LTS } from "jsr:@lost-c3/lib@1.2.5";

const Config: LostConfig<'behavior'> = {
    Type: 'behavior',
    Deprecated: false,

    SupportsWorkerMode: false,
    // MinConstructVersion: STABLE.R407_2,
    CanBeBundled: false,
    IsOnlyOneAllowed: true,

    ObjectName: 'LostPluginName',
    AddonId: 'Lost_MyAddon',
    AddonName: 'Lost addon for Construct 3',
    AddonDescription: 'Amazing addon made with Lost.',
    Category: 'general',
    Version: '1.0.0.0',
    Author: 'lostinmind.',
    WebsiteURL: `https://addon.com`,
    DocsURL: `https://docs.addon.com`
};

export default Config;