 export interface multimediaObjet{
    	caution:string
		copyright :string
		format:string
		height:number
		subtype:string
		type:string
		url:string
		width:number
}

export interface resultsJsonObjet{
abstract:string
byline:string
created_date:string
des_facet: string
geo_facet: any[]
item_type:string
kicker:string
material_type_facet: string
multimedia: any[]
org_facet:any []
per_facet:any[]
published_date:string 
section:string
short_url:string
subsection:string
title: string
updated_date:string
url:string
}

export interface nyTimesapiModel{
    copyright:string
    last_updated:string
    num_results:number
    results:resultsJsonObjet[]
    section:string
    Status:string

}