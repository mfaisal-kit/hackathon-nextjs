import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function GetMobileData() {
    return sanityClient.fetch(
        //groq`*[_type=="mobile_name"]{name,description, thumbnail}`
          groq`*[_type=="mobile_name"]{name,description,thumbnail}`
    )
}

export async function GetUserData() {
    return sanityClient.fetch(
        //groq`*[_type=="user_name"]{name}`
          groq`*[_type=="user_name"]{name,description,thumbnail}`
    )    
}

//From Our Menu Data
export async function GetFromOurMenuData1() {
    return sanityClient.fetch(
        groq`*[_type=="products"]  | order(_createdAt asc)
                {name, title, price, description,image,slug}
                [1..4]`
    )    
}

//From Our Menu Data
export async function GetFromOurMenuData2() {
    return sanityClient.fetch(
        groq`*[_type=="products"]  | order(_createdAt asc)
                {name, title, price, description,image,slug}
                [5..8]`
    )    
}

//Filter By Menu Data
export async function GetFilterByMenuData() {
    return sanityClient.fetch(
        groq`*[_type=="products"]  | order(_createdAt asc)
                {name, title, price, description,image,slug}
                [21..25]`
    )    
}

//Similar Products
export async function GetSimilarProductsData() {
    return sanityClient.fetch(
        groq`*[_type=="products"]  | order(_createdAt asc)
                {name, title, price, description,image,slug}
                [27..30]`
    )    
}

//Recant Post
export async function GetRecantPostData() {
    return sanityClient.fetch(
        groq`*[_type=="products"]  | order(_createdAt asc)
                {name, title, price, description,image,slug}
                [31..34]`
    )    
}

//Choose Food Item
export async function GetChooseFoodItemData() {
    return sanityClient.fetch(
        groq`*[_type=="products"]  | order(_createdAt asc)
                {name, title, price, description,image,slug}
                [35..38]`
    )    
}

//Shop List
export async function GetShopListData() {
    return sanityClient.fetch(
        groq`*[_type=="products"]  | order(_createdAt asc)
                {name, title, price, description,image,slug}
                [9..20]`
    )    
}


//Blog Post
export async function GetBlogPostData() {
    return sanityClient.fetch(
        groq`*[_type=="products"]  | order(_createdAt asc)
                {name, title, price, description,image,slug}
                [39..41]`
    )    
}

//Shop List
export async function GetProductDetails(param:any) {
    console.log('GetProductDetails(param:any)=>',param);
    return sanityClient.fetch(
        groq`*[_type=="products" && slug=='${param}']  | order(_createdAt asc)
                {name, title, price, description,image,slug}`
    )    
}

//Our Chefs
export async function GetOurChefsData() {
    return sanityClient.fetch(
        groq`*[_type=="products"]  | order(_createdAt asc)
                {name, title, price, description,image,slug}
                [42..53]`
    )    
}

//Meet Our Chefs
export async function GetMeetOurChefsData() {
    return sanityClient.fetch(
        groq`*[_type=="products"]  | order(_createdAt asc)
                {name, title, price, description,image,slug}
                [54..57]`
    )    
}

//params.slug