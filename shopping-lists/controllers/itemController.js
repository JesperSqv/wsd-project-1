import { renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as itemService from "../services/listService.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const createItem = async (request) => {
    const formData = await request.formData();
    const name = formData.get("name");

    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    await itemService.createItem(urlParts[2], name);
  
    return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

const collectItem = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    await itemService.collectItem(urlParts[4]);
  
    return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

const viewItems = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");

    const data = {
        list: await itemService.findItems(urlParts[2]),
    };
    
    return new Response(await renderFile("list.eta", data), responseDetails);
};

export { createItem, collectItem, viewItems };