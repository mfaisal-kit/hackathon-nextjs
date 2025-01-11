import { createClient } from "next-sanity";
import { ClientConfig } from "next-sanity";

const SanityClient:ClientConfig = {
    projectId: "etollg65",
    dataset: "hackathonnextjsphi",
    apiVersion:"v2022-03-07",
    useCdn:false
}

export default createClient(SanityClient);