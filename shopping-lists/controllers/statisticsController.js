import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as itemService from "../services/itemService.js";
import * as listService from "../services/listService.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const getStatistics = async (request)=> {
    const data = {
        list: await listService.numberOfLists(),
        item: await itemService.numberOfItems(),
    };

    return new Response(await renderFile("main.eta", data), responseDetails);
};

export { getStatistics }
