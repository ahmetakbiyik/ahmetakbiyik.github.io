"use strict";exports.id=531,exports.ids=[531],exports.modules={46531:(t,e,s)=>{s.d(e,{$1:()=>getSiteSettings,Bd:()=>getAllPosts,ds:()=>getPostAndMorePosts,it:()=>getPageBySlug,iy:()=>getPreviewPostBySlug,tG:()=>getAllCategories});let{createBucketClient:a}=s(92619),i=process.env.COSMIC_BUCKET_SLUG,r=process.env.COSMIC_READ_KEY,o=a({bucketSlug:i,readKey:r}),is404=t=>/not found/i.test(t.message);async function getPreviewPostBySlug(t){try{let e=await o.objects.findOne({slug:t}).props("title,slug,metadata").status("any");return e.object}catch(t){if(is404(t))return;throw t}}async function getAllPosts(t,e,s){try{let a=await o.objects.find({type:e}).props("title,slug,metadata.category,metadata.excerpt,metadata.published_date,created_at,status").limit(s).sort("-created_at").status(t?"any":"published").depth(1);return a.objects}catch(t){if(is404(t))return;throw t}}async function getPostAndMorePosts(t,e){try{let s=await o.objects.findOne({slug:t}).props("slug,title,metadata,created_at,status").status(e?"any":"published"),a=await o.objects.find({type:"posts"}).props("slug,title,metadata,created_at").status(e?"any":"published"),i=a.objects?.filter(({slug:e})=>e!==t).slice(0,2);return{post:s?.object,morePosts:i}}catch(t){if(is404(t))throw t}}async function getAllCategories(t){try{let e=await o.objects.find({type:t}).props("title");return e.objects}catch(t){if(is404(t))return;throw t}}async function getPageBySlug(t,e){try{let s=await o.objects.findOne({slug:t}).props(e).depth(1);return s.object}catch(t){if(is404(t))return;throw t}}async function getSiteSettings(){try{let t=await o.objects.findOne({type:"site-settings",slug:"site-settings"}).props("metadata");return t.object}catch(t){if(is404(t))return;throw t}}}};