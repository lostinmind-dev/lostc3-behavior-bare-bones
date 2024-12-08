import { defineAddon, Behavior, Property } from "./deps.ts";
import config from "./lost.config.ts";


export default defineAddon(
    new Behavior(config)
        /** @Properties */
)